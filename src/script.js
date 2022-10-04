

console.log('hi');

const darkBtn = document.querySelector('#dark-btn');


const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");


const iconToggle = () => {
    darkBtn.classList.toggle("display-none");
};


const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        darkBtn.classList.add("display-none");
        return
    }
    darkBtn.classList.add("display-none");
}

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark")
    iconToggle();
}

darkBtn.addEventListener("click", () => {
    console.log("click");
    themeSwitch();
})

themeCheck();


