const vyhovorky = ["Zase som nestihol kúpiť darček, lebo som čakal na poslednú chvíľu",
"Nemôžem prísť na návštevu, lebo pečiem milión koláčov naraz",
"Nezdobil som stromček, lebo ma predbehol Silvester",
"Neviem, kde som dal darčeky, určite ich schoval minuloročný ja",
"Nepodarilo sa mi zohnať rybu, lebo všetky kapre mali dovolenku",
"Nemohol som piecť medovníky, lebo sa mi stratili formičky v inom vesmíre",
"Neprišiel som na koledy, lebo ma premohla vianočná únava",
"Nestihol som upratať, lebo som čakal, že to urobia Ježiškovi pomocníci",
"Neposlal som pohľadnice, lebo pošta ich vraj rozposiela až budúce Vianoce",
"Neprinesiem šalát, lebo ma majolénový duch opustil",
"Nemôžem zabaliť darčeky, lebo sa mi minula trpezlivosť aj lepiaca páska",
"Neviem, čo komu darovať, lebo všetci tvrdia, že nič nechcú",
"Neprišiel som na večeru, lebo som uviazol v rade na punč",
"Nezdobil som balkón, lebo mi svetielka odmietli spolupracovať",
"Neprišiel som na trhy, lebo ma pohltila domáca gaučová kultúra",
"Nedaroval som nič handmade, lebo som anti-talent roka",
"Nestihol som vianočné upratovanie, lebo som hľadal vianočnú náladu",
"Neprehral som koledy, lebo mi Spotify tvrdil, že som už naplnil limit",
"Nezohnal som stromček, lebo všetky kvalitné už adoptovali iní",
"Neprišiel som na rodinné fotenie, lebo som nenašiel svoj 'sviatočný' úsmev"]
const emojis = ["🎁🎄",
"✨🕯️",
"🍪🎅",
"❄️🧤",
"🍷🎶",
"🌟📦",
"🛒😵",
"🐟😬",
"🥗🤦",
"📮⌛"]
let excuseContainer = document.getElementById("vyhovorka")
let button = document.getElementById("button")
let button2 = document.getElementById("button2")
let emojiContainer = document.getElementById("emoji")
let chosenVyhovorka = ""
function chooseExcuse(event) {
    chosenVyhovorka = vyhovorky[Math.round(Math.random()*(vyhovorky.length-1))]
    excuseContainer.innerHTML = ""
    excuseContainer.innerHTML += `<h3 id="vybrana_vyhovorka">${chosenVyhovorka}</h3>`
    if (emojiContainer.innerHTML != "") {
    connectTheEmojiAndText()
    }
    addAndEditButtons()
    
}
function addAndEditButtons() {
    button.innerHTML = ""
    button.innerHTML += `Nespokojný? Skús znova!`
    console.log(button2.innerHTML)
    if (button2.innerHTML == "") {
    button2.innerHTML = ""
    button2.innerHTML += `<button onclick="chooseEmoji(event)">GENERUJTE EMOJIS K VAŠEJ VÝHOVORKE</button>`
    } else if (emojiContainer.innerHTML != "") {
    button2.innerHTML = ""
    button2.innerHTML += `<button onclick="chooseEmoji(event)">Nehodiace emoji? Skúste znova, no nie?</button>`
    }
}

function chooseEmoji(event) {
    let chosenEmojis = emojis[Math.round(Math.random()*(emojis.length-1))]
    emojiContainer.innerHTML = ""
    emojiContainer.innerHTML += `<h3 id="vybrane_emojis">${chosenEmojis}</h3>`
    addAndEditButtons()
    connectTheEmojiAndText()
}

function connectTheEmojiAndText(chosenEmojis) {
    let excuse_and_EmojiContainer = document.getElementById("great-excuse")
    let chosenvyhovorka2 = document.getElementById("vybrana_vyhovorka").innerHTML
    let chosenEmojis2 = document.getElementById("vybrane_emojis").innerHTML
    excuse_and_EmojiContainer.innerHTML = ""
    excuse_and_EmojiContainer.innerHTML += `<h2>${chosenEmojis2}${chosenvyhovorka2}${chosenEmojis2}</h2>`
} 