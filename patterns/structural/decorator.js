class Tools {
  constructor() {
    this.kind = "Axe";
    this.color = "brown";
  }

  getKind() {
    return this.kind;
  }

  getColor() {
    return this.color;
  }
}

class StoneAxe extends Tools {
  constructor() {
    super();
    this.kind = "Stone Axe";
    this.color = "black";
  }
}

class TwoHandedTool {
  constructor(tool) {
    this.tool = tool;
  }

  getKind() {
    return `Two handed ${this.tool.getKind()}`;
  }

  getColor() {
    return `Two handed ${this.tool.getColor()} tool`;
  }
}

class WideTool {
  constructor(tool) {
    this.tool = tool;
  }

  getKind() {
    return `Wide ${this.tool.getKind()}`;
  }

  getColor() {
    return `Wide ${this.tool.getColor()}`;
  }
}

let stoneAxe = new StoneAxe();
stoneAxe = new TwoHandedTool(stoneAxe);
stoneAxe = new WideTool(stoneAxe);

console.log(stoneAxe.getKind());
console.log(stoneAxe.getColor());
