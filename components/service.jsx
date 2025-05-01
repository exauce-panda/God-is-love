"use client"
import styles from "@/components/service.module.css"
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
import Image from "next/legacy/image";
import logo_media from "@/public/images/service/logo_media.png"
import logo_chorale from "@/public/images/service/logo_chorale.png"
import logo_jeunesse from "@/public/images/service/logo_jeunesse.png"
import logo_protocola from "@/public/images/service/logo_protocola.png"
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})
// Définition du composant fonctionnel MenuNav
export default function  service(){
  const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif
  // Rendu du composant
  return(
    <div className={`${styles.bob}`}>
      <div className={`${styles.titre}  ${ebGaramond.className}`}>
        Réjoignez une équipe
      </div>
      <div className={styles.text_primaire}>
        Vous pouvez servir dans différents groupes, choisissez celui qui vous conviendra le mieux.
      </div>
      <div className={styles.line_un}></div>

      <div className={`${styles.contenant}`}>
      <div className={styles.type_service}>
      <Image className={styles.titre_desc} src={logo_media} alt="logo media" width={230} height={30}/> 
      <div className="d-block p-5 text-start">
      <div className={`${styles.mini_titre}  ${ebGaramond.className}`}>MEDIA</div> 
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
        <Image className={styles.titre_desc} src={logo_protocola} alt="logo protocola" width={230} height={10}/>
        <div className="d-block p-5 text-start">
        <div className={`${styles.mini_titre}  ${ebGaramond.className}`}>PROTOCOLA</div> 
        <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
        <Link href="/protocola" className={pathname === '/protocola' ? `${styles.text}` : ''}>
        <div className={`${styles.lien}`}>
          <div>REJOINDRE</div>
          </div>
          </Link>
          </div>
        </div>

        <div className={styles.type_service}>
        <Image className={styles.titre_desc} src={logo_chorale} alt="logo chorale" width={230} height={30}/>
        <div className="d-block p-5 text-start">
        <div className={`${styles.mini_titre}  ${ebGaramond.className}`}>CHORALE</div> 
        <div className={styles.description}>text text text text text text text text text text text text text text text text text text text text text text text text </div>
        <Link href="/musique" className={pathname === '/musique' ? `${styles.text}` : ''}>
          <div className={`${styles.lien}`}>
          <div>REJOINDRE</div>
          </div>
          </Link>       
          </div>
        </div>
        
        <div className={styles.type_service}>
        <Image className={styles.titre_desc} src={logo_jeunesse} alt="logo jeunesse" width={230} height={30}/>
        <div className="d-block p-5 text-start">
        <div className={`${styles.mini_titre}  ${ebGaramond.className}`}>JEUNESSE</div> 
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