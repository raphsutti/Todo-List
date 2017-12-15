// List to loop through
var students = ['Jonathan', 'Jenny', 'Elliot'];

// Method 1: Create function to loop through
function logName(list) {
	for(var i=0; i<list.length; i++) {
		console.log(list[i]);
	}
	
}
// Call function
logName(students);


// Method 2: Call forEach without the need for logName function
// Don't need for loop
students.forEach(function(name) {
console.log(name);
})