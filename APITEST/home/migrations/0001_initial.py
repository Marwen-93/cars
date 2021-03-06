# Generated by Django 3.2.9 on 2021-11-09 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cars',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('model', models.CharField(max_length=50)),
                ('serie', models.CharField(max_length=50)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('mileage', models.IntegerField()),
                ('date', models.DateField(auto_now_add=True)),
                ('year', models.CharField(max_length=4)),
                ('fuel_type', models.CharField(choices=[('Gasoline', 'Gasoline'), ('Diesel Fuel', 'Diesel Fuel'), ('Bio-diesel', 'Bio-diesel'), ('Ethanol', 'Ethanol'), ('Electric', 'Electric')], default='Gasoline', max_length=50)),
                ('Transmission', models.CharField(choices=[('Manual', 'Manual'), ('Automatic', 'Automatic'), ('CVT', 'CVT')], default=('Manual', 'Manual'), max_length=50)),
                ('body_type', models.CharField(choices=[('SEDAN', 'SEDAN'), ('COUPE', 'COUPE'), ('SPORTS CAR', 'SPORTS CAR'), ('STATION WAGON', 'STATION WAGON'), ('HATCHBACK', 'HATCHBACK'), ('CONVERTIBLE', 'CONVERTIBLE'), ('SPORT-UTILITY VEHICLE', 'SPORT-UTILITY VEHICLE'), ('MINIVAN', 'MINIVAN'), ('PICKUP TRUCK', 'PICKUP TRUCK')], default='SEDAN', max_length=50)),
                ('colou', models.CharField(max_length=50)),
                ('doors_number', models.IntegerField()),
                ('engine_size', models.FloatField()),
                ('description', models.TextField(blank=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='uploaded/images')),
            ],
        ),
    ]
