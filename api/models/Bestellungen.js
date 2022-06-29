// Module Bestellungen
// check DataType

module.exports = {
    attributes: {
     
        kundenid: { type: 'number', columnType: 'integer', required:true},
        kundenname: {type: 'string', columnType: 'varchar(80)', required: true},
        bestellungen: {type :'json', columnType: 'json', required: true},
        gesamtpreis: {type : 'number', columnType: 'DECIMAL (6,2)', required: true},
        datum: {type: 'string', columnType:'varchar(80)', required: true },
        status: {type: 'string', columnType: 'varchar(80)', required: true},
        bestellnummer: {type: 'string', columnType: 'varchar(80)', required: true},
        lieferzeitpunkt:{type: 'string', columnType: 'varchar(80)', required: true},
         
},
};
