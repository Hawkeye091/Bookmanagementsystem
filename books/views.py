from django.shortcuts import render
from django.http import HttpResponse

from .models import BooksInventory
from .serializers import BooksInventorySerializer

from rest_framework import status
from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.response import Response


class get_delete_update_booksinventory(RetrieveUpdateDestroyAPIView):
	serializer_class=BooksInventorySerializer

	def get(self,request,pk):
		try:
			books=BooksInventory.objects.get(pk=pk)
		except BooksInventory.DoesNotExist:
			content={
				'status':'Book Not Found'
			}	
			return Response(content,status=status.HTTP_404_NOT_FOUND)	
		serializer=BooksInventorySerializer(books)
		return Response(serializer.data,status=status.HTTP_200_OK)

	def put(self,request,pk):
		try:
			books=BooksInventory.objects.get(pk=pk)
		except BooksInventory.DoesNotExist:
			content={
				'status':'Book Not Found'
			}	
			return Response(content,status=status.HTTP_404_NOT_FOUND)
		serializer=BooksInventorySerializer(books,data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data,status=status.HTTP_201_CREATED)
		return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)		

	def delete(self,request,pk):
		try:
			books=BooksInventory.objects.get(pk=pk)
		except BooksInventory.DoesNotExist:
			content={
				'status':'Book Not Found'
			}	
			return Response(content,status=status.HTTP_404_NOT_FOUND)
		books.delete()
		content={
		'status':'Book Removed from Inventory'
		}
		return Response(content,status=status.HTTP_204_NO_CONTENT)


class get_post_booksinventory(ListCreateAPIView):
	serializer_class = BooksInventorySerializer
	def get(self,request):
		books = BooksInventory.objects.filter(book_stock__gt=0)
		serializer = BooksInventorySerializer(books, many=True)
		return Response(serializer.data)
	def post(self,request):
		if('book_stock' not in request.data.keys()):	
			request.data['book_stock']=0 
		serializer = BooksInventorySerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
