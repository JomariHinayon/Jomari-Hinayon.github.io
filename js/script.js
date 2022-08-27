
// Navbar Burger Menu Items
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});

// Dark Mode-------------->

// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector('.moon');
// Theme Vars
const useTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia("(prefers-color-scheme:dark").matches;
// Icon toggling
const iconToggle = () => {
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
}
// Initial Theme Check
const themeCheck = () => {
    if(useTheme === 'dark' || (!useTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        return;
    }
    sunIcon.classList.add('hidden');
}
// Manual Theme Switch
const themeSwitch = () => {
    if(document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem('theme', "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    iconToggle();
}
// call theme switching on clicking buttons
sunIcon.addEventListener('click', () => {
    themeSwitch();
});
moonIcon.addEventListener('click', () => {
    themeSwitch();
});
//Invoke theme in initial load
themeCheck();

// <---------------------------------------------