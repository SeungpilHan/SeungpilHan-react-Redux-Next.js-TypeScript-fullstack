//참조형 및 원시형 데이터 타입

const person = {
    name: 'Max'
};

const secondPerson = {
    ...person
};

person.name = 'Manu';
console.log(secondPerson);