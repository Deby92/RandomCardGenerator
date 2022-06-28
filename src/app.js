/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector('.card').classList.add('spade')
  setTimeount(() => {
    document.querySelector('.card').classList.add('spade');
  }, 1000);
};

let generateRandomNumber(){
  let numb = Math.floor(Math.random() * 12);
  let numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
}