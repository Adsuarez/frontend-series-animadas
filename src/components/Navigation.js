import { ROUTES } from "@/constants";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href={ROUTES.directors}>Directores</Link>
        </li>
        <li>
          <Link href="/generos">Géneros</Link>
        </li>
        <li>
          <Link href="/pais">Países</Link>
        </li>
        <li>
          <Link href="/actores">Actores</Link>
        </li>
        <li>
          <Link href="/peliculas">Películas</Link>
        </li>
      </ul>
    </nav>
  );
}
