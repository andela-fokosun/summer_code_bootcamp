// object literal pattern
var transition = {
    quotes: [
        'Welcome to Andela',
        'Welcome to Digital Bootcamp',
        'Be the first to know how to do this',
        'take your time to read this',
        'fifth heroku'
     ],
    transition_index: 0,
    template: document.getElementById('quotes'),


    init: function() {
        transition.textTransit();
    },

    nextWord: function() {
        transition.transition_index++;
        if(transition.transition_index > (transition.quotes.length - 1)){
            transition.transition_index = 0;
        }

        setTimeout(transition.textTransit, 1000);

    },

    textTransit: function() {
        var myArray = transition.quotes[transition.transition_index].split("");

        if(myArray.length > 0) {

            myArray.forEach(function(value) {
                transition.template.innerHTML += value;
            })

        } else {
            clearTimeout(setTimeout(transition.textTransit, 70));
            return false;
        }

        setTimeout(function(){
            transition.nextWord();
        document.getElementById('quotes').innerHTML = '';
    }, 2000);

    }
};

var portfolio = {
  samuel_james: {
    gender: 'male',
    occupation: 'programmer',
    pet: 'cats'
  },

  florence_okosun: {
    gender: 'female',
    occupation: 'programmer',
    pet: 'dogs'
  },

  olaide_ojewale: {
    gender: 'male',
    occupation: 'programmer',
    pet: 'dogs'
  },

  init: function() {
    $('#samueljamesgender').text(portfolio.samuel_james.gender);
    $('#samueljamesoccupation').text(portfolio.samuel_james.occupation);
    $('#samueljamespets').text(portfolio.samuel_james.pet);

    $('#florenceokosungender').text(portfolio.florence_okosun.gender);
    $('#florenceokosunoccupation').text(portfolio.florence_okosun.occupation);
    $('#florenceokosunpets').text(portfolio.florence_okosun.pet);

    $('#olaideojewalegender').text(portfolio.olaide_ojewale.gender);
    $('#olaideojewaleoccupation').text(portfolio.olaide_ojewale.occupation);
    $('#olaideojewalepets').text(portfolio.olaide_ojewale.pet);
  },

};

function addClearTodoItem(){
    var exhibition = document.getElementById("jsexhibition");

    // create clear list button and append to dom
    var button = document.createElement("BUTTON");
    button.id="clear";
    button.innerHTML = "Clear list";
    exhibition.appendChild(button);

    // listen and wait for the clear list button to be clikked
    button.addEventListener ("click", function() {
        var result = document.getElementById("result");
        while (result.hasChildNodes()) {   
            result.removeChild(result.firstChild);
        }
    });

    var add = document.getElementById("add");

    add.addEventListener("click", function(){
        var todo = document.getElementById("todo");
        var item = todo.value;
        todo.value = "";
        var node = document.createElement("LI");
        var textnode = document.createTextNode(item);
        node.appendChild(textnode); 
        var result = document.getElementById("result").appendChild(node);
    })
}

var nameField = document.getElementById('nameField');
nameField.onkeydown = updateNameDisplay;
nameField.onkeyup = updateNameDisplay;
nameField.onkeypress = updateNameDisplay;

function updateNameDisplay() {
  document.getElementById('nameDisplay').innerHTML = this.value || "Display";
}

window.onload = function() {
    // transition.init();
    addClearTodoItem();
    portfolio.init();
    updateNameDisplay();
}
