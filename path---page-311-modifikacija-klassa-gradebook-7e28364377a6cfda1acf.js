webpackJsonp([42153675984806],{531:function(e,n){e.exports={data:{markdownRemark:{html:'<p>стр.194</p>\n<p>[cut]</p>\n<p>_  <em>Задание:</em>\n_ a) Введите второй элемент данных string, представляющий имя преподавателя,\nведущего курс.\n_ b) Предусмотрите в классе set-функцию для изменения имени преподавателя\nи get-функцию для его извлечения.\n_ c) Модифицируйте конструктор, чтобы он специфицировал два параметра: один\nдля названия курса и второй — для имени преподавателя.\n_ d) Модифицируйте элемент-функцию displayMessage так, чтобы она сначала\nвыводила приветствие и название курса, а затем «This course is presented by: »\nи имя преподавателя.\n_  <em>Рекомендации:</em>\n_ Выполняйте модификацию в том порядке, в котором это предложено в задании.\n_  <em>Код:</em>\n[spoiler=Показать]\n_  <em>Интерфейс класса</em>\n[pre lang=cplusplus]\n// Рис. 3.15 GradeBook.h\n// Определение класса GradeBook представляет собой открытый интерфейс\n// класса. Определение элемент-функции находится в GradeBook.cpp</p>\n<h1>include <string> // программа использует стандартный класс string</h1>\n<p>using std::string;</p>\n<p>// определение класа GradeBook\nclass GradeBook\n{\npublic:\nGradeBook ( string name1, string name2 ); // конструктор, инициализирующий courseName\nvoid setCourseName (string name1); // установает courseName\nstring getCourseName(); // получает название курса\nvoid setTeacherName (string name2); // устанавливает им преподавателя\nstring getTeacherName(); // получает имя преподавателя\nvoid displayMessage(); // выводит сообщение приветствия\nprivate:\nstring courseName; //  название курса для данного GradeBook\nstring teacherName; //  название курса для данного GradeBook\n};\t//конец класса GradeBook\n[/pre]\n_  <em>Реализация класса</em>\n[pre lang=cplusplus]\n// Рис. 3.16 GradeBook.cpp\n// Реализация элемент-функции GradeBook\n// Фунция setCourseName производит подтверждение данных.</p>\n<h1>include <iostream></h1>\n<p>using std::cout;\nusing std::endl;</p>\n<h1>include "GradeBook.h" // включить определение класса GradeBook</h1>\n<p>// конструктор инициализирует courseName переданный строкой\nGradeBook::GradeBook (string name1, string name2)\n{\nsetCourseName(name1); // инициализировать вызовом set-функции\nsetTeacherName(name2); // инициализировать вызовом set-функции\n} // конец конструктора GradeBook</p>\n<p>// Функция, устанавливающая название курса\n// гарантирует, что название курса в пределах 25 символов\nvoid GradeBook::setCourseName(string name)\n{\nif ( name.length() &#x3C;= 25 ) // если не более 25 символов\n{\ncourseName = name; // сохранить название курса в объекте\n}\nif ( name.length() > 25 ) // если больше 25\n{\ncourseName = name.substr( 0, 25 ); // сохранить н.к. в об. начать с 0, длина 25\ncout &#x3C;&#x3C; "Имя "" &#x3C;&#x3C; name &#x3C;&#x3C; "" за пределами максимальной длины.\n"\n&#x3C;&#x3C; "ограничение courseName - первые 25 символов\n" &#x3C;&#x3C; endl;\n}\n} // конец функции setCourseName</p>\n<p>// функция, получающая название курса\nstring GradeBook::getCourseName()\n{\nreturn courseName; // возвратить courseName объекта\n}\n// этот оператор вызывает getCourseName, что-бы получить название курса, представленного данным GradeBook</p>\n<p>// Функция, устанавливающая имя преподавателя\nvoid GradeBook::setTeacherName(string name)\n{\nteacherName = name; // сохранить название курса в объекте\n} // конец функции setTeacherName</p>\n<p>// функция, получающая имя преподавателя\nstring GradeBook::getTeacherName()\n{\nreturn teacherName; // возвратить teacherName\n} // конец фунцкии getTeacherName</p>\n<p>void GradeBook::displayMessage()\n{\ncout &#x3C;&#x3C; "Добро пожаловть в классный журнал\n" &#x3C;&#x3C; getCourseName() &#x3C;&#x3C; "..." &#x3C;&#x3C; endl;\ncout &#x3C;&#x3C; "Курс ведёт:\n" &#x3C;&#x3C; getTeacherName() &#x3C;&#x3C; "\n" &#x3C;&#x3C; endl;\n}// конец функции displayMessage[/pre]\n_  <em>Тестирование класса</em>\n[pre lang=cplusplus]\n// Рис. 3.10: fig03_10.cpp\n// Включение класса GradeBook из GrradeBook.h в главную программу</p>\n<h1>include <iostream></h1>\n<p>using std::cout;\nusing std::endl;</p>\n<h1>include "GradeBook.h" // включить определение класса GradeBook</h1>\n<p>// фукнция main начинает исполнение программы\nint main ()\n{\n// создать два объекта GradeBook\nGradeBook gradeBook1 ("CS101 Введение в программирование на C++", "Иванов");\nGradeBook gradeBook2 ("CS102 структура данных в C++", "Титов");\n// вывести исходное значение courseName для каждого GradeBook\ncout &#x3C;&#x3C; "Сейчас есть 2 журнала:\ngradeBook1 созданная для: " &#x3C;&#x3C; gradeBook1.getCourseName() &#x3C;&#x3C; "\n" &#x3C;&#x3C; "gradebook2 созданная для: " &#x3C;&#x3C; gradeBook2.getCourseName() &#x3C;&#x3C; endl;\ngradeBook1.displayMessage() ;\ngradeBook2.displayMessage() ;\nreturn 0;\n}// конец main\n<a href="">/pre</a>\n_  <em>Код на codepad</em>: <a href="http://codepad.org/HqfPrP6B">http://codepad.org/HqfPrP6B</a>\n_  <em>Файлы исходного кода:</em>\nul</p>\n<ul>\n<li><a href="http://stud.ashcherbakov.ru/uploads/_pages/13/GradeBook.cpp">GradeBook.cpp</a></li>\n<li><a href="http://stud.ashcherbakov.ru/uploads/_pages/13/GradeBook.h">GradeBook.h</a></li>\n<li><a href="http://stud.ashcherbakov.ru/uploads/_pages/13/fig03_13.cpp">fig03_13.cpp</a>\n/ul\n_  <em>ОС:</em> ArchLinux\n_  <em>IDE:</em> Geany</li>\n</ul>',frontmatter:{date:"2015-09-30",path:"/page/311-modifikacija-klassa-gradebook",title:"3.11 Модификация класса GradeBook"}}},pathContext:{}}}});
//# sourceMappingURL=path---page-311-modifikacija-klassa-gradebook-7e28364377a6cfda1acf.js.map