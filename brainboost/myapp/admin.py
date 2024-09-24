from django.contrib import admin
from .models import Courses, Students

@admin.register(Courses)
class CourseModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'price', 'image', 'description']

@admin.register(Students)  # Missing decorator to register the Students model
class StudentModelAdmin(admin.ModelAdmin):  # Fixed typo: Admn to Admin
    list_display = ['id', 'username', 'image', 'email', 'password', 'mobile']
