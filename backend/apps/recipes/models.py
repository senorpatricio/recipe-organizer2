from django.db import models
# this defines what you want your database to look like
# each class in this represents a table in our database
# the columns are represented by the name, description, directions
# each row is an instantiation of the class


class Ingredient(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    directions = models.TextField()
    ingredients = models.ManyToManyField(Ingredient)
    photo = models.ImageField(upload_to='photos', blank=True, null=True)

    def __str__(self):
        return self.name