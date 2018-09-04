var person = {
    name: 'Harry',
    lastName: 'Nguyen',
    yearOfBirth: 1985,
    isMarried: true,
    job: 'software engineer',
    family: ['Annie', 'Markcus'],
    calculateAge: function(){
        this.age = 2018 - this.yearOfBirth;
    }
}

console.log(person);
//person.calculateAge();
console.log(person); 
