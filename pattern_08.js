/*-------------------- Pattern-8 ----------------------------*/



for (let i = 1; i <= 4; i++) {

    let row = "";

    for (let j = 1; j <= 2 * 4 - 1; j++) {

        if (j === 4 - i + 1 || j === 4 + i - 1 || i === 4) {

            row += "*";

        } else if (j > 4 - i + 1 && j < 4 + i - 1) {

            row += " ";

        } else {

            row += " ";

        }
    }

    console.log(row);
}
