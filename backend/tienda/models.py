from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True, null=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.URLField(max_length=500, blank=True, null=True)
    cantidad_disponible = models.IntegerField(default=0)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='productos')

    categoria = models.ForeignKey(
            Categoria, 
            on_delete=models.CASCADE, 
            related_name='productos'
        )
    
    def __str__(self):
        return self.nombre