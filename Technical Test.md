# 1-Hour TypeScript & AWS SAM Assessment
## Overview
Create a simple notification handler using AWS SAM and TypeScript. The system will process different types of notifications through a Lambda function.
## Time Limit: 1 hour
## Part 1: AWS SAM Setup (15 minutes)
Create a basic SAM template with:
1. A Lambda function to process notifications
2. A simple API Gateway endpoint
You should provide a complete `template.yaml` file with the necessary configurations.
## Part 2: TypeScript Implementation (45 minutes)
### Task 1: Notification Type System (25 minutes)
Create a type-safe notification system that can handle different types of notifications (email, SMS). Your implementation should include:
1. A base notification interface with common properties
2. Specific notification types for different channels
3. A discriminated union type for all notifications
4. A type-safe notification processor class
Your system should enforce type safety at compile time and handle different notification types appropriately.
### Task 2: Request Handler (20 minutes)
Implement a Lambda handler that:
1. Accepts notifications through API Gateway
2. Validates the incoming request with proper typing
3. Processes the notification
4. Returns a properly typed response
## Requirements
1. Type Safety:
   - No use of 'any' type
   - Proper type guards
   - Type-safe error handling
2. Implementation:
   - Working SAM template
   - Type-safe notification processing
   - Error handling
   - Basic input validation
## Evaluation Criteria
1. TypeScript Usage (50%):
   - Type safety
   - Type guards
   - Error handling
   - No use of 'any'
2. AWS SAM Implementation (30%):
   - Correct template structure
   - Lambda configuration
   - API Gateway setup
3. Code Quality (20%):
   - Clean code
   - Error handling
   - Code organization
## Submission
1. Send via ZIP file to me directly for review:
   - Complete source code
   - SAM template
   - Brief README with setup instructions
2. Ensure your submission includes:
   - Working type system
   - SAM template
   - Lambda handler
   - Basic error handling
## Expected Deliverables
Your submission should be able to:
1. Accept a POST request with a notification payload
2. Validate the notification type at compile time
3. Process the notification based on its type
4. Return an appropriate response
The system should handle at least email and SMS notifications, with proper type checking and error handling throughout the entire flow.