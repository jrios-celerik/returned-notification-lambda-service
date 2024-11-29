# returned-notification-lambda-service

Notification lambda service that returns and structured response based on the `notificationType` property.

## Prerequisites

- `aws cli` (In order to deploy)
- `aws sam cli` (In order to run the project locally)
- `docker` (In order to run the serverless containers)
- `node v20.x`

## How to run it

- Install dependencies: `npm i`
- Review `clean` script in `package.json` file and modify it if necessary (script is built for Linux/Unix systems)

### Local API

To have a local API instance run build and start scripts.

```shell
npm run build
npm run start
```

API should be served in `POST` [https://localhost:3000/notification](https://localhost:3000/notification)

## Direct Invokes

Build the lambdas and then review each of the `invoke:*` scripts in `package.json` file

```shell
npm run build
npm run invoke:email
```

## Payload

To create custom payloads to validate review `source/interfaces/notification.ts` file, where it's more detailed all the notification types, `events` folder contains different scenarios and payloads also.

```json
{
  "type": "sms",
  "countryCode": "+57",
  "phoneNumber": "3003000000",
  "message": "An example SMS message"
}
```

### Improvements

- Event payload validation.
- Unit Testing with Jest.
- Third party integrations.
- Logger mechanism.
- Eslint and code standards.
