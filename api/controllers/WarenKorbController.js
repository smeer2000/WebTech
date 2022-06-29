/**
 * Warenkorb Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const redactPasswords = require("sails-mysql/lib/private/redact-passwords");
const Sails = require("sails/lib/app/Sails");



module.exports = {


    show: async function (req, res) {
        res.view('pages/warenkorb');
    },

    put: async function (req, res) {

        let meal = await Artikel.findOne({ id: req.params.mealid });
        let currentmealid = meal.id;

        if (!req.session.basket) {
            req.session.basket = [];
            req.session.basket.push({ quantity: 1, product: meal });
            console.log(req.session.basket);
        } else {
            let length = req.session.basket.length - 1;
            let allbasketids = [];
            for (i = 0; i <= length; i++) {
                allbasketids.push(req.session.basket[i].product.id);
            }
            console.log(allbasketids.length);
            if (allbasketids.includes(currentmealid)) {
                console.log("Artikel ist bereits im Warenkorb");
            } else {
                console.log("Artikel ist noch nicht im Warenkorb")
                req.session.basket.push({ quantity: 1, product: meal });
            }
        }
        res.redirect('/artikelview');

    },

    remove: async function (req, res) {

        console.log("removeController")

        let meal = await Artikel.findOne({ id: req.params.mealid });
        let currentmealid = meal.id;

        let length = req.session.basket.length - 1;
        let allbasketids = [];
        for (i = 0; i <= length; i++) {
            allbasketids.push(req.session.basket[i].product.id);
        }
        console.log(allbasketids);
        let index = allbasketids.indexOf(currentmealid);
        req.session.basket.splice(index, 1)
        res.redirect('/warenkorb');
    },

    increaseQuantity: async function (req, res) {
        req.session.basket.forEach(function (meal) {
            if (req.params.mealid == meal.product.id) {
                meal.quantity++;
            }
        });
        res.redirect('/warenkorb');
    },

    decreaseQuantity: async function (req, res) {
        req.session.basket.forEach(function (meal) {
            if (req.params.mealid == meal.product.id) {
                if (meal.quantity > 1) {
                    meal.quantity--;
                }
            }
        });
        res.redirect('/warenkorb');
    },
};

