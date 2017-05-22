import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject(stores => ({dataStore: stores.dataStore}))@observer
export default class Template extends Component {
    renderDetail(detail, index) {
        switch (detail.type) {
            case 'developer':
                return (
                    <div className="main-body-developer main-body-description" key={index}>
                        <div className="text-wrapper" id="developer-speak">
                            <h3>{detail.title}</h3>
                            <p
                                dangerouslySetInnerHTML={{
                                __html: detail.content
                            }}></p>
                        </div>
                    </div>
                );
            case 'reason':
                return (
                    <div className="main-body-reason" key={index}>
                        <div className="section-title">
                            <h3>{detail.title}</h3>
                        </div>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: detail.content
                        }}></p>
                    </div>
                );
            case 'number':
                return (
                    <div className="main-body-number" key={index}>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: detail.content
                        }}></p>
                        <span
                            className="fa fa-angle-right"
                            title="复制"
                            data-toggle="tooltip"
                            data-placement="top"
                            data-taptap-copy="qq-group"
                            data-clipboard-text={detail.title}
                            data-success="Copied the link"
                            data-fail="Failed to copy the link"></span>
                    </div>
                )
            case 'images':
                return (
                    <div className="main-body-images" key={index}>
                        <div className="body-images-normal">
                            <ul className="list-unstyled" data-taptap-app="screenshots" id="imageShots">
                                {detail
                                    .content
                                    .split(',')
                                    .map((image, _index) => (
                                        <li key={_index}>
                                            <a href={image} data-lightbox="screenshots">
                                                <img src={image} role="presentation"/>
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                            <a
                                href="#"
                                className="body-images-control prev hide"
                                data-taptap-app-screenshots="control"
                                data-target="#imageShots"
                                style={{
                                opacity: 0
                            }}>
                                <i className="taptap-icon icon-chevron-white-left"></i>
                            </a>
                            <a
                                href="#"
                                className="body-images-control next"
                                data-taptap-app-screenshots="control"
                                data-target="#imageShots"
                                style={{
                                opacity: 0
                            }}>
                                <i className="taptap-icon icon-chevron-white-right"></i>
                            </a>
                        </div>
                    </div>
                )
            case 'description':
                return (
                    <div className="main-body-description" key={index}>
                        <div className="section-title">
                            <h3>Description</h3>
                        </div>
                        <div className="body-description-paragraph collapse" id="description">
                            <p
                                dangerouslySetInnerHTML={{
                                __html: detail.content
                            }}></p>
                            <div className="description-paragraph-end"></div>
                        </div>
                        <div className="body-description-more">
                            <a
                                id="detail-showall"
                                type="button"
                                onClick={function(){
                                    window.jQuery('#description').removeClass('collapse');
                                }}
                                className="btn btn-link"><span>展开全部</span><span className="fa fa-angle-down"></span>
                            </a>
                        </div>
                    </div>
                )
            case 'log':
                return (
                    <div className="main-body-log main-body-description" key={index}>
                        <div className="section-title">
                            <h3>{detail.title}</h3>
                        </div>
                        <div
                            className="body-log-list"
                            id="app-log"
                            dangerouslySetInnerHTML={{
                            __html: detail.content
                        }}></div>
                    </div>
                )
            case 'info':
                return (
                    <div className="main-body-info" key={index}>
                        <div className="section-title">
                            <h3>{detail.title}</h3>
                        </div>
                        <ul className="list-unstyled body-info-list">
                            {detail
                                .infos
                                .map((item, _index) => (
                                    <li key={_index}>
                                        <span className="info-item-title">{item.name}</span>
                                        <span
                                            className={`info-item-content ${item.link
                                            ? 'link'
                                            : ''}`}>
                                            {item.link
                                                ? (
                                                    <a href={item.link} className="info-item-content link">{item.value}</a>
                                                )
                                                : item.value}
                                        </span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                )
            default:
                break;
        }
    }

    render() {
        let header = this.props.dataStore.header;
        let details = this.props.dataStore.details;
        return (
            <section className="app-show-main" id="u77-detail">
                <div className="show-main-header">
                    <div className="main-header-icon">
                        <div className="header-icon-body">
                            <img src={header.img} alt={header.name} title={header.name}/>
                        </div>
                        {header.imgTip
                            ? (
                                <div className="main-header-rec">
                                    <span>{header.imgTip}</span>
                                </div>
                            )
                            : <span></span>}
                    </div>
                    <div className="main-header-text">
                        <h1>{header.name}</h1>
                        <small className="taptap-app-area">{header.corner}</small>
                        <div className="header-text-author">
                            <a href={header.authorLink} target="_blank">
                                <span >{header.author}</span>
                            </a>
                        </div>

                        <div className="header-text-download">
                            <div className="text-download-text">
                                <span className="text-download-times">{header.count}</span>
                            </div>
                            {header
                                .buttons
                                .map((btn, index) => (
                                    <div
                                        className="taptap-button-download"
                                        data-type={btn.type}
                                        key={Math.random()}>
                                        <a
                                            href={btn.link}
                                            className={`btn btn-${btn.style} btn-${btn.size} ${btn.type}`}>
                                            <i></i>
                                            <span>{btn.text}</span>
                                        </a>
                                    </div>
                                ))}
                            {header.googlePlay.available
                                ? (
                                    <div className="taptap-button-download">
                                        <a
                                            href={header.googlePlay.link}
                                            target="_blank"
                                            className="btn btn-link android google-play"
                                            data-taptap-download="button"
                                            rel="nofollow">{header.googlePlay.price}</a>
                                    </div>
                                )
                                : <span></span>}
                        </div>
                    </div>
                    <div className="main-header-tab">
                        <ul className="nav nav-pills nav-justified">
                            <li role="presentation" className="active">
                                <a href="#content" aria-controls="detail" role="tab" data-taptap-tab="detail">详情</a>
                            </li>
                            <li role="presentation" className="">
                                <a
                                    href="#u77-comments"
                                    aria-controls="detail"
                                    role="tab"
                                    data-taptap-tab="review">评价
                                </a>
                            </li>
                            <li role="presentation" className="">
                                <a href={'/category/' + header.categoryId}>论坛
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="show-main-body collapse in first"
                    data-taptap-tab-target="detail">
                    {details.map((detail, index) => this.renderDetail(detail, index))}
                </div>
                <div id="u77-comments"></div>
            </section>
        )
    }
}