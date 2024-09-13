let nimi = prompt("Sisesta enda nimi")
console.log(nimi)

let tervitusElement =  document.querySelector('#tervitus')
console.log(tervitusElement)
tervitusElement.innerHTML = "<h2>" + "Tere, " + nimi + "</h2>"
tervitusElement.innerHTML = tervitusElement.innerHTML + "<div>" + "tähtede arv sinu nimes: " + nimi.length + "</div>"

let hinnang = "Sul on ilus lühike nimi"

if (nimi.length > 8) {
    hinnang = "Küll sul on ilus pikk nimi!"
} 


tervitusElement.innerHTML += "<div>" + hinnang + "</div>"

for (let i = 0; i < nimi.length; i += 1 ) {
    tervitusElement.innerHTML += '<div class="taht"> Täht ' + i + " - " +  nimi[i]  + "</div>"
}