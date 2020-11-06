from django.urls import path, include
from .views import ProfileListCreateView, ProfileRetrieveUpdateDestroyView

urlpatterns = [
    path('', ProfileListCreateView.as_view()),
    path('<int:pk>/', ProfileRetrieveUpdateDestroyView.as_view()),
]
