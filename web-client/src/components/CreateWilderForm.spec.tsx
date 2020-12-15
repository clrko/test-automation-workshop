import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
    it('renders form and button to hide form', () => {
      render(<CreateWilderForm />);
      fireEvent.click(screen.getByText('Montrer le formulaire'));

      expect(screen.queryByRole('form')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent(
        'Cacher le formulaire'
      );
    });

    describe('when button to hide form is clicked', () => {
      it('hides form', () => {
        render(<CreateWilderForm />);
        fireEvent.click(screen.getByText('Montrer le formulaire'));
        fireEvent.click(screen.getByText('Cacher le formulaire'));

        expect(screen.queryByRole('form')).not.toBeInTheDocument();
      });
    });
  });
});
