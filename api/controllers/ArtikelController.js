/**
 * Artikelcontroller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  create: async function (req, res) {
    sails.log.debug("Create new Artikel....")
    console.log("Jetzt im ArtikelController")
    let params = req.allParams();
    if (!params.artikel || params.artikel == "") {
      sails.log.debug("Artikel error....")
      res.view('pages/artikel/artikelstatus', { "success": false })
    } else {
      sails.log.debug("Create new meal....")
      let artikel = await Artikel.create(req.allParams());
      res.view('pages/artikel/artikelstatus', { "success": true })
    }
  },

  find: async function (req, res) {
    sails.log.debug("List all Artikels....")
    let meals = await Artikel.find();
    res.view('pages/artikel/artikelview', { meals: meals });
  },

  artikeldelete: async function (req, res) {
    sails.log.debug("List all Artikels....")
    let meals = await Artikel.find();
    res.view('pages/artikel/artikeldelete', { meals: meals });
  },

  artikeleditone: async function (req, res) {
    sails.log.debug("List all Artikels....")
    let meals = await Artikel.find();
    res.view('pages/artikel/artikeleditone', { meals: meals });
  },


  // search for filter criteria

  findIndex: async function (req, res) {
    sails.log.debug("List all meals....")
    console.log(req.query.filteroption)
    if (req.query.filteroption == 1) {
      meals = await Artikel.find({
        artikel: {
          'contains': req.query.q
        }
      })
    } else if (req.query.filteroption == 2) {
      meals = await Artikel.find({
        beschreibung: {
          'contains': req.query.q
        }
      })
    } else {
      meals = await Artikel.find({
        markt: {
          'contains': req.query.q
        }
      })
    }
    res.view('pages/artikel/artikelfilter', { meal: meals });
  },

  findIndexedit: async function (req, res) {
    sails.log.debug("List all meals....")
    console.log(req.query.filteroption)
    if (req.query.filteroption == 1) {
      meals = await Artikel.find({
        artikel: {
          'contains': req.query.q
        }
      })
    } else if (req.query.filteroption == 2) {
      meals = await Artikel.find({
        beschreibung: {
          'contains': req.query.q
        }
      })
    } else {
      meals = await Artikel.find({
        markt: {
          'contains': req.query.q
        }
      })
    }
    res.view('pages/artikel/artikelfilteredit', { meal: meals });
  },

  findIndexdelete: async function (req, res) {
    sails.log.debug("List all meals....")
    console.log(req.query.filteroption)
    if (req.query.filteroption == 1) {
      meals = await Artikel.find({
        artikel: {
          'contains': req.query.q
        }
      })
    } else if (req.query.filteroption == 2) {
      meals = await Artikel.find({
        beschreibung: {
          'contains': req.query.q
        }
      })
    } else {
      meals = await Artikel.find({
        markt: {
          'contains': req.query.q
        }
      })
    }
    res.view('pages/artikel/artikelfilterdelete', { meal: meals });
  },


  destroy: async function (req, res) {
    console.log("Delete Artikel....");
    await Artikel.destroyOne({ id: req.params.id });
    res.redirect('/artikeldelete');
  },

  updateOne: async function (req, res) {
    console.log("Update artikel #1...");
    let meal = await Artikel.findOne({ id: req.params.id });
    res.view('pages/artikel/artikeledittwo', { meal: meal })
    /*await Artikel.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/artikelview');*/
  },

  updateFinal: async function (req, res) {
    console.log("Update artikel #2...");
    /*let meal = await Artikel.findOne({ id: req.params.id });
    res.view('pages/artikel/artikelupdate', { meal: meal})*/
    await Artikel.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/artikeleditone');
  },

};

