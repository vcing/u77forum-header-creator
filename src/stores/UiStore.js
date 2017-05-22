import createHistory from 'history/createBrowserHistory'
import {observable, action} from 'mobx';

class UiStore {
    @observable headerStatus = false;
    @observable detailStatus = false;
    @observable detailItemStatus = new Array(99);
    @observable infoStatus = new Array(99);

    constructor() {
        this.history = createHistory();
    }

    @action toggleHeaderStatus() {
        this.headerStatus = !this.headerStatus;
    }

    @action toggleDetailStatus() {
        this.detailStatus = !this.detailStatus;
    }

    @action toggleDetailItemStatus(index) {
        this.detailItemStatus[index] = !this.detailItemStatus[index];
    }

    @action toggleInfoStatus(index) {
        this.infoStatus[index] = !this.infoStatus[index];
    }
}

let uiStore = new UiStore();
export default uiStore;