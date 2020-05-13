import User from '../model/User.js';

class UserController {
    constructor(){
        console.log(User.conexaoComBanco);
    }
}

export default new UserController();