from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout 

# Create your views here.

def homeview(request):
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
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            return HttpResponse("Username or Password is incorrect!")

    return render(request, 'signin.html')

def parentslogin(request):
    return render(request, 'parentssignin.html')

def parentssignup(request):
    return render(request,   'parentsignup.html')

def aboutus(request):
    return render(request, 'About us.html')

def contactus(request):
    pass