import { ShoppingCart, Star, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function ProductCard({
  nombre,
  descripcion,
  precio,
  imagen,
  categoria_nombre,
  cantidad_disponible,
}) {
  // Simular precio anterior con descuento para aspecto de tienda real
  const precioOriginal = (parseFloat(precio) * 1.25).toFixed(2);

  return (
    <article className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 
    rounded-2xl overflow-hidden border border-slate-800/80 hover:border-indigo-500/50 transition-all 
    duration-300 shadow-xl shadow-black/40 hover:shadow-indigo-500/10 flex flex-col justify-between">
      {/* Contenedor de la carátula */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={imagen || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600"}
          alt={nombre}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradiente superior e inferior para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50" />

        {/* Badge de categoría */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <Badge
            variant="outline"
            className="bg-slate-950/80 backdrop-blur-md text-indigo-300 border-indigo-500/40 
            text-[11px] font-semibold px-2.5 py-0.5 tracking-wide shadow"
          >
            {categoria_nombre || "General"}
          </Badge>
        </div>

        {/* Badge de disponibilidad */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] 
          font-semibold bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40 shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            En Stock ({cantidad_disponible})
          </span>
        </div>

        {/* Puntuación y plataforma */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs text-slate-300">
          <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md font-medium text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            4.9 / 5.0
          </span>
          <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] text-slate-300">
            <ShieldCheck className="w-3 h-3 text-indigo-400" />
            Licencia Digital
          </span>
        </div>
      </div>

      {/* Información del videojuego */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-1.5">
            {nombre}
          </h3>
          <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
            {descripcion || "Disfruta de esta experiencia de videojuego inmersiva con gráficos de última generación."}
          </p>
        </div>

        {/* Sección de precios y botón de compra */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-500 line-through">${precioOriginal}</span>
              <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-1 rounded">-20%</span>
            </div>
            <div className="text-2xl font-black text-emerald-400 tracking-tight leading-none">
              ${precio}
            </div>
          </div>

          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:
            to-purple-500 text-white font-semibold shadow-md shadow-indigo-600/30 gap-1.5 px-3.5 h-9"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Comprar</span>
          </Button>
        </div>
      </div>
    </article>
  );
}