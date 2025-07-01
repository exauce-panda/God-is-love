'use client' // Indique que ce composant s'exécute uniquement côté client.
import { useState } from 'react'; // Importation du hook d'état de React.
import Image from 'next/image'; // Importation du composant Image de Next.js pour l'optimisation des images.
import allEvents from '@/public/evenData/allEvents.json'; // Importation des données des événements depuis un fichier JSON local.
import styles from "@/components/evenements.module.css";
import { EB_Garamond } from 'next/font/google';
import logo_un from "@/public/logos/facebook.png";
import logo_deux from "@/public/logos/instagram.png";
import logo_trois from "@/public/logos/youtube.png";
import logo_quatre from "@/public/logos/tiktok.png";

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})

// Définition du composant fonctionnel Events.
export default function evenements() {
  // Hook d'état pour contrôler la pagination.
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4; // Définit le nombre d'événements à afficher par page.

  // Calcul pour déterminer quels événements afficher sur la page actuelle.
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = allEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Calcul du nombre total de pages nécessaires.
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);

  return (
    <div className={styles.bob}>
      <div className={`${styles.top}`}>Nos evenements actuelle et a venir</div>
      <div className={styles.sous_top}>N'hesitez pas a nous suivre sur nos reseaux pour etre au courant des futurs annonces</div>
              <div>
                <div className={styles.lien}>
                <a className={styles.sousLien} href="https://www.facebook.com/Godislovecenter?locale=fr_CA" target="_blank">
                <Image src={logo_un} alt="logo facebook" width={60} height={60} /> <div className={`d-flex align-items-center`}>FaceBook</div>
                </a>
                <a className={styles.sousLien} href="https://www.instagram.com/god_is_lovecenter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <Image src={logo_deux} alt="logo instagram" width={60} height={60} /> <div className={`d-flex align-items-center`}>Instagram</div>
                </a>
                <a className={styles.sousLien} href="https://youtube.com/@gilctv4549?si=l13vyKqNc89xk2_T" target="_blank">
                <Image src={logo_trois} alt="logo youtube" width={60} height={60} /> <div className={`d-flex align-items-center`}>Youtube</div>
                </a>
                <a className={styles.sousLien} href="https://www.tiktok.com/@gilc_ottawa?_t=ZM-8so4Bh7Mcx4&_r=1" target="_blank">
                <Image src={logo_quatre} alt="logo TIKTOK" width={60} height={60} /> <div className={`d-flex align-items-center`}>TikTok</div>
                </a>
                </div>
        </div>
      <div className={`row ${styles.affichage_img}`}>
        {/* Mapping sur la liste d'événements pour les afficher */}
        {currentEvents.map((event) => (
          <div className={`col-sm-6 mb-5 text-center ${styles.divEvent}`} key={event.id}>
            <div className={` ${styles.imgDiv} mx-auto`}>
                  <Image src={event.image} alt={`Image for ${event.title}`} className={`mb-5 ${styles.imgEv}`} priority={event.priority} width="550" height="700" sizes="(max-width: 425px) 400px"  />
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