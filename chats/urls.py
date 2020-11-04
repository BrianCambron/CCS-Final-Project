from django.urls import path


from .views import ChatListCreateView



urlpatterns = [
    path('', ChatListCreateView.as_view()),
]
