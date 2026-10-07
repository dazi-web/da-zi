import React from 'react';

export default function SafeMailLink({children, className}) {
  function handleClick() {
    const mailbox = ['kontakt', 'da-zi.de'];
    window.location.href = `mailto:${mailbox.join('@')}`;
  }

  return (
    <button className={className} onClick={handleClick} type="button">
      {children || 'kontakt [at] da-zi [dot] de'}
    </button>
  );
}
