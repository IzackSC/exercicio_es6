"use strict";

var alunos = [{
  nome: 'Izack',
  nota: 6
}, {
  nome: 'Larissa',
  nota: 10
}, {
  nome: 'Matchola',
  nota: 0
}];
var filtraMedia = function filtraMedia(alunos) {
  return alunos.nota >= 6;
};
var filtraMedia2 = alunos.filter(filtraMedia);
console.log(filtraMedia2);