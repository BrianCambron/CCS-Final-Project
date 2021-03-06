# Generated by Django 3.1.2 on 2020-11-02 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('envelopes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='envelope',
            name='category',
            field=models.CharField(choices=[('HSG', 'Housing'), ('CTNG', 'Clothing'), ('GFT', 'Gifts'), ('HSHIMS', 'Household items'), ('MSC', 'Miscellaneous'), ('DBT', 'Debt'), ('TNSPTN', 'Transportation'), ('ISRNC', 'Insurance'), ('MDCL', 'Medical'), ('PSNL', 'Personal'), ('FD', 'Food'), ('RTMNT', 'Retirement'), ('EMG', 'Emergency'), ('ULTS', 'Utilities'), ('EDCTN', 'Education'), ('ENT', 'Entertainment'), ('SVNG', 'Savings')], default='MSC', max_length=255),
        ),
    ]
