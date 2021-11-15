from django.db import models

# Create your models here.


class Cars(models.Model):
    fuel_types = [
        ('Gasoline', 'Gasoline'),
        ('Diesel Fuel', 'Diesel Fuel'),
        ('Bio-diesel', 'Bio-diesel'),
        ('Ethanol', 'Ethanol'),
        ('Electric', 'Electric'),
    ]
    transmissions = [
        ('Manual', 'Manual'),
        ('Automatic', 'Automatic'),
        ('CVT', 'CVT'),

    ]
    body_types = [
        ('SEDAN', 'SEDAN'),
        ('COUPE', 'COUPE'),
        ('SPORTS CAR', 'SPORTS CAR'),
        ('STATION WAGON', 'STATION WAGON'),
        ('HATCHBACK', 'HATCHBACK'),
        ('CONVERTIBLE', 'CONVERTIBLE'),
        ('SPORT-UTILITY VEHICLE', 'SPORT-UTILITY VEHICLE'),
        ('MINIVAN', 'MINIVAN'),
        ('PICKUP TRUCK', 'PICKUP TRUCK'),
    ]
    id = models.AutoField(
        auto_created=True, primary_key=True )
    model = models.CharField(max_length=50)
    serie = models.CharField(max_length=50)
    price = models.DecimalField(decimal_places=2,max_digits=7)
    mileage = models.IntegerField()
    date =models.DateField(auto_now_add=True)
    year = models.CharField(max_length=4)
    fuel_type = models.CharField( max_length=50,choices=fuel_types, default='Gasoline')
    Transmission = models.CharField(max_length=50,
        choices=transmissions, default=transmissions[0])
    body_type = models.CharField( max_length=50,choices=body_types, default='SEDAN')
    colou = models.CharField(max_length=50)
    doors_number = models.IntegerField()
    engine_size = models.FloatField()
    description = models.TextField(blank=True)
    image= models.ImageField(upload_to='uploaded/images' ,null=True,blank=True)

    def __str__(self) -> str:
        return self.model
   
