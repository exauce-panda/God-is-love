import styles from "./don.module.css"
import logo from "@/public/logos/interac_logo.png"
import Image from "next/legacy/image";
export default function don(){
return(
    <div className={styles.bob}>  
        <div className={styles.verset}>2 Corinthiens 9:7</div>
        <div className={styles.text}>Que chacun donne comme il l'a résolu en son <span className={styles.txt}>coeur</span>, sans <span className={styles.txt}>tristesse</span> ni <span className={styles.txt}>contrainte</span>; car Dieu aime celui qui donne avec joie.</div>
        <div className={styles.paiements}>
        <div className={styles.m_paiement}>
        <div className={styles.interac}>
        <div>Notre interact</div>
        <div className={styles.image}>
            <Image src={logo} alt="logo interac" width={50} height={50} />               
        </div>
        </div>
        <div>GODISLOVE084@GMAIL.COM</div>
        </div>
        </div>
    </div>
);
}