let imageIndex = 1;

function showImage(n)
{
    let i;
    let images = document.getElementsByClassName("image");
    let captionText = document.getElementById("caption");

    if(n > images.length)
    {
        imageIndex = 1;
    }
    if(n < 1)
    {
        imageIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++)
    {
        images[i].style.display = "none";
    }
    images[imageIndex - 1].style.display = "block";
    captionText.innerHTML = images[imageIndex - 1].alt;
}