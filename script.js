const onglets = Array.from(document.querySelectorAll('.onglets')); // Transofrming my collections of tabs into an array, in order to manipulate them later on
console.log(onglets);
const contenus = Array.from(document.querySelectorAll('.contenu')); // Transofrming my collections of tabs into an array, in order to manipulate them later on
const lienTitre = document.querySelector('.lowercase');


//Adding an event listener to each of my tabs : 
onglets.forEach(onglet => {

    onglet.addEventListener('click', (e) => {

        //When we click on a tab, we will check every tab and ask : "did I click on you ? If yes, add a class 'active content' to the tab + add the class 'active-content' to the content corresponding to the tab (since they share the same index). 
        //If I didn't click on you, remove the classes." .

        for (let i = 0; i < onglets.length; i++) {
            
            if (onglets[i] === e.target) {

                onglets[i].classList.add('active-onglets');
                contenus[i].classList.add('active-contenu');

            } else {
                onglets[i].classList.remove('active-onglets');
                contenus[i].classList.remove('active-contenu');
            }
            
        };
    });
});

//Adding a redirecting link to the title : (credits Mangeuse d'Herbe)

lienTitre.addEventListener('click', () => {
    window.open('https://www.mangeusedherbe.net/', '_blank');
});
