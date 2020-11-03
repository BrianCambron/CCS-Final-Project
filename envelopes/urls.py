from django.urls import path

from .views import UserEnvelopeList, UserEnvelopeDetailList

urlpatterns = [
    path('user/', UserEnvelopeList.as_view()),
    path('user/<int:pk>/', UserEnvelopeDetailList.as_view()),
]
