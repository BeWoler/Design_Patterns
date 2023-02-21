class Audi {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class AudiFactory {
  create(type) {
    if (type === "tt") {
      const tt = new Audi(type, 12000, 200);
      console.log(tt);
      return tt;
    }

    if (type === "a4") {
      const a4 = new Audi(type, 10000, 300);
      console.log(a4);
      return a4;
    }

    return console.log("Unknown audi");
  }
}

const factory = new AudiFactory();

const tt = factory.create("tt");
const a4 = factory.create("a4");
const unknown = factory.create("unk");
