from rest_framework import serializers

from .models import Chat


class ChatSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Chat
        fields = ('id', 'user', 'message')
