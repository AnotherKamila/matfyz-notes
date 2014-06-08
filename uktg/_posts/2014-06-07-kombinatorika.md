---
title:  Kombinatorika
author: Kamila Součková <kamila@ksp.sk>
layout: default
---

Prirodzené čísla, matematická indukcia
======================================

vlastnosti prirodzených čísel
: %forall M sube NN, M != O/: M% má najmenší prvok *(princíp dobrého usporiadania)*
  
  D: sporom: ak by sme mali množinu, ktorá nemá, vieme ju usporiadať %=>% zostrojiť nekonečnú ostro klesajúcu postupnosť, ale taká v %NN% neexistuje

: Nech %M sube NN% je podmnožina spĺňajúca

  1. %0 in M%
  2. ak %x in M%, tak aj %(x+1) in M%

  Potom %M = NN%. *(základ MI)*

princíp matematickej indukcie
: Nech %(V(n))_(n in NN)% je postupnosť výrokov. Predpokladajme, že

  1. platí výrok %V(0)%  *(báza indukcie)*
  2. %forall n in NN: V(n) => V(n+1)%  *(indukčný krok)*

  Potom výrok %V(n)% platí pre každé %n in NN%.

  D: %A := {n in NN; V(n)}%, pre %A% platia podmienky z vyššie (základ MI) %=> A = NN%

**úplná matematická indukcia**: ak %(forall k < n: V(k)) => V(n)%, tak %V(n)% platí pre %forall n \in NN%


Dirichletov princíp
===================

po ľudsky: ak máme %n% holubníkov a %n+1% holubov, tak v nejakom holubníku je viac ako jeden holub.
presnejšie: neexistuje injektívne zobrazenie z %(n+1)%-prvkovej množiny do %n%-prvkovej.

všeobecnejšie:

Dirichletov princíp
: Nech %A% a %B% sú konečné množiny, pričom %\|A\| = n%, %\|B\| = m% a %n > m%. Potom neexistuje žiadne injektívne zobrazenie z %A% do %B%.

  D: Chceme ukázať, že neexistuje žiadne %s in NN% také, že %s%-prvkovú množinu by šlo injektívne zobraziť na %t%-prvkovú, kde %t < s%. Nech teda %S% je množina takých čísel, chceme ukázať, že %S% je prázdna.

  Sporom: Nech %S% je neprázdna, potom (@princíp dobrého usporiadania) %exists min_(s in S) =: n%, a injektívne zobrazenie %f: {a_1, a_2, ..., a_n} to {b_1, b_2, ..., b_m}%, kde %m < n%. Teda %f% je "najmenšie zobrazenie" (týchto vlastností) vzhľadom na počet prvkov vzoru.

  (Iste %m > 1%, lebo konštantné zobrazenia z viac ako 1 prvku nezvyknú byť injektívne.) Z injektívnosti %f%: každý z obrazov prvkov %f(a_1), ..., f(a_(n-1))% je rôzny od %f(a_n)%. Potom ale zobrazenie vynechávajúce tento prvok %f': A - {a_n} to B - {f(a_n)}; a_i mapsto f(a_i)% je tiež injektívne a je "menšie" (vzhľadom na počet prvkov vzoru) ako %f%, čo je spor (%f% malo byť najmenšie).

TODO silnejšia forma Dirichletovho princípu

Počítanie konfigurácií
======================

základné enumeračné pravidlá
: **pravidlo súčtu**: Nech %X_1%, %X_2%, %...%, %X_n% sú navzájom disjunktné konečné podmnožiny konečnej množiny %X%, pričom %X = X_1 uu X_2 uu ... uu X_n%. Potom
  % \|X\| = \|X_1\| + \|X_2\| + ... + \|X_n\| %.

  D: indukciou vzhľadom na %n% (báza je pre %n = 2%)

: **pravidlo súčinu**: Nech %X_1%, %X_2%, %...%, %X_n% sú ľubovoľné konečné množiny. Potom
  %\|X_1 times X_2 times ... times X_n\| = \|X_1\| * \|X_2\| * ... * \|X_n\|%.

  D: indukciou, v indukčnom kroku používame pravidlo súčtu

Variácie
--------

počet zobrazení medzi konečnými množinami
: Ak %A% a %B% sú konečné množiny, pričom %\|A\| = n% a %\|B\| = m%, tak počet prvkov množiny všetkých zobrazení z %A% do %B% %=: \|B^A\| = \|B\|^\|A\| = m^n%.

  D: zapíšme zobrazenie sekvenčne: prvky z %A% (je ich %n%) sa zobrazia na %(f(a_1), ..., f(a_n))% %=> \|B times B times ... times B\|% (%n%-krát), aplikujeme pravidlo súčinu
  (alebo ako debil: indukciou vzhľadom na %n%, báza je %B^O/ = {O/}%)

DEF: variácie s opakovaním
: pre %A = {1,2,...,n}% a %\|B\| = m% sa prvky množiny %B^A% nazývajú **variácie s opakovaním** %n%-tej triedy z %m% prvkov (množiny %B%) – zoradím %n% prvkov množiny %B%

počet podmnožín
: Nech %A% je množina. Potom počet všetkých podmnožín množiny %A% je $\|\mathcal{P}(A)\| = 2^{\|A\|}$.

počet injektívnych zobrazení
: Nech %A% a %B% sú konečné množiny, pričom %\|A\| = n% a %\|B\| = m%. Potom počet všetkých injektívnych zobrazení z %A% do %B% je
  %m * (m-1) * ... * (m - n + 1) = prod_(i=0)^(n-1) (m-i)%
  (t.j. %n%-tý klesajúci faktoriál z %m% %=: m^(ul n)%).
  
  D: indukciou vzhľadom na %n%, báza je %n = 0%.

Poznámka: Dirichletov princíp je špeciálny prípad / dôsledok tohto: ak %n > m%, tak existuje %0% injekcií z %A% do %B%.

DEF: variácie (bez opakovania)
: injekcie z množiny %A = {1,2,...,n}% do množiny %B%, kde %\|B\| = m%, sa nazývajú **variácie (bez opakovania)** %n%-tej triedy z %m% prvkov (množiny %B%).

DEF: permutácie
: variácie %n%-tej triedy z %n% prvkov

  poznámka: sú to bijekcie; (vzájomne jednoznačne) korešpondujú s lineárnymi usporiadaniami (%=>% počet lineárnych usporiadaní %n%-prvkovej množiny je %n!%)

TODO zovšeobecnené pravidlo súčinu
