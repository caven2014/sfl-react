export default class ChatWS {
  constructor(url, dispatcher) {
    const _self = this;
    this.websocket = new WebSocket(`ws://${url}`);
    this.dispatcher = dispatcher
    this.websocket.onopen = function() {
      console.info(`与${url}连接成功...`)
      _self.websocket.onmessage = function (event) {
        dispatcher(event.data)
      }
    }
  }

  postMessage(text) {
    this.websocket.send(
      text
    );
    console.info(`发送了一条内容: ${text}`)
  }

  close() {
    this.websocket.close();
    console.info('websocket已关闭...')
  }

}
