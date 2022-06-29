/**
 * AnfragenController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const Sails = require("sails/lib/app/Sails");

 module.exports = {

    findRequest: async function(req,res){
        sails.log.debug("Anfragen...")
        let anfragen = await Anfragen.find();
        res.view('pages/kontakt/anfragen', {anfragen});
    }, 

    delete: async function(req,res){
        sails.log.debug("Anfragen...")
        let anfragen = await Anfragen.destroyOne({
            id : req.params.anfragenid

        })
        res.redirect('/anfragen');
    }, 

    viewsingleRequest: async function(req,res){
        console.log("Anfragen")

        let anfrage = await Anfragen.findOne({
            id: req.params.anfragenid
        });
        console.log(anfrage);

        res.view('pages/kontakt/editanfrage', {anfrage});
    },
    
    update: async function(req,res){
        console.log("Anfragen Update")
        await Anfragen.updateOne({ id: req.params.anfragenid }).set(req.body);
        res.redirect('/anfragen');

    },

 };
 
 