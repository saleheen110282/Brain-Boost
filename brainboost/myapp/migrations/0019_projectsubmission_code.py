# Generated by Django 5.1 on 2024-10-06 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0018_alter_enrollment_is_completed'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectsubmission',
            name='code',
            field=models.CharField(default='Your code goes here..', max_length=10000),
        ),
    ]
