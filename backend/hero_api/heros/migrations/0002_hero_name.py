# Generated by Django 3.2.4 on 2021-06-17 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('heros', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='hero',
            name='name',
            field=models.CharField(default='exit', max_length=200),
            preserve_default=False,
        ),
    ]