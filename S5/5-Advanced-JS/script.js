/*var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
}



Person.prototype.lastName = 'Smith';

var john = new Person('John', 1985, 'IT');
john.lastName = 'Lenon';

var smith = new Person('Smith', 1989, 'Teacher')

console.log(Person.isPrototypeOf(john));*/
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
console.log(score);