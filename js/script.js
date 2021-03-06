// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.


$(document).ready(
  function(){

    const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];

    const colorArray = ["orange", "red", "blue"];

    // ARRAY CON TUTTE EL TIPOLOGIE
    const newArray = getTypes(icons);
    // ARRAY CON TUTTE LE TIPOLOGIE SENZA DUPLICATI
    const noDuplicateTypes = deleteDuplicateTypes(newArray);

    // AGGIUNTA CHIAVE COLORE A ICONS IN TARGETICONS
    const targetIcons = icons.map(
      (element) => {
        const newElement =
        {
          ...element,
          color: chooseColor(element, noDuplicateTypes, colorArray)
        }
        return newElement;
      }
    );
    console.log(targetIcons);

    
    const select = $("#select");

    // AGGIUNTA OPZIONI DINAMICHE A SELECT
    dinamicOptions(noDuplicateTypes, select);

    // STAMPA SE VIENE CAMBIATA LA SELECT
    select.change(
      function() {
        var selectedIcons = activeSelection(targetIcons, select);
        console.log("selected", selectedIcons);
        print(selectedIcons, iconsContainer);
      }
    );

    // STAMPA INIZIALE SENZA NESSUN CAMBIO ALLA SELECT
    const iconsContainer = $(".icons-container");
    print(targetIcons, iconsContainer);

  }
);

//------------------------------------------------------//
// FUNZIONI

function print(array, container){
  container.html("");
  array.forEach(
    (element, index) => {
      $(container).append(`
        <div class="icon">
          <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
          <div class="name" style="color:${element.color}">
            ${element.name}
          </div>
        </div>
      `)
    }
  );
}


function getTypes(array){
  let typesArray = array.map(
    (element) => {
      return element.type;
    }
  );
  return typesArray;
}


function deleteDuplicateTypes(array){
  const deleteArray = [];
  array.forEach(
    (element) => {
      if(deleteArray.includes(element) == false){
        deleteArray.push(element);
      }
    }
  );
  return deleteArray;
}


function chooseColor(object, arrayTypes, arrayColors){
  // VERSIONE CON FOR
  for(var i = 0; i < arrayTypes.length; i++){
    if(object.type == arrayTypes[i]){
      return arrayColors[i];
    }
  }
// VERSIONE CON FOR EACH
//   var color;
//   arrayTypes.forEach(
//     (element, index) => {
//       if(object.type == element){
//         color = arrayColors[index];
//         console.log(color);
//       }
//     }
//   );
//   return color;
}


function dinamicOptions(array, selector){
  array.forEach(
    (element) => {
      // console.log(element);
      selector.append(
        `
        <option>${element}</option>
        `
      );
    }
  );
}


function activeSelection(arrayObjects, selector){
  var newArray = [];
  arrayObjects.forEach(
    (element) => {
      if(selector.val() == element.type) {
        newArray.push(element);
      } else if(selector.val() == "All") {
        newArray = arrayObjects;
        return newArray;
      }
    }
  );
  return newArray;
}
