const btnDarkMode = document.querySelector(".dark-mode-btn");
const btnRepo = document.querySelector(".btn-outline");


//1. Перевірка темної теми на рівні системних налаштувань

if (window.matchMedia && window.matchMedia("(prefers-colors-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
};

//2. Перевірка темної теми в LocalStorage
if (localStorage.getItem('darkMode') === "dark") {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
};


//3. Якщо міняються системні налаштування - зміна теми
window
    .matchMedia("(prefers-colors-scheme: dark)")
    .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme = "dark") {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "dark");
        } else {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
            localStorage.setItem("darkMode", "dark");
        }
    });


//4. Включення нічного/денного режиму по кнопці
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active")
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark")
    } else {
        localStorage.setItem("darkMode", "light")
    }
};


// Alert при натисканні на кнопку посилання на репозиторій

btnRepo.addEventListener('click', function () {
    Swal.fire({
        title: '<strong>This project is under development!<br> <br> <u>Expect it soon ;)</u></strong>',
        icon: 'info',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!'
    })
});