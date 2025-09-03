# Welcome to my site!
This site is built in Next.js and deploys to AWS.

## Features

### Contact Form Implementation
- Added contact form with validation using React Hook Form and Zod
- Implemented email sending functionality using Nodemailer
- Added environment variables for email configuration
- Created API route for handling form submissions
- Added success/error handling and loading states

### AI Image Analysis
- Implemented TensorFlow.js integration for client-side image analysis
- Added random image selection with no-repeat functionality
- Created image loading and analysis states
- Implemented prediction display with confidence scores
- Added error handling for model loading and image analysis

### Infrastructure
- Amplify configuration for deployment
- Configured environment variables and secrets
- Node.js version to 22

## Technical Details

### Dependencies
- @hookform/resolvers
- zod
- nodemailer
- @tensorflow/tfjs
- @tensorflow-models/mobilenet

### Testing Notes
- Contact form validates inputs before submission
- Email sending works with configured SMTP settings
- Random image selection prevents consecutive duplicates

### Security Considerations
- Email credentials stored as environment secrets
- Form inputs sanitized and validated
- Client-side AI processing prevents data exposure