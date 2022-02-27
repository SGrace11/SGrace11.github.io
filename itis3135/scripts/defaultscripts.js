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
    let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    statement += date.getHours().toString();
    statement += ":" + date.getMinutes().toString();
    statement += " on ";
    statement += dayNames[date.getDay()];
    statement += ", " + date.getDate().toString();
    statement += " " + monthNames[date.getMonth()];
    statement += ", " + date.getFullYear().toString();
    document.getElementById("date").innerHTML = statement;
}