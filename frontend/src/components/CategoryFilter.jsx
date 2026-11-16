import { Layers, Gamepad } from "lucide-react";
import { Button } from "./ui/button";

export default function CategoryFilter({ categorias, categoriaSeleccionada, alSeleccionar }) {
  return (
    <div className="w-full my-6">
      <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-medium">
        <span className="flex items-center gap-1.5 uppercase tracking-wider text-slate-400">
          <Layers className="w-4 h-4 text-indigo-400" />
          Filtrar por Género / Plataforma
        </span>
        <span>{categorias.length} Categorías disponibles</span>
      </div>

      <div className="flex gap-2 flex-wrap items-center">
        {/* Botón Todas */}
        <Button
          onClick={() => alSeleccionar("Todas")}
          variant={categoriaSeleccionada === "Todas" ? "default" : "outline"}
          size="sm"
          className={`h-9 px-4 rounded-xl font-semibold transition-all duration-200 gap-1.5 ${
            categoriaSeleccionada === "Todas"
              ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 border-transparent"
              : "bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          Todos los Juegos
        </Button>

        {/* Botones dinámicos desde Django */}
        {categorias.map((categoria) => {
          const estaSeleccionada = categoriaSeleccionada === categoria.nombre;
          return (
            <Button
              key={categoria.id}
              onClick={() => alSeleccionar(categoria.nombre)}
              variant={estaSeleccionada ? "default" : "outline"}
              size="sm"
              className={`h-9 px-4 rounded-xl font-semibold transition-all duration-200 gap-1.5 ${
                estaSeleccionada
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 border-transparent"
                  : "bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700"
              }`}
            >
              <Gamepad className="w-3.5 h-3.5 opacity-70" />
              {categoria.nombre}
            </Button>
          );
        })}
      </div>
    </div>
  );
}