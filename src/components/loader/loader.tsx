import React from 'react';
import classnames from 'classnames';

import './loader.scss';

import bestLogo from './images/best-logo.svg';

type Props = {
  size?: 's',
};

const Loader = ({size}: Props) => (
  <div className="loader">
    <img
      src={bestLogo}
      alt="Best Logo"
      className={classnames('loader__logo', {
        'loader__logo_s': size === 's',
      })}
    />
  </div>
);

export default Loader;