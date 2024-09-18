console.log("Tere")

let varvid = [
    'green',
    'yellow',
    'red',
    'darkblue',
    'lightblue'
]

function loeNimi() {
    let sisestusEl = document.getElementById('sisendNimi')
    tervitus(sisestusEl.value)
}


function valjasta(sisend) {
    document.getElementById('valjund').innerHTML += '<div>' + sisend + '</div>'
}

function tervitus(nimi) {
    if (nimi !== undefined ) {
       valjasta('Tere! ' + nimi)
    } else {
        valjasta('Tere tundmatu')
    }
}


function valjastaVarvid() {
    for (let i = 0; i < varvid.length; i += 1) {
        let varv = "<span style='color:" + varvid[i] +"'>" + varvid[i] + "</span>"
        valjasta(varv)
    }
}

tervitus('Mati')
tervitus('Kati')
tervitus()

valjastaVarvid()