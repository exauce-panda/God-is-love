// Importe le composant NosEglises depuis le dossier des composants.
// Assurez-vous que le chemin d'importation '@/components/nos_eglises' est correct.
import NosEglises from '@/components/nos_eglises';
// Composant fonctionnel nos_eglises servant de wrapper ou d'interface pour le composant NosEglises.
// Ce composant pourrait être utilisé pour injecter des props supplémentaires dans NosEglises si nécessaire.
export default function nos_eglises() {
    // Rendu du composant NosEglises pour afficher le contenu de la page de nos_eglises.
    return <NosEglises />;
}
