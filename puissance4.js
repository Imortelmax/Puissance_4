let plateau = new Array();
let contenu = document.getElementById('board');
let currentPlayer = 1;
let ligneMoins = document.getElementById('ligne-moins');
let lignePlus = document.getElementById('ligne-plus');
let colMoins = document.getElementById('colonne-moins');
let colPlus = document.getElementById('colonne-plus');


let player1v = 0;
let player2v = 0;
let ligne = 6;
let colonne = 7; 

// créer le tableau de jeu  
function plato(ligne, colonne){
    plateau = new Array(ligne).fill(null).map(() => new Array(colonne).fill(0));
    let jeu = document.createElement('table');
    jeu.id = "test"
    for (i = 0; i < ligne; i++){
        plateau[i] = new Array;
        
        let lignes = document.createElement('tr');
        lignes.id = "L" + i;
        
        for (j = 0; j < colonne; j++){
            plateau[i][j] = 0;
            
            let colonnes = document.createElement('td');
            colonnes.id = "L" + i + "C" + j; 
            
            lignes.appendChild(colonnes);
        };
        jeu.appendChild(lignes);
    };
    contenu.appendChild(jeu);
}

// changer nb de ligne et de colonne
let nbligne = document.getElementById('nbrow');
nbligne.innerHTML = `Nb de lignes : ${ligne}`;
let nbcol = document.getElementById('nbcol');
nbcol.innerHTML = `Nb de colonnes : ${colonne}`;

ligneMoins.addEventListener('click', () => {
    if (ligne > 1) {
        ligne--;
        nbligne.innerHTML = `Nb de lignes : ${ligne}`;
        nouvoTableau();
    }
})
lignePlus.addEventListener('click', () => {
    ligne++;
    nbligne.innerHTML = `Nb de lignes : ${ligne}`;
    nouvoTableau();
});

colMoins.addEventListener('click', () => {
    if (colonne > 1) {
        colonne--;
        nbcol.innerHTML = `Nb de colonnes : ${colonne}`;
        nouvoTableau();
    }
})
colPlus.addEventListener('click', () => {
    colonne++;
    nbcol.innerHTML = `Nb de colonnes : ${colonne}`;
    nouvoTableau();
});

function nouvoTableau() {
    contenu.innerHTML = "";
    plato(ligne, colonne);
    changementCouleur();
}

// couleur des cellules joueur 1 puis deux
function changementCouleur(){
    let colorcell = document.querySelectorAll('td');
    
    for (let cell of colorcell){
        cell.onclick = function() {
            let col = parseInt(this.id.split("C")[1]); 
            let row = trouverLigneDisponible(col); 
            
            if (row !== -1) {
                let targetCell = document.getElementById(`L${row}C${col}`);
                
                if (currentPlayer === 1) {
                    targetCell.style.backgroundColor = '#FF0000'; 
                    plateau[row][col] = 1;
                    currentPlayer = 2;
                } else {
                    targetCell.style.backgroundColor = '#FFFF00'; 
                    plateau[row][col] = 2;
                    currentPlayer = 1;
                }
                
                if (checkWin(row, col)) { 
                    setTimeout(() => {
                        alert(`Joueur ${plateau[row][col]} gagne !`);
                        if (currentPlayer === 2){
                            player1v++;
                            p1v.innerHTML = "";
                            p1v.innerHTML = player1v;
                        }else{
                            player2v++;
                            p2v.innerHTML = "";
                            p2v.innerHTML = player2v;
                        }
                        newGame();
                    }, 100);
                }
            }
        }
    }
}

function trouverLigneDisponible(col) {
    for (let i = ligne - 1; i >= 0; i--) { 
        if (plateau[i][col] === 0) {
            return i; 
        }
    }
    return -1; 
}

// verification de la victoire
function checkWin(row, col) {
    let player = plateau[row][col];
    if (player === 0) return false;

    function count(dx, dy) {
        let r = row, c = col, count = 0;
        while (r >= 0 && r < ligne && c >= 0 && c < colonne && plateau[r][c] === player) {
            count++;
            r += dx;
            c += dy;
        }
        return count;
    }


    if (count(0, 1) + count(0, -1) - 1 >= 4 ||  
        count(1, 0) + count(-1, 0) - 1 >= 4 ||  
        count(1, 1) + count(-1, -1) - 1 >= 4 || 
        count(1, -1) + count(-1, 1) - 1 >= 4) { 
        return true;
    }

    return false;
}

let p1v = document.getElementById('P1');
let p2v = document.getElementById('P2');

p1v.innerHTML = player1v;
p2v.innerHTML = player2v;
    
function newGame(){
    contenu.innerHTML = "";
    plato(ligne, colonne);
    changementCouleur();
    currentPlayer = 1;
}

let start = document.querySelector('.game');
start.addEventListener('click',() => {
    newGame()
});