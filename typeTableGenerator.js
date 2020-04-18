$(function(){

    // add parameters to the form
    class Type{
        constructor(name){
            this.name = name
            this.offensivesCaracteristics = [];
        }
        addOffensiveCaracteristic(type, value)
        {
            this.offensivesCaracteristics[type] = value;
        }
    }

    var types = [];
    types.push(new Type('plante'));
    types.push(new Type('feu'));
    types.push(new Type('eau'));
    types.push(new Type('acier'));
    types.push(new Type('combat'));
    types.push(new Type('dragon'));
    types.push(new Type('electrik'));
    types.push(new Type('fée'));
    types.push(new Type('glace'));
    types.push(new Type('insecte'));
    types.push(new Type('normal'));
    types.push(new Type('poison'));
    types.push(new Type('psy'));
    types.push(new Type('roche'));
    types.push(new Type('sol'));
    types.push(new Type('spectre'));
    types.push(new Type('ténèbres'));
    types.push(new Type('vol'));

    $('#generator').click(function(e){
        e.preventDefault();
        $('#table').html('');
        
        for(let i = 0; i < types.length; i++)
        {
            $('#table').append('<div id="'+types[i].name+'"><img src="'+types[i].name+'.png"/>')
            for(let j = 0; j < types.length; j++)
            {
                let rng = Math.round(Math.random()*18);
                let value;
                if(rng > 15) value = 'strong';
                if(rng < 16) value = 'weak';
                if(rng < 13) value = 'neutral';
                if(rng < 1) value = 'immune';
         
                $('#'+types[i].name).append('<img src="'+value+'.png"/>');
                types[i].addOffensiveCaracteristic(types[j].name, value);
            }
        }
    })
});