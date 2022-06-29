var form = document.getElementById('artikelbearbeiten');
if (form !== null) {

    form.addEventListener('submit', e => {

        let failcounter = checkInputsBearbeiten();

        if (failcounter.join(" & ").length === 0) {
            form.submit();
        } else {
            e.preventDefault();

        }


    })
};

function checkInputsBearbeiten() {


    var artikel = document.getElementById('artikel').value;
    var msgArtikel = document.getElementById('msgArtikel');

    var beschreibung = document.getElementById('beschreibung').value;
    var msgBeschreibung = document.getElementById('msgBeschreibung');

    var preis = document.getElementById('preis').value;
    var msgPreis = document.getElementById('msgPreis');

    var markt = document.getElementById('markt').value;
    var msgMarkt = document.getElementById('msgMarkt');

    let failcounter = [];

    if (artikel === "" || artikel === null) {
        setErrorFor(msgArtikel, 'Bitte ehhh eingeben. ' + " <i class=\"bi bi-x-octagon-fill\"></i>");
        failcounter.push("1");

    } else {
        setSuccessFor(msgArtikel, "Eingabe akzeptiert. " + "<i class=\"bi bi-check\"></i>");

    }

    if (preis === "" || preis === null) {
        setErrorFor(msgPreis, 'Bitte Preis angeben. ' + " <i class=\"bi bi-x-octagon-fill\"></i>");
        failcounter.push("3");

    } else {
        setSuccessFor(msgPreis, "Eingabe akzeptiert " + "<i class=\"bi bi-check\"></i>");
    }

    if (markt === "Auswahl..." || markt === null) {
        setErrorFor(msgMarkt, 'Bitte Markt angegeben. ' + " <i class=\"bi bi-x-octagon-fill\"></i>");
        failcounter.push("4");
    } else {
        setSuccessFor(msgMarkt, "Eingabe akzeptiert " + "<i class=\"bi bi-check\"></i>");
    }

    return failcounter;

}

function setErrorFor(messageContainer, message) {

    messageContainer.className = "colorred";
    messageContainer.innerHTML = message;

}

function setSuccessFor(messageContainer, message) {
    messageContainer.className = "colorgreen";
    messageContainer.innerHTML = message;

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
