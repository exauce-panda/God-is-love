'use client'
import styles from "./menuNav.module.css"
import Image from "next/legacy/image";
import logo from "@/public/logoGilc.png"
export default function menuNav() {
    return(
        <div className={styles.bob}>
        <nav className={styles.nav}>
            <div className={styles.image}>
                <Image src={logo} alt="logo GILC" width={90} height={90} />
            </div>
            <ul className={styles.navigation}>
                <li>Acceuil</li>
                <li>Notre ministere</li>
                <li>Predications</li>
                <li>Evenements</li>
                <li>Don</li>
                <li>Visitez-nous</li>
            </ul>
        </nav>
        </div>
    );
}