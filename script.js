function Carro(marca, nPuertas, data) {
    this.marca = marca;
    this.nPuertas = nPuertas;
    this.data = { 
        modelo: data.modelo,
        price: data.price,
    };

    this.printInfo = () =>{
        return `Marca: ${this.marca} / Numero de puertas: ${this.nPuertas} / Modelo: ${this.data.modelo} 
        / Precio: ${this.data.price}€`;
    }
}

let carros = [];
let arrayEjercicio;
let result;

const nombres = ["camilo", "judit", "guillem", "jerry", "matt", "ingrid", "alessandro", "gary", "alejandra", "andres"];



for(let i = 0; i<document.forms.length; i++){
    let form = document.forms[i];
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        switch(form.id){
            case "ejercicioSuma":
                try{
                    result = parseInt(form[0].value) + parseInt(form[1].value);
                    showResult(form, "Rseultado:");
                }
                catch(err){
                    console.log("Internal Error");
                    console.log(err);
                }
            break;

            case "ejercicioParImpar":
                try{
                    if(form[0].value % 2 == 0){
                        result = `${form[0].value} es par`;
                    }
                    else{
                        result = `${form[0].value} es impar`;
                    }
                    showResult(form, "Rseultado:");
                }
                catch(err){
                    console.log("Internal Error");
                    console.log(err);
                }
            break;

            case "ejercicioCrearCarro":
                console.log(form)
                try{
                    let dataObj = {
                        modelo: form[2].value,
                        price: form[3].value
                    }
                    carros.push(new Carro(form[0].value, form[1].value, dataObj))
                    result = carros[carros.length -1].printInfo();
                    showResult(form, "Carro creado:");
                }
                catch{
                    console.log("Empty data");
                }
            break;

            case "ejercicioMostrarCarro":
                try{
                    result = carros[form[0].value - 1].printInfo();
                    showResult(form, "Carro encontrado:");
                }
                catch{
                    console.log("Empty position");
                    form.nextElementSibling.innerHTML = `Carro no encontrado en la posición: ${form[0].value}`;
                } 
            break;

            case "ejercicioCrearArray":
                try{
                    arrayEjercicio = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
                    result = arrayEjercicio;
                    showResult(form, "Array credado:");
                }
                catch(err){
                    console.log("Internal Error");
                    console.log(err);
                }
            break;

            case "ejercicioBorrarPares":
                try{
                    result = arrayEjercicio.filter(n => n % 2 !== 0);
                    showResult(form, "Array resultado:");
                }
                catch{
                    console.log("Array no Creado");
                    form.nextElementSibling.innerHTML = "Array no Creado";
                }
            break;

            case "ejercicioDevolverMayor":
                try{
                    result = (Math.max(...arrayEjercicio));
                    showResult(form, "Numero mayor:");
                }
                catch{
                    console.log("Array no Creado");
                    form.nextElementSibling.innerHTML = "Array no Creado";
                }
            break;

            case "ejercicioDevolverMenor":
                try{
                    result = (Math.min(...arrayEjercicio));
                    showResult(form, "Numero menor:");
                }
                catch{
                    console.log("Array no Creado");
                    form.nextElementSibling.innerHTML = "Array no Creado";
                }
            break;

            case "ejercicioMinuscula":
                try{
                    result = form[0].value.toLowerCase();
                    showResult(form, "Resultado:");
                }
                catch(err){
                    console.log("Internal Error");
                    console.log(err);
                    form.nextElementSibling.innerHTML = "Error";
                }
            break;

            case "ejercicioMayuscula":
                try{
                    result = form[0].value.toUpperCase();
                    showResult(form, "Resultado:");
                }
                catch(err){
                    console.log("Internal Error");
                    console.log(err);
                    form.nextElementSibling.innerHTML = "Error";
                }
            break;

            case "ejercicioMayusculaArray":
                try{
                    result = nombres.map(el => toUpperCaseFirstletter(el));
                    showResult(form, "Resultado:");
                }
                catch(err){
                    console.log("Internal Error");
                    console.log(err);
                    form.nextElementSibling.innerHTML = "Error";
                }
            break;

            case "ejercicioListaNombres":
                try{
                    const div = form.nextElementSibling;

                    removeDiv(div);

                    div.appendChild(document.createElement('ul'));
                    div.firstElementChild.classList.add('list-group');
                    div.firstElementChild.classList.add('list-group-flush');

                    const ul = form.nextElementSibling.firstElementChild;
                    nombres.forEach(el => {
                        console.log(el)
                        ul.appendChild(document.createElement('li'));
                        ul.lastElementChild.classList.add('list-group-item');;
                        ul.lastElementChild.innerHTML = el;
                    });
                }
                catch(err){
                    console.log("Internal Error");
                    console.log(err);
                    form.nextElementSibling.innerHTML = "Error";
                }
            break;

            case "ejercicioArrayLength": 
                try{
                    result = arrayEjercicio.length;
                    showResult(form, "Resultado:");
                }
                catch{
                    console.log("Array no Creado");
                    form.nextElementSibling.innerHTML = "Array no Creado";
                }
            break;

            case "ejercicioRellenarTabla":
                try{

                    const div = form.nextElementSibling;

                    removeDiv(div);
                    
                    const keysArrayCharacters = Object.keys(arrayCharacters[0]);

                    div.appendChild(document.createElement('table'));
                    div.firstElementChild.classList.add('table');
                    div.firstElementChild.classList.add('table-hover');

                    div.firstElementChild.appendChild(document.createElement('thead'));
                    div.firstElementChild.firstElementChild.appendChild(document.createElement('tr'));
                    getelementbyId
                    const trElement = div.firstElementChild.firstElementChild.firstElementChild;
                    keysArrayCharacters.forEach(el => {
                        if(el != "id" && el != "type"){
                            const th = document.createElement('th');
                            trElement.appendChild(th);
                            trElement.lastElementChild.innerHTML = toUpperCaseFirstletter(el);
                        }
                    });
                    
                    div.firstElementChild.appendChild(document.createElement('tbody'));

                    const tbodyElement = div.firstElementChild.lastElementChild;
                    for (let i = 0; i < arrayCharacters.length; i++) {
                        const tr = document.createElement('tr');
                        tbodyElement.appendChild(tr);
                        keysArrayCharacters.forEach(el => {
                            if(el != "id" && el !="type"){
                                let property = arrayCharacters[i][el];
                                
                                const td = document.createElement('td');
                                tbodyElement.lastElementChild.appendChild(td);
                                tbodyElement.lastElementChild.lastElementChild.innerHTML = property;
                            }
                            
                        });
                    }
                }
                catch(err){
                    console.log("Internal Error");
                    console.log(err);
                    form.nextElementSibling.innerHTML = "Error";
                }
            break;
        }
    });
}

function showResult(element, string){
    element.nextElementSibling.innerHTML = `${string} ${result}`;
}

const removeDiv = (el) => {
    if(el.hasChildNodes()){
        el.removeChild(el.firstElementChild);
    }
}

const toUpperCaseFirstletter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}