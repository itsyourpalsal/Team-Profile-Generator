// Using Intern constructor 
const Intern = require('../lib/Intern');

// Creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Sal', 90, 'salbeltran1995@gmail', 'UCF');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// Gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Sal', 90, 'salbeltran1995@gmail', 'UCF');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Sal', 90, 'salbeltran1995@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual("Intern");
}); 