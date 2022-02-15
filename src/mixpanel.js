const mixpanel = require('mixpanel-browser');
export default class TrackingService {
    constructor() {
        mixpanel.init("4e3a1a3be77666071ba908bb5480fd1c");
    }
    visit(page) {
        this.track('visit', {
            page
        });
    }

   getDistinctIdSend(usuario) {
    const distinctId = this.getDistinctId();
       if (distinctId) {
           usuario.distinct_id = distinctId;
       }
    mixpanel.track('activarUsuarioFreemium', usuario)
}


    track(eventName, payload) {
        const distinctId = this.getDistinctId();

        if (distinctId) {
            payload.distinct_id = distinctId;
        }
        mixpanel.track(eventName, payload);
    }

    getDistinctId() {
        return mixpanel.get_distinct_id();
    }

}
