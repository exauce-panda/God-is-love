'use client' // Indique que ce composant s'exécute uniquement côté client.
import Image from 'next/image'; // Importation du composant Image de Next.js pour l'optimisation des images.
import allEvents from '@/public/evenData/allEvents.json'; // Importation des données des événements depuis un fichier JSON local.
import styles from "@/components/evenements.module.css";
import logo_un from "@/public/logos/facebook.png";
import logo_deux from "@/public/logos/instagram.png";
import logo_trois from "@/public/logos/youtube.png";
import logo_quatre from "@/public/logos/tiktok.png";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Définition du composant fonctionnel Events.
export default function Evenements() {
  //me permet de recuperer les elements du json allEvents
  const currentEvents = allEvents;
  const pathname = usePathname;
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
      <div className={`row ${styles.affichage_img}`}>
        {/* Mapping sur la liste d'événements pour les afficher */}
        {currentEvents.map((event) => (
          <div className={`mb-5 text-center ${styles.divEvent}`} key={event.id}>
            <div className={` ${styles.imgDiv} mx-auto`}>
              <Link href="/event" className={pathname === '/event'}>   
                  <Image src={event.image} alt={`Image for ${event.title}`} className={`mb-5 ${styles.imgEv}`} priority={event.priority} width="550" height="700" sizes="(max-width: 425px) 400px" />
              </Link>
            </div>
            <h2 className={`${styles.titre}`}>
                {event.title}
            </h2>
            <p className={`${styles.dateEven}`}>{event.date}</p>  
          </div>
        ))}
      </div>
    </div>
  );
}