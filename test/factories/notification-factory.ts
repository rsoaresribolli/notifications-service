import { Content } from '../../src/application/entities/content';
import {
  Notification,
  NotificationProps,
} from '../../src/application/entities/notifications';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a notification'),
    category: 'social',
    recipientId: 'recipient-2',
    ...override,
  });
}
