const car = {
    wheels: 4,
    engine: engine,
    doors: 4,
    sittings: 4,
    windows: 6,
    controls: 'steering wheel, pedals',
    brand:"",
    roof: true,
    toStart: (controls)=>(console.log("Ключ на старт")),
    toStop: (controls)=>(console.log("Тормози")),
}
const coupe = {
    __proto__: car,
    windows: 4,
    doors: 2,
    sittings: 3,
    toOpenHood: ()=>(console.log("Дерни рычаг и капот откроется"))
}   
const cabrio = {
    __proto__: coupe,
    hardRoof: false,
    roofType: "",
    toOpenRoof: ()=>(console.log("Нажми на кнопку - получишь результат"))
}

class Car{
    constructor(color, brand, power){
        this.color = color;
        this.brand = brand;
        this.power = power;
        this.wheels = 4;
        this.engine = engine;
        this.doors = 4;
        this.sittings = 4;
        this.windows = 6;
        this.controls = 'steering wheel, pedals',
    }
    toStart: (controls)=>(console.log("Ключ на старт")),
    toStop: (controls)=>(console.log("Тормози")),
}

class Coupe extends Car{
    constructor(color, brand, power){
        super(color,brand, power);
        this.windows = 4;
        this.doors = 2;
        this.sittings = 3;
    }
    toOpenHood: ()=>(console.log("Дерни рычаг и капот откроется"));
}

class Cabrio extends Coupe{
    constructor(color, brand, power, roofType){
        super(color,brand,power);
        this.hardRoof = false;
        this.roofType = roorType;
    }
    toOpenRoof: ()=>(console.log("Нажми на кнопку - получишь результат"));
}