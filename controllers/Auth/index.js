const AuthModal = require("../../db/models/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const saltRounds = 10;
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv").config()


const sendMail = async (token, firstname, lastname,pass, email) =>{

  const transporter = nodemailer.createTransport({
    port: 587,
    service: 'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'sunbalabro786@gmail.com',
      pass: pass,
    },
  });
  const url = `http://localhost:3000/verification/${token}`
   const mailOptions = {
    from: 'sunbalabro786@gmail.com',
    to: email,
    subject: 'Test email',
    html: `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="x-apple-disable-message-reformatting">
      <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
      <meta name="color-scheme" content="light">
      <meta name="supported-color-schemes" content="light">
      <title></title>
    
      <!--[if !mso]><!-->
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap);
      </style>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i &subset=cyrillic,latin-ext" data-name="open_sans" rel="stylesheet" type="text/css">
      <!--<![endif]-->
    
      <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
    
      <!--[if mso]>
            <style>
                * {
                    font-family: sans-serif !important;
                }
            </style>
        <![endif]-->
    
      <!--[if !mso]><!-->
      <!-- insert web font reference, eg: <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i &subset=cyrillic,latin-ext" rel='stylesheet' type='text/css'> -->
      <!--<![endif]-->
    
    
      <style>
        :root {
          color-scheme: light;
          supported-color-schemes: light;
        }
    
        html,
        body {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
        }
    
        * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
    
        div[style*="margin: 16px 0"] {
          margin: 0 !important;
        }
    
        #MessageViewBody,
        #MessageWebViewDiv {
          width: 100% !important;
        }
    
        table,
        td {
          mso-table-lspace: 0pt !important;
          mso-table-rspace: 0pt !important;
        }
    
        th {
          font-weight: normal;
        }
    
        table {
          border-spacing: 0 !important;
          border-collapse: collapse !important;
          table-layout: fixed !important;
          margin: 0 auto !important;
        }
    
        a {
          text-decoration: none;
        }
    
        img {
          -ms-interpolation-mode: bicubic;
        }
    
        a[x-apple-data-detectors],
        /* iOS */
        .unstyle-auto-detected-links a,
        .aBn {
          border-bottom: 0 !important;
          cursor: default !important;
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
    
        .im {
          color: inherit !important;
        }
    
        .a6S {
          display: none !important;
          opacity: 0.01 !important;
        }
    
        img.g-img+div {
          display: none !important;
        }
    
        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
          u~div .email-container {
            min-width: 320px !important;
          }
        }
    
        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
          u~div .email-container {
            min-width: 375px !important;
          }
        }
    
        @media only screen and (min-device-width: 414px) {
          u~div .email-container {
            min-width: 414px !important;
          }
        }
      </style>
    
      <style>
        .button-td,
        .button-a {
          transition: all 100ms ease-in;
        }
    
        .button-td-primary:hover,
        .button-a-primary:hover {
          background: #5582ff !important;
          border-color: #5582ff !important;
        }
    
        .email-container p.column-header {
          padding-top: 30px;
        }
    
        @media screen and (max-width: 600px) {
    
          .email-container {
            width: 100% !important;
            margin: auto !important;
          }
    
          .stack-column,
          .stack-column-center {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            direction: ltr !important;
          }
    
          .stack-column-center {
            text-align: center !important;
          }
    
          .center-on-narrow {
            text-align: center !important;
            display: block !important;
            margin-left: auto !important;
            margin-right: auto !important;
            float: none !important;
          }
    
          table.center-on-narrow {
            display: inline-block !important;
          }
    
          .email-container p {
            font-size: 15px !important;
          }
    
          .email-container p.header-text {
            font-size: 32px !important;
          }
    
          .email-container p.column-header {
            font-size: 19px !important;
            padding-top: 32px;
          }
    
          .email-container .grid img {
            max-width: 100% !important;
          }
    
          .email-container .grid .mobile-gap {
            padding-bottom: 48px;
          }
    
          .email-container .grid .link-button {
            padding: 32px 10px 10px !important;
          }
    
          .email-container .logo img {
            width: 100% !important;
          }
        }
      </style>
    
    </head>
    
    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F5F6F8;">
      <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F5F6F8;">
        <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F5F6F8;">
        <tr>
        <td>
        <![endif]-->
        <!-- Email Body -->
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="margin: auto;" class="email-container">
    
          <!-- Logo -->
          <tr>
            <td class="logo" style="padding: 10px 0 32px; text-align: center; background-color: #C5C5C5">
              <img src="https://i.postimg.cc/sgVWfp2X/logo.png" style='background-color: #C5C5C5'  width="380" height="100" alt="logo" border="0" style="height: auto;background: #F5F6F8;font-family: Open Sans;font-size: 15px;line-height: 15px;color: #555555;background-color: #F5F6F8;" bgcolor="#F5F6F8">
            </td>
          </tr>
    
          <!-- Section: email title -->
          <tr>
            <td style="padding: 48px 32px 20px; text-align: center; background-color: #6CDFBD;">
              <p class="header-text" style="height: auto; margin: 15px 0; background: #ffffff; font-family: Open Sans; font-weight: bold; text-align: center; font-size: 32px; line-height: 34px; color: white; background-color: #6CDFBD;">
                Email Verification Request
              </p>
            </td>
          </tr>
          <td style="padding: 20px 32px 64px; text-align: center; background-color: #6CDFBD;">
            <!-- Button -->
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto; padding: 20px;">
              <tr>
                <td class="button-td" style="border-radius: 50px; background: #2e66ff;">
                  <a href=${url} style="background: #ffff; border: 1px solid #ffff; font-family: Open Sans; font-size: 16px; line-height: inherit; text-decoration: none; padding: 16px; color: black; display: block; border-radius: 15px;">
                    Verify email
                  </a>
                </td>
              </tr>
            </table>
          </td>
          <tr style="background-color: white; padding: 19px;">
            <table  style="background-color: white; padding: 20px;">
              <td style="background-color: white; padding: 17px;">
               <p> Hello ${firstname} ${lastname}</p>
               <p>Before we can move forward with your account we first need you to verify your email address</p>
               <p>Thanks,</p>
               <p>Team Local Agent</p>
               <td/>
            </table>
          </tr>
          <tr style="background-color: white;">
            <table>
         <td style="background-color: #C5C5C5; padding: 17px; width: 610px;">
              <p>
                Local Client, 00 Sample Street,
              </p>
         </td>
    
            </table>
            
          </tr>
    
        </table>
    
        <!--[if mso | IE]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </center>
    </body>
    
    </html>`
   }

  const info = await transporter.sendMail(mailOptions);
  console.log("info message",info.messageId)
}
exports.CreateUser = async (req, res) => {
  try {
    const pass = process.env.APP_PASSWORD;
    const { userData } = req.body;
    const { firstname, lastname, email, password, role, resources, profilePic, taskOffered, country, location, howItWorks, prices, deliveryDays } = userData;
    const existingUser = await AuthModal.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: 'User already exists' });
    }
    const hash = bcrypt.hashSync(password, saltRounds);
    const userId = uuidv4()
    const token = jwt.sign({ email, userId }, 'localAgent');
    const newUser = new AuthModal({
      userId,
      firstname,
      lastname,
      email,
      password: hash,
      role,
      isVerified: false,
      token,
      profilePic
    });
    const newSellerUser = new AuthModal({
      userId,
      email,
      firstname,
      lastname,
      password: hash,
      role,
      isVerified: false,
      token,
      resources,
      taskOffered,
      profilePic,
      country,
      location,
      prices,
      deliveryDays,
      howItWorks,
      profilePic
    });
    if (role == 'client') {
      const resp = await newUser.save();
      sendMail(token,firstname, lastname, pass, email);
      res.json({ success: true, message: "Successfully created user", resp, token });

    } else if (role == 'seller') {
      const resp = await newSellerUser.save();
      sendMail(token,firstname, lastname, pass, email);
      res.json({ success: true, message: "Successfully created user", resp, token });

    }

  } catch (error) {
    res.json({ success: false, message: 'Invalid username or password', error });
  }
};

exports.VerifyUser = async (req, res) => {
  try {

    const { token } = req.body;
    const doc = await AuthModal.findOne({ token });
    if (doc) {
      doc.isVerified = true;
    }
    const resp = await doc.save();
    res.json({ success: true, message: "Successfully verified user", resp })
  }
  catch (err) {
    res.json({ success: false, message: 'Invalid token', err })
  }
}

exports.LogIn = async (req, res) => {
  try {
    const {userData} = req.body
    const { email, password} = userData;
    
      const doc = await AuthModal.findOne({email});
      if(doc.isVerified){
        const hash = doc.password
        bcrypt.compare(password, hash, function(err, result) {
          if(result){
            const data = doc;
            res.json({success: true, message: "Successfully login", data})
          }else{
            res.json({success: false, message: "Invalid username or password"})
          }
      });
      }else{
        res.json({success: false, message: "Verify your email!"})
      }
  }
  catch (err) {
    res.json({ success: false, message: 'Invalid email or password', err })

  }
}