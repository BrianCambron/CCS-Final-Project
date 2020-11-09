from rest_framework import generics
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import Envelope, Receipt
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


class ReceiptView(APIView):
    def get(self, request):
        receipts = Receipt.objects.all()
        return Response({"receipts": receipts})
