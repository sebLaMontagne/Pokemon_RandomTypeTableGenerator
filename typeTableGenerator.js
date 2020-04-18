$(function(){

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

    $('#immuneProportion').change(function(){ $('#immuneValue').val($('#immuneProportion')[0].value) })
    $('#immuneValue').change(function(){ $('#immuneProportion').val($('#immuneValue')[0].value) })

    $('#strongProportion').change(function(){ $('#strongValue').val($('#strongProportion')[0].value) })
    $('#strongValue').change(function(){ $('#strongProportion').val($('#strongValue')[0].value) })
    
    $('#neutralProportion').change(function(){ $('#neutralValue').val($('#neutralProportion')[0].value) })
    $('#neutralValue').change(function(){ $('#neutralProportion').val($('#neutralValue')[0].value) })
    
    $('#weakProportion').change(function(){ $('#weakValue').val($('#weakProportion')[0].value) })
    $('#weakValue').change(function(){ $('#weakProportion').val($('#weakValue')[0].value) })

    $('#generator').submit(function(e){
        e.preventDefault();
        $('#table').html('');
        
        for(let i = 0; i < types.length; i++)
        {
            $('#table').append('<div id="'+types[i].name+'"><img src="'+types[i].name+'.png"/>')
            for(let j = 0; j < types.length; j++)
            {
                let immuneProportion = parseInt($('#immuneProportion')[0].value);
                let strongProportion = parseInt($('#strongProportion')[0].value);
                let neutralProportion = parseInt($('#neutralProportion')[0].value);
                let weakProportion = parseInt($('#weakProportion')[0].value);

                var sum = immuneProportion + strongProportion + neutralProportion + weakProportion -1
                let rng = Math.round(Math.random()*sum);

                let value;
                if(rng < immuneProportion) value = 'immune';
                else if(rng >= immuneProportion && rng < (immuneProportion + strongProportion)) value = 'strong';
                else if(rng >= (immuneProportion + strongProportion) && rng < (immuneProportion + strongProportion + neutralProportion)) value = 'neutral';
                else value = 'weak';
         
                $('#'+types[i].name).append('<img src="'+value+'.png"/>');
                types[i].addOffensiveCaracteristic(types[j].name, value);
            }
        }
    })
});