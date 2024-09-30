from django.shortcuts import render, redirect, HttpResponse,  get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout 
from .models import Courses,Contact,Parent, Quiz, Question, Answer
# Create your views here.

def homeview(request):
    username = request.session.get('username')
    user_id = request.session.get('user_id')
    
    # Optionally, you can fetch more data from the database using the user_id
    
    # Pass session data to the template
    context = {
        'username': username,
        'user_id': user_id
    } 

    
    return render(request, 'index.html')

def signupview(request):
    if request.method == 'POST':
        username = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password2 = request.POST.get('confirm_password')
        if password != password2:
            return HttpResponse("Your password and confirm password are not same!")
        my_user = User.objects.create_user(username, email, password)
        my_user.save()
        return redirect('login')
    
    return render(request, 'signup.html')

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username = username, password = password)
        if user is not None:
            auth_login(request, user)
            request.session['username'] = user.username
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
                return redirect('index')
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

def payment(request):
    if request.method == 'POST':
        return redirect('course1')
    return render(request, 'payment.html')

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

        return render(request, 'quiz_result.html', {
            'quiz': quiz,
            'score': score,
            'total_questions': total_questions,
            'percentage_score': percentage_score,
        })




    return render(request, 'quiz.html', {'quiz': quiz})

def quizresult(request):
    return render(request, 'quiz_result.html')

def course_page_view1(request):
    items = [
        "Video 1: Introduction to Web Development",
        "Video 2: Introduction to HTML",
        "Quiz 1",
        "Video 3: Introduction to CSS",
        "Quiz 2",
        "Video 4: Introduction to Javascript",
        "Project 1: Webpage using HTML and CSS"
    ]
    item_id=0
    if item_id < 0:
        item_id=0
    current_item = items[item_id]

    return render(request, 'Coursepage.html', {
        'current_item': current_item,
        'item_id': item_id,
        'items': items,
        'max': len(items)-1,
    })
def course_page_view(request,item_id):
    items = [
        "Video 1: Introduction to Web Development",
        "Video 2: Introduction to HTML",
        "Quiz 1",
        "Video 3: Introduction to CSS",
        "Quiz 2",
        "Video 4: Introduction to Javascript",
        "Project 1: Webpage using HTML and CSS"
    ]

    if item_id < 0:
        item_id=0
    current_item = items[item_id]

    if "Quiz" in current_item:
        # Redirect to the quiz page (modify the URL or view name as necessary)
        return redirect('quiz')

    return render(request, 'Coursepage.html', {
        'current_item': current_item,
        'item_id': item_id,
        'items': items,
        'max': len(items)-1,
    })

def projectpage(request):
    return render(request, 'projectpage.html')