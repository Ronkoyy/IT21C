class Animal{
    constructor(name){
        this.name = name;
    }

    eating(){
        console.log(this.name + ' is eating');
    }
    sleeping(){
        console.log(this.name + ' is sleeping');
    }
    playing(){
        console.log(this.name + ' is playing');
    }
}


 var dog = new Animal("Dog");
 dog.eating();
 dog.sleeping();
 dog.playing();