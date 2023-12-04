#!/bin/bash

prompt_input() {
  read -p "$1 [$2]: " input
  echo "${input:-$2}"
}

# Create .env file
echo "Creating .env file..."
echo "CLIENT_ID=$(prompt_input "Enter your Google Client ID" "your_google_client_id")" > .env
echo "CLIENT_SECRET=$(prompt_input "Enter your Google Client Secret" "your_google_client_secret")" >> .env
echo "REFRESH_TOKEN=$(prompt_input "Enter your OAuth Refresh Token" "your_google_refresh_token")" >> .env
echo "USER_EMAIL=$(prompt_input "Enter your email address" "your_emai@example.com")" >> .env

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the application
echo "Starting the application..."
npm start
