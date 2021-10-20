// Inheritance is an important concept in object oriented programming. In the classical inheritance, methods from base class get copied into derived class.

// In JavaScript, inheritance is supported by using prototype object. Some people call it "Prototypal Inheriatance" and some people call it "Behaviour Delegation".

class SmartDevice{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('I am eating electrons...they yummy')
    }
}
class Phone extends SmartDevice{
    constructor(name, price, camera){
        super(name, price);
        this.camera = camera;
    }
    sendSMS(){
        console.log('I am sending text to my gf/bf')
    }
}

class Watch extends SmartDevice{
    constructor(name, price, distance){
        super(name, price);
        this.distance = distance;
    }
}
class Tablet extends SmartDevice{
    constructor(name, price, isWifi){
        super(name, price);
        this.isWifi = isWifi;
    }
}

 const samsu = new Phone('Samsung', 60000, '16GB')
 samsu.sendSMS()
 const ipad = new Tablet('Apple', 45000, true)
 ipad.sendSMS()