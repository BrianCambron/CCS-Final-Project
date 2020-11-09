from rest_framework import generics
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

from .models import Envelope, Receipt
from .services import job
from .serializers import EnvelopeSerializer, ReceiptSerializer


# class EnvelopeListCreateView(generics.ListCreateAPIView):
#     queryset = Envelope.objects.all()
#     serializer_class = EnvelopeSerializer
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def perform_create(self, serializer):
#         serializer.save(user = self.request.user)
#
#
# class EnvelopeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Envelope.objects.all()
#     serializer_class = EnvelopeSerializer
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def perform_create(self, serializer):
#         serializer.save(user = self.request.user)

class UserEnvelopeListCreateView(generics.ListCreateAPIView):
     serializer_class = EnvelopeSerializer
     permission_classes = (permissions.IsAuthenticated,)

     def get_queryset(self):
         user = self.request.user
         return Envelope.objects.filter(user=user)

     def perform_create(self, serializer):
         serializer.save(user = self.request.user)


class UserEnvelopeDetailList(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EnvelopeSerializer
    permission_classes = (permissions.IsAuthenticated,)
    def get_queryset(self):
        user = self.request.user
        return Envelope.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)


class ReceiptView(generics.ListCreateAPIView):
    queryset = Receipt.objects.all();
    serializer_class = ReceiptSerializer


# class MessageUser(APIView):
#     def get(self, request, format=None):
#         job(request)
#         return Response("messages sent!", 200)
