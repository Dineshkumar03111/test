// How to compare two JSON have the same properties without order?


var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person1" };

function areObjectsEqual(obj1, obj2) {
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var i=0; i < keys1.length ; i++) {
    if (obj1[keys1[i]] !== obj2[keys1[i]]) {
      return false;
    }
  }

  return true;
}

console.log(areObjectsEqual(obj1, obj2));







// Use the rest countries API URL -> hilis./restcountries.com/v3.1/all and display all the country flags in the console
// Use the same rest countles and print all countries names, regions, sub-region and populations

var xhr = new XMLHttpRequest(); 

xhr.open( "GET", "https://restcountries.com/v3.1/all", true); 

xhr.onload = function () {
  
  var countries = JSON.parse(xhr.responseText);
 
  for (var i = 0; i < countries.length; i++) {
    console.log(countries[i].name.common + ": " + countries[i].flag);
    console.log("Populations: ", countries[i].population);
    console.log("regions: ", countries[i].region );
    console.log("sub regions:",countries[i].subregion);
  }
};

xhr.send(); 
