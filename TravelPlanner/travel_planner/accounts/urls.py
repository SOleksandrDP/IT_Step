from django.urls import path
from .views import profile_view, login_view

urlpatterns = [
    path('profile/', profile_view, name='profile'),
    path('profile/login/', login_view, name='login'),
]