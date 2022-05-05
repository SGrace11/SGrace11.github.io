$(document).ready(function()
{
	$('#nav_list a').click(function()
    {
        $.ajax({
            url: 'json_files/' + $(this).attr('title') + '.json',
            timeout: 10000,
            error: function(xhr, status, error)
            {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: 'json',
            success: function(data)
            {
                $('main').html('');
                $.each(data, function()
                {
                    $.each(this, function(key, value)
                    {
                        $('main').append
                        (
                            '<h1>' + value.title + '</h1>' +
                            '<h2>' + value.month + '</h2>' +
                            '<h3>' + value.speaker + '</h3>' +
                            '<img src="' + value.image + '" alt = "' + $(this).attr('title') + '_picture"></img>' +
                            '<p>' + value.text + '</p>'
                        );
                    });
                });
            }
        });
    });
}); // end ready