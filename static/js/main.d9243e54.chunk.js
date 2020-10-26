(this.webpackJsonpsiscomp=this.webpackJsonpsiscomp||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"2018":[],"2019":[{"ID":"01","area":"MATEM\xc1TICA","text":"Seja uma matriz quadrada de terceira ordem $ A = \\\\begin{pmatrix}2 & 3 & 5 \\\\\\\\ 7 & 11 & 13 \\\\\\\\ 17 & 19 & 23 \\\\end{pmatrix} $ calcule o determinante:","items":["-78","-84","84","78","-87"],"rightAnswer":0,"explanation":"A maneira mais f\xe1cil de se chegar na resposta correta \xe9 calcular a determinante repetindo as duas primeiras colunas, obtendo portanto a matriz: $$ \\\\begin{pmatrix}2 & 3 & 5 \\\\\\\\ 7 & 11 & 13 \\\\\\\\ 17 & 19 & 23 \\\\end{pmatrix}\\\\begin{matrix}2 & 3 \\\\\\\\ 7 & 11 \\\\\\\\ 17 & 19 \\\\end{matrix} $$ Ao realizarmos a multiplica\xe7\xe3o das diagonais obteremos a equa\xe7\xe3o $$ \\\\begin{split}(2 \\\\times 11 \\\\times 23) + (3 \\\\times 13 \\\\times 17) + (5 \\\\times 7 \\\\times 19) \\\\\\\\- (5 \\\\times 11 \\\\times 17) - (2 \\\\times 13 \\\\times 19) - (3 \\\\times 7 \\\\times 23)\\\\end{split} $$ $$ = 506 + 663 + 665 - 935 - 494 - 483 $$ $$ = 1834 - 1912 = -78 $$"},{"ID":"02","area":"MATEM\xc1TICA","text":"Seja $ \\\\mathbb{R}^3 $. Os vetores $ \\\\{(1, 2, 3), (2, 5, 8), (1, 3, 7)\\\\} $ s\xe3o independentes?","items":["N\xe3o","Sim","N\xe3o pode ser calculado","Sim, se fosse um espa\xe7o de $ \\\\mathbb{R}^2 $","Seriam independentes se o 1\xba vetor fosse $ (1, 5, 7) $"],"rightAnswer":1,"explanation":"Podemos tentar resolver essa quest\xe3o visualmente, lembrando que para os vetores $ x_1 $, $ x_2 $ e $ x_3 $ serem independentes temos $$ c_1 x_1 + c_2 x_2 + c_3 x_3 = 0 $$ para algum valor $ c_1 $, $ c_2 $ ou $ c_3 $ diferente de $ 0 $, ou seja, existe uma resolu\xe7\xe3o al\xe9m da resolu\xe7\xe3o trivial $ c_1 = c_2 = c_3 = 0 $. Todavia como nossa intui\xe7\xe3o pode estar enganada, o melhor \xe9 resolver a equa\xe7\xe3o utilizando-se elimina\xe7\xe3o, consideremos $$ A = \\\\begin{pmatrix} 1 & 2 & 1 \\\\\\\\ 2 & 5 & 3 \\\\\\\\ 3 & 8 & 7 \\\\end{pmatrix} $$ onde cada coluna \xe9 um dos vetores, buscamos ent\xe3o se existe um vetor $ x $ onde $ Ax = 0 $ para $ x \\\\neq 0 $ (vetor zero). O que ir\xe1 nos levar \xe0s equa\xe7\xf5es: $$ \\\\begin{split} x_1 + 2x_2 + x_3 = 0 \\\\\\\\ 2x_1 + 5x_2 + 3x_3 = 0 \\\\\\\\ 3x_1 + 8x_2 + 7x_3 = 0 \\\\end{split} $$ Ao realizar o processo de Elimina\xe7\xe3o Gaussiana obteremos: $$ x_1 = - 2x_2 - x_3 \\\\\\\\ x_2 = -x_3 \\\\\\\\ x_3 = 0 $$ O que nos mostra que a \xfanica resolu\xe7\xe3o poss\xedvel \xe9 $ x_1 = x_2 = x_3 = 0 $, logo, os vetores s\xe3o linearmente independentes."},{"ID":"03","area":"MATEM\xc1TICA","text":"Encontre a equa\xe7\xe3o da reta s, que passa pelo ponto $ A(3, 4) $ e que \xe9 perpendicular \xe0 reta $ r: x + y - 5 = 0 $.","items":["$ r: 5x - 2y + 2 = 0 $","$ r: x + y + 4 = 0 $","$ r: 2x + y = 0 $","$ r: x - y + 1 = 0 $","$ r: x - 3y + 2 = 0 $"],"rightAnswer":3,"explanation":"Duas linhas s\xe3o perpendiculares se elas fazem um \xe2ngulo reto (90\xb0), se uma linha possui inclina\xe7\xe3o $ m $ ent\xe3o a segunda linha possui inclina\xe7\xe3o $ \\\\frac{-1}{m} $. Se estiver em d\xfavida de qual a inclina\xe7\xe3o da reta lembre-se da f\xf3rmula de uma reta: $ y = mx + b $. Ao colocarmos a reta na forma descrita anteriormente, teremos $ y = -x + 5 $, logo $ m = -1 $ e o rec\xedproco negativo \xe9 $ m_1 = \\\\frac{-1}{-1} = 1 $ (a vari\xe1vel foi nomeada $ m_1 $ por conveni\xeancia), para encontrarmos a reta perpendicular temos ent\xe3o a f\xf3rmula: $$ y - y_1 = m_1(x - x_1) $$ Inserindo o ponto na qual a reta deve passar - o ponto $ (3, 4) $ - obtemos $$  y - 4 = x - 3  $$ onde resolvendo para $ y $ temos $$ y = x + 1 $$ colocando na forma dos itens da quest\xe3o teremos portanto que a resposta \xe9 $$ x - y + 1 = 0 $$"},{"ID":"04","area":"MATEM\xc1TICA","text":"Encontre as coordenadas do centro $ (C) $ da circunfer\xeancia de equa\xe7\xe3o $ t: x^2 + y^2 -3x + 5y - 14 = 0 $.","items":["$ C(\\\\frac{1}{2}, \\\\frac{1}{2}) $","$ C(\\\\frac{-1}{2}, \\\\frac{3}{2}) $","$ C(\\\\frac{3}{2}, \\\\frac{1}{2}) $","$ C(\\\\frac{5}{2}, \\\\frac{5}{2}) $","$ C(\\\\frac{3}{2}, \\\\frac{-5}{2}) $"],"rightAnswer":4,"explanation":"Para essa quest\xe3o iremos primeiramente organizar os termos obtendo portanto $$ (x^2 - 3x) + (y^2 + 5y) = 14 $$ agora, a melhor forma de resolver essa equa\xe7\xe3o \xe9 pelo m\xe9todo de completar quadrados onde transformamos equa\xe7\xf5es quadr\xe1ticas na soma de binomais ao quadrado e um n\xfamero. O raio da equa\xe7\xe3o de um c\xedrculo tem forma $ (x - h)^2 + (y - k)^2 = r^2 $ onde o centro est\xe1 em $ (h, k) $. Como estamos interessados no centro, descartamos tudo depois da igualdade, caso contr\xe1rio ser\xe1 mais tempo perdido realizando os c\xe1lculos. Multiplicando o segundo termo de cada par\xeanteses por $ \\\\frac{1}{2} $ teremos $$ h = -3 \\\\times \\\\frac{1}{2} = \\\\frac{-3}{2}$$ e $$ k = 5 \\\\times \\\\frac{1}{2} =  \\\\frac{5}{2} $$ portanto teremos como resultado a equa\xe7\xe3o $ \\\\Big(x - \\\\frac{3}{2}\\\\Big)^2 + \\\\Big(y + \\\\frac{5}{2}\\\\Big)^2 $ o que nos d\xe1 o ponto $ C\\\\Big(\\\\frac{3}{2}, \\\\frac{-5}{2}\\\\Big) $ (lembre-se que os sinais dos pontos est\xe3o invertidos na equa\xe7\xe3o)."},{"ID":"05","area":"MATEM\xc1TICA","text":"Calcule o $ \\\\lim_{x \\\\to 2} \\\\frac{x^3 - 8}{6x^2 - 3x^3}: $","items":["$ -2 $","$ \\\\infty $","$ 0 $","$ 1 $","$ -1 $"],"rightAnswer":2,"explanation":"Podemos perceber que ao substituir $ x $ por 2 teremos uma fra\xe7\xe3o na forma indeterminada $ \\\\frac{0}{0} $, aplicando a Regra de L\'H\xf4pital calculando a derivada da equa\xe7\xe3o chegamos no c\xe1lculo do limite $$ \\\\lim_{x \\\\to 2} \\\\frac{3x^2}{12x - 9x^2} $$ agora substituindo $ x $ por 2 teremos $$ \\\\frac{12}{-12} = -1 $$"},{"ID":"06","area":"MATEM\xc1TICA","text":"Para quais valores de $a$ e $b$, $f(x)$ \xe9 cont\xednua em $ x = 1 $ e $ x = 4 $. $$ f(x) = \\\\begin{cases} x & \\\\text{se } x \\\\leq 4 \\\\\\\\ ax + b & \\\\text{se } 1 < x < 4 \\\\\\\\ -2x & \\\\text{se } 4 \\\\leq x  \\\\end{cases} $$","items":["$ a = -9 $ e $ b = -3 $","$ a = -3 $ e $ b = 4 $","$ a = 1 $ e $ b = 1 $","$ a = -1 $ e $ b = 2 $","$ a = 2 $ e $ b = 3 $"],"rightAnswer":3,"explanation":"Para uma fun\xe7\xe3o ser cont\xednua em um ponto $ n $ ela deve possuir limites pela direita e pela esquerda iguais, ou seja $$ \\\\lim_{x \\\\to n^+} = \\\\lim_{x \\\\to n^-} $$"},{"ID":"07","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"08","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"09","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"10","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"11","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"12","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"13","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"14","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"15","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"16","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"17","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"18","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"19","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""},{"ID":"20","area":"MATEM\xc1TICA","text":"","items":[],"rightAnswer":3,"explanation":""}]}')},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var o=t(0),s=t(1),r=t.n(s),n=t(18),i=t.n(n),c=t(8),m=t(2);t(25),t(26);var l=function(){return Object(o.jsxs)("div",{className:"home-banner",children:[Object(o.jsx)("h1",{children:"SIMCOMP"}),Object(o.jsx)("p",{children:"Uma ferramenta para lhe ajudar a estudar para o POSCOMP."})]})},d=(t(27),t(28),t(10));var $=function(e){var a=Object(o.jsx)("span",{role:"img","aria-label":"completo",children:"\u2714\ufe0f"}),t=Object(o.jsx)("span",{role:"img","aria-label":"incompleto",children:"\u274c"}),s=d[e.year].length;return console.log(s),Object(o.jsxs)("div",{className:"home-exams-block",children:[Object(o.jsx)("p",{className:"home-exams-block-e",children:"Edi\xe7\xe3o"}),Object(o.jsx)("h1",{children:e.year}),Object(o.jsxs)("p",{children:["Quest\xf5es resolvidas: ",s," de 70 ",70===e.questions?a:t]})]})};var x=function(){return Object(o.jsxs)("div",{className:"home-exams",children:[Object(o.jsx)("h1",{className:"home-exams-title",children:"Edi\xe7\xf5es Resolvidas"}),Object(o.jsx)("p",{className:"home-exams-subtitle",children:"Selecione uma edi\xe7\xe3o do POSCOMP para visualizar as quest\xf5es resolvidas."}),Object(o.jsx)("div",{className:"home-exams-block-holder",children:[2019,2018].map((function(e){return Object(o.jsx)(c.b,{to:"/exam/".concat(e),children:Object(o.jsx)($,{year:e})})}))})]})};t(34);var u=function(){return Object(o.jsxs)("div",{className:"home-tutorial",children:[Object(o.jsx)("p",{className:"home-tutorial-title",children:"Como usar o SISCOMP?"}),Object(o.jsx)("p",{className:"home-tutorial-subtitle",children:"Como contribuir"}),Object(o.jsx)("p",{className:"home-tutorial-text",children:"Existem v\xe1rias formas que voc\xea pode ajudar o projeto. Voc\xea pode nos ajudar desde divulgando nas redes sociais quanto apoiando o projeto no GitHub, desde adicionando novas quest\xf5es a melhorar nosso c\xf3digo fonte, para saber mais informa\xe7\xf5es a respeito de como contribuir leia o README presente a p\xe1gina no GitHub."}),Object(o.jsx)("p",{className:"home-tutorial-subtitle",children:"Como usar"}),Object(o.jsx)("p",{className:"home-tutorial-text",children:"\xc9 muito f\xe1cil, basta selecionar o ano da quest\xe3o desejada, logo abaixo do ano voc\xea pode visualizar a quantidade de quest\xf5es que j\xe1 foram respondidas - isso \xe9, possuem uma explica\xe7\xe3o para a sua resposta - ao clicar voc\xea ir\xe1 direto para um simulado da prova daquele ano contendo apenas as quest\xf5es que possuem explica\xe7\xf5es que levam a resposta. Ao tentar resolver a quest\xe3o voc\xea pode clicar no item que achar correto e automaticamente a explica\xe7\xe3o aparecer\xe1, independente de erro ou acerto."})]})};t(35);var p=function(){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("div",{className:"navbar-logo",children:"SISCOMP"}),Object(o.jsx)(c.b,{to:"/",children:"Home"}),Object(o.jsx)(c.b,{to:"/editor",children:"Editor"})]})};var j=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{}),Object(o.jsx)(l,{}),Object(o.jsx)(x,{}),Object(o.jsx)(u,{})]})},b=t(11),h=(t(36),t(37),t(15)),f=t.n(h);var v=function(e){return Object(o.jsx)(f.a.Context,{input:"tex",onLoad:function(){return console.log("Script carregado!")},onError:function(e,a){console.log("Foi encontrado um erro.")},options:{tex2jax:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]],preview:"none"}},children:Object(o.jsx)(f.a.Text,{text:e.content})})};var O=function(e){var a=Object(s.useState)("black"),t=Object(b.a)(a,2),r=t[0],n=t[1];return Object(o.jsx)("div",{className:"exam-question_item",style:{color:r},onClick:function(){return function(){var a=e.onClick(e.id);n(a?"green":"red")}()},children:Object(o.jsx)(v,{content:"".concat(["A","B","C","D","E"][e.id],") ").concat(e.item)})})};var A=function(e){var a=Object(s.useState)(!1),t=Object(b.a)(a,2),r=t[0],n=t[1],i=function(a){return n(!0),a===e.question.rightAnswer};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"exam-question-holder",children:[Object(o.jsxs)("p",{className:"exam-question_text",children:[Object(o.jsxs)("strong",{children:["QUEST\xc3O ",e.question.ID,". ",e.question.area]}),"."]}),Object(o.jsx)(v,{content:e.question.text}),Object(o.jsx)("div",{className:"exam-question-items",children:e.question.items.map((function(e,a){return Object(o.jsx)(O,{item:e,id:a,onClick:i},a)}))}),r?Object(o.jsxs)("div",{className:"exam-question-explanation",children:[Object(o.jsx)("p",{className:"exam-question-explanation-e",children:"Explica\xe7\xe3o: "}),Object(o.jsx)(v,{content:e.question.explanation})]}):""]})})};t(42);var g=function(e){var a=e.match.params.year,t=a in d&&d[a];return Object(o.jsxs)("div",{className:"exam-holder",children:[Object(o.jsx)(p,{}),Object(o.jsxs)("h1",{children:["POSCOMP ",a]}),t?t.map((function(e){return Object(o.jsx)(A,{question:e},e.ID)})):Object(o.jsx)("h1",{children:"Ainda n\xe3o existem quest\xf5es explicadas para essa edi\xe7\xe3o da prova :("})]})};var q=function(){return Object(o.jsx)("div",{className:"exam-editor-holder"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(c.a,{children:Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{path:"/exam/:year",component:g}),Object(o.jsx)(m.a,{path:"/editor",component:q}),Object(o.jsx)(m.a,{path:"/",children:Object(o.jsx)(j,{})})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.d9243e54.chunk.js.map