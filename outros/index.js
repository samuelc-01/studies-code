import { useState } from 'react';

function Contador () {
const [contador, setContador] = useState(1);

    function adicionarNumero() {
    setContador(contador + 1);
}

    return (
        <div>
            <div>1</div>
            <button onClick={adicionarNumero}>Adicionar</button>
            </div>
    )
}

function Pagina () {<Contador />}