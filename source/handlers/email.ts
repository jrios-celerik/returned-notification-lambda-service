// interfaces
import { EmailNotification, NotificationHttpResponse } from '../interfaces/notification';

// utils
import { buildHandlerResponse, HandlerResponse, EventType } from '../utils/event';

export const emailNotificationProcessor = ({ address, message, subject }: EmailNotification, eventType: EventType): HandlerResponse => {
  let body: { error?: boolean; message: string } = { message: '' };

  if (!address) {
    body.error = true;
    body.message = 'Error: Property <address> is missing in the request.';
    return buildHandlerResponse(body, 400, eventType);
  }

  if (!message) {
    body.error = true;
    body.message = 'Error: Property <message> is missing in the request.';
    return buildHandlerResponse(body, 400, eventType);
  }

  if (!subject) {
    body.error = true;
    body.message = 'Error: Property <subject> is missing in the request.';
    return buildHandlerResponse(body, 400, eventType);
  }

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegExp.test(address)) {
    console.log(`Error: ${address} is not a valid email address.`);
    body.error = true;
    body.message = `Error: ${address} is not a valid email address.`
    return buildHandlerResponse(body, 400, eventType);
  }

  // TODO: Pending to implement an email service.
  console.log(`Success: Address[${address}] - Subject[${subject}] - Body[${message}]`);

  body.error = false,
  body.message = 'Success: Notification sent successfully.';
  return buildHandlerResponse(body, 200, eventType);
};
