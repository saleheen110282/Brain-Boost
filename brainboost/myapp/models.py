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
    email = models.EmailField(default='user@gmail.com')
    password = models.CharField(max_length=50,default='password123')
    mobile = models.CharField(max_length=15, default='0000000000')

    def __str__(self):
        return self.username


class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    mobile = models.CharField(max_length=15, default='0000000000')
    message = models.TextField()

    def __str__(self):
        return self.name

class Parent(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    



class Quiz(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, related_name='questions', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text

class Answer(models.Model):
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text
