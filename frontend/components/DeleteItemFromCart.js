/* eslint-disable react/prop-types */
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function DeleteItemFromCart({ cartItem }) {
  const [deleteItem, { loading }] = useMutation(DELETE_ITEM_MUTATION, {
    variables: {
      id: cartItem.id,
    },
    update,
  });
  return (
    <button
      style={{
        background: 'none',
        color: 'red',
        border: 'none',
        paddingLeft: '1rem',
        fontSize: '2rem',
        cursor: 'pointer',
      }}
      disabled={loading}
      onClick={deleteItem}
      type="button"
      title="Remove item from cart"
    >
      &times;
    </button>
  );
}
