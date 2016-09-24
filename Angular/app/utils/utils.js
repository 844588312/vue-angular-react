module.exports = function() {
    var factory = {};  
    factory.reComputeResult = function(value,a, b) {
        switch(value){
            case "option1":
                return a+b;
                break;
            case "option2":
                return a-b;
                break;
            case "option3":
                return a*b;
                break;
            case "option4":
                return a/b;
                break;
        }
    }
    return factory;
}