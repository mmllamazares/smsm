import Link from "next/link";

export default function NotFound() {
    return(
        <div className="not-found-page">
            <div className="w-screen h-screen bg-zinc-500/50 flex flex-col justify-center items-center">
            
                <h1 className="text-9xl text-blanco font-Roboto-Bold">404</h1>
                <h2 className="text-7xl text-blanco font-Roboto-Regular">Página no encontrada</h2>
                
                <Link href="/" className="border-2 border-blanco text-blanco font-Roboto-Bold p-2 hover:bg-blanco hover:text-negro mt-10">Regresar al Inicio</Link>
            </div>
        </div>
    )
}