from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db import models


class User(AbstractUser):
    pass

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to="profiles/", blank=True, null=True)
    phone_number = models.CharField(max_length=12, blank=True)

    def __str__(self):
        return self.user.username
