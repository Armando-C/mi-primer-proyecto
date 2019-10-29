$(document).ready(function(){
$(".navbar-toggler, .overlay").click(function(){
$(".mobileMenu, .overlay").toggleClass("open");
$("span").toggleClass('fa fa-close').toggleClass('fa fa-navicon');
});
$('.navbar-nav li a').on('click', function(){
    $('li a.activo').removeClass('activo');
    $(this).addClass('activo');
});
$(".circulo").click(function(){
$(this).addClass('circulo2');
	})
 var id  = localStorage.Usuario;
       document.getElementById('h6User').innerHTML = id;

});
