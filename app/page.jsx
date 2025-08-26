// Importation du composant Home depuis le fichier home.jsx
import Home from './home';
// Objet metadata pour stocker les métadonnées de la page, telles que le titre et la description
// Ces métadonnées peuvent être utilisées pour améliorer le SEO de la page
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'Eglise GODISLOVECENTER',
  description: 'Nous sommes une Eglise pronant l amour de Dieu manifesté pour nous',
  openGraph: {
    title: 'Eglise GODISLOVECENTER',
    description: 'nous sommes une seule et grande famille. Nous expérimentons l amour de Dieu, car il nous aime plus que tout. Nous reconnaissons que Jésus-Christ est Dieu et qu il est mort pour nos péchés.',
    images: ['/Logos/logoGilc.png']
  }
}
export default function Page() {
  return (
       <div>
        <Home/>
       </div>
  );
}
