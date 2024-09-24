from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout 
from .models import Courses
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

    all_courses = Courses.objects.filter( user = request.user)
    context = {
        'courses' : all_courses
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

            # Redirect to a success page (e.g., dashboard)
            return redirect('index')
        else:
            return HttpResponse('Authentication Failed!')
    return render(request, 'signin.html')

def logout_view(request):
    logout(request)
    return redirect('index') 

def parentslogin(request):
    return render(request, 'parentssignin.html')

def parentssignup(request):
    return render(request,   'parentsignup.html')

def aboutus(request):
    return render(request, 'About us.html')

def contactus(request):
    return render(request, 'contact.html')

def payment(request):
    return render(request, 'payment.html')

