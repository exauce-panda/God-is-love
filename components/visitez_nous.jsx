import styles from "./visitez_nous.module.css"
import Image from "next/legacy/image";
import pasteur from "@/public/images/pasteur.jpg"
export default function visitez_nous(){
    return(
        <div className={styles.bob}>
            <div className={styles.eglise}>
                <Image src={pasteur} alt="Image de l'Apôtre Eric Kaloyi" width={450} height={500} />
                <div className={styles.description}>
                <div className={styles.pasteur}>Apôtre Éric Kaloyi Muboyayi</div>
                <div className={styles.type_eglise}>Eglise principale</div>
                <div className={styles.adresse}>2285 Blvd St-Laurent Unit-D18,</div>
                <div className={styles.adresse}>Ottawa, Ontario, Canada</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <Image src={pasteur} alt="Image de l'Apôtre Eric Kaloyi" width={450} height={500} />
                <div className={styles.description}>
                <div className={styles.pasteur}>pasteur</div>
                <div className={styles.type_eglise}>Extension Montreal</div>
                <div className={styles.adresse}>9697 Saint-laurent locale 403b, Montreal, Quebec</div>
                <div className={styles.adresse}>Montreal, Quebec</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <Image src={pasteur} alt="Image de l'Apôtre Eric Kaloyi" width={450} height={500} />
                <div className={styles.description}>
                <div className={styles.pasteur}>pasteur</div>
                <div className={styles.type_eglise}>Extension Chelsea</div>
                <div className={styles.adresse}>adresse</div>
                <div className={styles.adresse}>adresse</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <Image src={pasteur} alt="Image de l'Apôtre Eric Kaloyi" width={450} height={500} />
                <div className={styles.description}>
                <div className={styles.pasteur}>pasteur</div>
                <div className={styles.type_eglise}>Eglise 4</div>
                <div className={styles.adresse}>adresse</div>
                <div className={styles.adresse}>adresse</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <Image src={pasteur} alt="Image de l'Apôtre Eric Kaloyi" width={450} height={500} />
                <div className={styles.description}>
                <div className={styles.pasteur}>pasteur</div>
                <div className={styles.type_eglise}>Eglise 5</div>
                <div className={styles.adresse}>adresse</div>
                <div className={styles.adresse}>adresse</div>
                </div>
            </div>
        </div>
    );
}