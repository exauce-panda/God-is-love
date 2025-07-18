"use client"
import styles from "@/components/service.module.css"
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
import Image from "next/legacy/image";
import logo_media from "@/public/images/service/logo_media.png"
import logo_chorale from "@/public/images/service/logo_chorale.png"
import logo_jeunesse from "@/public/images/service/logo_jeunesse.png"
import logo_protocola from "@/public/images/service/logo_protocola.png"
//import { EB_Garamond } from 'next/font/google';

/*const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})*/
// Définition du composant fonctionnel MenuNav
export default function  Service(){
  const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif
  // Rendu du composant
  return(
    <div className={`${styles.bob}`}>
      <div className={`${styles.titre}`}>
        Réjoignez une équipe
      </div>
      <div className={styles.text_primaire}>
        Contactez nous pour vos differentes questions concernant les differents departements de l'eglise 
      </div>

      <div className={`${styles.contenant}`}>
      <div className={styles.type_service}>
        <div className={styles.logo_top}>
        <Image className={styles.logo}src={logo_media} alt="logo media" width={230} height={230}/> 
        </div>
         <div className="d-block p-5 text-start">
         <div className={`${styles.mini_titre}`}>MEDIA</div> 
         <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
         <Link href="/medias" className={pathname === '/medias' ? `${styles.text}` : ''}>
         <div className={`${styles.boutton}`}>
          <div>CONTACTEZ</div>
         </div>  
        </Link>
        </div>
      </div>

      <div className={styles.type_service}>
        <div className={styles.logo_top}>
        <Image className={styles.logo}src={logo_protocola} alt="logo protocola" width={230} height={230}/> 
        </div>
        <div className="d-block p-5 text-start">
        <div className={`${styles.mini_titre}`}>PROTOCOLA</div> 
        <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
        <Link href="/protocola" className={pathname === '/protocola' ? `${styles.text}` : ''}>
        <div className={`${styles.boutton}`}>
          <div>CONTACTEZ</div>
          </div>
        </Link>
        </div>          
      </div>
      </div>

      <div className={`${styles.contenant}`}>
      <div className={styles.type_service}>
        <div className={styles.logo_top}>
        <Image className={styles.logo}src={logo_jeunesse} alt="logo jeunesse" width={230} height={230}/> 
        </div>
         <div className="d-block p-5 text-start">
         <div className={`${styles.mini_titre}`}>JEUNESSE</div> 
         <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
         <Link href="/jeunesse" className={pathname === '/jeunesse' ? `${styles.text}` : ''}>
         <div className={`${styles.boutton}`}>
          <div>CONTACTEZ</div>
         </div>  
        </Link>
        </div>
      </div>

      <div className={styles.type_service}>
        <div className={styles.logo_top}>
        <Image className={styles.logo}src={logo_chorale} alt="logo chorale" width={230} height={230}/> 
        </div>
        <div className="d-block p-5 text-start">
        <div className={`${styles.mini_titre}`}>CHORALE</div> 
        <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
        <Link href="/musique" className={pathname === '/musique' ? `${styles.text}` : ''}>
        <div className={`${styles.boutton}`}>
          <div>CONTACTEZ</div>
          </div>
        </Link>
        </div>          
      </div>
      </div>  

    </div>
)
}