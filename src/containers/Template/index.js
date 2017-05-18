import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject(stores => ({dataStore: stores.dataStore}))@observer
export default class Template extends Component {
    render() {
        let header = this.props.dataStore.header;
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
                            : ''}
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
                                    <div className="taptap-button-download" data-type={btn.type} key={Math.random()}>
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
                                : ''
}
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
                    <div className="main-body-reason">
                        <div className="section-title">
                            <h3>Editor's Note</h3>
                        </div>
                        <p>如果我们都迷路了，那么就在月亮上相见吧。<br/>超越了一般游戏范畴的神作。<br/>感人？催泪？深度？引人入胜？无论如何用文字描述这部作品的魅力。<br/>《去月球》打动人心的部分，要玩过才能真正体会到。</p>
                    </div>

                    <div className="main-body-number">
                        <p>去月球手游版玩家群:&nbsp;&nbsp;513253986</p>

                        <span
                            className="glyphicon glyphicon-menu-right"
                            title="复制"
                            data-toggle="tooltip"
                            data-placement="top"
                            data-taptap-copy="qq-group"
                            data-clipboard-text="513253986"
                            data-success="Copied the link"
                            data-fail="Failed to copy the link"></span>
                    </div>

                    <div className="main-body-images">
                        <div className="body-images-normal">
                            <ul className="list-unstyled" data-taptap-app="screenshots" id="imageShots">

                                <li>
                                    <a
                                        href="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                        data-lightbox="screenshots">
                                        <img
                                            src="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                            alt="去月球 To the Moon"
                                            title="去月球 To the MoonScreenshots"/>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                        data-lightbox="screenshots">
                                        <img
                                            src="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                            alt="去月球 To the Moon"
                                            title="去月球 To the MoonScreenshots"/>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                        data-lightbox="screenshots">
                                        <img
                                            src="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                            alt="去月球 To the Moon"
                                            title="去月球 To the MoonScreenshots"/>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                        data-lightbox="screenshots">
                                        <img
                                            src="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                            alt="去月球 To the Moon"
                                            title="去月球 To the MoonScreenshots"/>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                        data-lightbox="screenshots">
                                        <img
                                            src="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                            alt="去月球 To the Moon"
                                            title="去月球 To the MoonScreenshots"/>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                        data-lightbox="screenshots">
                                        <img
                                            src="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                            alt="去月球 To the Moon"
                                            title="去月球 To the MoonScreenshots"/>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                        data-lightbox="screenshots">
                                        <img
                                            src="http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png"
                                            alt="去月球 To the Moon"
                                            title="去月球 To the MoonScreenshots"/>
                                    </a>
                                </li>
                            </ul>
                            <a
                                href="#"
                                className="body-images-control prev"
                                data-taptap-app-screenshots="control"
                                data-target="#imageShots">
                                <i className="taptap-icon icon-chevron-white-left"></i>
                            </a>
                            <a
                                href="#"
                                className="body-images-control next"
                                data-taptap-app-screenshots="control"
                                data-target="#imageShots">
                                <i className="taptap-icon icon-chevron-white-right"></i>
                            </a>
                        </div>
                        <div className="checkbox active">
                            <label>
                                <input type="checkbox" data-taptap-video="autoplay"/>
                                Autoplay Video
                            </label>
                        </div>
                    </div>
                    <div className="main-body-description">
                        <div className="section-title">
                            <h3>Description</h3>
                        </div>
                        <div className="body-description-paragraph" id="description">
                            游戏是由心动网络获得授权，并负责在手机上高清重制，是一款经典剧情向RPG游戏。原作PC版由加拿大华裔制作人Kan Gao和他的独立游戏开发团队Freebird
                            Games于6年前发售，好评如潮。手机重制版将于5月由心动网络全球发行，并同期登陆TapTap。<br/><br/>这是一个像素画微型游戏，也可以说是一部游戏形式的电影。全程只有几个小时，且没有战斗，但是其凭借巧妙细腻的叙事方式，打动人心的音乐以及发人深思的主题获得了全球玩家的共鸣，同时收获了诸多好评。其中就包括了权威媒体Gamespot最佳剧本，Metacritic最佳游戏及WIRED最佳游戏等重要大奖，还获得了今年Steam“我没有哭，只是眼睛里进了点沙子”的奖项提名。<br/><br/>[关于手机重制版]<br/>•&nbsp;保留原版像素风格，高清化重制的全新游戏画面<br/>•&nbsp;完全重制的全新UI界面菜单<br/>•&nbsp;特别针对手机屏幕重新优化了点触操作，还新增了摇杆操作<br/>•&nbsp;自动随时存档，想玩就玩，无压力<br/><br/>[游戏特色]<br/>•&nbsp;一个独特的非战斗型故事的游戏体验<br/>•&nbsp;完美结合冒险元素和经典RPG美学的创新组合<br/>•&nbsp;备受赞誉的原创音乐与游戏情节的推演丝丝入扣<br/>•&nbsp;一个浓缩式的剧情安排让人尽情体验原汁原味的动人故事<br/><br/>［媒体评价］<br/>“这是一部足以拍成好莱坞影片的爱情故事，却利用像素画面表现制作成了一款独立游戏。当情感抑制不住了，不用担心，尽情地哭出来吧。这样的故事，值得我们为它流泪。”<br/>机核网 G-Cores
                            <br/><br/>“How do I explain why it’s brilliant without spoiling what makes it so?”<br/>9/10 – Eurogamer<br/><br/>“It’s simple, poignant, and full of heart.”<br/>10/10 – GamePro<br/><br/>“To the Moon is a game you must play.”<br/>8/10 – GameSpot<br/><br/>"里面的音乐好像还可以..."<br/>-作者的姨妈<br/><br/>"It is no less than absolutely beautiful."<br/>10/10 – PC PowerPlay<br/><br/>[故事概要]<br/>这是一个讲述两个医生借由改变记忆为弥留之际的人们完成他们人生最后愿望的故事。罗莎莉恩医生（Dr.
                                Rosalene）和沃茨医生（Dr.
                                Watts）有一份非常特殊的工作：他们可以给人们重活一次的机会，从人生的最开始重头来过，当然这个机会只存在于将死之人的头脑里。<br/><br/>由于其带来的严重后果，新的人工记忆将取代真实记忆成为病人临终前记住的事，所以通过修改记忆去满足人们最后愿望的这种技术只能对临死的人实施。<br/><br/>这个特别的故事让玩家跟随两位医生为实现一个老人约翰尼（Johnny）的梦想而进入他的记忆。
                                随着每一步时间的推移，约翰尼过去的一个个新的片段将被慢慢揭示。两位医生将约翰尼记忆中一直困扰他的许多事件重组在一起，他们试图找出究竟是何原因会让身体虚弱的老人临死前要实现这样的愿望。
                            <br/><br/>而约翰尼（Johnny）的最后心愿竟是…去月球。<br/><br/>系统要求：<br/>Android系统：4.0及更高版本。<br/>RAM：1 GB内存 及更高。<br/>其他设备的运行可能会取决于屏幕分辨率和后台应用程序的数量。<br/><br/>iOS系统：7.0或更高版本<br/><br/>心动网络&nbsp;研发&nbsp;&amp; 发行
                            <br/><br/>客服邮箱：TotheMoon@xindong.com<br/>微信公众号：@TotheMoonHD<br/>官方微博：@去月球手机版<br/>玩家QQ群：513253986
                            <div className="description-paragraph-end"></div>
                        </div>
                        <div className="body-description-more">
                            <button
                                type="button"
                                className="btn btn-link"
                                data-taptap-collapse="#description"
                                data-limit="125">Show All
                                <span className="glyphicon glyphicon-menu-down"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="u77-comments"></div>
            </section>
        )
    }
}