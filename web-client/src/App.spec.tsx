import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor, within } from '@testing-library/react';
import { gql } from '@apollo/client';
import React from 'react';

import App, { GET_WILDERS } from './App';

const GET_WILDERS_SUCCESS_MOCK = {
  request: {
    query: GET_WILDERS,
  },
  result: {
    data: {
      wilders: [
        {
          id: '1',
          displayName: '[SXB] Lorie Laurette',
        },
        {
          id: '2',
          displayName: '[PAR] Laure Laurent',
        },
      ],
    },
  },
};

const GET_WILDERS_ERROR_MOCK = {
  request: {
    query: GET_WILDERS,
  },
  error: {
    name: 'GRAPHQL_VALIDATION_FAILED',
    message:
      'Cannot query field "wilders_error" on type "Query". Did you mean "wilders"?',
  },
};

describe('App', () => {
  describe('while fetching wilders', () => {
    it('renders loading', () => {
      render(
        <MockedProvider mocks={[GET_WILDERS_SUCCESS_MOCK]} addTypename={false}>
          <App />
        </MockedProvider>
      );

      expect(screen.getByText('Chargement en cours…')).toBeInTheDocument();
    });
  });

  describe('when fetching wilders failed', () => {
    it('renders error', async () => {
      render(
        <MockedProvider mocks={[GET_WILDERS_ERROR_MOCK]} addTypename={false}>
          <App />
        </MockedProvider>
      );

      const errorMessage = await waitFor(() =>
        screen.getByText('Erreur de chargement.')
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe('when fetching wilders succeeded', () => {
    it('renders wilders', async () => {
      render(
        <MockedProvider mocks={[GET_WILDERS_SUCCESS_MOCK]} addTypename={false}>
          <App />
        </MockedProvider>
      );

      const list = await waitFor(() => screen.getByRole('list'));

      const listItems = within(list).getAllByRole('listitem');
      expect(listItems).toHaveLength(2);

      expect(listItems[0]).toHaveTextContent('[SXB] Lorie Laurette');
      expect(listItems[1]).toHaveTextContent('[PAR] Laure Laurent');
    });
  });
});
