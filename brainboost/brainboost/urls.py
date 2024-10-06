"""
URL configuration for brainboost project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.homeview, name = 'index'),
    #path('', views.index, name = 'index'),
    path('signup/', views.signupview, name = 'signup'),
    path('login/', views.login, name = 'login'),
    path('parentssignin/', views.parentssignin, name='parentslogin'),
    path('parentssignup/', views.parentssignup, name='parentssignup' ),
    path('aboutus/', views.aboutus, name='aboutus'),
    path('logout/', views.logout_view, name='logout'),
    # path('payment/', views.payment, name='payment'),
    path('payment/<slug:course_title>/', views.payment, name='payment'),
    path('contactus/', views.contactus, name='contactus'),
    path('success/', views.success, name='success'),
    path('quiz/', views.quiz_view, name='quiz'),
    path('course/<int:course_id>/<int:item_id>/', views.course_page_view, name='course'),
    # path('course/<int:item_id>/', views.course_page_view, name='course'),
    # path('course/', views.course_page_view1, name='course1'),
    path('projectpage/', views.projectpage, name='projectpage'),
    path('quizresult/', views.quizresult, name='quizresult'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)