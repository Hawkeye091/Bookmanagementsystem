from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import url

from . import views

urlpatterns = [
   re_path(r'^books/(?P<pk>[-\w]+)$',views.get_delete_update_booksinventory.as_view(),name='get_delete_update_colleges'),
   url(r'^books/',views.get_post_booksinventory.as_view(),name='get_post_colleges'),    
]