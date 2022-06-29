// Model Anfragem
// check DataType

module.exports = {
    attributes: {
        name : {type: 'string', columnType: 'varchar(80)', required: true},
        email : {type: 'string', columnType: 'varchar(200)', required: true},
        betreff : {type: 'string', columnType: 'varchar(200)', required: true},
        message : {type: 'string', columnType: 'varchar(200)',required: true},
        status : {type: 'string', columnType: 'varchar(200)',required: true},
      
      
    },
};
