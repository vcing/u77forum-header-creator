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
    render() {
        let header = this.props.dataStore.header;
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
                        <h3>头部设置<small>
                                <i
                                    onClick={this
                                    .toggleHeader
                                    .bind(this)}
                                    style={{
                                    transition: "all .3s ease"
                                }}
                                    className={`fa fa-angle-left fa-fw ${ui.headerStatus
                                    ? 'fa-rotate-270'
                                    : ''}`}></i>
                            </small>
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
                                                <a onClick={this.removeDownloadButton(index)}>
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
                            <div className="col-sm-5 col-sm-push-6">
                                <button
                                    className="btn btn-primary"
                                    onClick={this
                                    .props
                                    .dataStore
                                    .addHeaderButton
                                    .bind(this.props.dataStore)}>添加按钮</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>详情设置<small>
                                <i
                                    onClick={this
                                    .toggleDetail
                                    .bind(this)} 
                                    style={{
                                    transition: "all .3s ease"
                                }}
                                    className={`fa fa-angle-left fa-fw ${ui.detailStatus
                                    ? 'fa-rotate-270'
                                    : ''}`}></i>
                            </small>
                        </h3>
                    </div>
                    <div
                        className={`panel-body collapse ${ui.detailStatus
                        ? 'in'
                        : ''}`}>
                    </div>
                </div>
            </div>
        )
    }
}