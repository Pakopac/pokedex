window.onload = function(){

    document.querySelector('#form').onsubmit = function(){
        var search = document.querySelector('input[name="search"]').value;
        var imgPoke = document.querySelector('#imgPoke');

        $.ajax({
            url: 'list.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                for (var i in data) {
                    namePoke = data[i].name.toLowerCase();
                    if (search === namePoke || search === i){
                        imgPoke.setAttribute('src', 'https://img.pokemondb.net/artwork/'+ namePoke +'.jpg');
                    }
                }
            }
    });
        return false
    };
};