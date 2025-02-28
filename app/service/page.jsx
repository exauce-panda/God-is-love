// Importe le composant Services depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/service' est correct.
import Services from '@/components/service';
// Composant fonctionnel service servant de wrapper ou d'interface pour le composant Services.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans Services si nécessaire.
export default function service() {
    // Rendu du composant Services pour afficher le contenu de la page de service.
    return <Services />;
}