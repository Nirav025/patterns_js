/*--------------------------- Pattern-3 ----------------------------*/


for (let i = 1; i <= 4; i++) {
    
    let row = "";
    for (let j = 1; j <= 4 + i - 1; j++) {
        
        if (j < i) {
            row += " ";
        } else {
            row += "*";
        }
    }
    console.log(row);
}
