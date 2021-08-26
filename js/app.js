function getRandomCocktail(num){
    for(let i = 0; i < num; i++){
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        const fetchDrinks = fetch(url);
        fetchDrinks.then(data => {
            data.json().then(drinks => {
                displayDrink(drinks.drinks[0]);
                console.log(drinks.drinks[0]);

        })
    })
    }
    
}

function displayDrink(d){
        let drink = {};
        for(let key in d){
            if(d[key] != null){
                drink[key] = d[key];
            }
        }
        console.log(drink);
        // Deconstruct the object and name the variables different from the properties.
        const {strDrinkThumb, strDrink : name, strInstructions} = drink;

    const div = document.getElementById("cocktail-cards");

    const card = document.createElement("div");
    card.className = "col-2 flip-card mx-auto";

    const cardInner = document.createElement("div");
    cardInner.className = "flip-card-inner";

    const cardFront = document.createElement("div");
    cardFront.className = "flip-card-front";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-center";

    const imgSection = document.createElement("div");
    imgSection.className = "mb-3";

    const img = document.createElement("img");
    img.className = "mx-auto img-fluid w-50";
    img.src = strDrinkThumb;

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title mb-3 text-lighy";
    cardTitle.innerHTML = name;

    const cardBack = document.createElement("div");
    cardBack.className = "card-body text-center flip-card-back";
    
    const ingredients = document.createElement("div");
    ingredients.className = "text-light";
    for(let key in drink){
        if(key.startsWith("strIngredient")){
            ingredients.innerHTML += drink[key] + "<br />";
        }
    }
   
    const instructions = document.createElement("p");
    instructions.className = "text-light";
    instructions.innerHTML = strInstructions
     

    const cardText = document.createElement('p');
    cardText.className = "card-text text-dark";
    cardText.innerHTML = strInstructions;

    // Front of the card
    imgSection.appendChild(img);
    cardBody.appendChild(imgSection);
    cardBody.appendChild(cardTitle);
    cardFront.appendChild(cardBody);

    // Back of the card
    cardBack.appendChild(ingredients);
    cardBack.appendChild(instructions);


    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    div.appendChild(card);
}