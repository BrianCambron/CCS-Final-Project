from rest_framework import serializers


from .models import Envelope, Receipt


class EnvelopeSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        depth = 1
        model = Envelope
        fields = ('user', 'name', 'money', 'receipt')

class ReceiptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receipt
        fields = ('envelope', 'total_amount', 'image', 'merchant_name')
