from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    phone = forms.CharField(required=True)
    country = forms.CharField(required=True)
    city = forms.CharField(required=True)

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'phone', 'country', 'city', 'password')

class LoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)