import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="flex flex-col justify-center items-center bg-zinc-500/50 w-screen h-screen">
        <h1 className="font-Roboto-Bold text-9xl text-blanco">404</h1>
        <h2 className="font-Roboto-Regular text-7xl text-blanco">
          Página no encontrada
        </h2>

        <Link
          href="/"
          className="border-2 hover:bg-blanco mt-10 p-2 border-blanco font-Roboto-Bold text-blanco hover:text-negro"
        >
          Regresar al Inicio
        </Link>
      </div>
    </div>
  );
}
