// Complete the function, carPassing(cars, speed), that takes in an array of car objects, and the speed of a car as it passes the sensor. This function should create a new object with with a property called speed, and another property called time and add it to the cars array. We can retrieve the current time, for setting the time property, by using the Date.now() function, which is built into JavaScript!

// Our function should return an array that includes all of the elements in cars as well as our new element.



const carPassing = (cars, speed) => {

            cars = [
            {
              time: 1568329654807,
              speed: 40,
            },
            {
              time: 1568329821632,
              speed: 42,
            },
            {
              time: 1568331115463,
              speed: 35
            }
          ];

        const newCar = { 
            'time': Date.now(),  
            'speed': 38
        }; 
        
        cars.push(newCar);
        return cars; 
    };
    console.log(carPassing()); 