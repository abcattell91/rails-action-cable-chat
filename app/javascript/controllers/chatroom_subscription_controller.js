import { Controller } from "@hotwired/stimulus"
import consumer from "../channels/consumer"

export default class extends Controller {
  static values = { chatroomId: Number }
  static targets = ["messages"]

  connect() {
    consumer.subscriptions.create({ channel: "ChatroomChannel", id: this.chatroomIdValue },
    { received: (data) => {
      this.element.insertAdjacentHTML('beforeend', data),
      this.messagesTarget.scrollTo(0, this.messagesTarget.scrollHeight)
    } })
  }
  resetForm(event) {
    event.target.reset()
  }
}
