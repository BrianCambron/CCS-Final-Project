from django.conf import settings
from django.db import models

class Chat(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    message = models.TextField()

    def __str__(self):
        return self.user.username
