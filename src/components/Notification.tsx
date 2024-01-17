import { useState } from 'react';

const Notification = () => {
  const [notification, setNotification] = useState('');
  if (notification) {
    setTimeout(() => {
      setNotification('');
    }, 3000);
  }

  return <div style={{ color: 'red' }}>{notification}</div>;
};

export default Notification;
