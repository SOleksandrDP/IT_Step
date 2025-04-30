from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser, City
from django.utils.translation import gettext_lazy as _

@admin.register(CustomUser)
class CustomUserAdmin(BaseUserAdmin):
    model = CustomUser

    # Виводимо всі поля в списку користувачів
    list_display = (
        'username',
        'email',
        'phone',
        'city',
        'first_name',
        'last_name',
        'is_staff',
        'is_superuser',
        'is_active',
    )

    # Доступні поля при пошуку
    search_fields = ('username', 'email', 'phone', 'city', 'first_name', 'last_name')

    # Порядок сортування
    ordering = ('username',)

    # Поля при перегляді користувача (вкладки)
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email', 'phone', 'city')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    # Поля при створенні нового користувача
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'username',
                'email',
                'phone',
                'city',
                'password1',
                'password2',
                'is_staff',
                'is_superuser',
                'is_active',
                'groups',
                'user_permissions',
            ),
        }),
    )

@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)