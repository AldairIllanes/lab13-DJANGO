import { useState, useEffect } from "react";
import {
  Search,
  Zap,
  ShieldCheck,
  Headphones,
  RefreshCw,
  AlertCircle,
  Sparkles,
  Gamepad2,
} from "lucide-react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import { obtenerProductos, obtenerCategorias } from "./services/api";

export default function App() {
  // Estados para almacenar los datos del backend
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSel, setCategoriaSel] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  // Estados para controlar la carga y posibles errores de red
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Hook useEffect para consultar la API de Django al montar el componente
  useEffect(() => {
    async function cargarDatosDesdeAPI() {
      try {
        setCargando(true);
        const [datosProductos, datosCategorias] = await Promise.all([
          obtenerProductos(),
          obtenerCategorias(),
        ]);

        setProductos(datosProductos);
        setCategorias(datosCategorias);
        setError(null);
      } catch (err) {
        setError("No se pudo conectar con el servidor de Django REST Framework (http://127.0.0.1:8000). Verifica que el backend esté ejecutándose.");
      } finally {
        setCargando(false);
      }
    }

    cargarDatosDesdeAPI();
  }, []);

  // Filtrar productos según categoría y texto de búsqueda
  const productosFiltrados = productos.filter((prod) => {
    const coincideCategoria =
      categoriaSel === "Todas" || prod.categoria_nombre === categoriaSel;
    const coincideBusqueda =
      prod.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.descripcion?.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* Banner Hero Principal de la Tienda */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800/80 p-8 sm:p-12 mb-10 shadow-2xl shadow-indigo-950/30">
          {/* Luces de fondo decorativas */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Tienda Oficial de Videojuegos y Claves Digitales</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-4">
              Tu Próxima Gran Aventura{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                Comienza Aquí
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Explora nuestro catálogo con títulos aclamados para PC, PlayStation y Xbox. Códigos oficiales con activación global y garantía garantizada.
            </p>

            {/* Buscador Integrado en el Hero */}
            <div className="relative max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por título (ej. Elden Ring, God of War)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition shadow-inner"
              />
              {busqueda && (
                <button
                  onClick={() => setBusqueda("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Barra de beneficios de la tienda (E-commerce Trust Bar) */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-900/40">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">Entrega Inmediata</h4>
              <p className="text-[11px] text-slate-400">Activación digital al instante</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-900/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">Claves 100% Oficiales</h4>
              <p className="text-[11px] text-slate-400">Distribuidores autorizados</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-purple-950/60 text-purple-400 border border-purple-900/40">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">Multiplataforma</h4>
              <p className="text-[11px] text-slate-400">Steam, PSN, Xbox & Epic</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-900/40">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">Soporte Gamer 24/7</h4>
              <p className="text-[11px] text-slate-400">Atención personalizada</p>
            </div>
          </div>
        </section>

        {/* Estado de Carga */}
        {cargando && (
          <div className="text-center py-20 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-indigo-400 animate-spin" />
            <p className="text-slate-400 font-medium text-sm">
              Sincronizando catálogo con Django REST Framework...
            </p>
          </div>
        )}

        {/* Estado de Error */}
        {error && (
          <div className="bg-red-950/40 border border-red-800/80 text-red-200 p-5 rounded-2xl flex items-center gap-3 my-8">
            <AlertCircle className="w-6 h-6 text-red-400 shrink-0" />
            <div className="text-sm">
              <p className="font-semibold text-red-300">Error de conexión</p>
              <p className="text-slate-400 text-xs mt-0.5">{error}</p>
            </div>
          </div>
        )}

        {/* Contenido principal cuando no hay carga ni error */}
        {!cargando && !error && (
          <>
            <CategoryFilter
              categorias={categorias}
              categoriaSeleccionada={categoriaSel}
              alSeleccionar={setCategoriaSel}
            />
            <ProductList productos={productosFiltrados} />
          </>
        )}
      </main>

      {/* Footer corporativo de la tienda */}
      <footer className="mt-16 border-t border-slate-800/80 bg-slate-950/80 py-8 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider">GAMETECH STORE</span>
            <span>• Plataforma de Comercio Electrónico</span>
          </div>
          <p className="text-slate-500">
            Laboratorio N° 13 — ReactJS & Django REST Framework • Tecsup 2026
          </p>
        </div>
      </footer>
    </div>
  );
}