class BoardMember {
    constructor(name, homeState, training) {
        this.name = name
        this.homeState = homeState
        this.training = training
    }

    veto() {
        return "No, I must disagree";
    }

    approve() {
        return "You can do that!";
    }

    doCharity() {
       return "I like to help people.";
    }

    releasePressStatement() {
        return "You will see great things from Scuber.";
     }

    //  sayHi() {
    //     return `Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`;
    //  }
}

class Ceo extends BoardMember {
    veto() {
    super.veto()
    }
    
    hireEmployee() {
        return "Welcome aboard!"
    }

}