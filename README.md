matfyz-notes
============

Class notes for various subjects at FMFI ("Matfyz") – dep. of Computer Science. You can view the compiled notes at http://anotherkamila.github.io/matfyz-notes. You are free (and very welcome!) to contribute :-)

Note: so far all notes are in Slovak only.

**License**: <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0</a>

---------------------------------------------

Poznámky z rôznych predmetov na FMFI ("Matfyze") – odbor informatika. Skompilované to visí na http://anotherkamila.github.io/matfyz-notes. Pomoc je veľmi vítaná!

**Licencia**: <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0</a>

---------------------------------------------

Ako to tu funguje
-----------------

### Stručný návod na použitie:

Ak chcem spoznámkovať napr. Taylorove polynómy na MA, spustím `./note.sh ma taylorove-polynomy`, čo vyrobí správne nazvaný súbor s prichystanými metadátami a otvorí ho v mojom obľúbenom textovom editore =)

### Presnejšie:

Napísať to lepšie je TODO. Nateraz stručne a nepresne:

Zneužíva to [Jekyll](http://jekyllrb.com) (a hostované to je na [GitHub pages](https://pages.github.com/)), má to [MathJax](http://www.mathjax.org/) s mega configom a tak. To znamená:
- súbory chcú byť nazvané `<predmet>/_posts/<stub>.<ext>`, kde `<stub>` je to, čo sa bude vyskytovať v URL (a teda to chce obsahovať len slušné znaky) a `<ext>` je nejaký podporovaný markup formát (defaultne [Markdown](http://daringfireball.net/projects/markdown/), môže byť aj [Textile](http://textile.sitemonks.com/)). Potrebujú mať YAML front matter. Používajte `./note.sh`.
- na pridanie nového predmetu treba vyrobiť príslušný folder a `index.md` obsahujúci info v YAML front matter. Používajte `./addsubj.sh`.
- píšete váš obľúbený markup formát (defaultne [Markdown](http://daringfireball.net/projects/markdown/)
- matiku môžete písať v LaTeX-u (delimituje sa štandardne `$...$` a `$$...$$`, pričom `$$...$$` treba z nejakého dôvodu odsadiť (napr. 2 medzerami)), alebo (tramtadadááá) [AsciiMath](http://www.wjagray.co.uk/maths/ASCIIMathTutorial.html) (delimituje sa `%...%`)
- bonus feature (**not implemented yet – TODO**): keď sa odsek začína `DEF:`, tak sa tomu prihodí class `def`, keď `VT:` tak `vt`, keď `D:`, tak `dokaz`, takže potom sú vo výsledku rozoznateľnejšie :)

Pozrite si, ako to tam vyzerá (keď tam raz niečo bude :D) a pochopíte. Ak máte otázky, veselo ma otravujte.
