const panels = document.querySelectorAll('.panel');


function removeAcitiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAcitiveClasses();
        panel.classList.toggle('active');
    });
})