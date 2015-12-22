from django.db import models


# class Ingredient(models.Model):
#     name = models.CharField(max_length=50)

#     def __str__(self):
#         return self.name


class Recipe(models.Model):
	name = models.CharField(max_length=100)
	directions = models.TextField()
	description = models.TextField()
	# ingredients = models.ManyToManyField(Ingredient)

	def __str__(self):
		return self.name 
		
