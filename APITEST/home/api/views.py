
from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework.response import Response
from home.models import Cars
from home.api.serializers import *
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404


from rest_framework import viewsets

class Cars_list(viewsets.ModelViewSet):
    serializer_class = CarsSerializer
    queryset = Cars.objects.all()



class Car_detail(APIView):
    #permission_classes = [IsAuthenticated]


    def get_object(self, id):
        try:
            return Cars.objects.get(pk=id)
        except Cars.DoesNotExist:
            raise Http404

    def get(self, request,id):
        car = self.get_object(id)
        serializer = CarsSerializer(car)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        car = self.get_object(id)
        serializer = CarsSerializer( car,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        ps = self.get_object(id)
        ps.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


def home(request):

    return render(request, 'home.html', {"date": "hell"})
