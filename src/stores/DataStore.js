import {observable, action, computed} from 'mobx';

class DownloadButton {
    @observable style = 'primary';
    @observable size = 'lg';
    @observable type = 'ios';
    @observable text = 'iOS下载';
    @observable link = '';

    constructor({
        style = 'primary',
        size = 'lg',
        type = 'ios',
        text = 'iOS下载',
        link = ''
    } = {
        style: 'primary',
        size: 'lg',
        type: 'ios',
        text: 'iOS下载',
        link: ''
    }) {
        this.style = style;
        this.size = size;
        this.type = type;
        this.text = text;
        this.link = link;
    }
}

class Detail {
    @observable title = '版块名称';
    @observable content = '版块内容';
    @observable _type = 'reason';

    @computed get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
        switch (this._type) {
            case 'images':
                this.content = 'http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png,http://img.u77.com/gam' +
                        'e/201705/150923ch1wksuwkjsjcc06.png';
                break;
            case 'info':
                this.content = [{"name":"属性名称","value":"属性值","link":"/user/1"}];
                break;
            case 'tag':
                this.content = [{"name":"中文","id":1}];
                break;
            default:
                break;
        }
    }

    @computed get infos() {
        if (this.type === 'info') {
            return this.content;
        } else {
            return [];
        }
    }

    set infos({index, attr, value}) {
        this.content[index][attr] = value;
    }

    @action addInfoItem() {
        this
            .infos
            .push({"name": "新属性", "value": "新属性的值", "link": "/user/1"})
    }

    @action removeInfoItem(index) {
        this
            .infos
            .splice(index, 1);
    }

    @computed get tags() {
        if (this.type === 'tag') {
            return this.content;
        } else {
            return [];
        }
    }

    set tags({index, attr, value}) {
        this.content[index][attr] = value;
    }

    @action toggleTag(id, name) {
        let index = this.findTag(id);
        if(index >= 0) {
            this.tags.splice(index,1);
        }else {
            if(this.tags.length >= 5){
                return false;
            }
            this
            .tags
            .push({id, name});
        }
    }

    findTag(id) {
        return this.tags.findIndex(tag => tag.id === id);
    }

    constructor({
        title = '版块名称',
        content = '无内容',
        type = 'reason'
    } = {
        title: '版块名称',
        content: '无内容',
        type: 'reason'
    }) {
        this.title = title;
        this.type = type;
        this.content = content;
    }

    @computed get serialize() {
        return {title: this.title, content: this.content, type: this.type}
    }
}

class DataStore {
    @observable header = {
        img: 'http://img.u77.com/game/201705/1509059t3dxqlmobnx2ozp.png',
        imgTip: '图片下方Tip',
        name: '游戏名称',
        corner: '角标',
        author: '作者名称',
        authorLink: '/user/1',
        count: '安装量',
        buttons: [
            new DownloadButton({type: 'android', text: '安卓下载'}),
            new DownloadButton()
        ],
        googlePlay: {
            available: true,
            price: '价格',
            link: ''
        },
        categoryId: 1
    }
    @observable details = [];
    @observable other = {
        topicId:0,
        cover:'',
        description:''
    }

    @action addHeaderButton() {
        this
            .header
            .buttons
            .push(new DownloadButton());
    }

    @action removeHeaderButton(position) {
        this
            .header
            .buttons
            .splice(position, 1);
    }

    @action addDetail() {
        this
            .details
            .push(new Detail());
    }

    @action removeDetail(index) {
        this
            .details
            .splice(index, 1);
    }

    @action loadCategoryId(id) {
        this.header.categoryId = id;
    }

