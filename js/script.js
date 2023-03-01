/*
Consegna:
Data una lista della spesa (memorizzata in un array), 
stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while.


 pseudcode:
-creo un array di item da comprare, la mia lista della spesa
-stampo in pagina ciascun elemento della lista usando ciclo while
 */


// selezione id della lista
const shoppingListEl = document.getElementById("shoppingList");
// creazione lista
const list = ["insalata", "pane", "pesce", "carne", "lievito", "pasta", "frutta"];
// creo variabile contatore
let counter = 0;
