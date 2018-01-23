window.onload = function(){

    document.querySelector('#form').onsubmit = function(){
        var search = document.querySelector('input[name="search"]').value;
        var imgPoke = document.querySelector('#imgPoke');
        var imgPoke2 = document.querySelector('#imgPoke2');
        var stats = document.querySelector('#stats');

        $.ajax({
            url: 'list.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                for (var i in data) {
                    namePoke = data[i].name.toLowerCase();
                    if (search === namePoke || search === i){
                        if(search === "nidoran"){
                            imgPoke.setAttribute('src', 'https://img.pokemondb.net/artwork/'+ namePoke +'-m.jpg');
                            imgPoke2.setAttribute('src', 'https://img.pokemondb.net/artwork/'+ namePoke +'-f.jpg');
                            imgPoke2.style.display = 'inline'
                        }
                        else if(search == 32){
                            imgPoke.setAttribute('src', 'https://img.pokemondb.net/artwork/'+ namePoke +'-m.jpg');
                            data[i].name = 'nidoran&#9794;';
                            imgPoke2.style.display = 'none'
                        }
                        else if(search == 29){
                            imgPoke.setAttribute('src', 'https://img.pokemondb.net/artwork/'+ namePoke +'-f.jpg');
                            data[i].name = 'nidoran&#9792;';
                            imgPoke2.style.display = 'none'
                        }
                        else {
                            imgPoke.setAttribute('src', 'https://img.pokemondb.net/artwork/' + namePoke + '.jpg');
                            imgPoke2.style.display = 'none'
                        }
                        stats.innerHTML = data[i].name + '<br>' + data[i].type
                    }
                }
            }
        });
        return false
    };
};