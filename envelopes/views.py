from rest_framework import generics
from rest_framework import permissions


from .models import Envelope
from .serializers import EnvelopeSerializer


class EnvelopeListCreateView(generics.ListCreateAPIView):
    queryset = Envelope.objects.all()
    serializer_class = EnvelopeSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)


class EnvelopeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Envelope.objects.all()
    serializer_class = EnvelopeSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)