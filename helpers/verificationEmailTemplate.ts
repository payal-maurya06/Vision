export const verificationEmailTemplate = (otp: string) => {
  return `
        <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin-top: 50px;
      }

      h1 {
        color: #333333;
        text-align: center;
      }

      p {
        color: #666666;
        line-height: 1.5;
        text-align: center;
      }

      .otp-box {
        margin: 20px auto;
        background-color: #f8f8f8;
        padding: 15px 20px;
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 10px;
        border-radius: 8px;
        width: fit-content;
        border: 2px dashed #007bff;
        color: #007bff;
        text-align: center;
      }

      .expire-time {
        text-align: center;
        margin-top: 10px;
        color: #999999;
      }

    </style>
  </head>

  <body>
    <div class="container">
      <h1>Email Verification OTP</h1>

      <p>Please use the OTP below to verify your email address.</p>

      <div class="otp-box">${otp}</div>

      <p class="expire-time">This OTP will expire in 5 minutes.</p>

      <p>If you did not request this, you can safely ignore this email.</p>
    </div>
  </body>
</html>
    `;
};
