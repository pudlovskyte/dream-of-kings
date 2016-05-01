var meOrAncestor = function(el, f){
	return f(el) ||
		(el.parentElement && meOrAncestor(el.parentElement, f))
};

var isElementInsideMenu = function(el){
	return meOrAncestor(el,
		function(elem){ return elem.getAttribute('id') === 'menu'; });
};

var isLinkToMenu = function(el){
	return meOrAncestor(el,
		function(elem){ return elem.getAttribute('href') === '#menu'; });
};

var menu = document.getElementById('menu');

var showMenu = function(){
	menu.style.display = 'flex';
	menu.focus();
};

var hideMenu = function(){
	menu.style.display = 'none';
};

document.querySelector('[href="#menu"]').addEventListener('click', showMenu);

document.body.addEventListener('click', function(e){
	if (isElementInsideMenu(e.target) || isLinkToMenu(e.target))
		return;
	hideMenu();
});

menu.addEventListener('click', function(e){
	if (e.target.getAttribute('href'))
		hideMenu();
});

var isEventKeyEscape = function(e){
	if (e.key)
		return e.key === 'Escape';
	return e.which === 27;
};

document.body.addEventListener('keyup', function(e){
	if (isEventKeyEscape(e))
		hideMenu();
});

