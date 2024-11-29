// interfaces
import { SMSNotification, NotificationHttpResponse } from '../interfaces/notification';

// utils
import { buildHandlerResponse, HandlerResponse, EventType } from '../utils/event';

export const smsNotificationProcessor = ({ countryCode, message, phoneNumber }: SMSNotification, eventType: EventType): HandlerResponse => {
  let body: { error?: boolean; message: string } = { message: '' };

  if (!countryCode) {
    body.error = true;
    body.message = 'Error: Property <countryCode> is missing in the request.';
    return buildHandlerResponse(body, 400, eventType);
  }

  if (!message) {
    body.error = true;
    body.message = 'Error: Property <message> is missing in the request.';
    return buildHandlerResponse(body, 400, eventType);
  }

  if (!phoneNumber) {
    body.error = true;
    body.message = 'Error: Property <phoneNumber> is missing in the request.';
    return buildHandlerResponse(body, 400, eventType);
  }

  const countryCodeRegExp = /^\+\d{1,3}$/;
  if (!countryCodeRegExp.test(countryCode)) {
    console.log(`Error: ${countryCode} is not a valid phone country code.`);
    const body = {
      error: true,
      message: `Error: ${countryCode} is not a valid phone country code.`
    };
    return buildHandlerResponse(body, 400, eventType);
  }

  // TODO: Pending to implement a sms service.
  console.log(`Success: SMS ${message} sent to [${countryCode}${phoneNumber}]`);

  body.error = false;
  body.message = 'Success: SMS sent successfully.';
  return buildHandlerResponse(body, 200, eventType);
};
