// Importe le composant ComiteSocial depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/don' est correct.
import ComiteSocial from '@/components/ComiteSocial.jsx';
// Composant fonctionnel don servant de wrapper ou d'interface pour le composant ComiteSocial.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dant ComiteSocial si nécessaire.
export default function comiteSocial() {
    // Rendu du composant ComiteSocial pour afficher le contenu de la page de don.
    return <ComiteSocial />;
}