from django.contrib import admin
from . models import Courses, Students

@admin.register(Courses)

class CourseModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'price', 'image', 'description']

class StudentModelAdmn(admin.ModelAdmin):
    list_display = ['id', 'username', 'image', 'email', 'password', 'mobile']


