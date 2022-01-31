class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
        name = 'Max';
        gender = 'female';
    
    printMyName = () => {
        console.log(this.name);
    }
}

// 값을 재할당 하고싶으면 let, 재할당 하지않으면 const

const person = new Person();
person.printMyName();
person.printGender();

const human = new Human();
human.printGender();