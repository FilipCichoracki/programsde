function Subject()
{
  this.turrets = [] // array of turrets functions
}

Subject.prototype = {
  ready: function(fn)
  {
    this.turrets.push(fn)
  },
  unready: function(fnToRemove)
  {
    this.turrets = this.turrets.filter( fn => {
      if(fn != fnToRemove)
        return fn
    })
  },
  ready: function()
  {
    this.turrets.forEach( fn => {
      fn.call()
    })
  }
}

const subject = new Subject()

function FrontTurret()
{
  console.log("Front Turret is Firing!")
}

function BackTurret()
{
  console.log("Back Turret is Firing!")
}

subject.ready(FrontTurret)
subject.ready(BackTurret)
subject.ready() 

subject.unready(Observer1)
subject.ready()
