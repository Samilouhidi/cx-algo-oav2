function e02(array) {
    let nb1, nb2;
    let compteur;
    for(let i = 1; i < array.length; i++) {
        compteur = i;
        do {
            if(array[compteur] < array[compteur-1]) {
                nb1 = array[compteur];
                nb2 = array[compteur-1]
                array[compteur] = nb2;
                array[compteur-1] = nb1;
            }
            compteur -= 1;
        } while (compteur > 0)
    }
    return array;
}

console.log(e02([10, 9, 8, 7, 6, 4, 3, 5, 1, 2]))