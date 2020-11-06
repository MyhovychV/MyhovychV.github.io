var currentTime = new Date().getHours();

function timeCheck() {
 if (currentTime > 18 || currentTime < 6) {
 document.documentElement.classList.add('night');
 }
}
timeCheck();

function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}
