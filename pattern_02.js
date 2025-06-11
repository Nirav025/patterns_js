/*-------------------------- Pattern-2 --------------------------*/



for (let i = 1; i <= 4; i++) {

    let row = "";

    for (let j = 1; j <= 4; j++) {

        if ((i == 2 || i == 3) && (j == 2 || j == 3)) {

            row += "  "; 
        } else {
            row += "* ";
        }
    }
    console.log(row);
}
