'use client'
// Assure que ce composant s'exécute uniquement côté client, permettant l'accès à des APIs telles que localStorage.
import { useState } from 'react'; // Importe useState de React pour créer des états locaux.
import { useRef } from 'react';
import styles from './Jeunesse.module.css'; // Importe les styles spécifiques au composant Jeunesse.
import emailjs from "@emailjs/browser";
//import { EB_Garamond } from 'next/font/google';

/*const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})*/
//import emailjs from '@emailjs/browser';
export default function Jeunesse() {
    const form = useRef();
    // Déclaration des états pour stocker les valeurs des champs du formulaire et les messages d'erreur/validation.
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorNom, setErrorNom] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // Fonction pour valider l'adresse email à l'aide d'une expression régulière.
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
        );
    };
    // Fonction pour valider chaque champ du formulaire en temps réel.
    // Utilise une instruction switch pour gérer la logique de validation en fonction du champ spécifié.
    const validateField = (field, value) => {
        switch (field) {
            case 'nom':
                setErrorNom(value ? '' : 'Veuillez entrer un nom.'); // Définit ou efface le message d'erreur pour le champ nom.
                break;
            case 'email':
                setErrorEmail(value && validateEmail(value) ? '' : 'Veuillez entrer une adresse e-mail valide.'); // Définit ou efface le message d'erreur pour le champ email.
                break;
            case 'message':
                setErrorMessage(value ? '' : 'Veuillez entrer un message.'); // Définit ou efface le message d'erreur pour le champ message.
                break;
            default:
                break;
        }
    };
    // Gère la soumission du formulaire.
    // Vérifie que tous les champs sont correctement remplis avant de simuler l'envoi du formulaire.
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page).
        if (nom && email && validateEmail(email) && message) {
            console.log('Form submitted', { nom, email, message }); // Simule l'envoi du formulaire avec les valeurs des champs.
            setShowSuccessMessage(true); // Affiche le message de succès.
            // Réinitialise les champs du formulaire.
            setNom('');
            setEmail('');
            setMessage('');
            // Cache le message de succès après 5 secondes.
            setTimeout(() => setShowSuccessMessage(false), 5000);
        } else {
            // Valide à nouveau chaque champ pour s'assurer que les messages d'erreur sont affichés si nécessaire.
            validateField('nom', nom);
            validateField('email', email);
            validateField('message', message);
        }
        //cofiguration des id pour envoi du mail
        emailjs.sendForm( "service_atwxmyi", "template_lajkevh", form.current, "HL5hjTCYUDstTT1YM")  
    };
    return (
        <div className={`${styles.bob} text-black`}>
            <h2 className={styles.titre}>Envoyez-nous un message</h2>
            <div className={`${styles.pageJeunesse} `}>
                {/* Affichage conditionnel du message de succès */}
                {showSuccessMessage && (
                    <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1050 }}>
                        Votre message a été soumis avec succès.
                    </div>
                )}
              <div>
                        {/* Informations de Jeunesse */}
                       <div className={styles.coordonee}>
                            <p className={`h4 ${styles.text_color}`}>Pour d&apos;autre questions plus global vous pouvez nous joindre avec ces coordonées :</p>
                            <ul className={styles.list}>
                                <li>Téléphone : (613) 291-7607</li>
                                <li>Email : godislovecenter@gmail.com</li>
                            </ul>
                        </div>
              </div>
                <div className={`${styles.formulaire}`}>
                    <div className={styles.style_formulaire}>
                        <div className="text-black">                          
                            <form onSubmit={handleSubmit}>
                                {/* Champs du formulaire avec gestion des erreurs */}
                                <div className={`${styles.forumId}`}>
                                    <label htmlFor="nom" className={`form-label h4 ${styles.text_color}`}>Nom</label>
                                    <input name="nom_mail" type="text" className={`${styles.form_group} ${errorNom ? 'is-invalid' : ''}`} id="nom" value={nom} onChange={(e) => { setNom(e.target.value); validateField('nom', e.target.value); }} />
                                    {errorNom && <div className="invalid-feedback">{errorNom}</div>}
                                </div>
                                <div className={`${styles.forumId}`}>
                                    <label htmlFor="email" className={`form-label h4 ${styles.text_color}`}>Adresse e-mail</label>
                                    <input name="email_mail" type="email" className={`${styles.form_group} ${errorEmail ? 'is-invalid' : ''}`} id="email" value={email} onChange={(e) => { setEmail(e.target.value); validateField('email', e.target.value); }} />
                                    {errorEmail && <div className="invalid-feedback">{errorEmail}</div>}
                                </div>
                                <div className={`${styles.forumMessage}`}>
                                    <label htmlFor="message" className={`form-label h4 ${styles.text_color}`}>Message</label>
                                    <textarea name="message_mail" className={`${errorMessage ? 'is-invalid' : ''}`} id="message" rows="5" value={message} onChange={(e) => { setMessage(e.target.value); validateField('message', e.target.value); }}></textarea>
                                    {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
                                </div>
                                <button type="submit" className={`${styles.btn_envoyer}`}>Envoyer</button>
                            </form>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    );
}
