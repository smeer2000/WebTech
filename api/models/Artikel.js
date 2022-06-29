// Module Artikel
// check DataType

module.exports = {
    attributes: {
        artikel : {type: 'string', columnType: 'varchar(80)', required: true},
        beschreibung : {type: 'string', columnType: 'varchar(80)'},
        preis: {type: 'number', columnType: 'DECIMAL (6,2)', required: true},
        markt: {type: 'string', columnType: 'varchar(80)', required: true},
      
    },
};
