/**
 
 * -----------------------------------------------------------------------------
 * A button with a built-in loading spinner.
 *
 * @type {Component}
 *
 * @event click   [emitted when clicked]
 * -----------------------------------------------------------------------------
 */

 parasails.registerPage('singlefile', {



    data: {

        gesamtpreis: 0,

        
        // Date chossen by user
       
    },



    methods: {

        setgesamtpreis : async function(value){

         this.gesamtpreis = this.gesamtpreis + (value);
       
        },
        alert : async function(value){

            alert(value);
          
           }

    }

});

