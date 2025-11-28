//1
var Time = {
    hours: 23,
    minutes: 59,
    seconds: 59,
    res :'',
    printTime: function() {
        
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

        console.log(this.res);
    },
    setTimeAddseconds: function(sec) {
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
    },
    setTimeMinusseconds: function(sec) {
        this.seconds -= sec;
        while(this.seconds < 0) {
            this.seconds += 60;
            this.minutes -= 1;
        }
        while(this.minutes < 0) {
            this.minutes += 60;
            this.hours -= 1;
        }
        if(this.hours < 0)
        {
            this.hours = (this.hours + 24) % 24;
        }
    },
};

Time.printTime();
Time.setTimeAddseconds(1);
Time.printTime();
Time.setTimeMinusseconds(1);
Time.printTime();

//2
var Car = {
    producer: '',
    model: '',
    year: 0,
    averageSpeed: 0,
    printInfo: function() {
        console.log(`Producer: ${this.producer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Average Speed: ${this.averageSpeed} km/h`);
    },
    calculateTravelTime: function(distance) {
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
Car.producer = 'Lada';
Car.model = 'Sedan';
Car.year = 100;
Car.averageSpeed = 50

Car.printInfo();
Car.calculateTravelTime(20);
