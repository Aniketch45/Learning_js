let name="Aniket";

let FirstName=name;
FirstName="Viki";

console.log(FirstName);
//stack creates copy
//doesnt change value

let address={
    city:"pune",
    state:"Maharashtra"
}

let homeAddress=address;

homeAddress.state="Rajasthan";

console.log(address.state);
console.log(homeAddress.state);

//heap original value referce get
//doent create copy