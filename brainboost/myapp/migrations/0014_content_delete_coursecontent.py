# Generated by Django 5.1.1 on 2024-10-06 14:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0013_coursecontent'),
    ]

    operations = [
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_type', models.CharField(choices=[('video', 'Video'), ('quiz', 'Quiz'), ('project', 'Project')], max_length=20)),
                ('title', models.CharField(max_length=200)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contents', to='myapp.courses')),
            ],
        ),
        migrations.DeleteModel(
            name='CourseContent',
        ),
    ]
