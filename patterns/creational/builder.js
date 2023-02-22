class Axe {
  constructor() {
    this.kind = null;
    this.color = null;
    this.height = null;
  }
}

class AxeBuilder {
  constructor() {
    this.axe = new Axe();
  }

  addAxeKind(kind) {
    this.axe.kind = kind;
    return this;
  }

  updateAxeColor(color) {
    this.axe.color = color;
    return this;
  }

  setAxeHeight(height) {
    this.axe.height = height;
    return this;
  }

  build() {
    return this.axe;
  }
}

const myAxe = new AxeBuilder()
  .addAxeKind("wooden")
  .updateAxeColor("brown")
  .setAxeHeight("30cm")
  .build();

const myAxe2 = new AxeBuilder()
  .addAxeKind("stone")
  .setAxeHeight("40cm")
  .build();

console.log(myAxe);
console.log(myAxe2);
