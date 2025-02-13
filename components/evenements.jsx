import styles from "@/components/evenements.module.css"
export default function evenements (){
    return(
        <div className={styles.bob}>
            <h1>NOS EVENEMENTS</h1>
            <div className={styles.presentation}>Nous vous encourageons à vous abonnez sur nos réseaux sociaux afin d'être au courant de toutes les activités que nos Eglises organisent.</div>
            <div className={styles.titre_un}>ne manqez pas nos événements:</div>
            <div>
            <div>Evement 1</div>
            <div>Evement 2</div>
            <div>Evement 3</div>
            <div>Evement 4</div>
            </div>
            <div>
            <div>Nos dernieres videos</div>          
            </div>
        </div>
    );
}