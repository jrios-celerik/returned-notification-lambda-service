// interfaces
import { NotificationType, Notification, NotificationHttpResponse } from '../interfaces/notification';

// handlers
import { emailNotificationProcessor } from './email';
import { pushNotificationProcessor } from './push';
import { smsNotificationProcessor } from './sms';

// utils
import { buildHandlerResponse, HandlerResponse, EventType } from '../utils/event';

export class NotificationProcessor {
  public notify(notification: Notification, eventType: EventType): HandlerResponse | string {
    const { type: notificationType } = notification;
    switch(notificationType) {
      case 'email':
        return emailNotificationProcessor(notification, eventType);
        case 'push':
          return pushNotificationProcessor(notification, eventType);
        case 'sms':
        return smsNotificationProcessor(notification, eventType);
      default:
        console.log(`Error: Notification type <${notificationType}> received is not a valid type.`)
        const body = {
          error: true,
          message: `Error: Notification type <${notificationType}> received is not a valid type, please try with: <email> | <push> | <sms>.`
        };
        return buildHandlerResponse(body, 400, eventType, true);
    }
  }
}
