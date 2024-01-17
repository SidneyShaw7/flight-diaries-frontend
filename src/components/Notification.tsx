import { NotificationFormProps } from '../types';

const Notification = ({ notification, setNotification }: NotificationFormProps) => {
  if (notification) {
    setTimeout(() => {
      setNotification('');
    }, 3000);
  }

  return (
    notification && console.log(notification),
    (<div style={{ color: 'red' }}>{notification}</div>)
  );
};

export default Notification;
