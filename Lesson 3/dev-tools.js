const devTools = (prevState, nextState, action) => {
    console.groupCollapsed(action.type);
    console.groupCollapsed('Previous state');
    console.log(prevState);
    console.groupEnd();
    console.groupCollapsed('Next state');
    console.log(nextState);
    console.groupEnd();
    console.groupEnd();
  };