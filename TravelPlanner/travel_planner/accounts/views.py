from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from .models import CustomUser
from .forms import LoginForm
from django.contrib.auth.hashers import make_password

def profile_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        city = request.POST.get('city')
        password = request.POST.get('password')
        confirm = request.POST.get('confirmPassword')

        if password != confirm:
            return JsonResponse({'success': False, 'error': 'Passwords do not match'})

        if CustomUser.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'error': 'Username already taken'})

        try:
            user = CustomUser.objects.create(
                username=username,
                email=email,
                phone=phone,
                city=city,
                password=make_password(password)
            )
            login(request, user)
            return JsonResponse({'success': True, 'redirect_url': '/profile/'})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})

    return render(request, 'profile.html')

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            try:
                user = CustomUser.objects.get(email=email)
                auth_user = authenticate(request, username=user.username, password=password)
                if auth_user is not None:
                    login(request, auth_user)
                    return JsonResponse({'success': True, 'message': 'Login successful'})
                else:
                    return JsonResponse({'success': False, 'message': 'Invalid credentials'})
            except CustomUser.DoesNotExist:
                return JsonResponse({'success': False, 'message': 'Email not found'})
        else:
            return JsonResponse({'success': False, 'message': 'Invalid form'})