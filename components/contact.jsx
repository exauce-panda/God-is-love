'use client'
// Assure que ce composant s'exécute uniquement côté client, permettant l'accès à des APIs telles que localStorage.
import { useState } from 'react'; // Importe useState de React pour créer des états locaux.
import styles from './contact.module.css'; // Importe les styles spécifiques au composant Contact.
//import { EB_Garamond } from 'next/font/google';

/*const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'], // facultatif
  variable: '--font-eb-garamond', // optionnel pour CSS variable
})*/
//import emailjs from '@emailjs/browser';
export default function Contact() {
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
       //emailjs.sendForm("service_f9b84ft","template_54sxywe",e.target,"eYc5_rW7DCei_jHAY");
    };
    return (
        <div className={`${styles.bob} text-white`}>
            <div>g</div> {/*a corriger pour je ne sais quel raison la bar noir disparait uniquement si il y'a un ecrit ici*/}
            <div className={`${styles.pageContact} container`}>
                {/* Affichage conditionnel du message de succès */}
                {showSuccessMessage && (
                    <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1050 }}>
                        Votre message a été soumis avec succès.
                    </div>
                )}
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="text-black p-4 rounded">
                            <h2 className={`mb-5 h1`}>Envoyez-nous un message</h2>
                            <form onSubmit={handleSubmit}>
                                {/* Champs du formulaire avec gestion des erreurs */}
                                <div className={`mb-3 ${styles.forumId}`}>
                                    <label htmlFor="nom" className={`form-label h4 ${styles.text_color}`}>Nom</label>
                                    <input name="nom_mail" type="text" className={`form-control text-black bg-white ${errorNom ? 'is-invalid' : ''}`} id="nom" value={nom} onChange={(e) => { setNom(e.target.value); validateField('nom', e.target.value); }} />
                                    {errorNom && <div className="invalid-feedback">{errorNom}</div>}
                                </div>
                                <div className={`mb-3 ${styles.forumId}`}>
                                    <label htmlFor="email" className={`form-label h4 ${styles.text_color}`}>Adresse e-mail</label>
                                    <input name="email_mail" type="email" className={`form-control text-black bg-white ${errorEmail ? 'is-invalid' : ''}`} id="email" value={email} onChange={(e) => { setEmail(e.target.value); validateField('email', e.target.value); }} />
                                    {errorEmail && <div className="invalid-feedback">{errorEmail}</div>}
                                </div>
                                <div className={`mb-3 ${styles.forumMessage}`}>
                                    <label htmlFor="message" className={`form-label h4 ${styles.text_color}`}>Message</label>
                                    <textarea name="message_mail" className={`form-control bg-white ${errorMessage ? 'is-invalid' : ''}`} id="message" rows="5" value={message} onChange={(e) => { setMessage(e.target.value); validateField('message', e.target.value); }}></textarea>
                                    {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
                                </div>
                                <button type="submit" className={`${styles.btn_envoyer}`}>Envoyer</button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="col-md-6 d-flex">
                        {/* Informations de contact */}
                        <div className={styles.line}></div>
                       <div className={styles.coordonee}>
                            <p className={`h4 ${styles.text_color}`}>Vous pouvez nous joindre avec ces coordonées :</p>
                            <ul>
                                <li>Téléphone : (613) 291-7607</li>
                                <li>Email : godislovecenter@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
