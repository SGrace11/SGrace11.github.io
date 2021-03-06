$(document).ready(function()
{
    $('#image-list a').click(function(evt)
    {
        evt.preventDefault();

        var imagePath = $(this).attr('href');
        var caption = $(this).attr('title');

        $('#image').fadeOut(2000, function()
        {
            $('#image').attr('src', imagePath);
            $('#image').fadeIn(2000);
        });
        $('#caption').fadeOut(2000, function()
        {
            $('#caption').text(caption);
            $('#caption').fadeIn(2000);
        });
    });
    $('li:first-child a').focus();
});