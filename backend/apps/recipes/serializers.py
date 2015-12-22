from rest_framework import serializers
from models import *

# class IngredientSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Ingredient

class RecipeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Recipe

