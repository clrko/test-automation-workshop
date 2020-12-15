import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ScrollToTopButton from './ScrollToTopButton';

describe('ScrollToTopButton', () => {
  beforeEach(() => {
    render(<ScrollToTopButton />);
  });

  it('renders button to scroll to top', () => {
    expect(screen.getByRole('button')).toHaveTextContent('Revenir en haut');
  });

  describe('when clicked', () => {
    it('scrolls to top of page', () => {
      window.scrollTo = jest.fn();
      fireEvent.click(screen.getByRole('button'));

      expect(window.scrollTo).toHaveBeenCalledTimes(1);
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
});
