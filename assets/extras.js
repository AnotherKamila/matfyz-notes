(function(){

	content = document.getElementById('content');

	function each_el(tagname, fn, root) {
		if (root == null) root = content;
		var els = root.getElementsByTagName(tagname);
		for (var i = 0; i < els.length; ++i) {
			fn(els[i]);
		}
	}

	/* === table of contents, header links ====================================================== */
	function generate_toc(target, max_level) {
		var select = {}; // set of interesting tag names
		for (var i = 1; i <= max_level; ++i) select['h'+i] = true;

		toc = '';
		each_el('*', function(el) {
			if (el.nodeName.toLowerCase() in select) {
				// TOC
				var lvl = el.nodeName.charAt(1);
				toc += '<li class="lvl'+lvl+'">'+el.textContent.link('#'+el.id)+'</li>';

				// header links
				el.innerHTML += '☍'.link('#'+el.id);
			}
		}, target.parentNode);
		target.innerHTML = '<ul>'+toc+'</ul>';
	}
	generate_toc(document.getElementById('toc'), 3);

	/* === keywords ============================================================================= */
	function each_el_on_kw(tagname, kw, fn) {
		each_el(tagname, function(el) {
			if (el.textContent.indexOf(kw) == 0) {
				el.textContent = el.textContent.replace(kw, '');
				fn(el);
			}
		})
	}

	each_el_on_kw('p', 'D:', function(el) { el.classList.add('proof') });
	each_el_on_kw('dt', 'DEF:', function(el) {
		el.classList.add('def');
		el.nextElementSibling.classList.add('def');
	});

	content.innerHTML = content.innerHTML.replace('TODO', '<span class="todo">TODO</span>');
})();
