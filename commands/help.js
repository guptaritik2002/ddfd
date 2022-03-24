function helpfn() {
    console.log(`
    list of all the commands :
          node main.js tree "directorypath"
          node main.js organize "directorypath"
          node main.js help 
     `);
  }

  module.exports={
      helpkey: helpfn
  }
  