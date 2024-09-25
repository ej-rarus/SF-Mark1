const onBtn = document.querySelector('#btn-off');
const offBtn = document.querySelector('#btn-on')
const menuBar = document.querySelector('.sidebar-wrap');
onBtn.onclick = function() { 
    menuBar.style.display="flex";
    onBtn.style.display="none";
    offBtn.style.display="flex";
};

offBtn.onclick = function() {
    menuBar.style.display="none";
    offBtn.style.display="none";
    onBtn.style.display="flex";
};