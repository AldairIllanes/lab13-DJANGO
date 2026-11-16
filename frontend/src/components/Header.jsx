import { Gamepad2, ShoppingCart, Flame, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-black/40">
      {/* Barra superior de anuncios de la tienda */}
      <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-slate-900/60 border-b border-indigo-900/30 text-[11px] py-1 text-center text-slate-300 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-indigo-400 inline" />
        <span>¡Ofertas de Temporada activas! Entrega digital inmediata con claves 100% oficiales</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
        {/* Logotipo e Isotipo de GameTech Store */}
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative p-2.5 bg-slate-900 border border-slate-700/60 rounded-xl flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                GAMETECH
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded tracking-wider">
                STORE
              </span>
            </div>
            <p className="text-[10px] tracking-wider text-slate-400 uppercase font-medium -mt-0.5">
              Videojuegos & Claves Digitales
            </p>
          </div>
        </div>

        {/* Navegación Principal */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <a
            href="#catalogo"
            className="px-3 py-1.5 rounded-lg text-white bg-slate-800/80 border border-slate-700/60 transition"
          >
            Catálogo
          </a>
          <a
            href="#lanzamientos"
            className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition flex items-center gap-1.5"
          >
            <Flame className="w-4 h-4 text-orange-400" />
            Tendencias
          </a>
          <a
            href="#ofertas"
            className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition"
          >
            Ofertas
          </a>
        </nav>

        {/* Acciones de usuario y carrito */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700"
          >
            Iniciar Sesión
          </Button>

          <Button
            size="sm"
            className="relative bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-indigo-600/25 border border-indigo-400/20 gap-2 px-3.5"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Carrito</span>
            <span className="bg-white/20 text-white text-[11px] font-bold px-1.5 py-0.2 rounded-full">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}