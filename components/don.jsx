import styles from "./don.module.css"
export default function don(){
return(
    <div className={styles.bob}>
        <h1>Merci pour votre don que Dieu vous bénisse.</h1>     
        <div className={styles.verset}>2 Corinthiens 9:7</div>
        <div className={styles.text}>Que chacun donne comme il l'a résolu en son coeur, sans tristesse ni contrainte; car Dieu aime celui qui donne avec joie.</div>
        <div className={styles.paiements}>      
        <div className={styles.m_paiement}>
            <div>Par carte bancaire</div>
            <div>LOGO</div>
        </div>
        <div className={styles.m_paiement}>
        <div>Par interact</div>
        <div>GODISLOVE084@GMAIL.COM</div>
        </div>
        </div>
    </div>
);
}