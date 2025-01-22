import styles from "./footer.module.css"
import Image from "next/legacy/image";
import logo_un from "@/public/logos/facebook.png"
import logo_deux from "@/public/logos/instagram.png"
import logo_trois from "@/public/logos/youtube.png"
import logo_quatre from "@/public/logos/spotify.png"
/*credit du logo youtube " https://www.flaticon.com/fr/icones-gratuites/youtube title="youtube icônes">Youtube icônes créées par Rakib Hassan Rahim - Flaticon "*/
/*credit du logo instagram " https://www.flaticon.com/fr/icone-gratuite/instagram_2111463?term=instagram&page=1&position=4&origin=search&related_id=2111463 " */
/*credit du logo facebook " https://www.flaticon.com/fr/icone-gratuite/facebook_174848" */ 
/*credit du logo spotify " https://www.flaticon.com/fr/icones-gratuites/croquis-spotify title="croquis spotify icônes">Croquis spotify icônes créées par Fathema Khanom - Flaticon " */
export default function Footer(){
    return(
        <div className={styles.bob}>
        <div className={styles.foot}>
            <div className={styles.adresse}>
            <div>2285 Blvd St-Laurent Unit-D18</div>
            <div>Ottawa, Ontario, Canada</div>
            </div>
            <div className={styles.logo}>
            <div className={styles.image}>
                <Image src={logo_un} alt="logo facebook" width={40} height={40} />
            </div>
            <div className={styles.image}>
                <Image src={logo_deux} alt="logo instagram" width={40} height={40} />
            </div>
            <div className={styles.image}>
                <Image src={logo_trois} alt="logo youtube" width={40} height={40} />
            </div>
            <div className={styles.image}>
                <Image src={logo_quatre} alt="logo spotify" width={40} height={40} />
            </div>
            </div>
        </div>
        <div className={styles.auteur}>
            {/* Affichage du copyright avec l'année en cours dynamiquement et les noms des développeurs */}
            &copy; {new Date().getFullYear()} by GILC-MEDIA <br/>
        </div>
        </div>
    )
}