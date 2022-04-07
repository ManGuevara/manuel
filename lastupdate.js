
const d = new Date();
let year = d.getFullYear();
document.querySelector('#year').innerHTML = year;

let last = document.lastModified;
document.querySelector("#last_modified").innerHTML = last;