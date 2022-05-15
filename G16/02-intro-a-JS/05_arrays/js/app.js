var platillos = ['Tacos','Alitas','Boneless','Pozole','Chilaquiles','Tamales'];
let pLength = platillos.length;

let text = "<ul>";
for (let i = 0; i < pLength; i=i+2) {
    text += "<li>" + platillos[i] + "</li>";
}
text += "</ul>";

for (let i = 1; i < pLength; i=i+2) {
    text += "<li>" + platillos[i] + "</li>";
}
text += "</ul>";