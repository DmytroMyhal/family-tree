import React, { FunctionComponent, useEffect, useState } from 'react';
import classnames from 'classnames';

import CloseButton from 'components/shared/close-button/closeButton';

import './notification.scss';

const NOTIFICATION_APPEARANCE_DELAY = 2000;

const Notification: FunctionComponent = ({ children }) => {
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    setTimeout(() => setHasAppeared(true), NOTIFICATION_APPEARANCE_DELAY);
  }, []);

  return (
    <div className={classnames('notification', { notification_hidden: !hasAppeared })}>
      {children}
      <CloseButton onClose={() => setHasAppeared(false)} customClasses="notification__close-button" />
    </div>
  );
};

export default Notification;
