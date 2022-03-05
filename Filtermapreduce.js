let arr = [{name : "Jonathan", age : 19, id: 101, score : 100}, 
{name : "James", age: 26, id : 202, score: 96},
{name : "Bob", age : 39, id : 390, score : 69}];
// for mapping
let names = arr.map(names => names.name.toUpperCase());
    for(i = 0 ; i< names.length; i++)
    {
        console.log(names[i]);
    }
// for filtering
let agespecific = arr.filter(names => names.age > 20);
console.log(agespecific);


// for reducing
let totalscore = arr.reduce(((acc,names)=>acc+names.score),0);
console.log(totalscore);