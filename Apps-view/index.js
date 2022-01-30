 function submit_click() {
     alert("submitted");
 }

 function swaping() {
   var imgpar = document.querySelector("#imgpar");
                              var imgpar = document.querySelector("#parent_all");
                              var img = imgpar.children[0];
                              var vidpar = document.querySelector('#container');
                              var r = vidpar.children[6];
                              imgpar.insertBefore(r, imgpar.children[0]);
                              vidpar.insertBefore(img, vidpar.children[8]);
                              var btn1 = document.getElementById('btn1');
                              btn1.parentNode.removeChild(btn1);
                  let para = document.createElement("p");
                  let txt = document.createTextNode("CONGRATULATIONS YOU SWAPPED SUCCESSFULLY!");
                  para.appendChild(txt);
                  let element = document.getElementById("parent_all");
                  element.appendChild(para);
 }

 function remove_aud() {
     let audpar = document.getElementById("container");
     let audio = document.getElementById("myaudio");
     audpar.removeChild(audio);
     //aud.parentNode.removeChild(aud);
     let btn2 = document.getElementById("btn");
     audpar.removeChild(btn2);
let para=document.createElement("p");
let txt=document.createTextNode("SUCCESSFULLY DELETED!!!");
var position=document.getElementById("br")
para.appendChild(txt);
let element=document.getElementById("container");
element.insertBefore(para,position);
 }
