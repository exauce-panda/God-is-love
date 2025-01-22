'use client' // Indique que ce fichier doit être exécuté uniquement côté client
import Image from "next/image";
import Description from "@/components/Description";
import styles from "./page.module.css";
import { useRouter } from "next/navigation" // Importation du hook useRouter de Next.js pour la navigation

export default function Home() {
     // Utilisation du hook useRouter pour accéder à l'instance du routeur
  const router = useRouter();
  return (
       <div>
        <div>
        <Description/>
        </div>
       </div>
  );
}
