// decisionTree.js

const decisionTree = {

version: '3.0',

debut: {
  question: "<b>DIAGPLUS</b><br/><br/>Bonjour et bienvenue ! Cet assistant a été conçu pour vous aider à diagnostiquer rapidement des problèmes liés à la recharge de votre véhicule.",
  isEndpoint: false,
  input: false,
  options: {
    "Commencer": "q_depot" }  },






q_depot: {
  question: "Quel est le dépôt concerné?",
  isEndpoint: false,
  input: true,
  options: {
    "Suite": "q_immat" }  },






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
    "La recharge démarre mais j'ai un doute sur le temps de recharge": "q_temps_charge" }  },



q_couleur_LED: {
  question: "Quelle est la couleur des LED au niveau de la prise sur le camion?",
  isEndpoint: false,
  input: false,
  options: {
    "Vert fixe": "q_SOC",
    "Vert clignotant": "q_alerte_tableau_de_bord",
    "Jaune fixe": "q_STOP",
    "Jaune clignotant": "attendre_fin_init",
    "Rouge fixe": "q_borne_alimentée",
    "Rouge clignotant": "q_frein" }  },

q_temps_charge: {
  question: "Vérifier au tableau de bord le temps restant avant fin de charge. Le temps affiché est-il conforme à la grille fournie par Renault Trucks ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_ca_charge_bien",
    "Non": "q_probleme_recurrent" }  },





q_SOC: {
  question: "Quel est l'état de charge du véhicule (SOC) ?",
  isEndpoint: false,
  input: false,
  options: {
    "Supérieur ou égal à 95%": "FIN_charge_ok",
    "Inférieur à 95%": "q_borne_validee" }  },





q_alerte_tableau_de_bord: {
  question: "Après 15s, vous une information au tableau de bord du véhicule concernant le temps avant fin de recharge ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_temps_charge",
    "Non": "debrancher_rebrancher" }  },





q_STOP: {
  question: "Le bouton STOP a-t-il été actionné?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_badge",
    "Non": "debrancher_rebrancher" }  },





attendre_fin_init: {
  question: "La phase d'initialisation est en cours. Attendez la fin.",
  isEndpoint: false,
  input: false,
  options: {
    "Initialisation terminée": "q_couleur_LED" }  },






q_borne_alimentée: {
  question: "Est ce que la borne est alimentée ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_borne_anomalie",
    "Non": "FIN_prevenir_gestionnaire_borne" }  },





q_frein: {
  question: "Les conditions initiales à la recharge ne semblent pas remplies. Le frein de parc est-il enclenché ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_cabine",
    "Non": "FIN_enclenchez_frein" }  },





FIN_ca_charge_bien: {
  question: "Rassurez-vous : la vitesse de charge de votre véhicule est conforme. Bonne route !",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






q_probleme_recurrent: {
  question: "Avez-vous déjà rencontré le même problème auparavant ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_prevenir_gestionnaire_complexe",
    "Non": "FIN_prevenir_gestionnaire_complexe" }  },





FIN_charge_ok: {
  question: "La recharge semble terminée. Bonne route!",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






q_borne_validee: {
  question: "La borne est elle validée par les services Renault Trucks France (WakeUp) ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_temps_charge",
    "Non": "FIN_pas_de_wakeup" }  },





debrancher_rebrancher: {
  question: "Débrancher  les câbles des 2 côtés, réinitialiser le camion (interrupteur châssis ou clé) et rebrancher",
  isEndpoint: false,
  input: false,
  options: {
    "Suite": "q_vert_clignotant" }  },






q_borne_anomalie: {
  question: "Quand vous avez badgé, avez-vous relevé une erreur / un comportement anormal sur la borne ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_prevenir_gestionnaire_borne",
    "Non": "debrancher_rebrancher" }  },





