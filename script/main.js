var x = document.getElementById("myForm");
x.addEventListener('keypress', search);
var z = 0;



function search(event){
    
    if(event.which === 13){
        $('#output li').remove();
        var y = document.getElementById("myForm").value;
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+y+"&format=json&callback=?"
        $.ajax( {
            type:"GET",
            url: url,
            async:false,
            dataType: 'json',
            success: function(data) {
                for(var i=0;i<data[1].length;i++){
                    $('#output').prepend('<li><a id="tit" href= '+data[3][i]+'>'+data[1][i]+'</a><p id="pa">'+data[2][i]+'</p></li>');
                }
            },
            error:function(errorMessage){
                alert("Error");
            }
        });
    }
}


