from django.db.models.fields import AutoField
from rest_framework import serializers
from home.models import Cars

class CarsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cars
        fields='__all__'
        depth = 1
