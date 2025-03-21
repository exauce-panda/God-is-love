import styles from "./footer.module.css"
import Image from "next/legacy/image";
import logo_un from "@/public/logos/facebook.png"
import logo_deux from "@/public/logos/instagram.png"
import logo_trois from "@/public/logos/youtube.png"
import logo_quatre from "@/public/logos/tiktok.png"
/*credit du logo youtube " https://www.flaticon.com/fr/icones-gratuites/youtube title="youtube icônes">Youtube icônes créées par Rakib Hassan Rahim - Flaticon "*/
/*credit du logo instagram " https://www.flaticon.com/fr/icone-gratuite/instagram_2111463?term=instagram&page=1&position=4&origin=search&related_id=2111463 " */
/*credit du logo facebook " https://www.flaticon.com/fr/icone-gratuite/facebook_174848" */ 
/*credit du logo spotify " https://www.flaticon.com/fr/icones-gratuites/croquis-spotify title="croquis spotify icônes">Croquis spotify icônes créées par Fathema Khanom - Flaticon " */
export default function Footer(){
    return(
        <div className={styles.bob}>
        <div className={styles.foot}>
            <div className={styles.adresse}>
            <div className="p-4">GILC</div>   
            <div className="p-4">
            <div>GODISLOVECENTER@GMAIL.COM</div>
            <div>2285 BLVD ST-LAURENT UNIT-D18</div>
            </div> 
            <div className="p-4">
            <div>OTTAWA, ONTARIO</div>
            <div>Canada</div>
            </div>
            </div>
            <div className={styles.logo}>
            <div className={styles.image}>
                <a href="https://www.facebook.com/Godislovecenter?locale=fr_CA" target="_blank">
                <Image src={logo_un} alt="logo facebook" width={40} height={40} />
                </a>
            </div>
            <div className={styles.image}>
            <a href="https://www.instagram.com/god_is_lovecenter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <Image src={logo_deux} alt="logo instagram" width={40} height={40} />
                </a>
            </div>
            <div className={styles.image}>
            <a href="https://youtube.com/@gilctv4549?si=l13vyKqNc89xk2_T" target="_blank">
                <Image src={logo_trois} alt="logo youtube" width={40} height={40} />
                </a>
            </div>
            <div>
            <a href="https://www.tiktok.com/@gilc_ottawa?_t=ZM-8so4Bh7Mcx4&_r=1" target="_blank">
                <Image src={logo_quatre} alt="logo TIKTOK" width={40} height={40} />
            </a>
            </div>
            </div>
        </div>
        <div className={styles.auteur}>
            {/* Affichage du copyright avec l'année en cours dynamiquement et les noms des développeurs */}
            Copyright &copy; {new Date().getFullYear()} by GILC-MEDIA, All rights reserved. <br/>
        </div>
        <div className={styles.auteur}>
         icons by&nbsp;
        <a href="https://icones8.fr/app/figma" className={styles.icon}> icons8</a>
        </div>
        </div>
    )
}