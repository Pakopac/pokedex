window.onload = function(){

    document.querySelector('#form').onsubmit = function(){
        var search = document.querySelector('input[name="search"]').value;
        var imgPoke = document.querySelector('#imgPoke');
        var imgPoke2 = document.querySelector('#imgPoke2');
        var stats = document.querySelector('#stats');
        var blockError = '' ;

        imgPoke.removeAttribute('src');
        imgPoke2.removeAttribute('src');
        stats.innerHTML = '';

        $.ajax({
            url: 'pokemons.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                function isPokeExist() {
                    for (var i in data){
                        var namePoke = data[i].name.toLowerCase();
                        if (search === namePoke || search === i){
                           return data[i]
                        }
                    }
                }
                if (typeof isPokeExist() !== 'undefined' && search != 29 && search != 32 && search !== 'nidoran') {
                    imgPoke.setAttribute('src', 'https://img.pokemondb.net/artwork/' + isPokeExist().name.toLowerCase() + '.jpg');
                    stats.innerHTML = isPokeExist().name + '<br>' + isPokeExist().type;
                }

                else if (typeof isPokeExist() !== 'undefined' && search === 'nidoran'){
                    imgPoke.setAttribute('src', 'https://img.pokemondb.net/artwork/' + isPokeExist().name.toLowerCase() + '-m.jpg');
                    imgPoke2.setAttribute('src', 'https://img.pokemondb.net/artwork/' + isPokeExist().name.toLowerCase() + '-f.jpg');
                    stats.innerHTML = isPokeExist().name + '<br>' + isPokeExist().type;
                }

                else if (typeof isPokeExist() !== 'undefined' && search == 29){
                    imgPoke2.setAttribute('src', 'https://img.pokemondb.net/artwork/' + isPokeExist().name.toLowerCase() + '-f.jpg');
                    stats.innerHTML = isPokeExist().name + '&#9792;<br>' + isPokeExist().type;
                }

                else if (typeof isPokeExist() !== 'undefined' && search == 32){
                    imgPoke.setAttribute('src', 'https://img.pokemondb.net/artwork/' + isPokeExist().name.toLowerCase() + '-m.jpg');
                    stats.innerHTML = isPokeExist().name + '&#9794;<br>' + isPokeExist().type;
                }

                else {
                    if (isNaN(search)) {
                        blockError = search + ' not found'
                    }

                    if (!isNaN(search)) {
                        blockError = 'Pokémon number ' + search + ' not found'
                    }
                }

                document.querySelector('#error').innerHTML = blockError;
            }
        });
        return false
    };
};