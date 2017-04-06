import _ from 'lodash';

const createSocketMiddleware = (socket, { eventName = 'action' } = {}) => (
  ({ dispatch }) => {
    socket.on(eventName, dispatch);

    return next => (action) => {
      if (_.has(action, 'server')) {
        socket.emit(eventName, action);
      }

      return next(action);
    };
  }
);

export default createSocketMiddleware;
