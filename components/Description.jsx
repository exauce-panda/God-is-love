import styles from "./description.module.css"
import Programme from "./Programme.jsx"
export default function Description() {
    return(
     <div className={styles.bob}>
        <div className={styles.titre}>
        <div>
         <div>
         </div>
         <div className={styles.cent}>
         <div className={styles.tritre_n_un}>
           <div className={styles.god}>GOD</div> <div className={styles.is}>IS</div> <div className={styles.love_center}>LOVE CENTER</div>
        </div>
        </div>
        </div>
        <div className={styles.titre_n_deux}>
        <div className={styles.mini_titre}>UNE SEUL GRANDE FAMILLE</div>            
        <div className={styles.desc}>
            <div>
            À l'église God is Love Center (GILC), nous sommes une seule et grande famille. Nous expérimentons l'amour de Dieu, car il nous aime plus que tout. Nous reconnaissons que Jésus-Christ est Dieu et qu'il est mort pour nos péchés. 
            </div>
            <div className={styles.verset}>Ephesiens 3:15</div>
        </div>  
        </div>              
        </div>     
        <div className={styles.reseaux}>
            <div className={`${styles.reseaux_deux} gap-4`}>
                <div>Youtube</div><div>Facebook</div><div>Instagram</div>
            </div>
        </div>  
        <div>
            <Programme/>
        </div>
     </div>
    );
}