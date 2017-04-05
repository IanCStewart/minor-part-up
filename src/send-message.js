import uuid from 'uuid';
import Chance from 'chance';
import lines from './lines.json';
import store from './store';
import { messageSend, typingShow, typingHide } from './actions/messages';

const chance = new Chance();

function sendBeefBotMessage() {
  const quote = chance.pickone(lines.quotes);
  const username = chance.pickone(['Guest1', 'Guest2', 'Guest3', 'Guest4']);

  setTimeout(() => {
    store.dispatch(typingShow());

    setTimeout(() => {
      store.dispatch(typingHide());

      store.dispatch(messageSend({
        body: quote,
        username,
        createdAt: new Date(),
        id: uuid.v4()
      }));
    }, quote.length * 25);
  }, 500);
}

export default sendBeefBotMessage;
