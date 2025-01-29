import styles from "./visitez_nous.module.css"
export default function visitez_nous(){
    return(
        <div className={styles.bob}>
            <div className={styles.eglise}>
                <div>photo pasteur</div>
                <div className={styles.description}>
                <div>Eglise principale</div>
                <div>adresse</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <div>photo</div>
                <div className={styles.description}>
                <div>Eglise 2</div>
                <div>adresse</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <div>photo</div>
                <div className={styles.description}>
                <div>Eglise 3</div>
                <div>adresse</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <div>photo</div>
                <div className={styles.description}>
                <div>Eglise 4</div>
                <div>adresse</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <div>photo</div>
                <div className={styles.description}>
                <div>Eglise 5</div>
                <div>adresse</div>
                </div>
            </div>
        </div>
    );
}