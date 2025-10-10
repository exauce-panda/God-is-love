import styles from "./event.module.css";
import Image from "next/legacy/image";
import logo_un from "@/public/logos/facebook.png";
import logo_deux from "@/public/logos/instagram.png";
import logo_trois from "@/public/logos/youtube.png";
import logo_quatre from "@/public/logos/tiktok.png";
import allEvents from '@/public/evenData/allEvents.json'; // Importation des données des événements depuis un fichier JSON local.
export default function Event() {
  //me permet de recuperer les elements du json allEvents
  const currentEvent = allEvents;
  return (
    <div className={styles.bob}>
    <div className={`${styles.top}`}>Nos événements actuelle et à venir</div>
    <div className={styles.sous_top}>N&apos;hesitez pas à nous suivre sur nos réseaux pour être au courant des nos futurs annonces</div>
    <div>
          <div className={styles.lien}>
          <a className={styles.sousLien} href="https://www.facebook.com/Godislovecenter?locale=fr_CA" target="_blank">
            <Image src={logo_un} alt="logo facebook" width={60} height={60} /> <p className={styles.nom_reseaux}>FaceBook</p>
          </a>
          <a className={styles.sousLien} href="https://www.instagram.com/god_is_lovecenter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <Image src={logo_deux} alt="logo instagram" width={60} height={60} /> <p className={styles.nom_reseaux}>Instagram</p>
          </a>
          <a className={styles.sousLien} href="https://youtube.com/@gilctv4549?si=l13vyKqNc89xk2_T" target="_blank">
            <Image src={logo_trois} alt="logo youtube" width={60} height={60} /> <p className={styles.nom_reseaux}>Youtube</p>
          </a>
          <a className={styles.sousLien} href="https://www.tiktok.com/@gilc_ottawa?_t=ZM-8so4Bh7Mcx4&_r=1" target="_blank">
             <Image src={logo_quatre} alt="logo TIKTOK" width={60} height={60} /> <p className={styles.nom_reseaux}>TikTok</p>
          </a>
          </div>
    </div>         
    <div className={styles.eventsContainer}>
      {currentEvent.map((evenement) => (
        <div key={evenement.id} className={styles.eventCard}>
          <div className={styles.imgDiv}>
            <Image
              src={evenement.image}
              alt={`Image for ${evenement.title}`}
              className={styles.imgEv}
              priority={evenement.priority}
              width={400}
              height={400}
            />
          </div>
          <div className={styles.textDiv}>
            <div className={styles.date}>{evenement.date}</div>
            <div className={styles.title}>{evenement.title}</div>
            <div className={styles.description}>{evenement.description}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
