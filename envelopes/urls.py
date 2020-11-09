from django.urls import path

from .views import UserEnvelopeListCreateView, UserEnvelopeDetailList, ReceiptView

urlpatterns = [
    path('receipts/', ReceiptView.as_view()),
    path('user/', UserEnvelopeListCreateView.as_view()),
    path('user/<int:pk>/', UserEnvelopeDetailList.as_view()),
]
