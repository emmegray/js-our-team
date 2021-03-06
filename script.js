/* Our Team
1. Definire un array dei membri del team
   Ogni membro ha le informazioni necessarie per stampare la relativa card
   (Nome, Ruolo e Foto)
2. Una volta definita la struttura dati stampare dinamicamente una card per ogni membro del team

BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team
Cliccando sul pulsante "add" viene creato un nuovo oggetto che viene inserito nell'array iniziale e vie stampata una nuova card con tutte le info inserite dall'utente
*/

const membriTeam = [
    {
        nome:'Angela Caroll',
        ruolo:'Chief Editor',
        foto:'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome:'Angela Lopez',
        ruolo:'Social media manager',
        foto:'img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome:'Barbara Ramos',
        ruolo:'Graphic designer',
        foto:'img/barbara-ramos-graphic-designer.jpg'
    },
    {
        nome:'Scott Estrada',
        ruolo:'Developer',
        foto:'img/scott-estrada-developer.jpg'
    },
    {
        nome:'Walter Gordon',
        ruolo:'Office manager',
        foto:'img/walter-gordon-office-manager.jpg'
    },
    {
        nome:'Wayne Barnett',
        ruolo:'Founder ceo',
        foto:'img/wayne-barnett-founder-ceo.jpg'
    },
]

const cardEsempio = document.querySelector(".team-card")
const cardTemplate = cardEsempio.cloneNode(true);
cardEsempio.remove();

const containerTeam = document.querySelector(".team-container")

for (let index = 0; index < membriTeam.length; index++) {
    const membro = membriTeam[index];
    aggiungiMembro(membro);
}

function aggiungiMembro(membro) {
    const nuovaCard = cardTemplate.cloneNode(true);

    const img = nuovaCard.querySelector("img")
    img.alt = membro.nome
    img.src = membro.foto

    const nomeMembro = nuovaCard.querySelector("h3")
    nomeMembro.textContent = membro.nome

    const ruoloMembro = nuovaCard.querySelector("p")
    ruoloMembro.textContent = membro.ruolo

    containerTeam.appendChild(nuovaCard)
}

const inputNome = document.querySelector("input#name")
const inputRuolo = document.querySelector("input#role")
const inputImmagine = document.querySelector("input#image")
const inputButton = document.querySelector("button#addMemberButton")

inputButton.addEventListener("click", function(){
    const newMembro = {
        nome: inputNome.value,
        ruolo: inputRuolo.value,
        foto: `img/${inputImmagine.value}.jpg`,
    }

    membriTeam.push(newMembro)
    aggiungiMembro(newMembro)

    inputNome.value = ""
    inputRuolo.value = ""
    inputImmagine.value = ""
})