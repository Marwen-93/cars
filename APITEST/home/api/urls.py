from django.conf.urls import include
from django.db import router
from django.urls import path
from django.conf.urls.static import static
from .views import Cars_list, Car_detail, home
from APITEST import settings
snippet_list = Cars_list.as_view({
    'get': 'list',
    'post': 'create'
})
urlpatterns = [
    path('', home, name='home'),
        path('list/', snippet_list, name='list'),

    path('<str:id>/', Car_detail.as_view(), name='Empolyee_detail'),




]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)