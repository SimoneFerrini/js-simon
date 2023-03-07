/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi.

-creare pulsante play--------------------ok
-creare elem tasto conferma---------------ok
-creare variabili per salvare input-----------ok
-creare variabile score = 0;-----------------ok

al click di play:
    -reset display
    -creare celle con numero random da visualizzare
    -salvare i numeri in un array
    -dopo 10 secondi far scomparire dal video i numeri
    -dopo 11 secondi fare comparire gli input e tasto conferma
-al click di conferma
    -assegnare i valori input a var
    -SE input [i] == arrayRandom[i]
        -score++;
        -arrayGiusto.push input[i]
    -ALTRIMENTI
        -arrayGiusti.push(X);
    -mostrare a schermo score e arrayGiusti


*/

const btnPlayEl = document.getElementById("btn-play");
const btnConfermaEl = document.getElementById("btn-conferma");
let input1El = document.getElementById("input1");
let input2El = document.getElementById("input2");
let input3El = document.getElementById("input3");
let input4El = document.getElementById("input4");
let input5El = document.getElementById("input5");
let score = 0;