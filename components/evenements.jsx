'use client' // Indique que ce composant s'exécute uniquement côté client.
import { useState } from 'react'; // Importation du hook d'état de React.
import Image from 'next/image'; // Importation du composant Image de Next.js pour l'optimisation des images.
import allEvents from '@/public/evenData/allEvents.json'; // Importation des données des événements depuis un fichier JSON local.
import styles from "@/components/evenements.module.css"

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
    <div className={`text-black container py-5`}>
      <div className={`${styles.top}`}>NOS EVEMENTS ACTUELLE ET A VENIR</div>
      <div className={`text-black ${styles.sous_top}`}>N'hesitez pas à nous suivre sur les reseaux pour etre tout le temp à l'affut des futurs evenenment</div>
      <div className={styles.line_un}></div>
      <div className="row">
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
      <div className={styles.line}></div>
    </div>
  );
}