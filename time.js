alert("actualisè")console.clear()
var taille_des_entreprises="e";
switch (taille des entreprises){
case <6:
    console.log("Micro Entreprises ");
    break;
case "6> >49":
    console.log("Petite Entreprise")
case "50> >199":
    console.log("Moyenne Entreprise ")
case ">200":
    console.log("Grande Entreprise")
    function convert(minutes) { var parts = input.split(':'),
    minutes = +parts[0],
    seconds = +parts[1];
return (minutes * 60 + seconds).toFixed(3);

}

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
