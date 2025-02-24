// decisionTree.js

const decisionTree = {

version: '3.0',

//COPIER COLLER CI DESSOUS

debut: {
  question: "Bonjour et bienvenue ! Cet assistant a été conçu pour vous aider à diagnostiquer rapidement des problèmes liés à la recharge de votre véhicule.",
  isEndpoint: false,
  input: false,
  options: {
    "Commencer": "q_immat" }  },





q_immat: {
  question: "Quelle est l'immatriculation de votre véhicule ?",
  isEndpoint: false,
  input: true,
  options: {
    "Suite": "q_borne" }  },





q_borne: {
  question: "Quelle est l'identifiant de votre borne ?",
  isEndpoint: false,
  input: true,
  options: {
    "Suite": "q_conducteur_ou_gestionnaire" }  },





q_conducteur_ou_gestionnaire: {
  question: "Etes-vous conducteur ou gestionnaire de parc?",
  isEndpoint: false,
  input: false,
  options: {
    "Conducteur": "q_probleme_conducteur",
    "Gestionnaire de parc": "q_debut_ou_fin_tournee" }  },




q_probleme_conducteur: {
  question: "Quel type de problème rencontrez vous?",
  isEndpoint: false,
  input: false,
  options: {
    "Je démarre ma tournée et mon camion n'est pas chargé à 100%": "q_couleur_LED",
    "J'ai un message d'erreur de recharge au tableau de bord": "q_couleur_LED",
    "La charge de démarre pas": "q_couleur_LED",
    "La charge est anormalement lente": "q_temps_charge" }  },


q_couleur_LED: {
  question: "Quelle est la couleur des LED au niveau de la prise sur le camion?",
  isEndpoint: false,
  input: false,
  options: {
    "Vert fixe": "FIN_charge_ok",
    "Vert clignotant": "camion_en_charge",
    "Jaune": "q_badge",
    "Rouge fixe": "debrancher_rebrancher",
    "Rouge clignotant": "q_frein" }  },

FIN_charge_ok: {
  question: "Votre camion est chargé. Bonne route !",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





camion_en_charge: {
  question: "Votre camion est en cours de charge.",
  isEndpoint: false,
  input: false,
  options: {
    "Suite": "q_temps_charge" }  },





q_temps_charge: {
  question: "Vérifier au tableau de bord le temps restant avant fin de charge. Le temps affiché est-il conforme à la grille fournie par Renault Trucks ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_ca_charge_bien",
    "Non": "q_probleme_recurrent" }  },




q_badge: {
  question: "Habituellement, utilisez-vous un badge pour vous recharger ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_comportement_badge",
    "Non": "debrancher_rebrancher" }  },




q_comportement_badge: {
  question: "Quand vous avez badgé, avez-vous relevé une erreur / un comportement anormal ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_defaut_badge",
    "Non": "debrancher_rebrancher" }  },




debrancher_rebrancher: {
  question: "Débrancher  les câbles des 2 côtés, réinitialiser le camion (interrupteur châsis ou clé) et rebancher",
  isEndpoint: false,
  input: false,
  options: {
    "Suite": "q_vert_clignotant" }  },





FIN_defaut_badge: {
  question: "Le défaut semble lié à un problème d'authentification. Prévenez votre gestionnaire de parc afin qu'il contacte le prestataire de borne.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





q_vert_clignotant: {
  question: "Les LED camion ont-elle basculé en vert clignotant ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "camion_en_charge",
    "Non": "decrire_probleme" }  },




decrire_probleme: {
  question: "Décrivez-nous les éventuels messages d'erreur ou voyants affichés sur la borne.",
  isEndpoint: false,
  input: true,
  options: {
    "Suite": "FIN_prevenir_gestionnaire" }  },





FIN_prevenir_gestionnaire: {
  question: "Nous avons bien pris note de votre problème. Alertez votre gestionnaire de parc.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





FIN_ca_charge_bien: {
  question: "Rassurez-vous : la vitesse de charge de votre véhicule est conforme. Bonne route !",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





q_probleme_recurrent: {
  question: "Avez-vous déjà rencontré ce problème ?",
  isEndpoint: true,
  input: false,
  options: {
    "Oui": "FIN_prevenir_gestionnaire",
    "Non": "FIN_prevenir_gestionnaire" }  },




q_frein: {
  question: "Les conditions initiales à la recharge ne semblent pas remplies. Le frein de parc est-il enclenché ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_cabine",
    "Non": "enclenchez_frein" }  },




enclenchez_frein: {
  question: "Enclenchez le frein de parc et relancez le processus de charge.",
  isEndpoint: false,
  input: false,
  options: {
    "Suite": "q_couleur_LED" }  },





q_cabine: {
  question: "La cabine est-elle verrouillée ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "deverrouillez_cabine",
    "Non": "q_interrupteur" }  },




deverrouillez_cabine: {
  question: "Déverrouillez la cabine et relancez le processus de charge.",
  isEndpoint: false,
  input: false,
  options: {
    "Suite": "q_couleur_LED" }  },





