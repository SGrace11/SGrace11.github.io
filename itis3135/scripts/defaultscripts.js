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

function sumTwoInts()
{
    let firstNumber = parseInt(prompt("Enter a number, please: "));
    let secondNumber = parseInt(prompt("Enter another number, please: "));
    let sum = firstNumber + secondNumber;
    alert(firstNumber + " geckos plus " + secondNumber + " geckos is " + sum + " geckos!");
}

function calculateAreaAndPerimeter()
{
    let firstNumber = parseInt(prompt("Enter a number, please: "));
    let secondNumber = parseInt(prompt("Enter another number, please: "));
    let area = firstNumber * secondNumber;
    let perimeter = (2 * firstNumber) + (2 * secondNumber);
    alert("A rectangle with a length of " + firstNumber + " geckos long and a width of " + secondNumber +
    " geckos long has an area of " + area + " geckos squared and a perimeter of " + perimeter + " geckos long");
}

function calculateTax()
{
    let price = parseFloat(prompt("Enter a price, please: "));
    let percent = parseFloat(prompt("Enter a tax percentage, please: "));
    let tax = price * percent;
    let total = price + tax;
    alert("If you buy a gecko that costs $" + price + " and a tax of " + percent + "% is added, you will pay $" + tax + " in tax, for a total of $" + total);
}

function randomColor()
{
    let colors = ['red','orange','yellow','green','blue','purple'];
    let number = Math.floor(Math.random() * 6);
    let myColor = colors[number];
    alert("The geckos have decided. Your color is " + myColor + "!");
}

function averageLength()
{
    let firstLength = parseFloat(prompt("Enter the length of the first gecko, please: "));
    let secondLength = parseFloat(prompt("Enter the length of the second gecko, please: "));
    let thirdLength = parseFloat(prompt("Enter the length of the third gecko, please: "));
    let average = (firstLength + secondLength + thirdLength) / 3;
    alert("The average length of the three geckos is " + average + ".");
}
