const cron = require('node-cron');
const { messages } = require('./data/messages')
const {sendMail} = require(./services/mail-sender)

// Function to select and delete a random message
const selectAndDeleteRandomMessage = () => {
  if (messages.length > 0) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages.splice(randomIndex, 1)[0];


    console.log(`Selected message: ${selectedMessage.message} by ${selectedMessage.author}`);


//Other functions could be added here

  } else {
    console.log('No more messages to select.');
  }
};

// Scheduling the cron job to run every day at midnight
cron.schedule('0 0 * * *', () => {
  selectAndDeleteRandomMessage();
});


//selectAndDeleteRandomMessage()