class Engine2 {
  simpleInterface() {
    console.log("Engine 2.0");
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log("Engine V8");
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

const myCar2 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

myCar2.startEngine(engineAdapter);

const myCar3 = new Auto();
const engineAdapter2 = new EngineV8();

myCar3.startEngine(engineAdapter2); // ERROR
