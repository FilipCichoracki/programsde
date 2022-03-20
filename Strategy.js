function Turret1(firerate)
{
  this.calculate = () =>
  {
    // Turret2 calculations ...
    return 3.65
  }
}

function Turret2(firerate)
{
  this.calculate = () =>
  {
    // Turret2 calculations ...
    return 3.23
  }
}

function Firing()
{
  this.turret = ''
  this.setStrategy = turret =>
  {
    this.turret = turret
  }
  this.calculate = firerate => {
    return this.turret.calculate(firerate)
  }
}

const turret1 = new Turret1()
const turret2 = new Turret2()
const firing = new Firing()
const firerate = { from: "America", to: "Russia", dropoff: 2 }

firerate.setStrategy(Turret1)
console.log("Turret1: " + firing.calculate(firerate))

shipping.setStrategy(Turret2)
console.log("Turret2: " + firing.calculate(firerate))