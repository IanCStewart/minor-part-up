# Part-up Redux/ React demo
> Demoing the activity tab comment-page with redux and react-redux

## The App
![Demo gif](./demo.gif)

This app is a demo of the possibilities with Redux and React. I have rebuilt the activity tab comment section for this component rebuild demo. The components came from a MeteorJS base.

### Concept
Advice demo to show that the app could also be built on other principles.

## Basic structure
I have built the front-end on react.
> A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES ~[FaceBook](https://facebook.github.io/react/)


I am saving the comments in a Redux store
> Redux is a predictable state container for JavaScript apps. [redux.js](http://redux.js.org/#)


I used socket.io to connect the different clients
> Socket.IO enables real-time bidirectional event-based communication. [socket.io](https://socket.io/)

## Cloning
Clone the repo:
```
$ cd ~/Sites && git clone git@github.com:IanCStewart/minor-part-up.git
```

Install the node modules:
```
$ cd minor-part-up && npm i
```

## Deploying
Run server in first terminal window:
```
$ npm run start-server
```

Run the client in a second terminal window:
```
$ npm start
```

## Todo
- [ ] Own react components
- [ ] Use real usernames from real users
- [ ] More details in the component

## Resources
- [facebook/react](https://facebook.github.io/react/)
- [redux.js](http://redux.js.org/#)
- [socket.io](https://socket.io/)
- [anchor-ui](https://github.com/anchorchat/anchor-ui)
- [reduxMiddleWare snippet from @rijkvanzanten](https://gist.github.com/rijkvanzanten/e1f3c04635495f57aa27bfec6ee4be21)
- [helpful advice from @sjaakluthart](https://github.com/sjaakluthart)
