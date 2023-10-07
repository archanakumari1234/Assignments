/*        Car Description Class.
Create a class called Car with three properties: company, model, and year. The class should have a method
called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
instance of the Car class and call the getDescription method.       */




class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  // Instantiate an instance of the Car class
  const myCar = new Car('Toyota', 'Camry', 2022);
  
  // Call the getDescription method
  const carDescription = myCar.getDescription();
  
  console.log(carDescription); // Outputs: "This is a 2022 Toyota Camry"
  