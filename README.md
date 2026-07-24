# Welcome to my site!
This site is built in Next.js and deploys to AWS.

## Features

### Contact Form Implementation
- Added contact form with validation using React Hook Form and Zod
- Implemented email sending functionality using Nodemailer
- Added environment variables for email configuration
- Created API route for handling form submissions
- Added success/error handling and loading states

### Infrastructure
- Amplify configuration for deployment
- Configured environment variables and secrets
- Node.js version to 22

## Technical Details

### Dependencies
- @hookform/resolvers
- zod
- nodemailer

### Testing Notes
- Contact form validates inputs before submission
- Email sending works with configured SMTP settings

### Security Considerations
- Email credentials stored as environment secrets
- Form inputs sanitized and validated
