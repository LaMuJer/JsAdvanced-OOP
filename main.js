// Learn About OOP
// This is Object Page

let iphone12 ={
    // property
    name : "Iphone12",
    model : "13",
    color : ["Grey","Pink","Blue","Dark"],
    isWaterProof : true,

    // method
    showModel : () => {return console.log(`${iphone12.name} => model  ${iphone12.model}`)},
    promotion () {
        return `${this.color[0]} is avaliable for October`;
    }
}
