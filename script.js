window.onload = function(){

    document.querySelector('#form').onsubmit = function(){

        $.ajax({
            url: 'list.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                for (var i in data) {
                    console.log(data[i].name)
                }
            }
    });
        return false
    };
};