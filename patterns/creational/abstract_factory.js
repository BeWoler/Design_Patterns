function axeProducer(kind) {
  return kind === "wooden" ? WoodenAxeFactory : StoneAxeFactory;
}

function WoodenAxeFactory() {
  return new WoodenAxe();
}

function StoneAxeFactory() {
  return new StoneAxe();
}

class WoodenAxe {
  info() {
    return "Wooden Axe";
  }
}

class StoneAxe {
  info() {
    return "Stone Axe";
  }
}

const produce = axeProducer("wooden");
const myAxe = new produce();
console.log(myAxe.info());
