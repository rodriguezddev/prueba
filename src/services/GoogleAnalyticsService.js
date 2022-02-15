export default class GoogleAnalyticsService {
  googleAnalytics = null;
  value = false;
  constructor(self) {
    this.googleAnalytics = self.$ga;
  }
  sendEvent(category, action, label) {
    this.googleAnalytics.event(category, action, label)
  }
  sendHeartBeatEvent() {
    var self = this
    document.addEventListener("mouseup", e => {
      self.value = true
    })
    setTimeout(function () {
      if (self.value == false) {
        self.sendEvent('Heartbeat', 'heartBeat', 'heartBeat')
      }
    }, 40000);
  }
}
