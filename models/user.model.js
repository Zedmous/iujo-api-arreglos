
const { v4: uuidv4 } = require('uuid');
class User{
    id="";
    firtsname="";
    lastname="";
    email=""

    constructor(firtsname,lastname,email){
        this.id=uuidv4();
        this.firtsname=firtsname;
        this.lastname=lastname;
        this.email=email
    }
}

module.exports=User;

