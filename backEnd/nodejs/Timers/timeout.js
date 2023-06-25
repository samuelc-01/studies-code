// setInterval irá rodar uma função N vezes
// depois de X milissegundos
// clearINterval irá cancelar um setInterval registros

const timeOut = 500
const checking = () => console.log('To vendo !!!')


let interval = setInterval(checking, timeOut)


setTimeout(() => clearInterval(interval), 3000)