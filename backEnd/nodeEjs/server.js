const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil",
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizer HTML",
        },
        {
            title: "M",
            message: "uito fácil de usar",
        },
        {
            title: "A",
            message: "bout this is not make sure",
        },
        {
            title: "I",
            message: " don't like write css language, is very bullshit, but... when i see ejs in first time i love it",
        },
        {
            title: "S",
            message: "intaxe simples",
        },
    ];

    const subtitle= "Uma linguagem de modelagem para criação de  página HTML utilizando JavaScript"
    res.render("pages/index", {
        qualitys: items, 
        subtitle: subtitle,
    }); 


})

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando")