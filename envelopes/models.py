from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator


class Envelope(models.Model):
    name = models.CharField(max_length = 255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    money = models.PositiveIntegerField(validators=[MinValueValidator(0)], null=True)

    def __str__(self):
        return self.name

class Receipt(models.Model):
    envelope = models.ForeignKey(Envelope, on_delete=models.CASCADE, related_name='receipts')
    total_amount = models.PositiveIntegerField(validators=[MinValueValidator(0)], null=True)
    image = models.ImageField(upload_to='envelopes/', blank=True, null=True)
    merchant_name = models.CharField(max_length = 255)

    def __str__(self):
        return self.merchant_name
