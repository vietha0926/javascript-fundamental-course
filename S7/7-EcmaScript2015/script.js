function Person5(name, yob){
	this.name = name;
	this.yob = yob;
}
Person5.prototype.calculateAge = function(){
	let age = new Date().getFullYear() - this.yob;
	console.log(age);
}

let person5 = new Person5('John', 1985);
person5.calculateAge();

function Teacher5(name, yob, subject, noOfCertificates = 0){
	Person5.call(this, name, yob);
	this.subject = subject;
	this.noOfCertificates = noOfCertificates;
}


Teacher5.prototype = Object.create(Person5.prototype);
Teacher5.prototype.achieveNewCertificate = function(){
	this.noOfCertificates ++;
}

let teacher5 = new Teacher5('Mary', 1989, 'Math', 4);
console.log(teacher5);
teacher5.achieveNewCertificate();
console.log(teacher5);
