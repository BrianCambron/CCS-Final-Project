from rest_framework import generics
from django.http import HttpResponse
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response


import json
import requests

from .models import Envelope, Receipt
from .serializers import EnvelopeSerializer, ReceiptSerializer


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


@api_view(['POST'])
def job(request):
    if request.method == 'POST':
        url = 'https://api.taggun.io/api/receipt/v1/simple/file'

        headers = {'apikey': 'e91827b01c5e11ebafc7c5a18819396c'}

        files = {
          'file': (
            'IMG_2719', # set a filename for the file
            open('./envelopes/IMG_2719.jpeg', 'rb'), # the actual file
            'image/jpg'), # content-type for the file

          # other optional parameters for Taggun API (eg: incognito, refresh, ipAddress, language)
          'incognito': (
            None, #set filename to none for optional parameters
            'false') #value for the parameters
          }

        response = requests.post(url, files=files, headers=headers)

        data = json.loads(response.text)
        total_amount = data.get('totalAmount')
        merchant_name = data.get('merchantName')
        print(total_amount)
        return HttpResponse("messages sent!", 200)

    # for y in Receipt.objects.all():
    #     # print(y.__dict__)
    #
    #     url = 'https://api.taggun.io/api/receipt/v1/simple/url'
    #
    #     headers = {'apikey': 'e91827b01c5e11ebafc7c5a18819396c'}
    #     payload = {
    #     "url": y.image.url,
    #     "headers": {},
    #     "refresh": False,
    #     "incognito": False,
    #     "ipAddress": "32.4.2.223"
    #     }
    #
    #     response = requests.post(url, data=payload, headers=headers)
    #     data = json.loads(response.text)
    #     total_amount = data.get('totalAmount')
    #     merchant_name = data.get('merchantName')
    #     print(total_amount)
