// packages
import { APIGatewayProxyEvent } from 'aws-lambda';

// handlers
import { NotificationProcessor } from './handlers/notification';

// interfaces
import { NotificationDirectInvokeResponse, NotificationHttpResponse, Notification } from './interfaces/notification';

// utils
import { isAPIGatewayEvent } from './utils/event';

export const handler = async (event: APIGatewayProxyEvent & { body?: string } | Notification): Promise<NotificationHttpResponse | NotificationDirectInvokeResponse > => {
  const notificationProcessor = new NotificationProcessor();

  if (isAPIGatewayEvent(event)) {
    return notificationProcessor.notify(JSON.parse(event.body), 'HttpRequest');
  }

  return notificationProcessor.notify(event, 'DirectInvoke');
};
