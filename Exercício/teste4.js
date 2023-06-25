/*const meusDados = nome
nome ("Samuel");

const dadosDosUsuarios = [
    names =  ("Samuel", "Marcia", "Karine", "Jean"),
    adminitradores = ("Jean", "Karine"),
]

let admin = () => {
    if(dadosDosUsuarios.adminitradores === true){
        console.log("Lista de usuários" + admin + names)
        }
}
*/



const persons = [

    {itsMe: true, admin: true, name: "Samuel"},
    {itsMe: false, admin: false, name: "Nicolly"},
    {itsMe: false, admin: true, name: "Mateus"},
    {itsMe: false, admin: true, name: "Gustavo"},
    {itsMe: false, admin: false, name: "Joaquim"},
    {itsMe: false, admin: false, name: "Pedro"},
    {itsMe: false, admin: false, name: "Eduardo"},
];


const organizer = (personsList) => {
    // se return <0 a vem primeiro que o b.
    // se return >0 b vem primeiro que o a 
    personsList.sort((a, b) => {
        if(a.itsMe === true && b.itsMe === false){
            return -1;
        }
    });
    console.log(personsList);

    personsList.sort((a, b) => {
        if(a.admin === true && b.admin === false){
            return -1;
        }
    });
};

organizer (persons);
