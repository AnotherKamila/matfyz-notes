(function(){

	function each_el(tagname, fn, root) {
		if (root == null) root = document;
		var els = root.getElementsByTagName(tagname);
		for (var i = 0; i < els.length; ++i) {
			fn(els[i]);
		}
	}

	/* === table of contents ================================================ */
	function generate_toc(target, max_level) {
		var select = {}; // set of interesting tag names
		for (var i = 1; i <= max_level; ++i) select['h'+i] = true;

		toc = '';
		each_el('*', function(el) {
			if (el.nodeName.toLowerCase() in select) {
				console.debug(el);
				var a = el.textContent.link('#'+el.id);
				a.className = 'lvl'+el.nodeName.charAt(1);
				toc += '<li>'+a+'</li>';
			}
		}, target.parentNode);
		target.innerHTML = '<ul>'+toc+'</ul>';
	}
	generate_toc(document.getElementById('toc'), 3);

	/* === typography ======================================================= */
	function add_class_on_kw(tagname, kw, classname) {
		each_el(tagname, function(el) {
			if (el.textContent.indexOf(kw) == 0) {
				el.textContent = el.textContent.replace(kw, '');
				el.classList.add(classname);
			}
		})
	}

	add_class_on_kw('dt', 'DEF:', 'def');
	add_class_on_kw('p', 'D:', 'proof');

})();
