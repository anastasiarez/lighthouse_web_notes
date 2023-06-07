const dog = {
  sound: "woof",
  speak: function() {
    console.log(this.sound);
  },
  teachMeSomething: function() {
    if (dog === this) {
      console.log('dog === this');
    }
    this.speak();
  }
};

dog.teachMeSomething();

const thing = {
  doodoo: "Boo",
  daadaa: function() {
    console.log(this);
  }
};

thing.daadaa()

const dog2 = {
  sound: "woof",
  speak: function() {
    console.log(this.sound);
  }
};

dog2.sound = "🐶"
dog2.speak();