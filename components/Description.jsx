//import { Lexend } from 'next/font/google';
//import { EB_Garamond } from 'next/font/google';
import styles from "./description.module.css"
import Programme from "./Programme.jsx"
import Image from "next/legacy/image";
import logo_un from "@/public/logos/facebook.png"
import logo_deux from "@/public/logos/instagram.png"
import logo_trois from "@/public/logos/youtube.png"
import logo_quatre from "@/public/logos/tiktok.png"
import logo from "@/public/logos/logoGilc.png"
//import LatestVideos from "@/components/LatestVideo.jsx"
import Link from 'next/link'; // Importation du composant Link de Next.js pour la navigation
import { usePathname } from 'next/navigation'; // Importation du hook usePathname pour obtenir le chemin d'accès actuel
import pasteur_erick from "@/public/images/pasteurs/p_erick_photo.jpg";

/*const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-lexend', // optionnel pour CSS variable
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})*/
export default function Description() {
    const pathname = usePathname(); // Utilisation de usePathname pour déterminer le chemin d'accès actif
    return(
     <div className={styles.bob}>
        <div className={styles.image}>
          <div className={styles.image_bg}></div>
          <div className={styles.image_content}>
                <Image src={logo} alt="logo GILC"width={280}height={30}/>   
                <div className={styles.tritre_n_un}>
        <div className={`text-center`}><div className={`h2`}>BIENVENUE A</div><div className={`text-center`}>GOD IS LOVE</div><div className={`text-center`}>CENTER</div></div>
        </div>  
        </div>  
                <div className={`${styles.desc_mobile}`}>
        <div className={styles.titre_n_deux}>        
        <div className={styles.desc}>
            <div className={styles.titre_mobile}>UNE SEULE GRANDE FAMILLE </div> 
            <div className={`${styles.desc_mob}`}>
            À l&apos;église God is Love Center (GILC), nous sommes une seule et grande famille. Nous expérimentons l&apos;amour de Dieu, car il nous aime plus que tout. Nous reconnaissons que Jésus-Christ est Dieu et qu&apos;il est mort pour nos péchés. 
            </div>
            <div className={`${styles.verset}`}>Ephesiens 3:15</div>
            <Link href="/nos_eglises">
          <div>
          <div className={`${styles.rejoindre} h6`}>Nos Eglises</div>
          </div>
            </Link>
        </div>  
        </div>               
          </div>          
        </div>
        <div className={styles.titre}>
        <div className={`${styles.mini_titre}`}>UNE SEULE GRANDE FAMILLE</div> 
        <div className={styles.titre_n_deux}>           
        <div className={styles.desc}>
            <div>
            À l&apos;église God is Love Center (GILC), nous sommes une seule et grande famille. Nous expérimentons l&apos;amour de Dieu, car il nous aime plus que tout. Nous reconnaissons que Jésus-Christ est Dieu et qu&apos;il est mort pour nos péchés. 
            </div>
            <div className={`${styles.verset}`}>Ephesiens 3:15</div>
        <Link href="/nos_eglises">
          <div>
          <div className={`${styles.rejoindre} h6`}>Nos Eglises</div>
          </div>
        </Link>
        </div>  
        </div>              
        </div>     
        <div className={styles.reseaux}>
          <div className={styles.reseaux_bg}></div>
          <div className={styles.reseaux_content}>
            <div className={`${styles.reseaux_deux} gap-4`}>
                <div>
                    <div>Nos derniers lives</div>
            </div>
            </div>
          </div>
        </div> 
        <div>
                <div className={styles.lien}>
                <a className={styles.sousLien} href="https://www.facebook.com/Godislovecenter?locale=fr_CA" target="_blank">
                <Image src={logo_un} alt="logo facebook" width={60} height={60} /> <p >FaceBook</p>
                </a>
                <a className={styles.sousLien} href="https://www.instagram.com/god_is_lovecenter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <Image className={styles.image_mobile} src={logo_deux} alt="logo instagram" width={60} height={60} /> <p >Instagram</p>
                </a>
                <a className={styles.sousLien} href="https://youtube.com/@gilctv4549?si=l13vyKqNc89xk2_T" target="_blank">
                <Image src={logo_trois} alt="logo youtube" width={60} height={60} /> <p >Youtube</p>
                </a>
                <a className={styles.sousLien} href="https://www.tiktok.com/@gilc_ottawa?_t=ZM-8so4Bh7Mcx4&_r=1" target="_blank">
                <Image src={logo_quatre} alt="logo TIKTOK" width={60} height={60} /> <p>TikTok</p>
                </a>
                </div>
        </div>
        <div>              
                <div className={styles.eglise_content}>
                <div className={styles.img_content}>
                <div className={styles.img_pasteur}>
                <Image src={pasteur_erick} alt="Image de l'Apôtre Eric Kaloyi" width={370} height={500} />
                </div>
                </div>
                <div className={styles.description}>
                <div className={`${styles.nom_pasteur}`}>Apôtre Éric Kaloyi Muboyayi</div>
                <div className={`${styles.nom_pasteur}`}>Pasteur Principal</div>
                <div className={styles.desc_eglise}>L&apos;Église GILC est née de la vision que Dieu a confiée à son serviteur, l&apos;Apôtre Éric Kaloyi. Dès sa jeunesse, il a été appelé par le Seigneur. En tant que Pasteur consacré depuis plus de vingt ans, ses messages reflètent un profond amour pour Dieu, qu&apos;il s&apos;efforce de partager avec ferveur. Il est devenu un père pour de nombreux fidèles, laissant une empreinte indélébile dans leur vie.</div>
                </div>
                </div>
        </div>
        <div>
            <Programme/>
        </div>
     </div>
    );
}