from django.contrib import admin
from .models import Courses, Students,Contact
from django.contrib import admin
@admin.register(Courses)
class CourseModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'price', 'image', 'description']

@admin.register(Students)  # Missing decorator to register the Students model
class StudentModelAdmin(admin.ModelAdmin):  # Fixed typo: Admn to Admin
    list_display = ['id', 'username', 'image', 'email', 'password', 'mobile']


admin.site.register(Contact)