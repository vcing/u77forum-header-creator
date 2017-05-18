import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {action} from 'mobx';

@inject(stores => ({dataStore: stores.dataStore, uiStore: stores.uiStore}))@observer
export default class Editor extends Component {
    changeData(e) {
        if (e.target.type == 'checkbox') {
            this
                .props
                .dataStore
                .changeData(e.target.name, e.target.checked);
        } else {
            this
                .props
                .dataStore
                .changeData(e.target.name, e.target.value);
        }
    }
    removeDownloadButton(position) {
        return function () {
            this
                .props
                .dataStore
                .removeHeaderButton(position);
        }.bind(this);
    }
    toggleHeader() {
        this
            .props
            .uiStore
            .toggleHeaderStatus();
    }
    toggleDetail() {
        this
            .props
            .uiStore
            .toggleDetailStatus();
    }
    toggleDetailItem(index) {
        return function () {
            console.log(index);
            this
                .props
                .uiStore
                .toggleDetailItemStatus(index);
        }
    }
    addDetail() {
        this
            .props
            .dataStore
            .addDetail();
    }
    removeDetail(index) {
        return function () {
            this
                .props
                .dataStore
                .removeDetail(index);
        }
    }
    changeInfoData(index, attr) {
        return function (e) {}
    }
    toggleInfoItem(index) {
        this
            .props
            .uiStore
            .toggleInfoStatus(index);
    }
    renderDetail(detail, index) {
        let infoRender = (
            <div></div>
        );
        let ui = this.props.uiStore;
        if (detail.type == 'info') {
            let items = JSON.parse(detail.content);
            infoRender = (
                <div className="form-horizental">
                    {items.map((item, _index) => (
                        <div className="panel panel-default" key={_index}>
                            <div className="panel-heading">
                                <h5>{_index + 1}
                                    <i
                                        className={`fa fa-angle-right fa-fw pull-left ${ui.infoStatus[index]
                                        ? ''
                                        : 'fa-rotate-90'}`}></i>
                                    <i className="fa fa-remove pull-right"></i>
                                </h5>
                            </div>
                            <div
                                className={`panel-body collapse ${ui.infoStatus[index]
                                ? ''
                                : 'in'}`}>
                                <div className="form-group">
                                    <label htmlFor={`info.item.${_index}.attr`} className="col-sm-3 control-label">属性:</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`info.item.${_index}.attr`}
                                            placeholder="属性名称"
                                            value={item.name}
                                            onClick={this.changeInfoData(_index, 'name')}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`info.item.${_index}.value`} className="col-sm-3 control-label">值:</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`info.item.${_index}.value`}
                                            placeholder="属性的值"
                                            value={item.value}
                                            onClick={this.changeInfoData(_index, 'value')}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`info.item.${_index}.link`} className="col-sm-3 control-label">链接地址:</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`info.item.${_index}.link`}
                                            placeholder="链接地址URL"
                                            value={item.link}
                                            onClick={this.changeInfoData(_index, 'link')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
        return (
            <div
                className="panel panel-default"
                key={index}
                style={{
                border: 0,
                borderBottom: '3px solid #31708f'
            }}>
                <div
                    className="panel-heading"
                    style={{
                    background: '#fff',
                    padding: 0,
                    paddingBottom: '5px',
                    borderColor: '#ddd'
                }}>
                    <h4>{index + 1}.{detail.type}
                        <i
                            onClick={this
                            .toggleDetailItem(index)
                            .bind(this)}
                            style={{
                            transition: "all .3s ease"
                        }}
                            className={`fa fa-angle-right fa-fw pull-left ${ui.detailItemStatus[index]
                            ? ''
                            : 'fa-rotate-90'}`}></i>
                        <i
                            className="pull-right fa fa-remove"
                            onClick={this
                            .removeDetail(index)
                            .bind(this)}></i>
                    </h4>
                </div>
                <div
                    className={`panel-body collapse ${ui.detailItemStatus[index]
                    ? ''
                    : 'in'}`}>
                    <div className="form-group">
                        <label htmlFor={`details${index}.type`}>模块类型</label>
                        <select
                            name={`details.${index}.type`}
                            id={`details.${index}.type`}
                            className="form-control"
                            onChange={this
                            .changeData
                            .bind(this)}
                            value={detail.type}>
                            <option value="developer">开发者</option>
                            <option value="reason">推荐理由</option>
                            <option value="number">复制群号</option>
                            <option value="images">图片列表</option>
                            <option value="description">介绍</option>
                            <option value="log">更新日志</option>
                            <option value="info">详细信息</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor={`details.${index}.title`}>版块标题</label>
                        <input
                            type="text"
                            className="form-control"
                            id={`details.${index}.title`}
                            placeholder="标题"
                            value={detail.title}
                            name={`details.${index}.title`}
                            onChange={this
                            .changeData
                            .bind(this)}/>
                    </div>
                    {detail.type == 'info'
                        ? infoRender
                        : (
                            <div className="form-group">
                                <label htmlFor={`details.${index}.content`}>版块内容</label>
                                <textarea
                                    className="form-control"
                                    id={`details.${index}.content`}
                                    placeholder="内容"
                                    name={`details.${index}.content`}
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    value={detail.content}></textarea>
                            </div>
                        )}

                </div>
            </div>
        )
    }
    render() {
        let header = this.props.dataStore.header;
        let details = this.props.dataStore.details;
        let ui = this.props.uiStore;
        return (

            <div
                id="header.form"
                className="form-horizontal"
                style={{
                marginTop: 30
            }}>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3>头部设置
                            <i
                                onClick={this
                                .toggleHeader
                                .bind(this)}
                                style={{
                                transition: "all .3s ease"
                            }}
                                className={`fa fa-angle-right pull-left fa-fw ${ui.headerStatus
                                ? 'fa-rotate-90'
                                : ''}`}></i>
                        </h3>
                    </div>
                    <div
                        className={`panel-body collapse ${ui.headerStatus
                        ? 'in'
                        : ''}`}>
                        <div className="form-group">
                            <label htmlFor="header.name" className="col-sm-3 control-label">游戏名称</label>
                            <div className="col-sm-9">
                                <input
                                    id="header.name"
                                    name="header.name"
                                    type="text"
                                    className="form-control"
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    placeholder="游戏名称"
                                    value={header.name}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="header.img" className="col-sm-3 control-label">封面图片URL</label>
                            <div className="col-sm-9">
                                <input
                                    id="header.img"
                                    name="header.img"
                                    type="text"
                                    className="form-control"
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    placeholder="封面图片URL"
                                    value={header.img}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="header.corner" className="col-sm-3 control-label">角标</label>
                            <div className="col-sm-9">
                                <input
                                    id="header.corner"
                                    name="header.corner"
                                    type="text"
                                    className="form-control"
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    placeholder="角标"
                                    value={header.corner}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="header.author" className="col-sm-3 control-label">作者名称</label>
                            <div className="col-sm-9">
                                <input
                                    id="header.author"
                                    name="header.author"
                                    type="text"
                                    className="form-control"
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    placeholder="作者名称"
                                    value={header.author}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="header.authorLink" className="col-sm-3 control-label">作者链接</label>
                            <div className="col-sm-9">
                                <input
                                    id="header.authorLink"
                                    name="header.authorLink"
                                    type="text"
                                    className="form-control"
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    placeholder="作者链接"
                                    value={header.authorLink}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="header.count" className="col-sm-3 control-label">计数</label>
                            <div className="col-sm-9">
                                <input
                                    id="header.count"
                                    name="header.count"
                                    type="text"
                                    className="form-control"
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    placeholder="计数"
                                    value={header.count}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="header.imgTip" className="col-sm-3 control-label">图片下方Tip</label>
                            <div className="col-sm-9">
                                <input
                                    id="header.imgTip"
                                    name="header.imgTip"
                                    type="text"
                                    className="form-control"
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    placeholder="图片下方Tip"
                                    value={header.imgTip}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="header.categoryId" className="col-sm-3 control-label">论坛版块ID</label>
                            <div className="col-sm-9">
                                <input
                                    id="header.categoryId"
                                    name="header.categoryId"
                                    type="text"
                                    className="form-control"
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    placeholder="论坛版块ID"
                                    value={header.categoryId}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="header.googlePlay.available" className="col-sm-3 control-label">是否存在谷歌商店</label>
                            <div className="col-sm-9">
                                <input
                                    id="header.googlePlay.available"
                                    name="header.googlePlay.available"
                                    type="checkbox"
                                    className="form-control"
                                    onChange={this
                                    .changeData
                                    .bind(this)}
                                    placeholder="是否存在谷歌商店"
                                    checked={header.googlePlay.available}/>
                            </div>
                        </div>
                        {header.googlePlay.available
                            ? (
                                <div
                                    className="row"
                                    style={{
                                    margin: 0,
                                    marginLeft: "10px"
                                }}>
                                    <div className="panel panel-default col-sm-9 col-sm-push-3">
                                        <div className="panel-body">
                                            <div className="form-group">
                                                <label htmlFor="header.googlePlay.price">谷歌商店价格</label>
                                                <input
                                                    id="header.googlePlay.price"
                                                    type="text"
                                                    className="form-control"
                                                    name="header.googlePlay.price"
                                                    placeholder="Free"
                                                    onChange={this
                                                    .changeData
                                                    .bind(this)}
                                                    value={header.googlePlay.price}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="header.googlePlay.link">谷歌商店链接</label>
                                                <input
                                                    id="header.googlePlay.link"
                                                    type="text"
                                                    className="form-control"
                                                    name="header.googlePlay.link"
                                                    placeholder="谷歌商店价格"
                                                    onChange={this
                                                    .changeData
                                                    .bind(this)}
                                                    value={header.googlePlay.link}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            : ""}
                        <div className="form-group">
                            <label htmlFor="header.buttons.form" className="col-sm-3 control-label">下载按钮们</label>
                            <div className="col-sm-9">
                                {header
                                    .buttons
                                    .map((btn, index) => (
                                        <div className="panel panel-default" key={index}>
                                            <div className="panel-heading">下载按钮{index + 1}
                                                <a onClick={this.removeDownloadButton(index)} className="pull-right">
                                                    <i className="fa fa-remove"></i>
                                                </a>
                                            </div>
                                            <div className="panel-body">
                                                <div id="header.buttons.form" className="form-horizontal">
                                                    <div className="form-group">
                                                        <label
                                                            htmlFor={`header.buttons.${index}.type`}
                                                            className="col-sm-2 control-label">图标</label>
                                                        <div className="col-sm-10">
                                                            <select
                                                                name={`header.buttons.${index}.type`}
                                                                id={`header.buttons.${index}.type`}
                                                                className="form-control"
                                                                onChange={this
                                                                .changeData
                                                                .bind(this)}
                                                                value={header.buttons[index].type}>
                                                                <option value="ios">iOS</option>
                                                                <option value="android">安卓</option>
                                                                <option value="chrome">Web</option>
                                                                <option value="laptop">PC</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label
                                                            htmlFor={`header.buttons.${index}.text`}
                                                            className="col-sm-2 control-label">文字</label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type='text'
                                                                name={`header.buttons.${index}.text`}
                                                                id={`header.buttons.${index}.text`}
                                                                className="form-control"
                                                                onChange={this
                                                                .changeData
                                                                .bind(this)}
                                                                value={header.buttons[index].text}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label
                                                            htmlFor={`header.buttons.${index}.link`}
                                                            className="col-sm-2 control-label">链接地址</label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type='text'
                                                                name={`header.buttons.${index}.link`}
                                                                id={`header.buttons.${index}.link`}
                                                                className="form-control"
                                                                onChange={this
                                                                .changeData
                                                                .bind(this)}
                                                                value={header.buttons[index].link}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary center-block"
                                onClick={this
                                .props
                                .dataStore
                                .addHeaderButton
                                .bind(this.props.dataStore)}>添加按钮</button>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>详情设置
                            <i
                                onClick={this
                                .toggleDetail
                                .bind(this)}
                                style={{
                                transition: "all .3s ease"
                            }}
                                className={`fa fa-angle-right pull-left fa-fw ${ui.detailStatus
                                ? 'fa-rotate-90'
                                : ''}`}></i>
                        </h3>
                    </div>
                    <div
                        className={`panel-body collapse ${ui.detailStatus
                        ? 'in'
                        : ''}`}>
                        <div className="alert alert-warning" role="alert">
                            <strong>规则:</strong>
                            <p>
                                1.介绍只能存在一个。<br/>
                                2.介绍会出现展示全部按钮，默认高度为125px。<br/>
                                3.图片版块版块内容填写图片URL地址，以逗号分割。<br/>
                                4.复制群号模块的模块标题为点击右侧按钮复制的文本。<br/>
                                5.删除所有版块则不会生成整个详情模块<br/>
                            </p>
                        </div>
                        {details.map((detail, index) => this.renderDetail(detail, index))}
                        <button
                            className="btn btn-primary center-block"
                            onClick={this
                            .addDetail
                            .bind(this)}>添加版块</button>
                    </div>
                </div>
            </div>
        )
    }
}