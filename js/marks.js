const myMarks = [83,56,85,65,47,73];

// find the max mark.
let maxMark = myMarks[0];
let sumMark = 0;



for(let i= 1; i<myMarks.length; i++){

    sumMark += myMarks[i];
    if(myMarks[i] > maxMark){
        maxMark = myMarks[i];
    }
}

console.log("The maximum mark is: " + maxMark);

// min mark?
// success | fail 
// total marks
// avg mark