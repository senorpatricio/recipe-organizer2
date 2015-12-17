from rest_framework import generics
from serializers import *

class RecipeList(generics.ListAPIView):
	serializer_class = RecipeSerializer
	queryset = Recipe.objects.all()