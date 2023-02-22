class Axe {
  constructor(kind, color) {
    this.kind = kind;
    this.color = color;
  }

  produce() {
    return new Axe(this.kind, this.color);
  }
}

const prototypeAxe = new Axe("wooden", "black");

const axe1 = prototypeAxe.produce();
const axe2 = prototypeAxe.produce();
const axe3 = prototypeAxe.produce();

console.log(axe1);
console.log(axe2);
console.log(axe3);

axe1.kind = "stone";
axe1.color = "brown";

console.log(axe1);
console.log(axe2);
console.log(axe3);
