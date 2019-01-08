
(function(){
    function Question(question,answer,correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        
        for(var i = 0; i < this.answer.length; i++){
            console.log(i,this.answer[i]);
        }
    }
    
    Question.prototype.correctAnswer = function(ans,callback){
        var sc;
        if(ans == this.correct){
            console.log('Correct Answer');
            sc = callback(true);
        }else{
            console.log('Wrong Answer');
             sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
   
    q1 = new Question('Who is the best player?',['Messy','Crisitiano Ronaldo'],0);
    q2 = new Question('Longest word in the Dictionary?',['floccinaucinihilipilification','supercalifragilisticexpialiodocious'],1);
    q3 = new Question('Father of the neural network?',['Andrew','Geoffery Hinton','Yann Lecun'],1);   
    
    var questions = [q1, q2, q3];
    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc
        }
    }
    var keepScore = score();
    function nextQuestion(){
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var ans = prompt('select the correct ans'); //return a string
        if(ans != 'Exit'){
            questions[n].correctAnswer(parseInt(ans),keepScore); //parseInt convert string to number
            nextQuestion();
        }
    }
    nextQuestion();
})();
