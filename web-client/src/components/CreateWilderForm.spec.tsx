import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateWilderForm from './CreateWilderForm';

describe('CreateWilderForm', () => {
  it('renders button to show form', () => {
    render(<CreateWilderForm />);
    expect(screen.getByRole('button')).toHaveTextContent(
      'Montrer le formulaire'
    );
  });

  it('does not render form', () => {
    render(<CreateWilderForm />);
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
  });

  describe('when button to show form is clicked', () => {
    beforeEach(() => {
      render(<CreateWilderForm />);
      fireEvent.click(screen.getByRole('button'));
    });

    it('renders form', () => {
      expect(screen.queryByRole('form')).toBeInTheDocument();
    });

    it('renders button to hide form', () => {
      expect(screen.getByRole('button')).toHaveTextContent(
        'Cacher le formulaire'
      );
    });

    describe('when button to hide form is clicked', () => {
      it('hides form', () => {
        fireEvent.click(screen.getByRole('button'));
        expect(screen.queryByRole('form')).not.toBeInTheDocument();
      });
    });
  });
});
