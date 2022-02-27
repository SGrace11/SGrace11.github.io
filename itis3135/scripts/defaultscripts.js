function scriptTest()
{
    alert("Running Script");
}

function getInfo()
{
    let firstname = document.getElementById("firstname").value;
    let feeling = document.getElementById("feeling").value;
    let statement = "The Sage Geckos welcome you, " + firstname + "! It is good to know you are feeling " + feeling + "."
    document.getElementById("output").innerHTML = statement;
}

function getDateTime()
{
    let statement = "Today is ";
    let date = new Date();
    statement += toString(date.getHours());
    statement += ":";
    statement += toString(date.getMinutes());
    document.getElementById("date").innerHTML = statement;
}