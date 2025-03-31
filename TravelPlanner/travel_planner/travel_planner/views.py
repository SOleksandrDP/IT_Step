from django.shortcuts import render

def homepage(request):
    return render(request, "index.html")

def destinations(request):
    return render(request, "destinations.html")

def profile(request):
    return render(request, "profile.html")

def routedetails(request):
    return render(request, "route-details.html")