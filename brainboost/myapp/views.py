from django.shortcuts import render

# Create your views here.

def homeview(request):
    return render(request, 'index.html')

def signupview(request):
    return render(request, 'signup.html')

def login(request):
    return render(request, 'signin.html')

def parentslogin(request):
    return render(request, 'parentssignin.html')

def parentssignup(request):
    return render(request, 'parentsignup.html')

def aboutus(request):
    return render(request, 'About us.html')