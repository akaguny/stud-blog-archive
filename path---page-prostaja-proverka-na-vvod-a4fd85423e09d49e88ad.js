webpackJsonp([0x978f25054ad1],{554:function(e,a){e.exports={data:{markdownRemark:{html:'<p>Проверка на ввод на примере массива, используя цикл wile, методы cin.clear() И cin.get()\n[cut]</p>\n<p>[image=http://stud.ashcherbakov.ru/uploads/<em>pages/35/mini/2015-04-04</em>13h21<em>03.jpg 2015-04-04</em>13h21_03.jpg]<a href="http://stud.ashcherbakov.ru/uploads/_pages/35/2015-04-04_13h21_03.jpg%5B/image">http://stud.ashcherbakov.ru/uploads/<em>pages/35/2015-04-04</em>13h21_03.jpg[/image</a>]</p>\n<pre><code>        // Заполним массив\n        for ( int i = 0; i &#x3C; 10; i++) //строго, т.к. всего 10 элементов, нумерация же идёт с нулевого эл-та массива (0-9)\n       {\n              cout &#x3C;&#x3C; "Введите значение " &#x3C;&#x3C; i &#x3C;&#x3C; " элемента массива: \\t" ; // ввод символа\n               while (!(cin >> A[i])) // пока ввод не удался\n              {\n                     cin.clear(); // очищаем поток\n                      while (cin.get() != \'\\n\'); // пока пользователь не введёт символ, который система может распознать &#x26;&#x26; который не является переносом строки\n\n                     cout &#x3C;&#x3C; "Введите значение " &#x3C;&#x3C; i &#x3C;&#x3C; " элемента массива: \\t" ;\n               }\n\n       }\n</code></pre>',frontmatter:{date:"2016-02-08",path:"/page/prostaja-proverka-na-vvod",title:"Простая проверка на ввод С++"}}},pathContext:{}}}});
//# sourceMappingURL=path---page-prostaja-proverka-na-vvod-a4fd85423e09d49e88ad.js.map