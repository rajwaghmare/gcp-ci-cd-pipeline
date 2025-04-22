
//Collecting marks for six subject from an array update and access the marks

//Declaring the array of subjects
var marks = [35, 45, 50, 55, 60, 70];

//Accessing the marks
console.log("Marks of forth elements is: " + marks[3]);
console.log("****************************************");

//Updating the marks
marks[3] = 65;

console.log("Printing total marks are: " + marks);


console.log("****************************************");
//Printing the marks length
console.log("Length of the array is: " + marks.length);


marks.push(80); // Adding marks or element into the array in the last position
console.log("After adding the new marks: " + marks);

console.log("****************************************");

marks.pop(); // Removing the last element from the array
console.log("After removing the last element: " + marks);

console.log("****************************************");

marks.unshift(50); // Adding marks or element into the array in the first position
console.log("After adding the new marks at the start: " + marks);

console.log("****************************************");

console.log("Index of marks is: " + marks.indexOf(100));

console.log("****************************************");

for(let i = 0; i < marks.length; i++){

    console.log(marks[i]);
}