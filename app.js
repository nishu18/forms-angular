const rp = require('request-promise')

// JSON object


// Generate the HTML content dynamically
const generateHTML = () => {


    let html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
    
        </style>
    </head>
    
    <body>
        <div style="background-color:rgb(0, 134, 218);  width: 100%; height: 100%;     display: flex;
        ">
            <div style="    
        border-spacing: 0px;
        background-color: rgb(255,255,255);
        background-repeat: no-repeat;
        margin: 32px 25%;
        height: 60%;
        background: rgb(169,242,249);
    background: linear-gradient(120deg, rgba(169,242,249,1) 15%, rgba(227,234,246,1) 30%, rgba(227,234,246,1) 72%, rgba(169,242,249,1) 86%);
    ">
                <div>
                    <div style="background-color: white; width: 100%; height: 13%;">
                    <img
src="https://fretron.com/wp-content/uploads/2023/02/PNG-1.png"                            
 style="width:50%;margin: 2% 25%; " />       
              </div>
                    <div>
                        <h1 style="color: rgb(16,5,77);  
                        margin: 24px 12%;    font-size: 30px;">SSL Certificate Update
                        </h1>
                    </div>
                    <div><img alt="" style="    width: 30%; margin: 0px 32%;"
src="https://ci3.googleusercontent.com/proxy/hjCoBDvw0-of8xiubG-ON2Rdo8i4SKCRp9BnGiVG-6_uNnKqyees41hxzTeRYJ2u45-DmUvg96mU0jjB3nJz1NXruh0cyff5ZprPCI6HyChD9Y7bf--BHok2S_y2VVpfNia1dyeZHmiyRY4D5jMOGY_honN-KQtI9nwFFhF5OZdllWyc=s0-d-e1-ft#https://jicvzn.stripocdn.email/content/guids/CABINET_dee64413d6f071746857ca8c0f13d696/images/852converted_1x3.png" />                    </div>
    
                    <div>
                        <strong style="    margin: 0 17px; ">Dear Customer, </strong>
                        <p style="margin: 15px 17px; line-height: 21px;
                    color: rgb(51,51,51);
                    font-size: 14px;">This is to inform you that the Signzy.tech SSL certificate will expire on 27-06-2023.
                            Hence, we are going to change the certificate at our end on 24-06-2023 in all environments.</p>
                        <p style="margin: 0 17px; line-height: 21px;
                    color: rgb(51,51,51);
                    font-size: 14px;">It is recommended to forward the certificate to your IT team and advise them to check
                            if they need to install Signzy's certificate. The updated certificate should be installed in
                            addition to earlier certificates if required. Please ignore this if you haven't installed any
                            certificates earlier at the time of configuration.</p>
                        <p style="margin: 15px  17px; line-height: 21px;
                    color: rgb(51,51,51);
                    font-size: 14px;">Note - Kindly do not remove the existing Signzy.tech SSL certificate until we have
                            changed the certificate at our end & before you are in receipt of any formal communication from
                            the Signzy in this regard.</p>
                        <p style="margin: 0 17px; line-height: 21px;
                    color: rgb(51,51,51);
                    font-size: 14px;">The updated SSL certificate can be obtained by clicking the below download button.
    
                        </p>
                    </div>
                    <div style=" margin: 25px 8%; "><button
                            style="color: white;  background-color: rgb(38,198,218);     cursor: pointer;font-size: 20px; border-style: solid; border-color: rgb(38,198,218); border-width: 14px 27px 10px 33px;    border-radius: 10px; line-height: 24px; width: 86%;     margin-left: 20px;
                            ">Download
                            SSL Certificate</button></div>
                </div>
    
            </div>
        </div>
    </body>
    
    </html>`;

    return html;
};

// Create a server and render the HTML content
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end(generateHTML());
// });

// Start the server
// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
async function sendEmail(subject, content, to, cc, html) {
    try {
        let reqObj = {
            cc: cc.join(","),
            to: to.join(","),
            subject: subject,
            html: html,
            content: content
        };
        let res = await rp({
            uri: "http://apis.fretron.com/notifications/emails/email",
            method: "POST",
            formData: reqObj,
            timeout: 2000,
            json: true,
        });
        return res;
    } catch (err) {
        console.log("Error in sending email " + err.message);
        return "Error in sending email " + err.message;
    }
}

async function main() {
    try {
        let to = ["nishant.jangir@fretron.com"]
        let cc = [""]
        let subject = "Test"
        let content = ""
        if (true) {
            let html = generateHTML()
            console.log(`Html Generated : ${html}`)
            let sendEmailResp = await sendEmail(subject, content, to, cc, html)
            console.log(`Email reps : ${JSON.stringify(sendEmailResp)}`)
        } else {
            console.log(`Some error in getting today lastday json data`)
        }
    } catch (e) {
        console.log(`Catched error sending mail : ${e.message}`)
    }
}
main()