    constructor() {
        window.ds = this;
        window.templateLoad = this
            .load
            .bind(this);
        this.header.categoryId = window.categoryId || 0;
        this
            .details
            .push(new Detail({
                type: 'developer',
                title: '作者的话:',
                content: '<p>1、08年发行，近10年的经典游戏产品<br>2、打通网页端、移动端、PAD端的数据，实现随时随地杀一把<br>3、三国杀团队精心打造，脍炙人口的三国杀产' +
                        '品</p>'
            }));
        this
            .details
            .push(new Detail({type: 'reason', title: '编辑推荐:', content: '<p>简单的操作，精彩刺激的视觉效果，更有多种主题皮肤可供选择，不一样的打砖块，挑战你的反应力</p>'}));
        this
            .details
            .push(new Detail({type: 'number', content: '去月球手游版玩家群:  513253986', title: '513253986'}));
        this
            .details
            .push(new Detail({
                title: '标签',
                type: 'tag',
                content: [
                    {
                        id: 1,
                        name: '中文'
                    }
                ]
            }))
        this
            .details
            .push(new Detail({
                type: 'images',
                content: 'http://img.u77.com/game/201705/150923ch1wksuwkjsjcc06.png,http://img.u77.com/gam' +
                        'e/201705/150923ch1wksuwkjsjcc06.png'
            }));

        this
            .details
            .push(new Detail({type: 'description', title: '简介:', content: `经典桌游卡牌策略游戏<br><br>【游戏简介】<br>《三国杀Online-互通版》是由杭州游卡出品、以三国时代为背景的线上卡牌游戏。玩家可扮演三国时期著名人物，根据随机抽中的隐藏身份（主公、反贼、忠臣、内奸），通过使用独特的人物技能，合理打出各种类型的手牌，运筹帷幄、智取搏杀，最终以获得自己所属身份的胜利。<br><br>《三国杀Online-互通版》保留网页版核心玩法基础，与网页版数据信息实时互通，用户可实现双端同局竞技，并针对移动设备设计优化，打造精美简洁的游戏界面、人性化的操作模式，是三国杀品牌与历史文化的传承。<br><br>【联系我们】<br>游戏官网：http://www.sanguosha.com/<br>官方论坛：http://club.sanguosha.com/<br>客服电话：4007202233`}));
        this
            .details
            .push(new Detail({
                type: 'log',
                title: '更新日志',
                content: '* Glorious 11 new toys, including Doge, Sushi, Console and Sports themes.<br>* F' +
                        'ixed an issue with "get toy" button rarely showing up.<br>* Added discounted gif' +
                        't package.<br>* More glorious bug fixes.'
            }));
        this
            .details
            .push(new Detail({
                type: 'info',
                title: '详细信息',
                content: [
                    {
                        "name": "文件大小",
                        "value": "19.67",
                        "link": "/user/1"
                    }, {
                        "name": "文件大小",
                        "value": "19.67",
                        "link": "/user/1"
                    }, {
                        "name": "文件大小",
                        "value": "19.67",
                        "link": "/user/1"
                    }, {
                        "name": "文件大小",
                        "value": "19.67",
                        "link": "/user/1"
                    }, {
                        "name": "文件大小",
                        "value": "19.67",
                        "link": "/user/1"
                    }
                ]
            }))
    }

    @action load(data) {
        try {
            data = JSON.parse(data);
            data.header.buttons = data
                .header
                .buttons
                .map(btn => new DownloadButton(btn));
            this.header = data.header;

            data.details = data
                .details
                .map(detail => new Detail(detail));
            this.details = data.details;
            this.other = data.other;
        } catch (e) {
            console.log(e);
        }
    }

    @computed get serialize() {
        let temp = Object.assign({}, this);
        temp.details = temp
            .details
            .map(detail => detail.serialize);
        return JSON.stringify(temp); //.replace(/\\/g,'\\\\');
    }

    @computed get serializeTags() {
        let detail = this.details.find(detail => detail.type === 'tag');
        if(detail) {
            return detail.tags.map(tag => tag.id).toString();
        }else {
            return '';
        }
        
    }

    @action changeData(attr, value) {
        if (attr.indexOf('.') !== -1) {
            let attrs = attr.split('.');
            switch (attrs.length) {
                case 4:
                    this[attrs[0]][attrs[1]][attrs[2]][attrs[3]] = value;
                    break;
                case 3:
                    this[attrs[0]][attrs[1]][attrs[2]] = value;
                    break;
                case 2:
                    this[attrs[0]][attrs[1]] = value;
                    break;
                default:
                    this[attr] = value;
            }
        } else {
            this[attr] = value;
        }
    }
}

let dataStore = new DataStore();
export default dataStore;