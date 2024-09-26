from django.shortcuts import render, redirect, HttpResponse,  get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout 
from .models import Courses,Contact,Parent, Quiz
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
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            parent = Parent.objects.get(email=email)
            if parent.password == password:
                auth_login(request, parent)
                return redirect('success')
            else:
                error_message = "Invalid email or password."
        except Parent.DoesNotExist:
            error_message = "Invalid email or password."

        return render(request, 'parentssignin.html', {'error_message': error_message})

    return render(request, 'parentssignin.html')


def parentssignup(request):
    if request.method == 'POST':
        # Retrieve data from the form
        name = request.POST.get('name')
        email = request.POST.get('email')
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
        return redirect("course")
    return render(request, 'payment.html')

def success(request):
    return render(request, 'success.html')




def quiz_view(request):
    print(type(Quiz))  # Should print something like <class 'yourapp.models.Quiz'>
    quiz = Quiz.objects.get()
    return render(request, 'quiz.html', {'quiz': quiz})

    

def course_page_view(request):
    return render(request, 'Coursepage.html')



def projectpage(request):
    return render(request, 'projectpage.html')