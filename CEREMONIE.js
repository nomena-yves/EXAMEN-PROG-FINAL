function getLastDelegation(delegations) {
    let letter = "azertyuiopqsdfghjklmwxcvbn";
    let number = "1234567890";
    let str = "";
    let str1 = "";
    let array = [];
    let table = [];
    let tableau = [];
    for (let i = 0; i < delegations.length; i++) {
        for (let j = 0; j < delegations[i].length; j++) {
            if (j !== delegations[i].length - 1) {
                if ((letter.includes(delegations[i][j]))) {
                    str += delegations[i][j]
                } else if (number.includes(delegations[i][j])) {
                    str1 += delegations[i][j]
                } else if ((delegations[i][j] === " ")&&(str!=="")) {
                    array.push(str)
                    str = "" 
                }else if (delegations[i][j] === " ") {
                    table.push(str1)
                    str1 = "" 
                }
            } else {
                tableau.push(delegations[i][j])
            }
        }
    }

    return table+' '+' '+array+' '+tableau
}

console.log(getLastDelegation(["chilli 101 2","estonie 103 3"]));