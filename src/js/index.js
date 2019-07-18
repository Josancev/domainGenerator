/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = "";
  let mylist = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let k = 0; k < adj.length; k++) {
      for (let p = 0; p < noun.length; p++) {
        domain = pronoun[i] + adj[k] + noun[p] + ".com";
        mylist += "<li>" + domain + "<li>";
        console.log(domain);
      }
    }
  }
  document.querySelector(".domains").innerHTML = mylist;
};
