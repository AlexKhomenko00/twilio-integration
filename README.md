# Twilio Integration with NestJS

## Overview

This NestJS project demonstrates a straightforward integration with Twilio, enabling the application to send SMS messages, manage phone numbers, and handle verification codes efficiently. It's designed to illustrate best practices in implementing third-party communication services within a NestJS framework, ensuring scalability and maintainability.

## Features

- **SMS Sending**: Facilitates sending SMS messages to users directly from the application.
- **Phone Number Management**: Allows for the management and validation of phone numbers.
- **Verification Codes**: Supports sending and validating verification codes as part of a two-factor authentication (2FA) system or for verifying user phone numbers.

### Prerequisites

- Node.js (LTS version recommended)
- A Twilio account and its respective API credentials (Account SID, Auth Token, and a Twilio phone number)

### Envs

- `TWILIO_ACCOUNT_SID`=your_account_sid_here
- `TWILIO_AUTH_TOKEN`=your_auth_token_here
- `TWILIO_SENDER_PHONE_NUMBER`=your_twilio_phone_number_here
- `TWILIO_VERIFICATION_SID`=your_twilio_verification_sid

### Usage

The project includes a simple endpoints for sending SMS messages, managing phone numbers, and handling verification codes.
Refer to the `sms.controller.ts` for the available routes and their usage.
