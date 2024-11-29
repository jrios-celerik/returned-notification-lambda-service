export type NotificationType = 'email' | 'push' | 'sms';

// utils
import { StatusCode } from '../utils/event';

export interface CoreNotification {
  message: string;
  type: NotificationType;
};

export interface EmailNotification extends CoreNotification {
  address: string;
  subject: string;
  type: 'email';
};

export interface PushNotification extends CoreNotification {
  device: string;
  type: 'push';
};

export interface SMSNotification extends CoreNotification {
  countryCode: string;
  phoneNumber: string;
  type: 'sms';
};

export interface NotificationHttpResponse {
  body: {
    error?: boolean;
    message: string;
  } | string;
  statusCode: StatusCode;
}

export interface NotificationDirectInvokeResponse {}

export type Notification = EmailNotification | PushNotification | SMSNotification;
