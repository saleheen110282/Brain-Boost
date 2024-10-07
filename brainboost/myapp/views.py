from django.shortcuts import render, redirect, HttpResponse,  get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout 
from .models import *


# Create your views here.


from django.shortcuts import render
from .models import Mentor  # Import the Mentor model

from django.shortcuts import render
from .models import Mentor, Courses  # Import Mentor and Courses models

def homeview(request):
    username = request.session.get('username')
    user_id = request.session.get('user_id')

    # Fetch mentors, courses, and FAQs from the database
    mentors = Mentor.objects.all()
    courses = Courses.objects.all()
    faqs = FAQ.objects.all()  # Fetch FAQs

    # Pass session data, mentor data, course data, and FAQ data to the template
    context = {
        'username': username,
        'user_id': user_id,
        'mentors': mentors,
        'courses': courses,
        'faqs': faqs  # Add FAQs to context
    }

    return render(request, 'index.html', context)



def signupview(request):
    if request.method == 'POST':
        username = request.POST.get('name').lower()
        email = request.POST.get('email')
        password = request.POST.get('password')
        password2 = request.POST.get('confirm_password')
        if password != password2:
            return HttpResponse("Your password and confirm password are not same!")
        my_user = User.objects.create_user(username, email, password)
        my_user.save()
        stduser = Students(username = username, email = email, password = password)
        stduser.save()
        return redirect('login')
    
    return render(request, 'signup.html')

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username = username, password = password)
        if user is not None:
            auth_login(request, user)
            student = Students.objects.get(username = username)
            request.session['id'] = student.id
            request.session['username'] = student.username
            request.session['email'] = student.email
            
            print(request.session['id'],request.session['username'], request.session['email'])
            return redirect('index')
        else:
            return HttpResponse('Authentication Failed!')
    return render(request, 'signin.html')

def logout_view(request):
    logout(request)
    return redirect('index')



from .models import Parent  # Ensure you import your Parent model


def parentssignin(request):
    if request.method == 'POST':
        email = request.POST.get('email').lower()
        password = request.POST.get('password')

        try:
            parent = Parent.objects.get(email=email)
            print(email.lower(),password,": ",parent.email,parent.password)
            if parent.password == password:
                return redirect('parentprofile')
            else:
                error_message = "Invalid username or password."
        except Parent.DoesNotExist:
            error_message = "Invalid username or password."

        return render(request, 'parentssignin.html', {'error_message': error_message})

    return render(request, 'parentssignin.html')


def parentssignup(request):
    if request.method == 'POST':
        # Retrieve data from the form
        name = request.POST.get('name')
        email = request.POST.get('email').lower()
        password = request.POST.get('password')
        parent = Parent(name=name, email=email, password=password)
        parent.save()
        return redirect('parentslogin')

    return render(request, 'parentsignup.html')

def parenprofile(request):
    return render(request, 'parent_profile.html')

def child(request):
    return render(request, 'Child.html')

def progressanalysis(request):
    return render(request, 'progressanalysis.html')

def aboutus(request):
    return render(request, 'About us.html')


def contactus(request):
    if request.method == 'POST':
        # Get data from the form
        name = request.POST.get('name')
        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        message = request.POST.get('message')
        contact = Contact(name=name, email=email, mobile=mobile, message=message)
        contact.save()
        return redirect('contactus')

    return render(request, 'contact.html')


def payment(request, course_title):
    course = get_object_or_404(Courses, title = course_title.replace('-', ' '))
    if request.method == 'POST':
        username = request.POST.get('username')
        course = request.POST.get('coursename')
        enroll = Enrollment(username = username, course = course)
        enroll.save()
        #print("Course Name Submitted:", course_name)  
        request.session['course'] = course
        course = get_object_or_404(Courses, title=course)
        course_id = course.id

        return redirect('course', course_id=course_id, item_id=0)

    return render(request, 'payment.html', {'course': course})

def success(request):
    return render(request, 'success.html')




def quiz_view(request):
    quiz = Quiz.objects.get()

    if request.method == 'POST':
        score = 0
        total_questions = quiz.questions.count()
        
        for question in quiz.questions.all():
            selected_answer_id = request.POST.get(f'question_{question.id}')
            
            if selected_answer_id:
                selected_answer = Answer.objects.get(id=selected_answer_id)
                
                # Check if the selected answer is correct
                if selected_answer.is_correct:
                    score += 1

        # Calculate percentage or points if necessary
        percentage_score = (score / total_questions) * 100 if total_questions else 0

        # stdusername = User.username


        # student = Enrollment.objects.get(username = stdusername, course = request.session['course'])
        # student.point = student.point + score 

        # student = Enrollment(point = student.point)
        # student.save()


        return render(request, 'quiz_result.html', {
            'quiz': quiz,
            'score': score,
            'total_questions': total_questions,
            'percentage_score': percentage_score,

        })




    return render(request, 'quiz.html', {'quiz': quiz})

def quizresult(request):
    return render(request, 'quiz_result.html')


def course_page_view(request,course_id,item_id):

    course = get_object_or_404(Courses, id=course_id)
    items = list(course.contents.all())

    # Adjust item_id to be within bounds
    if item_id < 0:
        item_id = 0
    elif item_id >= len(items):  # Handle out-of-bounds index
        item_id = len(items) - 1

    current_item = items[item_id]

    if current_item.content_type == 'quiz':
        return redirect('quiz')  # Adjust as needed

    return render(request, 'Coursepage.html', {
        'current_item': current_item,
        'item_id': item_id,
        'items': items,
        'max': len(items) - 1,
        'course': course,
        'course_id': course_id
    })


def projectpage(request):   
    return render(request, 'projectpage.html')