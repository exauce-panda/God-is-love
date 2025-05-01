import styles from "./programme.module.css"
import { Lexend } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-lexend', // optionnel pour CSS variable
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})
export default function programme(){
    return(
        <div className={styles.bob}>
            <div>
            <h1 className={ebGaramond.className}>NOS PROGRAMMES</h1>
            <div className={`${styles.table_pg} ${lexend.className}`}>
                <div className={styles.pg_un}><div className={styles.p_1}>TOUT LES LUNDI</div> <div className={styles.p_2}>culte de célébration</div> <div className={styles.p_3}>Clinique celeste: soirée de prière en ligne</div> <div className={`${styles.p_4} ${ebGaramond.className}`}>À partir de 20h30 à 21h30</div></div>
                <div className={styles.pg_deux}><div className={styles.p_1}>TOUT LES VENDREDI</div> <div className={styles.p_2}>culte d'intercessions</div> <div className={styles.p_3}>Moment d'intercession et d'enseignement biblique</div> <div className={`${styles.p_4} ${ebGaramond.className}`}>À partir de 19h00 à 20h30</div></div>
                <div className={styles.pg_trois}><div className={styles.p1}>TOUT LES DIMANCHE</div> <div className={styles.p2}>culte de célébration</div> <div className={styles.p3}> Premier culte de célébration et d'adoration</div> <div className={`${styles.p4} ${ebGaramond.className}`}>À partir de 10h45 à 12h00</div> <div className={styles.p3}>Deuxieme culte de célébration et d'adoration</div> <div className={`${styles.p4} ${ebGaramond.className}`}>À partir de 12h15 à 14h00</div></div>
            </div>
            </div>
        </div>
    )
}