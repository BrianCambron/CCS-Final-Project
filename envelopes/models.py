from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator


class Envelope(models.Model):
    ENTERTAINMENT = 'ENT'
    HOUSING = 'HSG'
    TRANSPORTATION = 'TNSPTN'
    FOOD = 'FD'
    UTILITIES = 'ULTS'
    CLOTHING = 'CTNG'
    MEDICAL = 'MDCL'
    INSURANCE = 'ISRNC'
    PERSONAL = 'PSNL'
    RETIREMENT = 'RTMNT'
    EDUCATION = 'EDCTN'
    SAVINGS = 'SVNG'
    GIFTS = 'GFT'
    DEBT = 'DBT'
    HOUSEHOLDITEMS = 'HSHIMS'
    EMERGENCY = 'EMG'
    MISCELLANEOUS = 'MSC'

    CATEGORY_CHOICES = {
        (ENTERTAINMENT, 'Entertainment'),
        (HOUSING, 'Housing'),
        (TRANSPORTATION, 'Transportation'),
        (FOOD, 'Food'),
        (UTILITIES, 'Utilities'),
        (CLOTHING, 'Clothing'),
        (MEDICAL, 'Medical'),
        (INSURANCE, 'Insurance'),
        (PERSONAL, 'Personal'),
        (RETIREMENT, 'Retirement'),
        (EDUCATION, 'Education'),
        (SAVINGS, 'Savings'),
        (GIFTS, 'Gifts'),
        (DEBT, 'Debt'),
        (HOUSEHOLDITEMS, 'Household items'),
        (EMERGENCY, 'Emergency'),
        (MISCELLANEOUS, 'Miscellaneous')

    }
    name = models.CharField(max_length = 255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.CharField(max_length = 255, choices=CATEGORY_CHOICES, default=MISCELLANEOUS,)
    money = models.PositiveIntegerField(validators=[MinValueValidator(0), MaxValueValidator(1000)], null=True)

    def __str__(self):
        return self.name
