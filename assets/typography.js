(function(){
	function add_class_on_kw(tagname, kw, classname) {
		var els = document.getElementsByTagName(tagname);
		console.debug(els);
		for (var i = 0; i < els.length; ++i) {
			if (els[i].textContent.indexOf(kw) == 0) {
				els[i].textContent = els[i].textContent.replace(kw, '');
				els[i].classList.add(classname);
				console.debug(els[i]);
			}
		}
	}

	add_class_on_kw('dt', 'DEF:', 'def');
	add_class_on_kw('p', 'D:', 'proof');
})();
