# Automatic Email Sender

This Node.js project leverages nodemailer, node-cron,and googleapis to create an automated email sender. It allows users to schedule emails for delivery using cron jobs and provides a straightforward setup.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhelafrank/Automatic-Email-Sender.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Automatic-Email-Sender
   ```

3. Install dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the project root and add the following information:
   ```dotenv
   CLIENT_ID=your_google_client_id
   CLIENT_SECRET=your_google_client_secret
   REFRESH_TOKEN=your_oauth_refresh_token
   USER_EMAIL=your_email@gmail.com
   ```
5. Linux or Unix users could setup the project by running the ```setup.sh``` file in the Project's root directory


## Starting the Script

To start the script, use the following command:
```bash
npm start
# or
yarn start
```

## Disclaimer

**Note:** Ensure compliance with applicable laws and regulations when sending emails. Respect recipients' privacy and adhere to ethical email practices. This script is intended for legitimate and consensual use only.

## Usage

### Immediate Email Sending

You can trigger immediate email sending by uncommenting the function call in ```/app.js```:
```javascript
selectAndDeleteRandomMessage("recipient@example.com", "Email Subject");
```

### Scheduled Email Sending

To schedule emails, the cron job is set to run every day at midnight:
```javascript
cron.schedule('0 0 * * *', () => {
  selectAndDeleteRandomMessage("recipient@example.com", "Email Subject");
});
```
you can modify the schedule as you want

## Function Details

The `selectAndDeleteRandomMessage` function, found in `/app.js`, takes two arguments:

1. Recipient Email Address
2. Email Subject

Feel free to customize the function call with the desired recipient and subject.

**Caution:** Respect email recipients' consent and provide an option to unsubscribe from the mailing list.

For more details, refer to the [Google Cloud Console](https://console.cloud.google.com/) for obtaining `CLIENT_ID` and `CLIENT_SECRET` and [OAuth Playground](https://developers.google.com/oauthplayground) for obtaining the `REFRESH_TOKEN`.