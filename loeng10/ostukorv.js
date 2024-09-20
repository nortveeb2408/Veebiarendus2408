let ost1 = {
    nimetus: "leib",
    kogus: 1,
    yhik: "tk",
    onKorvis: true
}

let ost2 = {
    nimetus: "sai",
    kogus: 2,
    yhik: "tk",
    onKorvis: true
}

let ostud = [
    ost1,
    ost2,
    {
        nimetus: "kartul",
        kogus: 2,
        yhik: "kg",
        onKorvis: false
    }
]

function valjasta(sisu) {
    document.getElementById("valjund").innerHTML += sisu
}

//valjasta(ost1.nimetus)

function valjastaOst(ost) {
    let l = ''
    l += '<div class="row ylesanne" >'
    l +=    '<div class="col-6">' + ost.nimetus + '</div>'
    l +=    '<div class="col-2">' + ost.yhik + '</div>'
    l +=    '<div class="col-2">' + ost.kogus + '</div>'
    l += '</div>'
    valjasta(l)
}

//valjastaOst(ost1)
//valjastaOst(ost2)

for (let i = 0; i < ostud.length; i++) {
    valjastaOst(ostud[i])
}

