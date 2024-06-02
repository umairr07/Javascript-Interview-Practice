// remove duplicate char
// Input: 'Learn more javascript dude'
// Output: "Lnmojvsciptu"

// function remove(str) {

//     let arr = str.split("")
//     // console.log(arr);
//     let obj = {}

//     for (let i = 0; i < arr.length; i++) {
//         if (!obj[arr[i]]) {
//             obj[arr[i]] = 1
//         }
//         else {
//             obj[arr[i]] = obj[arr[i]] + 1
//         }
//     }
//     // console.log(obj);

//     let ans = []

//     for (let i in obj) {
//         if (obj[i] == 1) {
//             ans.push(i)
//         }
//     }

//     return ans.join("");

// }

// let str = "Learn more javascript dude"
// console.log(remove(str));


let container = document.getElementById("apiCon")

async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=50")
    let data = await res.json()
    console.log(data);

    for (let i = 0; i < data.results.length; i++) {
        let div = document.createElement("div")

        div.innerHTML = `
            <div id="divCon">
                <div id="img">
                    <img src="${data.results[i].picture.large}"   alt="" />
                </div>
                <div id="details">
                    <h2>${data.results[i].name.first}</h2>

                    <p>${data.results[i].location.city}</p>
                    <span>${data.results[i].location.state}</span>
                </div>
            </div>
        `

        let text = document.getElementById("search");
        text.addEventListener("input", function () {

            let filter = text.value.toLowerCase()
            let name = data.results[i].name.first.toLowerCase()
            if (name.includes(filter)) {
                div.style.display = "block"
            }
            else {
                div.style.display = "none"
            }
        });

        container.appendChild(div)
    }
}


fetchData()


// function findMissing(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] + 1 !== arr[i + 1]) {
//             return arr[i] + 1;
//         }
//     }

// }

// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
// console.log(findMissing(arr));

// function remove(str) {
//     let arr = str.split("")
//     console.log(arr);

//     let obj = {}

//     for (let i = 0; i < arr.length; i++) {
//         if (!obj[arr[i]]) {
//             obj[arr[i]] = 1
//         } else {
//             obj[arr[i]] += 1
//         }
//     }

//     let ans = []

//     for (let i in obj) {
//         if (obj[i] == 1) {
//             ans.push(i)
//         }
//     }

//     return ans.join("")
// }

// let str = "Learn more javascript dude"
// console.log(remove(str));


// function mergeArrays(arr1, arr2) {
//     let ans = []

//     console.log(arr1, arr2);
//     console.log(arr2);

//     for (let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
//         ans.push(arr1[i], arr2[j])
//     }

//     let newAns = ans.sort((a, b) => {
//         return a - b;
//     })

//     return newAns
// }

// let arr1 = [11, 33, 15, 70]
// let arr2 = [19, 17, 16, 15]
// console.log(mergeArrays(arr1, arr2))



// function reverseString(str) {
//     let arr = str.split("")

//     let i = 0;
//     let j = arr.length - 1

//     while (i < j) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp

//         i++;
//         j--
//     }

//     return arr.join("")
// }


// let str = "learnmorejavascript"
// //tpircsavajeromnrael
// console.log(reverseString(str));


// async function fetchApi() {
//     let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
//     let data = await res.json()
//     // console.log(data);

//     let pokemon = data.results

//     pokemon.forEach(element => {
//         async function pokApi() {
//             let res2 = await fetch(element.url)
//             let data2 = await res2.json()
//             // console.log(data2);

//             let div = document.createElement("div")

//             div.innerHTML = `
//                 <div id="mainDiv">
//                     <div id="innerDiv" >
//                         <img src="${data2.sprites.front_shiny}" alt="" />
//                         <h2>${data2.name}</h2>
//                     </div>
//                 </div>
//               `
//             let apiContainer = document.getElementById("apiCon")

//             apiContainer.appendChild(div)

//             let search = document.getElementById("searchPok")


//             search.addEventListener("input", function () {
//                 let name = data2.name.toLowerCase()
//                 let value = search.value
//                 console.log(name);
//                 console.log(value);
//                 if (name.includes(value)) {
//                     div.style.display = "block"
//                 } else {
//                     div.style.display = "none"

//                 }
//             })


//         }
//         pokApi()


//     });
// }

// fetchApi()