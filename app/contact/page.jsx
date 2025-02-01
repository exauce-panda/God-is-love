// Importe le composant Contact depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/don' est correct.
import Contact from '@/components/contact';
// Composant fonctionnel don servant de wrapper ou d'interface pour le composant Contact.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dant Contact si nécessaire.
export default function contact() {
    // Rendu du composant Contact pour afficher le contenu de la page de don.
    return <Contact />;
}
