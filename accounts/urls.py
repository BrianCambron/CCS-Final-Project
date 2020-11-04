from django.urls import path, include
from .views import ProfileListCreateView

urlpatterns = [
    path('', ProfileListCreateView.as_view())
]
