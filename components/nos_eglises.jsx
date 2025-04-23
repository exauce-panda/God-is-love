import styles from "./nos_eglises.module.css"
import Image from "next/legacy/image";
import pasteur from "@/public/images/pasteur.jpg"
import pasteur_erick from "@/public/images/pasteurs/p_erick_photo.jpg"
export default function nos_eglises(){
    return(
    <div className={styles.bob}>
            <div className={styles.slogan_primaire}>
            <div className={styles.slogan_secondaire}>
            <div className={styles.titre}>NOTRE MINISTERE</div>
            <div className={styles.slogan}>" TRANSFORMÉ PAR L'AMOUR DE DIEU POUR TRANSFORMER LE MONDE, CAR IL N'Y A QUE L'AMOUR QUI TRANSFORME."</div>
            <div className={styles.line_un}></div>
            </div>
            </div>
        <div className={styles.composant}>
            <div className={styles.eglise}>
                <Image src={pasteur_erick} alt="Image de l'Apôtre Eric Kaloyi" width={370} height={500} />
                <div className={styles.description}>
                <div className={styles.pasteur}>Apôtre Éric Kaloyi Muboyayi</div>
                <div className={styles.type_eglise}>Eglise principale</div>
                <div className={styles.adresse}>2285 Blvd St-Laurent Unit-D18,</div>
                <div className={styles.adresse}>Ottawa, Ontario, Canada</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <Image src={pasteur} alt="Image de l'Apôtre Eric Kaloyi" width={370} height={500} />
                <div className={styles.description}>
                <div className={styles.pasteur}>pasteur</div>
                <div className={styles.type_eglise}>Extension Montreal</div>
                <div className={styles.adresse}>9697 Saint-laurent locale 403b, Montreal, Quebec</div>
                <div className={styles.adresse}>Montreal, Quebec</div>
                </div>
            </div>
            <div className={styles.eglise}>
                <Image src={pasteur} alt="Image de l'Apôtre Eric Kaloyi" width={370} height={500} />
                <div className={styles.description}>
                <div className={styles.pasteur}>pasteur</div>
                <div className={styles.type_eglise}>Extension Chelsea</div>
                <div className={styles.adresse}>adresse</div>
                <div className={styles.adresse}>adresse</div>
                </div>
            </div>
        </div>
    </div>
    );
}