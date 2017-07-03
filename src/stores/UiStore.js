import createHistory from 'history/createBrowserHistory'
import {observable, action} from 'mobx';

class UiStore {
    @observable headerStatus = false;
    @observable detailStatus = false;
    @observable recommendStatus = false;
    @observable detailItemStatus = Array(99).fill(true);
    @observable infoStatus = Array(99).fill(true);
    @observable tags = [];
    @observable currentTag = 0;

    constructor() {
        this.history = createHistory();
        this.initTags();
        window.ui = this;
    }

    @action initTags() {
        window
            .jQuery
            .get('http://www.u77.com/tag/cache', result => {
                this.tags = result.data
                this.tags["1"].list.push({id:12 ,name:"安卓"})
                this.tags["1"].list.push({id:13 ,name:"IOS"})
                this.currentTag = 1;
            });
    }

    @action activeTag(index) {
        this.currentTag = index;
    }

    @action toggleHeaderStatus() {
        this.headerStatus = !this.headerStatus;
    }

    @action toggleRecommendStatus() {
        this.recommendStatus = !this.recommendStatus
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