export class Blog{
    get weatherIcon() {
        return this.weatherIcon;
    }

    set weatherIcon(value) {
        this.weatherIcon = value;
    }
    id;
    userId;
    title;
    content;
    img;
    uploadTime;
    updateTime;
    uploadMonth;
    uploadYear;
    weather;
    weatherIcon;
    delFlag
    constructor(id, userId, title, content, img, uploadTime, updateTime, uploadMonth, uploadYear, weather, weatherIcon,delFlag) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.img = img;
        this.uploadTime = uploadTime;
        this.updateTime = updateTime;
        this.uploadMonth = uploadMonth;
        this.uploadYear = uploadYear;
        this.weather = weather;
        this.delFlag = delFlag;
    }


    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
    }

    get userId() {
        return this.userId;
    }

    set userId(value) {
        this.userId = value;
    }

    get title() {
        return this.title;
    }

    set title(value) {
        this.title = value;
    }

    get content() {
        return this.content;
    }

    set content(value) {
        this.content = value;
    }

    get img() {
        return this.img;
    }

    set img(value) {
        this.img = value;
    }

    get uploadTime() {
        return this.uploadTime;
    }

    set uploadTime(value) {
        this.uploadTime = value;
    }

    get updateTime() {
        return this.updateTime;
    }

    set updateTime(value) {
        this.updateTime = value;
    }

    get uploadMonth() {
        return this.uploadMonth;
    }

    set uploadMonth(value) {
        this.uploadMonth = value;
    }

    get uploadYear() {
        return this.uploadYear;
    }

    set uploadYear(value) {
        this.uploadYear = value;
    }

    get weather() {
        return this.weather;
    }

    set weather(value) {
        this.weather = value;
    }

    get delFlag() {
        return this.delFlag;
    }

    set delFlag(value) {
        this.delFlag = value;
    }
}