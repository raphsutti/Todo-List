// $0 element from using inspect
var test = $0

test.addEventListener('click', function() {
console.log('clicked');
});

// Looking at event objects that come with addEventListener
test.addEventListener('click', function(event) {
console.log(event);
console.log('clicked');
});