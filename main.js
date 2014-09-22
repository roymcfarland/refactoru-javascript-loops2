// $(document).on('ready', function() {
  
// });

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

//////////////////////////
/////// PROBLEM 1 ////////
//////////////////////////

// for(var i=0; i<animals.length - 1; i++) {
// 	console.log(animals[i]);
// };



//////////////////////////
/////// PROBLEM 2 ////////
//////////////////////////

// for(var i=0; i<animals.length; i++) {
// 	if(i == 1) {
// 		continue;
// 	};
// 	if(i == 3) {
// 		continue;
// 	};
// 	console.log(animals[i]);
// };



//////////////////////////
/////// PROBLEM 3 ////////
//////////////////////////

// for(var i=4; i>=0; i--) {
// 	console.log(animals[i]);
// };



//////////////////////////
/////// PROBLEM 4 ////////
//////////////////////////

for(var i=0; i<animals.length; i++) {
	console.log(animals[i]);
	if(i == 0) {
		continue;
	}
	if(i == 4) {
		continue;
	}
	console.log(animals[i]);
};