class PhoneClass {
    Android = {
        waterproof : true,
        batteryDie : "Long",
        popularity : "80%",
        showskill () {
            return `
                is ${this.waterproof} 
                and its battery is ${this.batteryDie}
                also the popularity of Androids is ${this.popularity}.
            `;
        }
    };
    Iphone = {
        waterproof : false,
        batteryDie : "Shorthen",
        popularity : "90%",
    };
};
let p = new PhoneClass;
class show extends PhoneClass {
    constructor (model,ram,rom) {
        this.model = model;
        this.ram = ram;
        this.rom = rom;
    };
    showSpec () {
        return `
            Model => ${this.model} 
            Ram   => ${this.ram} 
            Rom   => ${this.rom} and ${p.Android.showskill()} 
        `;
    }
};
// let showPhoneClass = new show(5, 8, 512) ;
