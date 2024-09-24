from django.db import models


# Create your models here.


class Courses(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    image = models.ImageField(upload_to='courses')
    description = models.TextField()

    def __str__(self):
        return self.title

class Students(models.Model):
    username = models.CharField(max_length=100)
    image = models.ImageField(upload_to='students')
    email = models.EmailField(default='user@gamil.com')
    password = models.TextField(max_length=50)
    mobile = models.TextField(max_length=50)

    def __str__(self):
        return self.title



