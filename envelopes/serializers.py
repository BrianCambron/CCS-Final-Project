from rest_framework import serializers
from django.db.models import Sum

from .models import Envelope, Receipt


class EnvelopeSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    sum_of_receipts = serializers.SerializerMethodField()

    class Meta:
        depth = 1
        model = Envelope
        fields = ('user', 'name', 'money', 'sum_of_receipts')

    def get_sum_of_receipts(self, obj):
        return Receipt.objects.filter(envelope=obj).aggregate(Sum('total_amount'))


class ReceiptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receipt
        fields = ('id', 'envelope', 'total_amount', 'image', 'merchant_name')
