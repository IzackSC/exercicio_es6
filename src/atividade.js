const alunos = [
    {
        nome: 'Izack',
        nota: 6,
    },
    {
        nome: 'Larissa',
        nota: 10,
    },
    {
        nome: 'Matchola',
        nota: 0,
    },
];

const filtraMedia = alunos => alunos.nota >= 6;
const filtraMedia2 = alunos.filter(filtraMedia);
console.log(filtraMedia2);