/*-------------------------- Pattern-7 --------------------------*/



for (let i = 1; i <= 4; i++) {

    let row = "";

    for (let j = 1; j <= 4; j++) {

        if (j <= 4 - i) {

            row += " ";

        } else {

            row += "*";

        }
    }
    console.log(row);
}


for (let i = 4 - 1; i >= 1; i--) {

    let row = "";

    for (let j = 1; j <= 4; j++) {

        if (j <= 4 - i) {

            row += " ";

        } else {

            row += "*";
            
        }
    }
    console.log(row);
}
