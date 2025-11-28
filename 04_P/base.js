//1
class Car  {
    constructor(producer,model,year,averageSpeed){
        this.producer = '';
        this.model = '';
        this.year = 0;
        this.averageSpeed = 0;
    };
    printInfo() {
        console.log(`Producer: ${this.producer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Average Speed: ${this.averageSpeed} km/h`);
    };
    calculateTravelTime(distance) {
        let time = distance / this.averageSpeed;
        let restTime = 0;
        if (time % 4==0) {
            restTime += 1;        
        time += restTime;
        }
        if(time<1)
        {
            time*=60
            console.log(`You will drive for ${time}m`);
        }
        else{
            console.log(`You will drive for ${time}h`);
        }
        
    }
}
// Car.producer = 'Lada';
// Car.model = 'Sedan';
// Car.year = 100;
// Car.averageSpeed = 50
let car = new Car('Lada','Sedan',100,50)

car.printInfo();
car.calculateTravelTime(20);


//2
class Time {
    constructor(hours,minutes,seconds){
        this.hours = 23;
        this.minutes = 59;
        this.seconds = 59;
        this.res = '';
    };
    GetTime() {
        
        if(this.hours<10) {
            this.res = '0' + `${this.hours}` + ':';
        }
        else {
            this.res = `${this.hours}` + ':';
        };
        if(this.minutes<10) {
            this.res += '0' + `${this.minutes}` + ':';
        }
        else {
            this.res += `${this.minutes}` + ':';
        };
        if(this.seconds<10) {
            this.res += '0' + `${this.seconds}`;
        }
        else {
            this.res += `${this.seconds}`;
        };

        return this.res;
    };
    Addseconds(sec) {
        this.seconds += sec;
        while(this.seconds >= 60) {
            this.seconds -= 60;
            this.minutes += 1;
        }
        while(this.minutes >= 60) {
            this.minutes -= 60;
            this.hours += 1;
        }
        if(this.hours >= 24)
        {
            this.hours = this.hours % 24;
        }
    };
    
    AddMinutes(minutes) {
        converted = minutes*60;
        this.Addseconds(converted)
    };
    AddHours(hours) {
        converted = hours*60;
        this.Addseconds(converted)
    };

    PrintOnScreen(time) {

    };
};

Time.printTime();
Time.setTimeAddseconds(1);
Time.printTime();
Time.setTimeMinusseconds(1);
Time.printTime();


