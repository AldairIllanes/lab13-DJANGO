import { Gamepad2, PackageX } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductList({ productos }) {
  if (!productos || productos.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl my-8">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-500">
          <PackageX className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-slate-200 mb-1">
          No se encontraron videojuegos
        </h3>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          No hay títulos registrados en esta categoría por el momento. Prueba seleccionando otra categoría o restablece los filtros.
        </p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <Gamepad2 className="w-4 h-4 text-indigo-400" />
          Títulos Disponibles ({productos.length})
        </h3>
        <span className="text-xs text-slate-500">
          Precios con IVA incluido • Activación global
        </span>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
            categoria_nombre={producto.categoria_nombre}
            cantidad_disponible={producto.cantidad_disponible}
          />
        ))}
      </section>
    </div>
  );
}