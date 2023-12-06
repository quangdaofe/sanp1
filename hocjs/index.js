let xucsac = [1, 2, 3, 4, 5, 6];
const Sac = (array) => Math.floor(Math.random() * array.length);
let h = [12, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const ketqua = document.querySelector(".ketqua");
let check = 12;
const button = document.querySelector(".button");
button.addEventListener("click", function () {
    const s = setInterval(() => {
        ketqua.innerHTML = (check);
        check -= 1;
    }, 1000);
    setTimeout(() => {
        clearInterval(s);
        check = 12;
        const so = `
    <ul>
        <li>${xucsac[Sac(xucsac)]}</li>
        <li>${xucsac[Sac(xucsac)]}</li>
        <li>${xucsac[Sac(xucsac)]}</li>
    </ul>
`
        ketqua.innerHTML = (so);
    }, 13000);
})