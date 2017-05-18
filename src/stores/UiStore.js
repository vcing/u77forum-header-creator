import createHistory from 'history/createBrowserHistory'
import {observable, action} from 'mobx';

class UiStore {
    @observable headerStatus = true;
    @observable detailStatus = true;

    constructor() {
        this.history = createHistory();
    }

    @action toggleHeaderStatus() {
        this.headerStatus = !this.headerStatus;
    }

    @action toggleDetailStatus() {
        this.detailStatus = !this.detailStatus;
    }
}

let uiStore = new UiStore();
export default uiStore;