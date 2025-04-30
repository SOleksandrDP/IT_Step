from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(unique=True)
    city = models.CharField(max_length=50, blank=True, null=True)

class City(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='city_images/')
    description = models.TextField()

    def __str__(self):
        return self.name