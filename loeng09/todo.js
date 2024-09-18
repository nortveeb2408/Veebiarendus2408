
let vajaPoest = [
    'leib',
    'piim',
    'munad',
    'kartulid'
]

function valjastaRida(kaup) {
   //valjastame ekraanile kauba nime iseseisva blokina
   let valjastavRida = "<div class='poest_kaup'>" + kaup + "</div>"
   //siia tee väljastamine
   console.log(kaup)
}

function valjastaKoikKaubad() {
    //see funktsioon peaks massiivist vajaPoest 
    //for-tsükli abil kutsuma välja funktsiooni valjastaRida iga massiivi elemendi kohta
    //valjastaRida(vajaPoest[i])
}

valjastaKoikKaubad()