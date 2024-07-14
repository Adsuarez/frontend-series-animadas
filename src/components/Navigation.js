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
          <Link href={ROUTES.genres}>Géneros</Link>
        </li>
        <li>
          <Link href={ROUTES.countries}>Países</Link>
        </li>
        <li>
          <Link href={ROUTES.directors}>Directores</Link>
        </li>
        <li>
          <Link href={ROUTES.actors}>Actores</Link>
        </li>
        <li>
          <Link href={ROUTES.movies}>Películas</Link>
        </li>
      </ul>
    </nav>
  );
}
