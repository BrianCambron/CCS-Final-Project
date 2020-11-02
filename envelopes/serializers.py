from rest_framework import serializers


from .models import Envelope


class EnvelopeSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Envelope
        fields = '__all__'
