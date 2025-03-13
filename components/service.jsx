"use client"
import styles from "@/components/service.module.css"
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
// Définition du composant fonctionnel MenuNav
export default function  service(){
  const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif
  // Rendu du composant
  return(
    <div className={`${styles.bob}`}>
      <div>
        Vous pouvez servir dans differents groupes choisissez celui qui vous conviendra le mieux 
      </div>
      
      <div className={`${styles.titre}`}>
        Rejoinez une equipe
      </div>
      <div className="d-flex justify-content-center gap-5">
        {/* Liste des liens de navigation */}
        <div className={`${styles.liste}`}>
          <Link href="/medias" className={pathname === '/medias' ? `${styles.text}` : ''}>
          <div className={`h1 p-5`}> Medias</div>
          </Link>
        </div>

        <div className={`${styles.liste}`}>
          <Link href="/protocola" className={pathname === '/protocola' ? `${styles.text}` : ''}>
          <div className={`h1 p-5`}> Protocola</div>
          </Link>
        </div>
          <div className={`${styles.liste}`}>
          <Link href="/musique" className={pathname === '/musique' ? `${styles.text}` : ''}>
          <div className={`h1 p-5`}> Musique</div>
          </Link>
        </div>

        <div className={`${styles.liste}`}>
          <Link href="/jeunesse" className={pathname === '/jeunesse' ? `${styles.text}` : 'nav-item'}>
          <div className={`h1 p-5`}> Jeunesse</div>
          </Link>
        </div>
        </div>
    </div>
)
}