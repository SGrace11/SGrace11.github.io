function getShape(_sideCount)
{
    let sideCount = _sideCount;
    
}

function validateEntry()
{
    let entry = prompt("Enter a number of sides.");
    if(Number.isInteger(parseInt(entry)) != true)
    {
        alert("Hey, that's not an integer!");
        entry = prompt("Enter a number of sides.");
    }
    else
    {
        getShape(parseInt(entry));
    }
}