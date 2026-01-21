"""
API Views
"""
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Item
from .serializers import ItemSerializer

@api_view(['GET'])
def health_check(request):
    """
    Health check endpoint
    """
    return Response({
        'status': 'ok',
        'message': 'API is running'
    })

class ItemListCreateView(generics.ListCreateAPIView):
    """
    List all items or create a new item
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an item
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
