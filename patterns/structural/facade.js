class AxeConveyor {
  setColor() {
    console.log("Color set");
  }
  setMaterial() {
    console.log("Material set");
  }
  setHigth() {
    console.log("Hight set");
  }
  setBladeSharpness() {
    console.log("Blade Sharpness set");
  }
  created() {
    console.log("Axe created");
  }
}

class AxeConveyorFacade {
  constructor(axe) {
    this.axe = axe;
  }
  assembleAxe() {
    this.axe.setColor();
    this.axe.setMaterial();
    this.axe.setHigth();
    this.axe.setBladeSharpness();
    this.axe.created();
  }
}

const conveyor = new AxeConveyorFacade(new AxeConveyor());
const axe = conveyor.assembleAxe();

console.log(axe);
