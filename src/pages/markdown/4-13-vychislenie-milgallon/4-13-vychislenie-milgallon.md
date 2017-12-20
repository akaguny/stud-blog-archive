---
path: "/page/4-13-vychislenie-milgallon"
date: "2015-10-17 20:53:46"
title: "4-13 Вычисление миль/галлон"
---
стр 257
стр.194
_  *Задание:*
_ Водителям небезразличен пробег их автомобилей. Один водитель записал  
данные о нескольких заправках своей машины, записывая пройденные мили и  
число залитых в бак галлонов бензина
[cut]

_ Разработайте программу на C++, которая, 
используя оператор while, вводила бы пробег в милях и объем бензина в каждой 
заправке. Программа должна вычислять и выводить на экран число миль на  
галлон для каждой заправки, а также общее значение миль на галлон по всем  
введенным к данному моменту заправкам. 
_ Пример работы программы, то как она должна выглядеть для пользователя в конечном итоге
[spoiler=показать/спрятать]Введите пройденный путь (-1, если ввод закончен): 287 
Введите расход бензина: 13 
Миль/галлон для этой заправки: 22.076923 
Суммарное значение миль/галлон: 22.076923
 
Введите пройденный путь (-1, если ввод закончен): 200 
Введите расход бензина: 10 
Миль/галлон для этой заправки: 20.000000 
Суммарное значение миль/галлон: 21.173913
 
Введите пройденный путь (-1, если ввод закончен): 120 
Введите расход бензина: 5 
Миль/галлон для этой заправки: 24.000000 
Суммарное значение миль/галлон: 21.678571 

Введите пройденный путь (-1, если ввод закончен): -1[/spoiler]
_  *Рекомендации:*
_ использовать fixed и static_cast<тип>(переменная), почитать на стр. 231 - 232

_  *Код:*
[spoiler=показать/скрыть]
[pre lang=cplusplus]
// стр 257 упражнение 4.13
#include <iostream>
using std::cin;
using std::cout;
using std::endl;
using std::fixed;

int main ()
{
	// Инициализация
	// double summMilesGalon = 0; // мили/галлон суммарно
	int summMiles = 0; // мили(путь) суммарно
	int summExpense = 0; // расход суммарно
	double milesGallon; // мили/галлон
	int expense; // расход
	int miles; // путь
	
	// Обработка данных
	cout << "Введите пройденный путь (-1, если ввод закончен): "; // -1 контрольное значение
	cin >> miles;
	if (miles == -1)
	{
		cout << "
Данные введены не были, ввод закончен" << endl;
	}
	else
	{	
		while (miles != -1)
		{
			cout << "Введите расход бензина: ";
			cin >> expense;
			milesGallon = static_cast<double>(miles) / expense;
			summExpense += expense;
			summMiles += miles;
			cout << "Миль/галлон для этой заправки: " << fixed << milesGallon << endl;
			cout << "Суммарное значение миль/галлон: " << fixed 
			<< static_cast<double>(summMiles) / summExpense << endl;
			cout << "
Введите пройденный путь (-1, если ввод закончен): "; // -1 контрольное значение
			cin >> miles;
		} 
	}
	return 0;
}

[/pre]

[/spoiler]
_  *Код на codepad*: <a href="http://codepad.org/lr5d0qIt">codepad</a>
_  *Файлы исходного кода:* 
ul
* <a href="http://stud.ashcherbakov.ru/uploads/_pages/19/milesgalon.cpp">milesgalon.cpp</a>
/ul
_  *ОС:* ArchLinux
_  *IDE:* Geany