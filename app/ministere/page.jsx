// Importe le composant ministerePage depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/ministere' est correct.
import MinisterePage from '@/components/ministere';
// Composant fonctionnel ministere servant de wrapper ou d'interface pour le composant ministerePage.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans ministerePage si nécessaire.
export default function ministere() {
    // Rendu du composant ministerePage pour afficher le contenu de la page de ministere.
    return <MinisterePage />;
}
