//This function determines the class of each object in an array producing a two strings unique to that class
//It then takes those strings and the objects data and places it in the template for a HTML card class div in template literal
//Afterwards it appends that newly populated template to a string that will be given to the main function
function createEmployeeCards(teamArray)
{
    var cards = "";
    for (let i = 0; i < teamArray.length; i++)
    { 
        var customInfo = "";
        var customIcon = "";

        let current = teamArray[i].getRole();
        if(current === 'Manager')
        {
            customIcon = `<i class="fas fa-mug-hot"></i> Manager`;
            customInfo = `Office number: ${teamArray[i].getOfficeNumber()}`;
        }
        else if(current === 'Engineer')
        {
            customIcon = `<i class="fas fa-glasses"></i> Engineer`;
            customInfo = `GitHub: <a href ="https://github.com/${teamArray[i].getGithub()}" target= "_blank"> ${teamArray[i].getGithub()} </a>`;
        }
        else if (current === 'Intern')
        {
            customIcon = `<i class="fas fa-user-graduate"></i> Intern`;
            customInfo = `School: ${teamArray[i].getSchool()}`;
        }
        
        var newCard = 
    `  

     <div class="card bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header text-white">${teamArray[i].getName()}<br>
            ${customIcon}
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush border font-weight-bold">
                <li class="list-group-item">Id: ${teamArray[i].getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></li>
                <li class="list-group-item">${customInfo}</li>
              </ul>
        </div>
    </div>
    `;
        cards += newCard;
    }
    return cards;
}

//This function creates an empty string and appends the beginning of an HTML file, a dynamically generated body, and the Endding of the HTMl file
//It does this in sequence to produce the complete internal HTML of a file in string form before returning that string.
function renderTemplate(teamArray)
{
    var result = "";
    var openingHTML = 
`
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/59358b8b21.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./renderedTeam.css">
    <title>My Team</title>
</head>

<body>

      <div id ="header" class="jumbotron jumbotron-fluid mx-auto bg-danger">
          <h1 class="display-4 text-white">My Team</h1>
      </div>
    
      <div id="container">
`;

var middleHTML = createEmployeeCards(teamArray);

var closingHTML = 
`
    </div>
</body>
</html>
`;

result += openingHTML + middleHTML + closingHTML;

return result;
}

//Exporting the main function that will return a string representing the complete internal structure of an HTML file
module.exports = renderTemplate;