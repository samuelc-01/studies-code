interface Ad {
    id: string;
    name: string;
    createdAt: Date;
}

function calculaHaQuantoTempoOAnuncioFoiPublicado(ad: Ad) {
    // calculo ha quantos dias foi postado
}

calculaHaQuantoTempoOAnuncioFoiPublicado({
    id: '1',
    name: 'teste',
    createdAt: new Date(),
})