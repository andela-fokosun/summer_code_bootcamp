var transition = {
    quotes: ['first', 'second', 'third', 'fourth', 'fifth'],
    transition_index: 0,
    template: document.getElementById('quotes'),


    init: function() {
        transition.textTransit();
        // transition.nextWord();
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

window.onload = function() {
    transition.init();
}

