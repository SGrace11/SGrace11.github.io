function polygon()
{
    // Ask for a number between 1 and 10
    let sideCount = parseInt(prompt("Enter a number of sides between 1 and 10."));
    // Validate the entered value
    let validatedSideCount = validateEntry(sideCount);
    // Get the name of the shape with the given number of sides
    let results = getShape(validatedSideCount);
    alert(results);
}

function getShape(_sideCount)
{
    let shapeName;
    // Use the parameter to determine which shape should be returned
    if(_sideCount == 1)
    {shapeName = "monogon";}
    else if(_sideCount == 2)
    {shapeName = "digon";}
    else if(_sideCount == 3)
    {shapeName = "triangle";}
    else if(_sideCount == 4)
    {shapeName = "quadrilateral";}
    else if(_sideCount == 5)
    {shapeName = "pentagon";}
    else if(_sideCount == 6)
    {shapeName = "hexagon";}
    else if(_sideCount == 7)
    {shapeName = "septagon";}
    else if(_sideCount == 8)
    {shapeName = "octagon";}
    else if(_sideCount == 9)
    {shapeName = "nonagon";}
    else if(_sideCount == 10)
    {shapeName = "decagon";}

    return shapeName;
}

function validateEntry(_entry)
{
    let entry = _entry;
    // Check that the entry is a number and is between 1 and 10
    // If not, alert and ask for a new entry
    while(isNaN(entry) || entry < 1 || entry > 10)
    {
        alert("Hey, that's not an integer between 1 and 10!");
        entry = prompt("Enter a number of sides.");
    }
    return entry;
}