/**
 * <counter-for-artikel>
 * -----------------------------------------------------------------------------
 * A button with a built-in loading spinner.
 *
 * @type {Component}
 *
 * @event click   [emitted when clicked]
 * -----------------------------------------------------------------------------
 */

 parasails.registerComponent('counter-for-artikel', {
    //  ╔═╗╦═╗╔═╗╔═╗╔═╗
    //  ╠═╝╠╦╝║ ║╠═╝╚═╗
    //  ╩  ╩╚═╚═╝╩  ╚═╝
   
  props: ['counter','artikelpreis'],
 
  
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: function (){
      return {

        zählen: this.counter,
        preis: this.artikelpreis,
                
        //…
      };
    },
  
    //  ╦ ╦╔╦╗╔╦╗╦
    //  ╠═╣ ║ ║║║║
    //  ╩ ╩ ╩ ╩ ╩╩═╝
    template: `
    <span><div class="d-flex">
    <button @click="down()"><i class="bi bi-dash"></i></button>
    <div class="pd-4"> {{ zählen }} </div>
    <button @click="up()"><i class="bi bi-plus"></i></button>
    <div> Gesamtpreis Artikel: {{ (preis * zählen).toFixed(2)}} € </div>
    </div></span>
    `,
  
    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function() {
      return this.$emit("update", this.preis);
     
      //…
    },
    mounted: async function(){

      

      
    },
    beforeDestroy: function() {
      //…
    },

    methods:{

      down: async function(){

        if(this.zählen > 1){
        this.zählen--;
        return this.$emit("update", -this.preis)
        } else {
          console.log("");
        }
      
   
        },
    
      up: async function(){

        this.zählen++;
        return this.$emit("update", this.preis)
       
        
     
      }
    

      
    }


    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  
  });