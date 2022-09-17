const OurReact = (function () {
  let val; // ‘val’ stores the value in the module scope
  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
    useState(initialVal) {
      val = val || initialVal; // Assigns a new value every run
      function setState(newVal) {
        val = newVal;
      }
      return [val, setState];
    },
  };
})();

function Character () {
    const [characterName, setCharacterName] = OurReact.useState('Mario'); // default value to ‘Mario’
    return{
        changeName: (charName) => setCharacterName(charName),
        render: () => console.log('Rendered character:', characterName),
    }
}
let App;
App = OurReact.render(Character);  // Rendered character: Mario
App.changeName('Luigi');
App = OurReact.render(Character);
