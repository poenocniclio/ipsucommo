interface BusinessStrategy {
  businessStatement: string;
}

class SynergyStrategy implements BusinessStrategy {
  businessStatement: string;

  constructor() {
    this.businessStatement = "synergize scalable supply-chains";
  }

  public displayStrategy(): void {
    console.log(this.businessStatement);
  }
}

// Usage
const strategy = new SynergyStrategy();
strategy.displayStrategy();
