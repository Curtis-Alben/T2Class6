let numbers = [300, 66, 99];
let points = new Array(300, 66, 99);

console.log(numbers);
console.log(points); 

let good = [40];
let bad = new Array(40);

console.log(good);
console.log(bad);


let dogs = ["golden retriever", "labrador", "staffie", "bulldog", "rotweiler", "toi-pom"];

console.log(dogs);
console.log(dogs.length);
console.log(dogs[1]);
console.log(dogs[0]);
console.log(dogs[dogs.length-1]);
console.log(Array.isArray(dogs));
console.log(dogs.toString())
console.log(dogs.join(", "))

dogs.pop();
console.log(dogs);

dogs.push("toi-pom")
console.log(dogs);

let dog = dogs.pop();

console.log(dog);
console.log(dogs);

let newDogs = dogs.slice(1, 4);

console.log(newDogs);
console.log(dogs);

dogs.splice(1, 2, "jack russel", "doberman", "pitbull");

function decreaseMars(){
    if (document.getElementById('ticketsMars').value != 0){
    document.getElementById('ticketsMars').value = parseInt(document.getElementById
    ('ticketsMars').value) - 1;
    } else {
        document.getElementById('ticketsMars').value = 0;
    }
}

function increaseMars(){
    document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) + 1;
}

let totalMarsCost = 0;

function total(){
  totalMarsCost = parseInt(document.getElementById('ticketsMars').value) * 50;
  document.getElementById('total').innerHTML = "R " + totalMarsCost;
}

function decreaseSaturn(){
    if (document.getElementById('ticketsSaturn').value != 0){
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById
    ('ticketsSaturn').value) - 1;
    } else {
        document.getElementById('ticketsSaturn').value = 0;
    }
}

function increaseSaturn(){
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;
}