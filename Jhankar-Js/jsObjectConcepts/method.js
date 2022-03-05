
const student = {
    id: 101 , 
    money: 5000,
    name: 'Kibria',
    major: 'CSE',
    isRich : false,
    subjects: ['english' , 'math' , 'calculas' , 'physics'],
    bestFriends :{
        name: 'Gandu',
        major: 'CSE'
    },
    takeExam: function(){
        console.log(this.name , 'taking exam');
    },
    treateDay: function(expence , boksis){
        this.money = this.money - expence - boksis;
        return this.money;
    }
}

student.takeExam();
console.log(student);

