'use client'
import styles from "./menuNav.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function MenuNav() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    // Ferme le menu après clic sur un lien
    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles.bob}>
            {/* Bouton burger mobile */}
           <button
            className={`${styles.burger} ${isOpen ? styles.open : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu">
           <span></span>
           <span></span>
           <span></span>
           </button>

            {/* Menu navigation */}
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <ul className={styles.navigation}>
                    <li className={styles.lien}>
                        <Link href="/" onClick={handleLinkClick} className={pathname === '/' ? styles.test : ''}>Accueil</Link>
                        <div className={styles.ligne}></div>
                    </li>
                    <li className={styles.lien}>
                        <Link href="/don" onClick={handleLinkClick} className={pathname === '/don' ? styles.test : ''}>Don</Link>
                        <div className={styles.ligne}></div>
                    </li>
                    <li className={styles.lien}>
                        <Link href="/evenements" onClick={handleLinkClick} className={pathname === '/evenements' ? styles.test : ''}>Événements</Link>
                        <div className={styles.ligne}></div>
                    </li>
                    <li className={styles.lien}>
                        <Link href="/nos_eglises" onClick={handleLinkClick} className={pathname === '/nos_eglises' ? styles.test : ''}>Nos Églises</Link>
                        <div className={styles.ligne}></div>
                    </li>
                    <li className={styles.lien}>
                        <Link href="/service" onClick={handleLinkClick} className={pathname === '/service' ? styles.test : ''}>Servir</Link>
                        <div className={styles.ligne}></div>
                    </li>
                    <li className={styles.lien}>
                        <Link href="/contact" onClick={handleLinkClick} className={pathname === '/contact' ? styles.test : ''}>Contactez-nous</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
