

const clear = (object) => {
    if (object.name === null) {
        delete object.name;
    }    else if(object.surname === null) {
        delete object.surname;
    }    else if(object.age === null) {
        delete object.age;
    } else {
        console.log("Está correto");
    }
    console.log()
}

clear({name: "Samuel", surname: null, age: 18})