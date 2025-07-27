import styles from "./nos_eglises.module.css"
import Image from "next/legacy/image";
import eglise_story from "@/public/images/story_gilc_bg.png"
//import { EB_Garamond } from 'next/font/google';

/*const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})*/
export default function Nos_eglises(){
    return(
    <div className={styles.bob}>
    <div className={`${styles.titre}`}>Notre ministere</div>
    <div className={styles.slogan}>&quot; Transfomer par l&apos;amour de Dieu pour transfomer le monde, car il n&apos;y a que l&apos;amour qui transforme.&quot;</div>            
        <div className={styles.composant}>
            <div className={styles.histoire}>
                <div className={styles.img} >
                    <Image src={eglise_story} alt="Images representant l'histoire de l'Eglise" width={800} height={500} />
                </div>
                
                <div className={styles.description}>
                <div className={`${styles.pasteur}`}>Notre histoire</div>
                <div className={styles.type_eglise}>
                    <p>
                        L&apos;Église GILC est née de la vision que Dieu a confiée à son serviteur, l&apos;Apôtre Éric Kaloyi. Dès sa jeunesse, il a été appelé par le Seigneur. En tant que Pasteur consacré depuis plus de vingt ans, ses messages reflètent un profond amour pour Dieu, qu&apos;il s&apos;efforce de partager avec ferveur. Il est devenu un père pour de nombreux fidèles, laissant une empreinte indélébile dans leur vie.
                    </p>
                </div>
                </div>              
            </div>
    <div className={styles.eglises}>
        <div className={`${styles.titre_eglise}`}>Nos Eglises</div>
     <div className={styles.eglise_un}>
        <div className={styles.eglise_un_bg}></div>
        <div className={styles.eglise_un_content}>
        Ottawa
        <div>pasteur</div>
        <div>adresse</div>        
        </div>
     </div>     
     <div className={styles.eglise_deux}>
        <div className={styles.eglise_deux_bg}></div>
        <div className={styles.eglise_deux_content}>
        Montreal
        <div>pasteur</div>
        <div>adresse</div>       
        </div>
     </div>    
     <div className={styles.eglise_trois}>
        <div className={styles.eglise_trois_bg}></div>
        <div className={styles.eglise_trois_content}>
        Chelsea
        <div>pasteur</div>
        <div>adresse</div>
        </div>
     </div>          
    </div>                   
        </div>
    </div>
    );
}