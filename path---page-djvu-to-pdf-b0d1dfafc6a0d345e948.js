webpackJsonp([63769398522485],{540:function(n,e){n.exports={data:{markdownRemark:{html:'<p>Bash скрипт для конвертации djvu в pdf с относительным качеством, используя djvulibre-bin ([i]apt-get install djvulibre-bin[/i])\n<a href="">cut</a></p>\n<h1>!/bin/bash</h1>\n<h1>convert DjVu -> PDF</h1>\n<h1>usage:  djvu2pdf.sh  &#x3C;file.djvu></h1>\n<p>i="$1"\necho "------------ converting $i to PDF ----------------";\no="<code>basename $i .djvu</code>"\no="$o".pdf\necho "[ writing output to $o ] "\ncmd="ddjvu -format=pdf -quality=85 -verbose $i $o "\n$cmd\n<a href="">/pre</a>\n[pre]</p>\n<h1>!/bin/bash</h1>\n<h1>convert DjVu -> PDF</h1>\n<h1>usage:  djvu2pdf.sh [-q quality | -b] &#x3C;infile.djvu> [outfile.pdf]</h1>\n<p>mode=\'color\'\nquality=80</p>\n<p>aparse() {\nwhile [ $# != 0 ] ; do\ncase "$1" in\n-q|--quality)\nquality=${2}\nshift\n;;\n-b|--black)\nmode=\'black\'\n;;\nesac\nshift\ndone\n}\naparse "$@"</p>\n<p>i="$1"\no=${2:-$(basename $i .djvu).pdf}\nif [ -f  "$o" ]; then\necho "file $o exists, override [Y/n]?"\nread ans\ncase "$ans" in\nn|N) exit 1;;\nesac\nfi\necho "[ converting $i to $o ] "</p>\n<p>cmd="ddjvu -format=pdf -quality=$quality -mode=$mode -verbose $i $o "</p>\n<p>echo "[ executing $cmd ] "\n$cmd\n<a href="">/pre</a>\n[url=http://superuser.com/questions/100572/how-do-i-convert-a-djvu-document-to-pdf-in-linux-using-only-command-line-tools]Источник[/url]</p>',frontmatter:{date:"2016-05-14",path:"/page/djvu-to-pdf",title:"djvu to pdf"}}},pathContext:{}}}});
//# sourceMappingURL=path---page-djvu-to-pdf-b0d1dfafc6a0d345e948.js.map