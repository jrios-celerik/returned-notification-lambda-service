// interfaces
import { PushNotification, NotificationHttpResponse } from '../interfaces/notification';
import { buildHandlerResponse, HandlerResponse, EventType } from '../utils/event';

export const pushNotificationProcessor = ({ device, message }: PushNotification, eventType: EventType): HandlerResponse => {
  let body: { error?: boolean; message: string } = { message: '' };

  if (!device) {
    body.error = true;
    body.message = 'Error: Property <device> is missing in the request.';
    return buildHandlerResponse(body, 400, eventType);
  }

  if (!message) {
    body.error = true;
    body.message = 'Error: Property <message> is missing in the request.';
    return buildHandlerResponse(body, 400, eventType);
  }

  // TODO: Pending to implement a push service.
  console.log(`Success: Device[${device}] - Body[${message}]`);

  body.error = false;
  body.message = `Success: Push notification successfully sent to: deviceId: ${device}.`;

  return buildHandlerResponse(body, 200, eventType);
};
