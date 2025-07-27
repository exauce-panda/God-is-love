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
        Contactez nous pour vos differentes questions concernant les differents departements de l&apos;eglise 
      </div>

      <div className={`${styles.contenant}`}>
      <div className={styles.type_service}>
        <div className={styles.logo_top}>
        <Image className={styles.logo}src={logo_media} alt="logo media" width={230} height={230}/> 
        </div>
         <div className="d-block p-5 text-start">
         <div className={`${styles.mini_titre}`}>MEDIA</div> 
         <div className={styles.description}>Tu as un intérêt pour la photo, la vidéo, le son ou les réseaux sociaux ? Tu veux mettre tes talents au service de Dieu tout en apprenant de nouvelles compétences techniques ? Alors l&apos;équipe média est faite pour toi!</div>
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
        <div className={styles.description}>Sois le premier sourire que les gens voient en arrivant ! L&apos;équipe de protocole accueille, oriente et crée une atmosphère chaleureuse et respectueuse pour tous. Si tu aimes le contact humain et servir avec joie, cette équipe est pour toi.</div>
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
         <div className={styles.description}>Tu es jeune et tu veux vivre ta foi dans une ambiance dynamique ? Rejoins le groupe jeunesse ! Enseignements, activités, partages, sorties : grandis dans ta relation avec Dieu entouré.e de gens de ton âge.</div>
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
        <div className={styles.description}>Tu chantes ou joues d&apos;un instrument ? Rejoins la chorale et fais partie de ceux qui conduisent l&apos;église dans la louange et l&apos;adoration. Plus qu&apos;un talent, c&apos;est un cœur qui adore que nous recherchons !</div>
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