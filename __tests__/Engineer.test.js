// Using Engineer constructor 
const Engineer = require('../lib/Engineer');

// Creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Sal', 90, 'salbeltran1995@gmail.com', 'itsyourpalsal');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Sal', 90, 'salbeltran1995@gmail.com', 'itsyourpalsal');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Sal', 90, 'salbeltran1995@gmail.com', 'itsyourpalsal');

    expect(engineer.getRole()).toEqual("Engineer");
});