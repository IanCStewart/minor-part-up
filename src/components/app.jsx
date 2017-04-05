import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { MessageList, Message, MessageInput } from 'anchor-ui';
import Loader from 'anchor-ui/loader';
import uuid from 'uuid';
import { messageSend, typingShow, typingHide } from '../actions/messages';
import avatar from '../assets/images/avatar.jpg';
import sendMessage from '../send-message';
import '../app.css';

class App extends Component {
  static propTypes = {
    messageSend: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(Object).isRequired,
    typing: PropTypes.bool.isRequired
  }

  constructor() {
    super();

    this.state = {
      message: ''
    };

    this.handleMessageSend = this.handleMessageSend.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  scrollDown() {
    setTimeout(() => {
      if (this.messagesContainer) {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      }
    }, 100);
  }

  handleMessageSend() {
    const { message } = this.state;

    if (!message) {
      return false;
    }

    this.props.messageSend({
      body: message,
      username: 'MainUser',
      createdAt: new Date(),
      id: uuid.v4()
    });

    sendMessage(message);

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
    const { messages, typing } = this.props;

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
          {typing ? <div className="loader"><Loader dotStyle={{ backgroundColor: '#eee' }} /></div> : null}
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
    messages: state.messages.data,
    typing: state.messages.typing
  };
}

export default connect(mapStateToProps, { messageSend, typingShow, typingHide })(App);