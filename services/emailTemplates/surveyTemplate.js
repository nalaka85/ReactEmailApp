const keys = require('../../config/keys');
module.exports = (survey) => {
    return `
    <html>
       <body>
       <div  style ="text-align: center;">
       <h3>Please give me your Input  </h3>
       <p> this is the Question</p>
       <p> ${survey.body} </p>
       <div>
          <a href ="${keys.redirectDomain}/api/surveys/thanks"> Yes</a>
          </div> 
          <div>
          <a href ="${keys.redirectDomain}/api/surveys/thanks"> No</a>
          </div> 
       </div>
       </body>
       </html>
    `;

    //'<div>' + survey.body + '</div>';
};