from django.contrib import admin
from .models import Courses, Students,Contact,Parent, Quiz, Question, Answer
from django.contrib import admin
@admin.register(Courses)
class CourseModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'price', 'image', 'description']

@admin.register(Students)  # Missing decorator to register the Students model
class StudentModelAdmin(admin.ModelAdmin):  # Fixed typo: Admn to Admin
    list_display = ['id', 'username', 'image', 'email', 'password', 'mobile']


admin.site.register(Contact)
admin.site.register(Parent)



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
