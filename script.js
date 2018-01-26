window.onload = function(){
    $.ajax({
        url: 'pokemons.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {

            document.querySelector('#form').onsubmit = function () {
                var search = document.querySelector('input[name="search"]').value;
                var imgPoke = document.querySelector('#imgPoke');
                imgPoke.style.display = 'none';
                var blockName = document.querySelector('#name');
                blockName.innerHTML = '';
                var blockType = document.querySelector('#type');
                blockType.innerHTML = '';
                var blockError = '';

                function isPokeExist() {
                    for (var i in data) {
                        var namePoke = data[i].name.toLowerCase();
                        if (search === namePoke || search === i) {
                            return data[i]
                        }
                    }
                }

                if (search.length !== 0) {
                    function linksImg(imgPoke, end) {
                        imgPoke.style.display = 'block';
                        return imgPoke.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + isPokeExist().name.toLowerCase() + end);
                    }

                    function name(endName) {
                        var showName = isPokeExist().name + endName;
                        return blockName.innerHTML = 'Name: ' + showName;
                    }

                    function type() {
                        var showType = isPokeExist().type;
                        return blockType.innerHTML = 'Type: ' + showType;
                    }

                    if (typeof isPokeExist() !== 'undefined' && search != 29
                        && search != 32 && search !== 'nidoran') {
                        linksImg(imgPoke, '.gif');
                        name(' ');
                        type();
                    }

                    else if (typeof isPokeExist() !== 'undefined' && search === 'nidoran' ||
                        typeof isPokeExist() !== 'undefined' && search == 32) {
                        linksImg(imgPoke, 'm.gif');
                        name('&#9794');
                        type();
                    }

                    else if (typeof isPokeExist() !== 'undefined' && search == 29) {
                        linksImg(imgPoke, 'f.gif');
                        name('&#9792;');
                        type()
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
                return false
            };
        }
        });
    };