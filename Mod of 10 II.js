// You are given a number stored in a variable with the namenum

// Find out the value obtained from the expressioni % 10, whereiconsists of all the values from 1 to the value stored innum, includingnum

function modeof10(num) {
    for(i=1; i<=num; i++){
        console.log(i%10);
    }
}
