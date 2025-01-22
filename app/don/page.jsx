// Importe le composant DonPage depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/don' est correct.
import DonPage from '@/components/don';
// Composant fonctionnel don servant de wrapper ou d'interface pour le composant DonPage.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dant DonPage si nécessaire.
export default function don() {
    // Rendu du composant DonPage pour afficher le contenu de la page de don.
    return <DonPage />;
}
