# Generated by Django 3.1.3 on 2020-11-10 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_profile_phone_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='message',
            field=models.TextField(blank=True),
        ),
    ]
