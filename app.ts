function carInfo(manufacturer: string, modelName: string, ...options: [string, any][]): object {
    let car: {[key:string]: any} = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    
    for (let option of options) {
        let [key, value] = option;
        car[key] = value;
    }
    
    return car;
}

let myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);
console.log(myCar);