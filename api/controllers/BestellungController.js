/**
 *Bestellungen Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const redactPasswords = require("sails-mysql/lib/private/redact-passwords");
const Sails = require("sails/lib/app/Sails");


module.exports = {

    // Delete basket after "beenden" on Bestellbestätigung 
    deletebasket: async function (req, res) {
        req.session.basket = [];
        res.view('pages/homepage');

    },

    find: async function (req, res) {
        sails.log.debug("List all Orders....")
        let orders = await Bestellungen.find();
        res.view('pages/order/vieworders', { orders: orders });
    },

    findedit: async function (req, res) {
        sails.log.debug("List all Orders....")
        let orders = await Bestellungen.find();
        res.view('pages/order/editorders', { orders: orders });
    },

    findtwo: async function (req, res) {
        let params = req.allParams();
        console.log(req.params.nr);
        let values = await Bestellungen.find({
            where: { id: params.nr },
        });
        res.view('pages/order/viewsingleorder', { values })
    },

    findthree: async function (req, res) {
        let params = req.allParams();
        console.log(req.params.nr);
        let values = await Bestellungen.find({
            where: { id: params.nr },
        });
        res.view('pages/order/singlevieweditorder', { values })
    },

    findfordelete: async function (req, res) {
        let params = req.allParams();
        console.log(req.params.nr);
        let orders = await Bestellungen.find({
            where: { id: params.nr },
        });
        res.view('pages/order/deleteorder', { orders })
    },


    destroy: async function (req, res) {
        console.log(req.allParams())
        console.log("destroy Order");
        let params = req.allParams();
        console.log(req.params.nr);
        let orders = await Bestellungen.destroyOne({
            where: { id: params.nr },
        });
        res.redirect('/deleteorder');
    },



    findcustomerOrders: async function (req, res) {
        let orders = await Bestellungen.find({
            where: { kundenid: req.me.id },

        });

        res.view('pages/order/accountorderview', { orders: orders })


    },

    show: async function (req, res) {

        console.log("Show Bestellungen Controller")
        let bestellungen = [];

        // Loop through session basket -> push to Array

        req.session.basket.forEach(function (through) {
            console.log(through.product.markt);
            bestellungen.push({
                artikel: through.product.artikel,
                artikelpreis: through.product.preis,
                quantity: through.quantity,
                artikelpreisgesamt: (through.product.preis * through.quantity).toFixed(2),
                lieferkosten: 10.00,
                markt: through.product.markt,

            });
        });

        console.log("Test" + bestellungen[0].artikel);

        // Array to JSON Object - Will be stored as JSON Object in DB
        let bestellung = JSON.stringify(bestellungen);
        let parseback = JSON.parse(bestellung);
        let statusbestellung = "Bestellung wird bearbeitet";

        // get Date & time -> for bestellnummer
        var today = new Date();
        var time = today.getTime();
        var datum = new Date();
        const formatDate = (date) => {
            let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
            return formatted_date;
        }
        datum = formatDate(datum);

        // Customer Data
        let kundenname = req.me.fullName;
        let plz = req.me.plz;
        let strasse = req.me.strasse;
        let hausnummer = req.me.hausnummer;
        let bestellnummercreate = time;
        let bestellkosten = 10.00;
        let stadt = req.me.stadt;

        // Delivery Information

        let lieferzeitpunkt = "noch nicht bekannt";

        // calculate totalPrice of session basket
        let totalPrice = 0; req.session.basket.forEach(function (meal) {
            totalPrice += meal.quantity *
                meal.product.preis
        });

        // create final Order in Model & DB
        var newOrder = await Bestellungen.create({
            kundenid: req.me.id,
            kundenname: req.me.fullName,
            bestellungen: bestellung,
            gesamtpreis: totalPrice.toFixed(2),
            datum: datum,
            status: statusbestellung,
            bestellnummer: bestellnummercreate,
            lieferzeitpunkt: lieferzeitpunkt,
        });

        // res view to Confirm Side & put order Number to it
        res.view("pages/bestellungconfirm", {
            bestellnummercreate,
            datum, kundenname, plz, strasse, hausnummer, totalPrice, statusbestellung, bestellung, bestellkosten, stadt,lieferzeitpunkt
        });
    },

    updateOrder: async function (req, res) {
        let params = req.allParams();
        console.log("Update order");
        console.log(req.params.nr);
        console.log(req.body);
        /*let meal = await Artikel.findOne({ id: req.params.id });
        res.view('pages/artikel/artikelupdate', { meal: meal})*/
        await Bestellungen.updateOne({ id: req.params.nr }).set(req.body);
        res.redirect('/editOrders');

    },

    findOrdersAll: async function (req, res) {
        sails.log.debug("List all Orders")
        console.log(req.query.filteroption)
        if (req.query.filteroption == 1) {
          orders = await Bestellungen.find({
            bestellnummer: {
              'contains': req.query.q
            }
          })
        } else if (req.query.filteroption == 2) {
          orders = await Bestellungen.find({
            kundenname: {
              'contains': req.query.q
            }
          })
        } else {
          orders = await Bestellungen.find({
            datum: {
              'contains': req.query.q
            }
          })
        }
        res.view('pages/order/suchen/filterallOrders', { orders:orders });
      },


      // searching for View all Bestellungen in edit mode

      findOrdersAllEdit: async function (req, res) {
        sails.log.debug("List all Orders")
        console.log(req.query.filteroption)
        if (req.query.filteroption == 1) {
          orders = await Bestellungen.find({
            bestellnummer: {
              'contains': req.query.q
            }
          })
        } else if (req.query.filteroption == 2) {
          orders = await Bestellungen.find({
            kundenname: {
              'contains': req.query.q
            }
          })
        } else {
          orders = await Bestellungen.find({
            datum: {
              'contains': req.query.q
            }
          })
        }
        res.view('pages/order/suchen/filterallOrdersEdit', { orders:orders });
      },

      findOrdersAllDelete: async function (req, res) {
        sails.log.debug("List all Orders")
        console.log(req.query.filteroption)
        if (req.query.filteroption == 1) {
          orders = await Bestellungen.find({
            bestellnummer: {
              'contains': req.query.q
            }
          })
        } else if (req.query.filteroption == 2) {
          orders = await Bestellungen.find({
            kundenname: {
              'contains': req.query.q
            }
          })
        } else {
          orders = await Bestellungen.find({
            datum: {
              'contains': req.query.q
            }
          })
        }
        res.view('pages/order/suchen/filterallOrdersDelete', { orders:orders });
      },

      findSingleOrderView: async function (req, res) {
        let params = req.allParams();
        console.log(req.params.nr);
        let values = await Bestellungen.find({
            where: { id: params.nr },
        });
        res.view('pages/order/viewSingleOrderAccount', { values })
    },

    findOrdersAccountSearch: async function (req, res) {
      sails.log.debug("List all Orders")
      console.log(req.me.id )
      console.log("Hier log" + req.query.q)
      console.log(req.query.filteroption)
      sails.log.debug("List all Orders")
        console.log(req.query.filteroption)
        if (req.query.filteroption == 1) {
          orders = await Bestellungen.find({
            bestellnummer: {
              'contains': req.query.q
            },
            kundenid: req.me.id,
          })
        } else if (req.query.filteroption == 2) {
          orders = await Bestellungen.find({
            kundenname: {
              'contains': req.query.q
            },
            kundenid: req.me.id,
          })
        } else {
          orders = await Bestellungen.find({
            datum: {
              'contains': req.query.q
            },
            kundenid: req.me.id,
            
          })
        }
      console.log(orders);
      res.view('pages/order/suchen/filterOrdersAccountView', {orders});
    },

      

     
}





