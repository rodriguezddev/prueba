
export default class TrackingService {
    onClick() {
        this.$gtm.trackEvent({
          event: null, // Event type [default = 'interaction'] (Optional)
          category: "Calculator",
          action: "click",
          label: "Home page SIP calculator",
          value: 5000,
          noninteraction: false, // Optional
        });
      }
}