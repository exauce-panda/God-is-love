import styles from "./don.module.css"
import logo from "@/public/logos/interac_logo.png"
import Image from "next/legacy/image";
//import { EB_Garamond } from 'next/font/google';

/*const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})*/
export default function Don(){
return(
    <div className={styles.bob}>  
    <div className={styles.merci}>Merci pour votre don</div>
        <div className={styles.verset}>
        <div className={styles.titre_verset}>2 Corinthiens 9:7</div>
        <div className={styles.text}>Que chacun donne comme il l&apos;a résolu en son <span className={styles.txt}>coeur</span>, sans <span className={styles.txt}>tristesse</span> ni <span className={styles.txt}>contrainte</span>; car Dieu aime celui qui donne avec joie.</div>
        </div>
        <div className={styles.paiements}>
        <div className={styles.batiment}>PAR INTERACT
            <div className={styles.image}>
            <Image src={logo} alt="logo interac" width={50} height={50} />               
        </div>
        </div>
        <div className={styles.m_paiement}>
                <div className={styles.interac}>
                <div>
        <div>Pour toutes vos offrandes</div>
        <div className={`${styles.mail}`}>GODISLOVE084@GMAIL.COM</div>
                </div>
                </div>
                <div className={styles.ligne}></div>
                <div className={styles.interac}>
                <div>   
        <div>Si vous souhaitez nous soutenir pour l&apos;agrandissement de l&apos;eglise</div>
        <div className={`${styles.mail}`}>GILCBATISSE@GMAIL.COM</div>        
                </div>
                </div>
                <div className={styles.ligne}></div>                
                <div className={styles.interac}>
                <div>
        <div>Pour tout vos don pour la banque alimentaire</div>                    
        <div className={`${styles.mail}`}>GILCBATISSE@GMAIL.COM</div>
                </div>
                </div>
        </div>
        <div className={styles.don_materiel}>
                <p>Si vous souhaitez faire un don vestimentaire ou alimentaire veillez nous contacter a ce numero:</p>
                <div className={`${styles.mail}`}>+1 (613) 291-7607</div>
        </div>       
        </div>
    </div>
);
}