webpackJsonp([0x94d834f2bf21],{558:function(n,e){n.exports={data:{markdownRemark:{html:'<p>— Во многих учебниках и методичках рассказывают как программировать на TurboProlog, однако он морально устарел.\n— SWI и gprolog - современные интерпритации Prolog, наиболее приближенные к стандарту. Немного отличаются по производительности, gprolog быстрее, однако на первых парах этого не будет заметно. Swi имеет онлайн редактор и оффлайн, последний можно вызвать набрав в его консоли "emacs."</p>\n<p>[xcut]</p>\n<ul>\n<li>Нет разделов domains, goal, раздел predicates не объявляется</li>\n<li>Переменная не может быть выведена при помощи write вместе со строкой. Однако можно поставить между ними знак +(-=..) и тогда сработает. Иначе необходимо 2 write</li>\n<li>названия предикатов должны быть в плотную к скобкам, иначе появится ошибка:\nsyntax error: . or operator expected after expression</li>\n<li>сравнение 2-х переменных, аналогичное X&#x3C;>Y TurboProlog будет выглядеть как X=Y</li>\n<li>Одинаковые предикаты должны быть вместе</li>\n<li>Строки оборачиваются только одинарными кавычками</li>\n<li>Если в результате работы есть не 1 ответ, тогда программа будет выдавать по 1, предлагая продолжить вывод, для этого необходимо нажать точку с запятой ";" или для окончания работы точку.</li>\n<li>Строки обрамляются в одинарные кавычки(Прогр. 2 в-т 1), иначе могут возникнуть непредвиденные ошибки. Но можно принудительно дать прологу понять, что в двойных кавычках строки, делается это размещением в начале программы :- set<em>prolog</em>flag(double_quotes, string). (Прогр. 2 в-т 2) <a href ="http://www.cyberforum.ru/prolog/thread1551889.html">Обсуждение на cyberforum</a></li>\n</ul>\n<p>— Примеры программ:</p>\n<p>— Программа 2</p>\n<ul>\n<li>Turbo-Prolog</li>\n</ul>\n<pre><code>DOMAINS\ndog_list= symbol* /* здесь «*» указывает на список*/\nPREDICATES\ndogs(dog_list).\nCLAUSES\ndogs(["лайка","борзая","дог","болонка"]).\nprint_list([ ]).\nprint_list([X|Y]) :- write(X),nl, print_list([Y]).\n</code></pre>\n<ul>\n<li>SWI-prolog вариант 1</li>\n</ul>\n<pre><code>dogs([\'лайка\',\'борзая\',\'дог\',\'болонка\']).\n \nprint_dogs([]).\nprint_dogs([X|Y]) :-\n    write(X), nl,\n    print_dogs(Y).\n</code></pre>\n<ul>\n<li>SWI-prolog Вариант 2</li>\n</ul>\n<pre><code>:- set_prolog_flag(double_quotes, string).\n \ndogs(["лайка","борзая","дог","болонка"]).\n \nprint_dogs([]).\nprint_dogs([X|Y]) :-\n    write(X), nl,\n    print_dogs(Y).\n</code></pre>\n<p>— Программа 1</p>\n<ul>\n<li>TurboProlog</li>\n</ul>\n<pre><code>PREDICATES\nadd(integer,integer)\nfadd(real,real)\nmaximum(real,real,real)\nn3(integer,integer)\ngipotenuza(integer,integer)\nCLAUSES\ngipotenuza(X,Y):- Z = sqrt(X*X + Y*Y),write("Gipotenuza= ",Z),nl.\nadd(X,Y):-Z=X+Y,write("Sum= ",Z),nl.\nfadd(X,Y):-Z=X+Y,write("FSum=",Z),nl.\n\nmaximum(X,X,X).\nmaximum(X,Y,X):- X>Y.\nmaximum(X,Y,Y):- X&#x3C;Y.\nn3(X,Y):-maximum(X,Y,Z),R=3*Z,write("n3=",R),nl.\n</code></pre>\n<ul>\n<li>SWI-prolog</li>\n</ul>\n<pre><code>gipotenuza(X,Y):- Z is sqrt(X*X + Y*Y),write(\'Gipotenuza= \'),\nwrite(Z),nl.\nadd(X,Y):-Z is X+Y,write(\'Sum = \'),write(Z),nl.\nfadd(X,Y):-Z is X+Y,write(\'FSum = \'),write(Z),nl.\n\nmaximum(X,X,X).\nmaximum(X,Y,X):- X>Y.\nmaximum(X,Y,Y):- X&#x3C;Y.\nnThree(X,Y):-maximum(X,Y,Z),R is 3*Z,write(\'Число n3 = \'), write(R),nl.\n</code></pre>\n <!-- nosimple -->\n<p>— Программа 3</p>\n<ul>\n<li>TurboProlog</li>\n</ul>\n<pre><code>PREDICATES\nadd(integer,integer)\nfadd(real,real)\nmaximum(real,real,real)\nn3(integer,integer)\ngipotenuza(integer,integer)\nCLAUSES\ngipotenuza(X,Y):- Z = sqrt(X*X + Y*Y),write("Gipotenuza= ",Z),nl.\nadd(X,Y):-Z=X+Y,write("Sum= ",Z),nl.\nfadd(X,Y):-Z=X+Y,write("FSum=",Z),nl.\n\nmaximum(X,X,X).\nmaximum(X,Y,X):- X>Y.\nmaximum(X,Y,Y):- X&#x3C;Y.\nn3(X,Y):-maximum(X,Y,Z),R=3*Z,write("n3=",R),nl.\n</code></pre>\n<ul>\n<li>SWI-prolog</li>\n</ul>\n<pre><code>gipotenuza(X,Y):- Z is sqrt(X*X + Y*Y),write(\'Gipotenuza= \'),\nwrite(Z),nl.\nadd(X,Y):-Z is X+Y,write(\'Sum = \'),write(Z),nl.\nfadd(X,Y):-Z is X+Y,write(\'FSum = \'),write(Z),nl.\n\nmaximum(X,X,X).\nmaximum(X,Y,X):- X>Y.\nmaximum(X,Y,Y):- X&#x3C;Y.\nnThree(X,Y):-maximum(X,Y,Z),R is 3*Z,write(\'Число n3 = \'), write(R),nl.\n</code></pre>\n <!-- \nosimple -->\n<p>— Также предлагаю ознакомиться с курсом лабораторных работ и готовыми программами:\n— <a title="byrakov.pdf" href="http://stud.ashcherbakov.ru/uploads/_pages/24/byrakov.pdf">byrakov.pdf</a>\n— <a title="labswiprolog.pl_.7z" href="http://stud.ashcherbakov.ru/uploads/_pages/24/labswiprolog.pl_.7z">labswiprolog.pl_.7z</a></p>',frontmatter:{date:"2015-10-12",path:"/page/razlichija-turboprolog-i-gnuswi-prolog",title:"Различия TurboProlog и GNU/SWI Prolog"}}},pathContext:{}}}});
//# sourceMappingURL=path---page-razlichija-turboprolog-i-gnuswi-prolog-3606d29a2ab8b7641129.js.map