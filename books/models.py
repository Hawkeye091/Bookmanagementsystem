from django.db import models

# Create your models here.

class BooksInventory(models.Model):
    book_id = models.CharField(primary_key=True, max_length=100)
    book_title = models.CharField(max_length=100, blank=True, null=True)
    book_author = models.CharField(max_length=100, blank=True, null=True)
    book_stock = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'books_inventory'
