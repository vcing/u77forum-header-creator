import createHistory from 'history/createBrowserHistory'

class UiStore {
    constructor() {
        this.history = createHistory();
    }
}

let uiStore = new UiStore();
export default uiStore;