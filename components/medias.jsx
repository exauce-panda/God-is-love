'use client'
// Assure que ce composant s'exécute uniquement côté client, permettant l'accès à des APIs telles que localStorage.
import { useState } from 'react'; // Importe useState de React pour créer des états locaux.
import styles from './medias.module.css'; // Importe les styles spécifiques au composant Media.
//import emailjs from '@emailjs/browser';
export default function Medias() {
   // Déclaration des états pour stocker les valeurs des champs du formulaire et les Messages d'erreur/validation.
   const [nom, setNom] = useState('');
   const [email, setEmail] = useState('');
   const [telephone, setTelephone] = useState('');
   const [errorNom, setErrorNom] = useState('');
   const [errorEmail, setErrorEmail] = useState('');
   const [errorTelephone, setErrorTelephone] = useState('');
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   // Fonction pour valider l'adresse email à l'aide d'une expression régulière.
   const validateEmail = (email) => {
       return email.match(
           /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
       );
   };
   //verifier si le numero est valide
   const validateTelephone = (value) => {
       if (value.length > 12 && value.length < 8) {
           setErrorTelephone("Veuillez entrer un numero de Telephone valide.");
       } else {
           setErrorTelephone("");
           return true;
       }
   };
   // Fonction pour valider chaque champ du formulaire en temps réel.
   // Utilise une instruction switch pour gérer la logique de validation en fonction du champ spécifié.
   const validateField = (field, value) => {
       switch (field) {
           case 'nom':
               setErrorNom(value ? '' : 'Veuillez entrer un nom.'); // Définit ou efface le Message d'erreur pour le champ nom.
               break;
           case 'email':
               setErrorEmail(value && validateEmail(value) ? '' : 'Veuillez entrer une adresse e-mail valide.'); // Définit ou efface le Message d'erreur pour le champ email.
               break;
           case 'telephone':
               setErrorTelephone(value && validateTelephone(value) ? '' : 'Veuillez entrer un numero de Telephone valide.'); // Définit ou efface le Message d'erreur pour le champ Telephone.
               break;
           default:
               break;
       }
   };
   // Gère la soumission du formulaire.
   // Vérifie que tous les champs sont correctement remplis avant de simuler l'envoi du formulaire.
   const handleSubmit = (e) => {
       e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la pTelephone).
       if (nom && email && telephone && validateEmail(email)) {
           console.log('Form submitted', { nom, email, telephone }); // Simule l'envoi du formulaire avec les valeurs des champs.
           setShowSuccessMessage(true); // Affiche le Message de succès.
           // Réinitialise les champs du formulaire.
           setNom('');
           setEmail('');
           setTelephone('');
           // Cache le Message de succès après 5 secondes.
           setTimeout(() => setShowSuccessMessage(false), 5000);
       } else {
           // Valide à nouveau chaque champ pour s'assurer que les Messages d'erreur sont affichés si nécessaire.
           validateField('nom', nom);
           validateField('email', email);
           validateTelephone(telephone);
       }
      //emailjs.sendForm("service_f9b84ft","template_54sxywe",e.target,"eYc5_rW7DCei_jHAY");
   };
   return (
       <div className={`${styles.bob} text-white`}>
           <div>g</div> {/*a corriger pour je ne sais quel raison la bar noir disparait uniquement si il y'a un ecrit ici*/}
           <div className={`${styles.pTelephoneMusique} container`}>
               {/* AffichTelephone conditionnel du Message de succès */}
               {showSuccessMessage && (
                   <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1050 }}>
                       Votre Message a été soumis avec succès.
                   </div>
               )}
               <div className="row mt-5">
                   <div className="col-md-6">
                       <div className="text-black p-4 rounded">
                           <h2 className='mb-5'>Veillez entrez vos coordonnées</h2>
                           <form onSubmit={handleSubmit}>
                               {/* Champs du formulaire avec gestion des erreurs */}
                               <div className={`mb-3 ${styles.forumId}`}>
                                   <label htmlFor="nom" className={`form-label ${styles.text_color}`}>Nom</label>
                                   <input name="nom_mail" type="text" className={`form-control text-black bg-white ${errorNom ? 'is-invalid' : ''}`} id="nom" value={nom} onChange={(e) => { setNom(e.target.value); validateField('nom', e.target.value); }} />
                                   {errorNom && <div className="invalid-feedback">{errorNom}</div>}
                               </div>
                               <div className={`mb-3 ${styles.forumId}`}>
                                   <label htmlFor="email" className={`form-label ${styles.text_color}`}>Adresse e-mail</label>
                                   <input name="email_mail" type="email" className={`form-control text-black bg-white ${errorEmail ? 'is-invalid' : ''}`} id="email" value={email} onChange={(e) => { setEmail(e.target.value); validateField('email', e.target.value); }} />
                                   {errorEmail && <div className="invalid-feedback">{errorEmail}</div>}
                               </div>
                               <div className={`mb-3 ${styles.forumId}`}>
                                   <label htmlFor="telephone" className={`form-label ${styles.text_color}`}>Telephone</label>
                                   <input name="num_telephone" type="number" className={`form-control text-black bg-white ${errorTelephone ? 'is-invalid' : ''}`} id="telephone" value={telephone} onChange={(e) => { const valeur = e.target.value; setTelephone(valeur); validateTelephone(valeur); }} />
                                   {errorTelephone && <div className="invalid-feedback">{errorTelephone}</div>}
                               </div>
                               <button type="submit" className={`${styles.btn_envoyer}`}>Envoyer</button>
                           </form>
                       </div>
                   </div>
                   <div className="col-md-6 d-flex">
                   <div className={styles.line_un}></div>
                       {/* Informations de Musique */}
                       <div className={`${styles.desc}`}>
                       description  description  description  description  description  description  description  description  description  description  description  description  description  description  description  description  description  description  
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
}