import styles from "./programme.module.css"
export default function programme(){
    return(
        <div className={styles.bob}>
            <div>
            <h1>NOS PROGRAMMES</h1>
            <div className={styles.table_pg}>
                <div className={styles.pg_un}><div>tous les vendredi</div><div>culte d'intercessions</div><div>Moment d'intercession et d'enseignement biblique</div><div>À partir de 19h00 a 20h30</div></div>
                <div className={styles.pg_deux}><div>tous les dimanche</div><div>culte de célébration</div><div>Clinique celeste</div><div>À partir de 20h30 a 21h30</div></div>
                <div className={styles.pg_trois}><div>tous les lundi</div><div>culte de célébration</div><div>Culte de célébration et d'adoration</div><div>À partir de 10h45 a 12h00 premier culte</div><div>Culte de célébration et d'adoration</div><div>À partir de 12h15 a 14h00 deuxieme culte</div></div>
            </div>
            </div>
        </div>
    )
}