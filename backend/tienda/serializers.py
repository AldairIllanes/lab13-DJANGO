from rest_framework import serializers
from .models import Categoria, Producto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nombre']

class ProductoSerializer(serializers.ModelSerializer):
    categoria_nombre = serializers.ReadOnlyField(source='categoria.nombre')

    class Meta:
        model = Producto
        fields = [
            'id',
            'nombre',
            'descripcion',
            'precio',
            'imagen',
            'cantidad_disponible',
            'categoria',
            'categoria_nombre'
        ]