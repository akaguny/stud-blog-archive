webpackJsonp([0xfd2f9c48be64],{548:function(n,e){n.exports={data:{markdownRemark:{html:'<p>Постарался максимально использовать встроенные методы работы с массивами, но думаю можно ещё лучше). Так что жду комментариев(по поводу орфографии/пунктуации тоже)!\n<a href="">cut</a>\n"use strict";\n// Функция для вычисления угла между 2 векторами\nvar angleBetweenTwoVectors = function(vector1, vector2) {\n// скалярное произведение векторов\nvar scalMultVectors = vector1.reduce(function(sum, current, i) {\nreturn sum + (current * vector2[i])\n}, 0);\n// модуль вектора равен квадратному корню из суммы квадратов его координат\nvar moduleVector = function(v) {\n// Находим квадраты слагаемых\nvar step1 = v.map(function(currentValue) {\nreturn Math.pow(currentValue, 2)\n});\n// Складываем их\nvar step2 = step1.reduce(function(sum, current) {\nreturn sum + current\n});\n// Вычисляем квадратный корень\nreturn Math.sqrt(step2, 2)\n};\n// Вычисляем косинус угла между векторами\nvar cosA = scalMultVectors / (moduleVector(vector1) * moduleVector(vector2));\nconsole.log("cos(" + cosA + ")");\nreturn Math.acos(cosA);</p>\n<p>}\nТест\nvar v1 = [4, 3, 4];\nvar v2 = [4, 4, 4];\nconsole.log(angleBetweenTwoVectors(v1, v2) + " радиан");\n[/pre]\n_ Открыть в песочнице: <a href="http://plnkr.co/edit/o8R1eTaXx57J6Ag89OYW">plnkr.co</a>\n_ Источник формулы:<a href ="http://ru.onlinemschool.com/math/library/vector/angl/">ru.onlinemschool.com</a></p>',frontmatter:{date:"2015-11-14",path:"/page/funkcija-vychislenie-ugla-mezhdu-dvumja-vektorami",title:"Функция вычисление угла между двумя векторами"}}},pathContext:{}}}});
//# sourceMappingURL=path---page-funkcija-vychislenie-ugla-mezhdu-dvumja-vektorami-8ab0133f497f3aff7655.js.map