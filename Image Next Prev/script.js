let imageSrc = document.getElementById("imageSrc")
let prevBtn = document.getElementById("previous")
let nextBtn = document.getElementById("next")


let arr = ["https://imgs.search.brave.com/j6bVwwo1cJpdpqyBU0ip9l3GjXSh6i_eRyLgt8f_Vvc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzYxMC9yYW5k/b20tMTU3NDM5MS5q/cGc_Zm10", "https://imgs.search.brave.com/Z2H1yiJhN-Wqw2-LpArNO3BVCuf7eShQE_SKs0w5Vwg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI5/MzQyNTEwL3Bob3Rv/L2luZmluaXRlLXJh/bmRvbS1udW1iZXJz/LWJhY2tncm91bmQu/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9Ulg2NjNG/UUtyV0lJdktFMklW/b0k0MkZhZUhHaVl0/RkdRaVF4eEJtSlVQ/ST0", "https://imgs.search.brave.com/5Rzq4vrjqqQPS7Vb-Pp6voSUBzJRSe2mwMJdk3Kjqxc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/MTEyMDQxNy9waG90/by9ncm91cC1vZi1t/dWx0aS1jb2xvcmVk/LWRpY2VzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Pb2pa/cU1tLXlPYlJfc21X/NG5ia2RjZ2VfY0pz/cFRsWno4bTRScm9K/dnZJPQ"]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let index = 0

prevBtn.addEventListener("click", function () {
    console.log(index);

    if (index < 0) {
        index = arr.length - 1;
        imageSrc.src = arr[index]
        index--
    } else {
        imageSrc.src = arr[index]
        index--
    }
})

nextBtn.addEventListener("click", function () {
    index++
    console.log(index);

    if (index >= arr.length) {
        index = 0
        imageSrc.src = arr[index]
    } else {
        imageSrc.src = arr[index]
    }
})