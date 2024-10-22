import classNames from 'classnames';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = ({ title, dark = false }: any) => {
  return (
    <button
      className={classNames(
        'border border-black w-full bg-black text-white hover:bg-black hover:text-white transition duration-100 hover:delay-20 py-2 px-6',
        {
          'bg-black': dark,
          'text-black': !dark,
          'text-white': dark,
          'bg-white': !dark,
        },
      )}
    >
      {title}
    </button>
  );
};

export default Button;
