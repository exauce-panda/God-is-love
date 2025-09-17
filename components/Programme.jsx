import styles from "./programme.module.css"
//import { Lexend } from 'next/font/google';
//import { EB_Garamond } from 'next/font/google';

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
export default function Programme(){
    return(
        <div className={styles.bob}>
            <div>
            <h1>NOS PROGRAMMES</h1>
            <div className={`${styles.table_pg}`}>
                <div className={styles.pg_un}><div className={styles.p_1}>TOUT LES LUNDI</div> <div className={styles.p_2}>Clinique celeste</div> <div className={styles.p_3}>Clinique Céleste est une soirée de prière en ligne où nous nous connectons sur Zoom ou Facebook.</div> <div className={`${styles.p_4}`}>À partir de 21h00 à 22h00</div></div>
                <div className={styles.pg_deux}><div className={styles.p_1}>TOUT LES VENDREDI</div> <div className={styles.p_2}>culte d&apos;intercessions</div> <div className={styles.p_3}>Nous nous rassemblons sur place pour un moment d&apos;intercession et d&apos;enseignement biblique.</div> <div className={`${styles.p_4}`}>À partir de 19h00 à 20h30</div></div>
                <div className={styles.pg_trois}><div className={styles.p1}>TOUT LES DIMANCHE</div> <div className={styles.p2}>culte de célébration</div> <div className={styles.p3}> Le jour du dimanche est consacrée à un culte de célébration, d&apos;adoration et d'enseignement.</div> <div className={`${styles.p4}`}>À partir de 10h45 à 12h00</div></div>
            </div>
            </div>
        </div>
    )
}