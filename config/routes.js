/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const WarenkorbController = require("../api/controllers/WarenkorbController");

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  // 'GET /': { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?': { action: 'dashboard/view-welcome' },

  'GET /faq': { action: 'view-faq' },
  'GET /legal/terms': { action: 'legal/view-terms' },
  'GET /legal/privacy': { action: 'legal/view-privacy' },
  'GET /contact': { action: 'view-contact' },

  'GET /signup': { action: 'entrance/view-signup' },
  'GET /email/confirm': { action: 'entrance/confirm-email' },
  'GET /email/confirmed': { action: 'entrance/view-confirmed-email' },


  'GET /login': { action: 'entrance/view-login' },
  'GET /password/forgot': { action: 'entrance/view-forgot-password' },
  'GET /password/new': { action: 'entrance/view-new-password' },

  'GET /account': { action: 'account/view-account-overview' },
  'GET /account/password': { action: 'account/view-edit-password' },
  'GET /account/profile': { action: 'account/view-edit-profile' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms': '/legal/terms',
  '/logout': '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout': { action: 'account/logout' },
  'PUT   /api/v1/account/update-password': { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile': { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card': { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login': { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup': { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login': { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message': { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session': { action: 'observe-my-session', hasSocketFeatures: true },


  // Route für Kontakt Formular
  'POST /kontakt/createMessage': { action: 'kontakt/create-message' },


  'GET /shoppingbasket/artikel': { action: 'getshoppingbasket' },

  // Kontakt

  'GET /kontakt': { view: 'pages/kontakt/kontakt' },



  'GET /home': { view: 'pages/homepage' },
  'GET /layout': { view: 'layouts/layout' },

  'GET /meal': { controller: 'ArtikelController', action: 'findIndex' },
  'GET /mealedit': { controller: 'ArtikelController', action: 'findIndexedit' },
  'GET /mealdelete': { controller: 'ArtikelController', action: 'findIndexdelete' },

  'GET /anmelden': { view: 'pages/anmelden' },

  'GET /registrieren': { view: 'pages/registrieren/registriereneins' },
  'POST /registrieren': { controller: 'RegistrationsController', action: 'create' },

  'GET /service': { view: 'pages/service' },

  'GET /aboutus': { view: 'pages/aboutus' },

  'GET /artikel': { view: 'pages/artikel/artikelmenue' },

  'GET /artikelnew': { action: 'artikel/view-artikelnew' },
  'POST /artikelnew': { controller: 'ArtikelController', action: 'create' },

  'GET /artikelview': { controller: 'ArtikelController', action: 'find' },
  'GET /artikelviewlogged': { controller: 'ArtikelController', action: 'find' },

  'GET /artikelview/:id/destroy': { controller: 'ArtikelController', action: 'destroy' },
  'GET /artikelview/:id/update': { controller: 'ArtikelController', action: 'updateOne' },
  'POST /artikelview/:id/update': { controller: 'ArtikelController', action: 'updateFinal' },

  'GET /artikelviewUser': { action: 'artikel/view-shop' },


  'GET /artikeldelete': { controller: 'ArtikelController', action: 'artikeldelete' },
  'GET /artikeleditone': { controller: 'ArtikelController', action: 'artikeleditone' },

  'GET /warenkorb': { view: 'pages/warenkorb' },

  'GET /datenschutz': { view: 'pages/datenschutz' },
  'GET /agb': { view: 'pages/agb' },
  'GET /impressum': { view: 'pages/impressum' },

  'GET /warenkorb/:mealid/put': { controller: 'WarenKorbController', action: 'put' },

  'GET /warenkorb': { controller: 'WarenKorbController', action: 'show' },
  'GET /shoppingbasket/remove/:mealid': { controller: 'WarenKorbController', action: 'remove' },
  'GET /warenkorb/increase-quantity/:mealid': { controller: 'WarenKorbController', action: 'increaseQuantity' },
  'GET /warenkorb/decrease-quantity/:mealid': { controller: 'WarenKorbController', action: 'decreaseQuantity' },

  'GET /warenkorb/ordershow': { controller: 'BestellungController', action: 'show' },
  'GET /warenkorb/deletebasket': { controller: 'BestellungController', action: 'deletebasket' },

  'GET /orderperUser/:userid': { controller: 'BestellungController', action: 'findcustomerOrders' },
  'GET /allOrders': { controller: 'BestellungController', action: 'find' },
  'GET /editOrders': { controller: 'BestellungController', action: 'findedit' },


  'GET /getlook/:nr': { controller: 'BestellungController', action: 'findtwo' },
  'GET /geteditlook/:nr': { controller: 'BestellungController', action: 'findthree' },
  'POST /updateorder/:nr': { controller: 'BestellungController', action: 'updateOrder' },
  'GET /deleteorder': { controller: 'BestellungController', action: 'findfordelete' },
  'GET /destroyorder/:nr': { controller: 'BestellungController', action: 'destroy' },


  // search for Orders

  'GET /searchAllOrders': { controller: 'BestellungController', action: 'findOrdersAll' },
  'GET /searchAllOrdersEdit': { controller: 'BestellungController', action: 'findOrdersAllEdit' },
  'GET /searchAllOrdersDelete': { controller: 'BestellungController', action: 'findOrdersAllDelete' },

  'GET /getlookAccountOrderSingle/:nr': { controller: 'BestellungController', action: 'findSingleOrderView' },

  'GET /searchingPersonalOrder': { controller: 'BestellungController', action: 'findOrdersAccountSearch' },


  'GET /confirmMessage': { view: 'pages/kontakt/confirmMessage' },

  'GET /anfragen': { controller: 'AnfragenController', action: 'findRequest' },
  'GET /editAnfrage/:anfragenid' :  { controller: 'AnfragenController', action: 'viewsingleRequest'},
  'GET /deleteAnfrage/:anfragenid' :  { controller: 'AnfragenController', action: 'delete' },

  'POST /updateAnfrage/:anfragenid' :  { controller: 'AnfragenController', action: 'update' },





};
