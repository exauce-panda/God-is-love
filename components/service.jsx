"use client"
import styles from "@/components/service.module.css"
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
import Image from "next/legacy/image";
import logo from "@/public/logos/logoGilc.jpg"
// Définition du composant fonctionnel MenuNav
export default function  service(){
  const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif
  // Rendu du composant
  return(
    <div className={`${styles.bob}`}>
      <div className={`${styles.titre}`}>
        Rejoignez une equipe
      </div>
      <div className={styles.text_primaire}>
        Vous pouvez servir dans differents groupes choisissez celui qui vous conviendra le mieux 
      </div>
      <div className={styles.line_un}></div>

      <div className={`${styles.contenant}`}>
      <div className={styles.type_service}>
      <Image className={styles.titre_desc} src={logo} alt="logo GILC" width={230} height={30}/> 
      <div className="d-block p-5 text-start">
      <div>MEDIA</div> 
      <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
      <Link href="/medias" className={pathname === '/medias' ? `${styles.text}` : ''}>
        {/* lien des liens de navigation */}
        <div className={`${styles.lien}`}>
          <div>REJOINDRE</div>
          </div>  
          </Link>
          </div>
        </div>

        <div className={styles.type_service}>
        <Image className={styles.titre_desc} src={logo} alt="logo GILC" width={230} height={30}/>
        <div className="d-block p-5 text-start">
        <div>PROTOCOLA</div> 
        <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
        <Link href="/protocola" className={pathname === '/protocola' ? `${styles.text}` : ''}>
        <div className={`${styles.lien}`}>
          <div>REJOINDRE</div>
          </div>
          </Link>
          </div>
        </div>

        <div className={styles.type_service}>
        <Image className={styles.titre_desc} src={logo} alt="logo GILC" width={230} height={30}/>
        <div className="d-block p-5 text-start">
        <div>CHORALE</div> 
        <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
        <Link href="/musique" className={pathname === '/musique' ? `${styles.text}` : ''}>
          <div className={`${styles.lien}`}>
          <div>REJOINDRE</div>
          </div>
          </Link>       
          </div>
        </div>
        
        <div className={styles.type_service}>
        <Image className={styles.titre_desc} src={logo} alt="logo GILC" width={230} height={10}/>
        <div className="d-block p-5 text-start">
        <div>JEUNESSE</div> 
        <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
          <Link href="/jeunesse" className={pathname === '/jeunesse' ? `${styles.text}` : 'nav-item'}>
          <div className={`${styles.lien}`}>
          <div>REJOINDRE</div>
          </div>
          </Link>
          </div>
        </div>
        </div>
    </div>
)
}