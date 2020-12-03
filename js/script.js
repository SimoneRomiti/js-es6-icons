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

    const newArray = getTypes(icons);
    const noDuplicateTypes = deleteDuplicateTypes(newArray);
    // console.log("prova", noDuplicateTypes);

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

    const iconsContainer = $(".icons-container");
    // console.log(iconsContainer);
    print(targetIcons, iconsContainer);

  }
);

//------------------------------------------------------//
// FUNZIONI

function print(array, container){
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
  for(var i = 0; i < arrayTypes.length; i++){
    if(object.type == arrayTypes[i]){
      return arrayColors[i];
    }
  }
}
