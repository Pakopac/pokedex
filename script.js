window.onload = function(){

    var imgPoke = document.querySelector('#imgPoke');
    var blockName = document.querySelector('#name');
    var blockType = document.querySelector('#type');

    $.ajax({
        url: 'pokemons.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {

            document.querySelector('#form').onsubmit = function () {
                var search = document.querySelector('input[name="search"]').value.toLowerCase();
                imgPoke.style.display = 'none';
                blockName.innerHTML = '';
                blockType.innerHTML = '';
                var blockError = '';

                if (search.length !== 0) {
                    function linksImg(name) {
                        imgPoke.style.display = 'block';
                        return imgPoke.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + name + '.gif');
                    }

                    function name(showName) {
                        return blockName.innerHTML = 'Name: ' + showName;
                    }

                    function type() {
                        var showType = isPokeExist().type;
                        return blockType.innerHTML = 'Type: ' + showType;
                    }

                    function isPokeExist() {
                        for (var i in data) {
                            var namePoke = data[i].name.toLowerCase();
                            if (search === namePoke || search === i) {
                                return data[i]
                            }
                        }
                    }

                    if (typeof isPokeExist() !== 'undefined' && search == 32 ||
                        typeof isPokeExist() !== 'undefined' && search === 'nidoran-m') {
                        linksImg('nidoranm');
                        name('Nidoran&#9794');
                        type();
                    }

                    else if (typeof isPokeExist() !== 'undefined' && search == 29||
                        typeof isPokeExist() !== 'undefined' && search === 'nidoran-f') {
                        linksImg('nidoranf');
                        name('Nidoran&#9792');
                        type();
                    }

                    else if (typeof isPokeExist() !== 'undefined' && search == 83||
                        typeof isPokeExist() !== 'undefined' && search === 'farfetch\'d') {
                        linksImg('farfetchd');
                        name(isPokeExist().name);
                        type();
                    }

                    else if (typeof isPokeExist() !== 'undefined' && search == 122||
                        typeof isPokeExist() !== 'undefined' && search === 'mr. mime') {
                        linksImg('mr-mime');
                        name(isPokeExist().name);
                        type();
                    }

                    else if (typeof isPokeExist() !== 'undefined') {
                        linksImg(isPokeExist().name.toLowerCase());
                        name(isPokeExist().name);
                        type();
                    }

                    else {
                        if (search === 'nidoran'){
                            blockError = 'Please search nidoran-m or nidoran-f'
                        }

                        if (isNaN(search) && search !== 'nidoran') {
                            blockError = search + ' not found'
                        }

                        if (!isNaN(search) && search !== 'nidoran') {
                            blockError = 'Pokémon number ' + search + ' not found'
                        }
                    }

                    document.querySelector('#error').innerHTML = blockError;
                }
                return false
            };
        }
        });
    };