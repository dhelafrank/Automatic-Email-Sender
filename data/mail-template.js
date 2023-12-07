const urlencode = require("urlencode")
const template = (message, author) => {
let response = ``

let responseUri = urlencode.encode(reponse)


  return `<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>
  <body style="background-color: #f3f4f6; text-align:center; display:grid; place:items:center">
    <div style="max-width: 600px; padding: 20px;">
      <h1 style="text-align:center">Hello there friend</h1>
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h1 style="font-size: 24px; margin-bottom: 10px; color: #333;">This one is by ${author}</h1>
        <hr style="border-top: 1px solid #e2e8f0;">
        <div style="margin-bottom: 15px;">
          <p style="color: #718096; font-size: 20px;">
            ${message}
          </p>
        </div>
        <hr style="border-top: 1px solid #e2e8f0;">
        <a style="display: inline-block; padding: 10px 15px; background-color: #3490dc; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;" href="${responseUri}" target="_blank">Click here to reply</a>
      </div>
    </div>
  </body>
  </html>
  `
}

module.exports = {
  template
}



//you can modify this template as you want
