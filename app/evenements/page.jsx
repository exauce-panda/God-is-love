// Importe le composant evenementsPage depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/evenements' est correct.
import EventsPage from '@/components/evenements';
// Composant fonctionnel evenements servant de wrapper ou d'interface pour le composant evenementsPage.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans evenementsPage si nécessaire.
export default function evenements() {
    // Rendu du composant evenementsPage pour afficher le contenu de la page de evenements.
    return <EventsPage/>;
}
