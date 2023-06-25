const stringCounter = (letter, string) => {
    var cont = 0
    for(var i in string){
        console.log(string[i]);
        if(letter == string[i]) {
            cont++;
        }
    }
    console.log("Essa letra aparece um total de ")
};
stringCounter("o", "Samuel");