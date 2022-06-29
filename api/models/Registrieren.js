// Module Account with Serverside Validation from Sails

//check Hausnummer

module.exports = {
    attributes: {
        anrede: { type: 'string', columnType: 'varchar(80)', required: true, isIn: ['Herr', 'Frau', 'Divers'] },
        name: { type: 'string', columnType: 'varchar(80)', required: true, isNotEmptyString: true },
        vorname: { type: 'string', columnType: 'varchar(80)', required: true, isNotEmptyString: true },
        strasse: { type: 'string', columnType: 'varchar(80)', required: true, isNotEmptyString: true },
        hausnummer: { type: 'string', columnType: 'varchar(80)', required: true },
        zusatz: { type: 'string', columnType: 'varchar(80)' },
        stadt: { type: 'string', columnType: 'varchar(80)', required: true, isIn: ['Konstanz'] },
        plz: { type: 'string', columnType: 'varchar(80)', isIn: ['78462', '78464', '78465', '78467'] },
        passwort: { type: 'string', columnType: 'varchar(80)', required: true, isNotEmptyString: true },
        passwortcheck: { type: 'string', columnType: 'varchar(80)', required: true, isNotEmptyString: true },
        email: { type: 'string', columnType: 'varchar(80)', required: true, isEmail: true },
        emailcheck: { type: 'string', columnType: 'varchar(80)', required: true, isEmail: true },

    },
}
