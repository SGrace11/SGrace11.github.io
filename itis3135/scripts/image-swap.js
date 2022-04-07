let imageIndex = 1;
showImage(imageIndex);

function showImage(n)
{
    let i;
    let images = document.getElementsByClassName("image");
    let thumbnails = document.getElementsByClassName("mini");
    let captionText = document.getElementById("caption");

    if(n > images.length)
    {
        imageIndex = 1;
    }
    if(n < 1)
    {
        imageIndex = images.length;
    }

    for(i = 0; i < images.length; i++)
    {
        images[i].style.display = "none";
    }
    images[imageIndex - 1].style.display = "block";
    captionText.innerHTML = thumbnails[imageIndex - 1].alt;
}