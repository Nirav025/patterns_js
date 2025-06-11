/*------------------------- Pattern-5 ----------------------------------*/

for (let i = 1; i <= 4; i++) {

    let row = "";

    for (let j = 1; j <= 7; j++) {

        if (j <= 4 - i || j >= 4 + i) {

            row += " ";  

        } else {

            row += "*";
              
        }
    }
    console.log(row);
}
