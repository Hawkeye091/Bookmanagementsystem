from rest_framework import serializers
from .models import BooksInventory

class BooksInventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BooksInventory
        fields = ('book_id','book_title','book_author','book_stock')
        