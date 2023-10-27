const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const fullName = person.getFullName.bind(person);
console.log(fullName()); // Outputs: "John Doe"
