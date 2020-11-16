from rest_framework import generics
from django.http import HttpResponse
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
import math


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
#
# def test():
#     for x in Receipt.objects.all():
#         print(math.fsum(x.total_amount))
#         # if(x.money > 0):
#         #     sum = Envelope.objects.all().aggregate(Sum('money'))
#         #     print(sum.get('money__sum'))
#         #     break
#
#
# test()

@api_view(['POST'])
def job(request):
    if request.method == 'POST':

        image = request.FILES['image'].read()
        url = 'https://api.taggun.io/api/receipt/v1/simple/file'

        headers = {'apikey': 'e91827b01c5e11ebafc7c5a18819396c'}

        files = {
          'file': (
            'IMG_2719', # set a filename for the file
            image, # the actual file
            'image/jpg'), # content-type for the file

          # other optional parameters for Taggun API (eg: incognito, refresh, ipAddress, language)
          'incognito': (
            None, #set filename to none for optional parameters
            'false') #value for the parameters
          }

        # import pdb; pdb.set_trace()

        response = requests.post(url, files=files, headers=headers)
        # import pdb; pdb.set_trace()
        data = json.loads(response.text)
        total_amount = data.get('totalAmount')
        merchant_name = data.get('merchantName')
        print(total_amount)
        return Response(data)









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
