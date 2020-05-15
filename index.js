'use strict'

const parag1 = document.querySelector('.text1');
const parag2 = document.querySelector('.text2');
const parag3 = document.querySelector('.text3');
const sel1 = document.querySelector('.item1');
const sel2 = document.querySelector('.item2');
const sel3 = document.querySelector('.item3');

const displayer1 = () =>{
    parag1.classList.remove('hide');
    parag2.classList.add('hide');
    parag3.classList.add('hide');
    sel1.classList.add('active');
    sel2.classList.remove('active');
    sel3.classList.remove('active');
    sel1.classList.remove('item');
    sel3.classList.add('item');
    sel2.classList.add('item');
}

const displayer2 = () =>{
    parag1.classList.add('hide');
    parag2.classList.remove('hide');
    parag3.classList.add('hide');
    sel1.classList.remove('active')
    sel2.classList.add('active')
    sel3.classList.remove('active')
    sel2.classList.remove('item');
    sel3.classList.add('item');
    sel1.classList.add('item');
}

const displayer3 = () =>{
    parag1.classList.remove('hide');
    parag2.classList.remove('hide');
    parag3.classList.add('hide');
    sel1.classList.remove('active')
    sel2.classList.remove('active')
    sel3.classList.add('active')
    sel3.classList.remove('item');
    sel2.classList.add('item');
    sel1.classList.add('item');
}

sel1.addEventListener('click', displayer1);
sel2.addEventListener('click', displayer2);
sel3.addEventListener('click', displayer3);
