// let tab = [1,2,3];
//         afficher(tab);
//         let tab2 = tab;

// tab2[1] = 4;
// afficher(tab);
// afficher(tab2);
// le tableau 1 a ete modifié aussi a cause du changement de l index 1 du tableau 2
// 
let tab = [1,2,3,9];
let tab2 = tableauCopier(tab);
        afficher(tab2);

tab2[1] = 4;
afficher(tab);
afficher(tab2);

// grace a la fonction que l on a creer dans library, on a creer un tableau copié sans modification 
// du tableau d orgigne
