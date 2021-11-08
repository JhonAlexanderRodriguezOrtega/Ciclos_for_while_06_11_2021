
    // debugger;
    Ciclo5:
    for (let i = 0; i <= 5; i++) {
        if(i==3){
            continue Ciclo5;
        }
        console.log(i);
    }

    
    
    
    
    let data = ["Miguel", "Jhon", "Camila", "Cesar", "Alejandro"];
    
    for (let indice in data){
        console.log(`Indice del array ${indice}`);
    }
    console.log(" ");
    for (let datos of data){
        console.log(`Valor del array ${datos}`);
    }
    console.log(" ");
    for(let [idice, valor] of Object.entries(data)){
        console.log(`Indice: ${idice}, Valor: ${valor} del array`);
    }








    for(let i = true; i;){
        i = parseInt(prompt(`Deseas repetir el ciclo
            1. Si
            0. No
        `));
    }





    for (let i = 0; i < 5; i++) {
        console.log(`Variabole de avance ${i}`);
        
    }

    