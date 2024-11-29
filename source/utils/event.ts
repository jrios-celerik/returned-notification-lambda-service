// packages
import { APIGatewayProxyEvent } from 'aws-lambda';

// interfaces
import { Notification } from '../interfaces/notification';

export type StatusCode = 200 | 400;

export type EventType = 'HttpRequest' | 'DirectInvoke';
type Headers = {
  [key: string]: string;
};

export type HandlerResponse = {
  body: string;
  headers: Headers;
  statusCode: StatusCode;
} | string;

export const isAPIGatewayEvent = <T>(event: APIGatewayProxyEvent | Notification): event is APIGatewayProxyEvent => {
  return event && typeof event === 'object' && 'httpMethod' in event && 'headers' in event && 'body' in event;
}

export const buildHandlerResponse = (
  body: {
    error?: boolean;
    message: string;
  },
  statusCode: StatusCode,
  eventType: EventType,
): HandlerResponse => {
  if (eventType === 'DirectInvoke') {
    if (body.error) {
      throw new Error(body.message);
    }

    return JSON.stringify({ body });
  }

  return {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body }),
    statusCode,
  };

}
