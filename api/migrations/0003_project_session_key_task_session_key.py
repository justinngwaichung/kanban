# Generated by Django 4.0.1 on 2022-01-16 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_project_task_category_task_priority_task_title_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='session_key',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='task',
            name='session_key',
            field=models.TextField(blank=True, null=True),
        ),
    ]
