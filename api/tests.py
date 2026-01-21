from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Item


class ItemAPITestCase(APITestCase):
    def setUp(self):
        self.item = Item.objects.create(
            title="Test Item",
            description="Test Description"
        )

    def test_get_items_list(self):
        response = self.client.get('/api/items/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_item(self):
        data = {
            'title': 'New Item',
            'description': 'New Description'
        }
        response = self.client.post('/api/items/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Item.objects.count(), 2)

    def test_get_item_detail(self):
        response = self.client.get(f'/api/items/{self.item.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Test Item')

    def test_update_item(self):
        data = {'title': 'Updated Item', 'description': 'Updated'}
        response = self.client.put(f'/api/items/{self.item.id}/', data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.item.refresh_from_db()
        self.assertEqual(self.item.title, 'Updated Item')

    def test_delete_item(self):
        response = self.client.delete(f'/api/items/{self.item.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Item.objects.count(), 0)
