import styles from "./programme.module.css"
export default function programme(){
    return(
        <div className={styles.bob}>
            <div>
            <h1>NOS PROGRAMMES</h1>
            <div className={styles.table_pg}>
                <div className={styles.pg_un}><div className={styles.p1}>TOUT LES LUNDI</div> <div className={styles.p2}>culte de célébration</div> <div className={styles.p3}>Clinique celeste</div> <div className={styles.p4}>À partir de 20h30 a 21h30</div></div>
                <div className={styles.pg_deux}><div className={styles.p1}>TOUT LES VENDREDI</div> <div className={styles.p2}>culte d'intercessions</div> <div className={styles.p3}>Moment d'intercession et d'enseignement biblique</div> <div className={styles.p4}>À partir de 19h00 a 20h30</div></div>
                <div className={styles.pg_trois}><div className={styles.p1}>TOUT LES DIMANCHES</div> <div className={styles.p2}>culte de célébration</div> <div className={styles.p3}> Premier culte de célébration et d'adoration</div> <div className={styles.p4}>À partir de 10h45 a 12h00</div> <div className={styles.p3}>Deuxieme culte de célébration et d'adoration</div> <div className={styles.p4}>À partir de 12h15 a 14h00</div></div>
            </div>
            </div>
        </div>
    )
}