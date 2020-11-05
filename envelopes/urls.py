from django.urls import path

from .views import UserEnvelopeListCreateView, UserEnvelopeDetailList

urlpatterns = [
    path('user/', UserEnvelopeListCreateView.as_view()),
    path('user/<int:pk>/', UserEnvelopeDetailList.as_view()),
]
