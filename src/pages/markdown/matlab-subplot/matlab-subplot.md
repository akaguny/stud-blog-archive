---
path: "/page/matlab-subplot"
date: "2016-01-10"
title: "Matlab subplot"
---
Шпаргалка по стандартной функции subplot для отображения нескольких графиков в 1 окне(figure)
— [image=http://stud.ashcherbakov.ru/uploads/_pages/32/mini/subplot.png subplot.png]http://stud.ashcherbakov.ru/uploads/_pages/32/subplot.png[/image]
— subplot(a,b,c); a - количество строк, b - столбцов, c - текущая позиция, subplot заполняется построчно, слева на право.
[cut]
— Код, в котором использована функция

```
% ex4 max и min
unionAB = max(A,B); % объединение
subplot(2,2,3);
plot(x,unionAB);
title('unionAB');
intersecAB = min(A,B); % пересечение
subplot(2,2,4);
plot(x,intersecAB);
title('intersecAB')

```
— Результат:
— [image=http://stud.ashcherbakov.ru/uploads/_pages/32/mini/ex4img1.jpg ex4img1.jpg]http://stud.ashcherbakov.ru/uploads/_pages/32/ex4img1.jpg[/image]
— Версия matlab 2012b(рекомендую именно её из соображений производительность/удобство)