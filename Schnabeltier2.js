// JavaScript Document


var men =  ['Marek', 'Olek', 'Jacek', 'Grzesiek'];
var women = ['Ola', 'Adrianna', 'Sylwia', 'Daria'];
var razem = men.concat(women);




var newName = 'Janek';
	 if (razem.indexOf('Janek')) {
		 console.log('Error repeat');
	 }
	 else {
		 var razemNewName = razem.push(newName);
	 }
		 
console.log(razemNewName);

		 

