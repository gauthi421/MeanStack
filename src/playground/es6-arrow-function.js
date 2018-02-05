'use strict'

const Name = 'Gautham Nag Adapala';

const getFirstName = (x) => {
return x.split(' ')[0];
};

const getFirstName2 = (x) => x.split(' ')[0];

document.write('First Name=' + getFirstName(Name));
document.write('First Name2=' + getFirstName2(Name));
