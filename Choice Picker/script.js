let txtArea = document.getElementById("textarea")
let container = document.getElementById("container")

function debouncing(dbFun, delay) {
    let timer;
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            dbFun()
        }, delay)
    }
}

function dbFun() {
    // Clear the container before appending new content
    container.innerHTML = "";

    // Split the text area value by comma
    let values = txtArea.value.split(',');
    console.log(values);

    // Create and append spans for each segment
    values.forEach((value, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <div class="flex">
                 <span class="bg-[#F0922A] p-2 text-[#fff] rounded-full">${value}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

txtArea.addEventListener("keyup", debouncing(dbFun, 10));
