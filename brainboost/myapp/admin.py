from django.contrib import admin
from .models import *
@admin.register(Courses)
class CourseModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'price', 'image', 'description']

@admin.register(Students)  # Missing decorator to register the Students model
class StudentModelAdmin(admin.ModelAdmin):  # Fixed typo: Admn to Admin
    list_display = ['id', 'username', 'image', 'email', 'password', 'mobile']


admin.site.register(Contact)
admin.site.register(Parent)
admin.site.register(Mentor)
admin.site.register(FAQ)
admin.site.register(CourseContent)

@admin.register(Enrollment)
class Enrollment(admin.ModelAdmin):
    list_display = ['username', 'course', 'point', 'is_completed']
@admin.register(Projectsubmission)
class Projectsubmission(admin.ModelAdmin):
    list_display = ['username', 'course', 'title', 'description', 'code', 'number']





class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 3

class QuestionAdmin(admin.ModelAdmin):
    inlines = [AnswerInline]

class QuizAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title',)

admin.site.register(Quiz, QuizAdmin)
admin.site.register(Question, QuestionAdmin)

