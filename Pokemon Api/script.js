let container = document.getElementById("container")

let colors = {
    grass: "rgb(22, 171, 22)",
    fire: "rgb(255, 98, 0)",
    water: "rgb(0, 183, 255)",
    bug: "#00ffa6",
    normal: "#ebb5b5",
    poison: "#fe0000",
    electric: "#0033fe",
    ground: "#a52a2a",
    fairy: "#e41165",
    fighting: "#0400ff",
    psychic: "#d4ff00",
    rock: "#ff7300",
    ghost: "#a4a4ff",
    ice: "#74d0f4",
    dragon: "#bc1900"
}

async function fetchApi() {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    let data = await res.json()
    console.log(data);

    let arr = data.results
    console.log(arr);



    arr.forEach(element => {
        async function fetchPok() {
            let newRes = await fetch(element.url)
            let newData = await newRes.json()
            console.log(newData);

            let div = document.createElement("div")

            div.innerHTML = `
            <div class="w-[200px] flex flex-col justify-center items-center p-2 rounded-lg shadow-xl">
                <p>${newData.id}</p>
                <img src=${newData.sprites.front_default} alt="" />
                <p>${newData.name}</p>
            
            </div>

        `
            div.style.backgroundColor = colors[newData.types[0].type.name]
            container.appendChild(div)
        }

        fetchPok()

    });

}

fetchApi()