import React from 'react';
import { render, screen } from '@testing-library/react';
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
    it('renders form', () => {});

    it('renders button to hide form', () => {});

    describe('when button to hide form is clicked', () => {
      it('hides form', () => {});
    });
  });
});
