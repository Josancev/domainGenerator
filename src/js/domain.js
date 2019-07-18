let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let concat = [];
let domain = "";
function c() {
    for (i = 0; i < pronoun.length; i++) {
        for (k = 0; k < adj.length; k++) {
            for (p = 0; p < length; p++) {
                domain= pronoun[i]+adj[k]+noun[p];
            }
        }
    }
    console.log(domain);
}

function myselector() {
  document.querySelector(".prueba").style.backgroundColor = "red";
}