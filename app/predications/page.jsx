// Importe le composant predicationsPage depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/predications' est correct.
import PredicationsPage from '@/components/predications';
// Composant fonctionnel predications servant de wrapper ou d'interface pour le composant predicationsPage.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans predicationsPage si nécessaire.
export default function predications() {
    // Rendu du composant predicationsPage pour afficher le contenu de la page de predications.
    return <PredicationsPage />;
}
