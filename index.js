const mouses = document.querySelectorAll('.mouse');



window.addEventListener('mousemove', (e) => {

    //?Pour chaque souris, on va changer la position en fonction de la position de la souris
    mouses.forEach((mouse) => {
        mouse.style.left = `${e.pageX}px`;
        mouse.style.top = `${e.pageY}px`;
    });
    }
);