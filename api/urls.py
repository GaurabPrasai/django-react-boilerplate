"""
API URLs configuration
"""
from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health_check, name='health_check'),
    path('items/', views.ItemListCreateView.as_view(), name='item_list_create'),
    path('items/<int:pk>/', views.ItemDetailView.as_view(), name='item_detail'),
]
