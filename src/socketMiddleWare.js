const createSocketMiddleware = function(socket, {eventName = 'action'} = {}) {
  return ({dispatch}) => {
    socket.on(eventName, dispatch);

    return (next) => (action) => {
      if(action.hasOwnProperty('server')) socket.emit(eventName, action);
      return next(action);
    };
  };
};

export default createSocketMiddleware;
