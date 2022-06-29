module.exports = {


    friendlyName: 'Update profile',
  
  
    description: 'Update the profile for the logged-in user.',
  
  
    inputs: {
  
      name: {
        type: 'string'
      },
  
      email: {
        type: 'string'
      },
  
      betreff: {
        type: 'string'
      },
  
      message: {
        type: 'string'
      },
  
     
    },
  
    fn: async function ({name,email, betreff,message}) {

      console.log("Hallo");
      // Save to the db
     let orders =  await Anfragen.create({
        name: name,
        betreff: betreff,
        email: email,
        message: message,
        status: 'noch nicht bearbeitet'
      }).fetch();
     
  
      }
    
  
  };
  