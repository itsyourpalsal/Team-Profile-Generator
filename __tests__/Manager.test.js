// Using Manager constructor 
const Manager = require('../lib/Manager');

// Creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Sal', 90, 'salbeltran1995@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Sal', 90, 'salbeltran1995@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 