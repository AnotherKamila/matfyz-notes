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

  (Iste %m > 1%, lebo a konštantné zobrazenia z viac ako 1 prvku veľmi nie sú injektívne.) Z injektívnosti %f%: každý z prvkov %f(a_1), ..., f(a_(n-1))% je rôzny od %f(a_n)%. Potom ale zobrazenie vynechávajúce tento prvok %f': A - {a_n} to B - {f(a_n)}%, %f'(a_i) = f(a_i)% je tiež injektívne a je "menšie" (vzhľadom na počet prvkov vzoru) ako %f%, čo je spor (%f% malo byť najmenšie).

TODO silnejšia forma Dirichletovho princípu
