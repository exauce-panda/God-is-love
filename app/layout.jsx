import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./layout.module.css";
import { Lexend } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-lexend', // optionnel pour CSS variable
})

export const metadata = {
  title: "Eglis God is love center",
  description: "nous sommes une église qui expérimente l'amour de Dieu, car il nous aime plus que tout. ",
  icons: {
    icon:"/favicon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${lexend.className} d-flex flex-column`}>
      <div className={styles.principal}>
          <Header /> {/* Inclusion de l'entête */}
          <main className={`${styles.bob} container-fluid flex-grow-1 min-vh-100`}>{/* le flex grow a 1 permet de garder le footer en bas de la page, il faut que le body soit en d-flex et flex column */}
            {children} {/* Affiche le contenu enfant passé au composant Layout */}
          </main>
          <Footer /> {/* Inclusion du pied de page */}
        </div>
      </body>
    </html>
  );
}
