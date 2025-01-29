'use client'
import styles from "./menuNav.module.css"
import Image from "next/legacy/image";
import logo from "@/public/logos/logoGilc.png"
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
// Définition du composant fonctionnel MenuNav
export default function menuNav() {
    const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif
    // Rendu du composant de navigation
    return(
        <div className={styles.bob}>
        <nav className={styles.nav}>
            <div className={styles.image}>
                <Image src={logo} alt="logo GILC" width={90} height={90} />
            </div>
            <ul className={styles.navigation}>
        {/* Liste des liens de navigation */}
        <li className={styles.lien}>
          <Link href="/" className={pathname === '/' ? `text-warning` : 'nav-item'}>
              Accueil
          </Link>
        </li>
        <li className={styles.lien}>
          <Link href="/don" className={pathname === '/don' ? `text-warning` : 'nav-item'}>
              Don
          </Link>
        </li>
        <li className={styles.lien}>
          <Link href="/evenements" className={pathname === '/evenements' ? `text-warning` : 'nav-item'}>
              Evenements
          </Link>
        </li>
        <li className={styles.lien}>
          <Link href="/visitez_nous" className={pathname === '/visitez_nous' ? `text-warning` : 'nav-item'}>
              Nos Eglises
          </Link>
        </li>
            </ul>
        </nav>
        </div>
    );
}