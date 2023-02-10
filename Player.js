function createConstructor(){
    return function(name, ...questArray){
        this.name = name;
        this.questArray = questArray;
    }
}

const Player = createConstructor();

export default Player;