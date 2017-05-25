import React, {Component} from 'react';
import {observer, Provider} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import stores from '../../stores';
import Template from '../Template';
import Editor from '../Editor';

@observer
export default class App extends Component {
  componentDidMount() {
    this.synchronizeHtml();
  }

  componentDidUpdate() {
    this.synchronizeHtml();
  }

  synchronizeHtml() {
    window
      .jQuery('#template-html')
      .val(window.jQuery('#template-result').html() && window.jQuery('#template-result').html().replace(/<!--[\w\W]*?-->/g, '') + "<script>$('#detail-showall').click(()=>window.jQuery('#description').removeClass" +
          "('collapse'))</script>");
  }
  render() {
    return (
      <Provider {...stores}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <Editor/>
            </div>
            <div className="col-lg-6 col-md-12">
              <div id="template-result">
                <Template/>
              </div>
            </div>
          </div>
          <div className="row" style={{
            margin: '20px 0'
          }}>
            <div style={{
              textAlign: 'center'
            }}>
              <button
                id="template-submit"
                className="btn btn-lg btn-primary"
                onClick={window.templateSubmit}>
                提交
              </button>
              <span></span>
              <button
                id="template-recommend"
                className="btn btn-lg btn-warning"
                onClick={window.recommend}>
                推荐
              </button>
            </div>
          </div>
          <input
            type="hidden"
            name="data"
            id="template-data"
            value={stores.dataStore.serialize}/>
          <div className="row">
            <textarea
              className="center-block"
              id="template-html"
              style={{
              width: '80%',
              margin: '0 auto'
            }}
              rows="30"></textarea>
          </div>
          <DevTools/>
        </div>
      </Provider>
    )
  }
};
