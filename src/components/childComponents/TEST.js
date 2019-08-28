class Animal  {
  
        constructor(name) {
            this.name = name;
          }
          getName(){
              return this.name; 
          }
}

class Dog extends Animal {
    
    bark(){
        return "Dog" + super.getName()+ " is barking";
    }
}
export default Dog;