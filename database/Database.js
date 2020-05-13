import User from '../model/User.js';

class Database {
    constructor(){
        this.init();
    }

    init(){
        User.init('postgres:felipy...');
    }
}

export default new Database();