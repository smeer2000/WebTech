/**
 * <lido-place>
 * -----------------------------------------------------------------------------
 * A button with a built-in loading spinner.
 *
 * @type {Component}
 *
 * @event click   [emitted when clicked]
 * -----------------------------------------------------------------------------
 */

 parasails.registerPage('app', {
        data: {
            // Date chossen by user
            basket: [],
        },
        methods: {

            mounted: function(){
            let origin = window.location.origin
            let url = new URL(origin + '/shoppingbasket/artikel');
          
            fetch(url)
            .then(response => response.text())
            .then(data => console.log(data));
               
               
                },
            
        
            reserve: function () {
                console.log("Reserve: "+this.place)
                const formData = {
                    date: this.date,
                    places: [ this.place ],
                    _csrf: window.SAILS_LOCALS._csrf
                }
                const body = JSON.stringify(formData);
                const postForm = (body) => {
                    return fetch('/api/v1/reservation/create', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body
                    });
                }
                postForm(body)
                    .then(res => res.json())
                    .then(data => {
                        console.log("AJAX: Result -->")
                        let id = data.id;
                        window.location = "/reservation/" + id;
                    })
            }
        }
    })