FIN_prevenir_gestionnaire_VI: {
  question: "Nous avons bien pris note de votre problème. <br/><br/>Alertez votre gestionnaire de parc. Signalez que le problème concerne probablement le véhicule. Donnez lui une copie de ce compte-rendu.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






FIN_prevenir_gestionnaire_borne: {
  question: "Nous avons bien pris note de votre problème. <br/><br/>Alertez votre gestionnaire de parc. Signalez que le problème concerne probablement la borne. Donnez lui une copie de ce compte-rendu.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






FIN_prevenir_gestionnaire_complexe: {
  question: "Nous avons bien pris note de votre problème. <br/><br/>Alertez votre gestionnaire de parc. Signalez que le problème est complexe. Donnez lui une copie de ce compte-rendu.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






q_cabine: {
  question: "La cabine est-elle verrouillée ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_deverrouillez_cabine",
    "Non": "q_gamme" }  },





FIN_enclenchez_frein: {
  question: "Enclenchez le frein de parc et relancez le processus de charge.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






FIN_pas_de_wakeup: {
  question: "Votre borne de recharge n'est peut-être pas équipée de la fonction wakeup qui permet de maintenir le véhicule à 100%",
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
    "Non": "FIN_prevenir_gestionnaire_complexe" }  },





FIN_deverrouillez_cabine: {
  question: "Déverrouillez la cabine et relancez le processus de charge.",
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






q_badge: {
  question: "Habituellement, utilisez-vous un badge pour vous recharger ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_comportement_badge",
    "Non": "q_LED_clignotante_vert_avant" }  },





q_comportement_badge: {
  question: "Quand vous avez badgé, avez-vous relevé une erreur / un comportement anormal ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_defaut_badge",
    "Non": "debrancher_rebrancher" }  },





q_LED_clignotante_vert_avant: {
  question: "Avez vous vu les LED coté camion clignoter en vert avant cette situation ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_probleme_recurrent",
    "Non": "decrire_probleme" }  },





FIN_defaut_badge: {
  question: "Le défaut semble lié à un problème d'authentification. Prévenez votre gestionnaire de parc afin qu'il contacte le prestataire de borne.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






decrire_probleme: {
  question: "Décrivez-nous les éventuels messages d'erreur ou voyants affichés sur la borne.",
  isEndpoint: false,
  input: true,
  options: {
    "Suite": "FIN_prevenir_gestionnaire_complexe" }  },






q_gamme: {
  question: "Quel est votre modèle de camion?",
  isEndpoint: false,
  input: false,
  options: {
    "Renault Trucks T, C, K": "q_interrupteur",
    "Renault Trucks D": "FIN_prevenir_gestionnaire_VI" }  },





q_interrupteur: {
  question: "L'interrupteur châssis est-il baissé ? ",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_prevenir_gestionnaire_VI",
    "Non": "FIN_interrupteur" }  },





FIN_interrupteur: {
  question: "Baissez l'interrupteur châssis et relancez le processus de charge",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






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
    "Non": "q_chargeur_DC" }  },





q_chargeur_DC: {
  question: "Avez-vous accès à une borne DC >100kw au dépôt ou à proximité ?<br/><br/><a href='https://tinyurl.com/ChargingMapTrucks'  target='_blank'>Carte des bornes</a>",
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
    "Oui": "FIN_effectuer_tournee",
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
    "Un de mes conducteurs me signale un doute à lever au niveau d'une borne de recharge.": "q_badge_different",
    "Un de mes conducteurs me signale un doute à lever au niveau d'un véhicule": "q_doute_vehicule",
    "Un de mes conducteurs me signale un problème complexe.": "FIN_gestionnaire_flotte",
    "Charge lente : le temps de charge restant n'est pas conforme à la grille fournie par Renault Trucks": "q_regulation",
    "Voyant rouge. Le véhicule ne charge pas.": "debrancher_et_reinitialisation" }  },


q_regulation: {
  question: "Avez-vous connaissance de fonctionnalités de régulation de la charge ?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "tester_puissance_max",
    "Non": "q_doute_vehicule" }  },





q_doute_vehicule: {
  question: "Le défaut est-il reproductible à votre dépôt avec une configuration borne / camion identique?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_prevenir_concession",
    "Non": "FIN_gestionnaire_flotte" }  },





