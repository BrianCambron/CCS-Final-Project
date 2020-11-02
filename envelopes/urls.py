from django.urls import path

from .views import EnvelopeListCreateView, EnvelopeRetrieveUpdateDestroyView

urlpatterns = [
    path('<int:pk>/', EnvelopeRetrieveUpdateDestroyView.as_view()),
    path('', EnvelopeListCreateView.as_view()),

]
