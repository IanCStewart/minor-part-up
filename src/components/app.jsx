import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { MessageList, Message, MessageInput } from 'anchor-ui';
import uuid from 'uuid';
import Chance from 'chance';
import messageSend from '../actions/messages';
import avatar from '../assets/images/avatar.jpg';
import '../app.css';

class App extends Component {
  static propTypes = {
    messageSend: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(Object).isRequired
  }

  constructor() {
    super();

    this.state = {
      message: ''
    };

    this.handleMessageSend = this.handleMessageSend.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleMessageSend() {
    const { message } = this.state;
    const chance = new Chance();
    const username = chance.pickone(['Guest1', 'Guest2', 'Guest3', 'Guest4']);

    if (!message) {
      return false;
    }

    this.props.messageSend({
      body: message,
      username,
      createdAt: new Date(),
      id: uuid.v4()
    });

    this.messageList.scrollDown();

    return this.setState({
      message: ''
    });
  }

  handleMessageChange(event) {
    this.setState({
      message: event.currentTarget.value
    });
  }

  render() {
    const { messages } = this.props;

    const style = {
      background: {
        backgroundColor: '#fff'
      },
      inputRoot: {
        background: 'none'
      },
      input: {
        border: '2px solid #eee'
      },
      avatar: {
        width: '42px',
        height: '42px',
        borderRadius: '10%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${avatar})`,
        float: 'left',
        marginRight: '10px'
      },
      header: {
        border: '2px solid #eee',
        borderRadius: '5px',
        padding: '10px',
        margin: '16px',
        fontWeight: 'bold'
      }
    };

    return (
      <main className="app">
        <article className="activity-body" style={style.background}>
          <h1 style={style.header}>Activity Name</h1>
          <MessageList style={{ height: 'calc(100% - 149px)' }} addRef={ref => (this.messageList = ref)} autoScroll>
            {messages.map(message => (
              <section key={message.id}>
                <div style={style.avatar} />
                <Message
                  message={message} key={`message-${message.id}`}
                  compact
                  style={{ maxWidth: 'calc(100% - 50px)' }}
                />
              </section>
            ))}
          </MessageList>
          <MessageInput
            onChange={this.handleMessageChange}
            placeholder="Write a comment..."
            value={this.state.message}
            sendMessage={this.handleMessageSend}
            style={style.inputRoot}
            inputStyle={style.input}
          />
        </article>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages.data
  };
}

export default connect(mapStateToProps, { messageSend })(App);
