// HTML template for page

const generateHTML = htmlContent => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/a7cc844dfb.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="card-container">
            <div class="card-header row text-center" style="background-color:aquamarine">
                <h1>My Team</h1>
            </div>
            <div class="card-body col-12"> 
                <div class="d-flex justify-content-center flex-wrap">
                    ${htmlContent}
                </div>
            </div>        
        </div>
    </body>

    </html>              
    `;
}

module.exports = generateHTML