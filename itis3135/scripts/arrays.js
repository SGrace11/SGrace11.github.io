const people = [];
const salaries = [];

function addSalary()
{
    let employee = document.getElementById('employees').value;
    let salary = document.getElementById('salary').value;

    if(isNaN(salary) || salary=="")
    {
        alert("Please enter a number for the salary");
    } else
    {
        people.push(employee);
        salaries.push(parseInt(salary));
    }
}

function displayResults()
{
    var average = 0;
    var highest = salaries[0];
    var count = 0;

    for(count; count < salaries.length; count++)
    {
        average += salaries[count];
        if(salaries[count] > highest)
        {
            highest = salaries[count];
        }
    }
    average = average/count;

    document.getElementById('results').innerHTML = "<h2>Salary Results</h2><p>Average: " + average + "</p><p>Highest: "+ highest + "</p>";
}

function displaySalary()
{
    var table = "<tr><th>Name</th><th>Monthly Salary</th></tr>";

    for(var i = 0; i < people.length; i++)
    {
        table += "<tr><td>" + people[i] + "</td><td>" + salaries[i] + "</td></tr>";
    }
    document.getElementById('results_table').innerHTML = table;
}