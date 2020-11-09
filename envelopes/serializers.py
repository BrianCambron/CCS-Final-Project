from rest_framework import serializers


from .models import Envelope, Receipt


class EnvelopeSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        depth = 1
        model = Envelope
        fields = ('user', 'name', 'money')


class ReceiptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receipt
        fields = ('id', 'envelope', 'total_amount', 'image', 'merchant_name')
