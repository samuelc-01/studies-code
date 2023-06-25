const promise =new Promise(function (resolve, reject) {
    return reject("error");

});

async function start() {
    try{
        const result = await promise;
        console.log(result);
    } catch (e) {
        console.log(e)
    } finally {
        console.log('finalizado')
    }
   
}
start();