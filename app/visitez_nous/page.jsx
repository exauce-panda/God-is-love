// Importe le composant visitez_nousPage depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/visitez_nous' est correct.
import Visitez_nousPage from '@/components/visitez_nous';
// Composant fonctionnel visitez_nous servant de wrapper ou d'interface pour le composant visitez_nousPage.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans visitez_nousPage si nécessaire.
export default function visitez_nous() {
    // Rendu du composant visitez_nousPage pour afficher le contenu de la page de visitez_nous.
    return <Visitez_nousPage />;
}
