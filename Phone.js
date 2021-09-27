class Phone {
            constructor (model,ram,rom,color) {
                this.model = model;
                this.ram = ram;
                this.rom = rom;
                this.color = color;
            }
            fullSpec () {
                console.log(`${this.model} , ${this.ram} , ${this.rom} , ${this.color}`);
            }
}

let android = new Phone('Note 10',4,8,"Pink");
android.fullSpec();