FIN_gestionnaire_flotte: {
  question: "Le cas que vous rencontrez est un problème complexe qui nécessite une analyse spécifique, hors des cas prévus dans ce guide.<br/><br/>Contactez le gestionnaire de flotte.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






tester_puissance_max: {
  question: "Tester la recharge à un moment non régulé ou forcer la puissance maximum des installations.<br/><br/>Le temps de recharge est-il revenu à la normal?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_reglage_puissance",
    "Non": "q_doute_vehicule" }  },





FIN_reglage_puissance: {
  question: "Pas de défaut matériel identifié ; il faut valider le réglage de la puissance disponible. ",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






debrancher_et_reinitialisation: {
  question: "Débrancher  les câbles des 2 côtés, réinitialiser le camion (interrupteur châsis ou clé) et rebancher.<br/><br/>Les LED camion ont-elle basculé en vert clignotant ?",
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
  question: "Constater la fin de la session de charge (extinction de la LED côté véhicule). Attendre une minute.<br/><br/>Quelle est la couleur des LED côté camion après que la session de charge est finie ?",
  isEndpoint: false,
  input: false,
  options: {
    "Verte": "FIN_tout_ok",
    "Jaune ou rouge": "FIN_probleme_wakeup" }  },





FIN_cas_non_prevu: {
  question: "Ce cas n'est pas encore prévu dans cette maquette;",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






FIN_tout_ok: {
  question: "Tout est OK, bonne route!",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






q_essayer_autre_cable: {
  question: "Faire un nouvel essai en utilisant un autre câble. <br/><br/>Quelle est la couleur des LED côté camion ?",
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
  question: "Faire un nouvel essai en branchant le véhicule sur une autre borne AC. <br/><br/>Quelle est la couleur des LED côté camion ?",
  isEndpoint: false,
  input: false,
  options: {
    "Vert clignotant": "q_test_temps_charge",
    "Rouge": "FIN_prevenir_concession" }  },





q_test_temps_charge: {
  question: "Vérifiez le temps de charge. Est il conforme?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_reinit_borne",
    "Non": "q_type_chargeur" }  },





q_reinit_borne: {
  question: "Le problème semble venir de la première borne. Avez-vous la possibilité de la réinitialiser? (Via la supervision ou le tableau électrique)",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "reinit_borne",
    "Non": "FIN_installation_charge" }  },





q_type_chargeur: {
  question: "Quel type de chargeur embarqué est installé sur votre camion ?",
  isEndpoint: false,
  input: false,
  options: {
    "OCEPS": "q_reinit_borne",
    "ONBC": "q_temps_charge_double" }  },





reinit_borne: {
  question: "Réinitialiser la borne. Quelle est la couleur des LED côté camion ?",
  isEndpoint: false,
  input: false,
  options: {
    "Vert clignotant": "FIN_tout_ok",
    "Rouge": "FIN_installation_charge" }  },





FIN_probleme_wakeup: {
  question: "La fonction Wakeup semble défectueuse. Contactez votre partenaire de recharge.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






FIN_installation_charge: {
  question: "La fonction Wakeup semble défectueuse. Contactez votre partenaire de recharge.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






q_temps_charge_double: {
  question: "Le temps de charge a-t-il doublé?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_prevenir_concession",
    "Non": "FIN_gestionnaire_flotte" }  },





q_badge_different: {
  question: "Si vous utilisez des badges, testez la charge avec un badge différent.<br/><br/>Le problème est-il résolu?",
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "FIN_defaut_badge_2",
    "Non": "q_autre_vehicule" }  },





FIN_defaut_badge_2: {
  question: "Problème d'autorisation ou de badge. Contactez votre prestataire de recharge.",
  isEndpoint: true,
  input: false,
  options: {
    "Recommencer": "debut" }  },






q_autre_vehicule: {
"  question: ""Tester la charge sur la même borne avec un autre véhicule.<br/><br/>Le véhicule prend-il la charge ?
"","
  isEndpoint: false,
  input: false,
  options: {
    "Oui": "q_reinit_borne",
    "Non": "FIN_installation_charge" }  }

















































































































































































































































































































































































































};

export default decisionTree;
