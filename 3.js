'use strict';

/*#3. Оператор + или join?
Сделайте две версии своего генератора дразнилок: одна пусть
использует для составления дразнилки оператор +, а другая соз-
дает массив со словами и соединяет их через пробел с помощью
join. Какой вариант вам больше нравится и почему?

«У тебя [часть тела] еще более [прилагатель-
ное], чем [часть тела животного] у [животное]».
#4.*/

var arreyBody = ['нога', 'рука', 'голова', 'попа', "шея"];
var arreyKind = ['кривая', 'косая', 'гнутая', 'перегнутая', 'закрытая', 'прибитая', 'убитая', 'безобразная'];
var arreyAnimalBody = ['лапа', 'шея', 'попа', 'голова', 'спина'];
var arreyAnimal = ['осла', 'козы', 'таракана', 'гориллы', 'мартышки', 'коровы', 'мухи'];
var arreyBodyIndex = Math.floor(Math.random() *arreyBody.length);
var arreyKindIndex = Math.floor(Math.random() *arreyKind.length);
var arreyAnimalBodyIndex = Math.floor(Math.random() *arreyAnimalBody.length);
var arreyAnimalIndex = Math.floor(Math.random() *arreyAnimal.length);

var body =arreyBody[arreyBodyIndex];
var kind = arreyKind[arreyKindIndex];
var animalBody = arreyAnimalBody[arreyAnimalBodyIndex];
var animal = arreyAnimal[arreyAnimalIndex];

var arrayFinal = [];

arrayFinal.push('у тебя ');
arrayFinal.push(body);
arrayFinal.push(' еще более ');
arrayFinal.push(kind);
arrayFinal.push(', чем ');
arrayFinal.push(animalBody);
arrayFinal.push(' у ');
arrayFinal.push(animal);

console.log(arrayFinal);

var final = arrayFinal.join(' ');

console.log(final);
