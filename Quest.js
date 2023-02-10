export default class Quest{
    static quests = [];
    constructor(questAbbreviation, cLevel){
        this.abbreviation = questAbbreviation;
        this.cLevel = cLevel;
        this.normal = false;
        this.nightmare = false;
        this.hell = false;
        Quest.quests.push(this);
    }
}

const Den = new Quest("Den", false);
const Cain = new Quest("Cain", false);
const Charsi = new Quest("Charsi", true);
const Rada = new Quest("Rada", false);
const Bird = new Quest("Bird", false);
const Blade = new Quest("Blade", false);
const Tome = new Quest("Tome", false);
const Izzy = new Quest("Izzy", false);
const Forge = new Quest("Forge", false);
const Socket = new Quest("Socket", false);
const Runes = new Quest("Runes", false);
const Scroll = new Quest("Scroll", false);
const Anya = new Quest("Anya", true);