q_interrupteur: {
  question: "L'interrupteur châssis est-il baissé ? ",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_prevenir_gestionnaire",
    "Non": "q_couleur_LED" }  },




q_debut_ou_fin_tournee: {
  question: "Le camion est-il en début ou en fin de tournée ?",
  isEndpoint: false,
  input: false,
  options: {
    "Début de tournée": "q_charge_suffisante",
    "Fin de tournée": "q_probleme_gestionnaire" }  },




q_charge_suffisante: {
  question: "Le camion est-il suffisamment chargé pour assurer sa tournée ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_effectuer_tournee",
    "Non": "FIN_cas_non_prevu" }  },




q_chargeur_DC: {
  question: "Avez-vous accès à une borne DC >100kw au dépôt ou à proximité ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "tester_charge_DC",
    "Non": "FIN_cas_non_prevu" }  },




tester_charge_DC: {
  question: "Tester la charge sur la borne DC. Les LED au niveau du camion sont-elles vert clignotant ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_cas_non_prevu",
    "Non": "FIN_prevenir_concession" }  },




FIN_prevenir_concession: {
  question: "Le problème semble venir du camion. Contactez votre concessionnaire",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





FIN_effectuer_tournee: {
  question: "La tournée peut être assurée mais des vérifications complémentaires devront être faites au retour du véhicule. Bonne route !",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





q_probleme_gestionnaire: {
  question: "Quel est le problème rencontré ?",
  isEndpoint: false,
  input: false,
  options: {
    "Charge lente : le temps de charge restant n'est pas conforme à la grille fournie par Renault Trucks": "q_regulation",
    "Voyant rouge. Le véhicule ne charge pas.": "debrancher_et_reinitialisation" }  },




debrancher_et_reinitialisation: {
  question: "Débrancher  les câbles des 2 côtés, réinitialiser le camion (interrupteur châsis ou clé) et rebancher. Les LED camion ont-elle basculé en vert clignotant ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "attendre_une_minute",
    "Non": "q_essayer_autre_cable" }  },




attendre_une_minute: {
  question: "Attendre au moins 1 minute. Vérifier que le connecteur est verrouillé au niveau du véhicule et appuyer sur le bouton STOP à proximité du connecteur recharge.",
  isEndpoint: false,
  input: false,
  options: {
    "Suite": "q_fin_de_session_de_charge" }  },





q_fin_de_session_de_charge: {
  question: "Constater la fin de la session de charge (extinction de la LED côté véhicule). Attendre une minute.",
  isEndpoint: false,
  input: false,
  options: {
    "Suite": "q_couleur_apres_fin_session" }  },





FIN_cas_non_prevu: {
  question: "Ce cas n'est pas encore prévu dans cette maquette",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





q_couleur_apres_fin_session: {
  question: "Quelle est la couleur des LED côté camion maintenant que la session de charge est finie ?",
  isEndpoint: false,
  input: false,
  options: {
    "Verte": "FIN_tout_ok",
    "Autre couleur": "FIN_probleme_borne" }  },




FIN_tout_ok: {
  question: "Tout est OK, bonne route!",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





q_essayer_autre_cable: {
  question: "Faire un nouvel essai en utilisant un autre câble. Quelle est la couleur des LED côté camion ?",
  isEndpoint: false,
  input: false,
  options: {
    "Vert clignotant": "FIN_changer_le_cable",
    "Rouge": "q_essayer_autre_borne",
    "Je n'ai pas d'autre câble pour tester.": "q_essayer_autre_borne" }  },



FIN_changer_le_cable: {
  question: "Le câble du véhicule semble défectueux. Commander un nouveau câble.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





q_essayer_autre_borne: {
  question: "Faire un nouvel essai en branchant le véhicule sur une autre borne AC. Quelle est la couleur des LED côté camion ?",
  isEndpoint: false,
  input: false,
  options: {
    "Vert clignotant": "q_reinit_borne",
    "Rouge": "FIN_prevenir_concession" }  },




q_reinit_borne: {
  question: "Le problème semble venir de la première borne. Avez-vous la possibilité de la réinitialiser? (Via la supervision ou le tableau électrique)",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "reinit_borne",
    "Non": "FIN_probleme_borne" }  },




reinit_borne: {
  question: "Réinitialiser la borne. Quelle est la couleur des LED côté camion ?",
  isEndpoint: false,
  input: false,
  options: {
    "Vert clignotant": "FIN_tout_ok",
    "Rouge": "FIN_probleme_borne" }  },




FIN_probleme_borne: {
  question: "La fonction Wakeup semble défectueuse. Contactez votre partenaire de recharge.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },





q_regulation: {
  question: "Avez-vous connaissance de fonctionnalités de régulation de la charge ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_cas_non_prevu",
    "Non": "FIN_cas_non_prevu" }  }


        };

export default decisionTree;