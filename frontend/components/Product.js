import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import { useUser } from './User';

/* eslint-disable react/prop-types */
export default function Product({ product }) {
  const me = useUser();
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {me ? (
        <div className="buttonList">
          <Link
            href={{
              pathname: '/update',
              query: {
                id: product.id,
              },
            }}
          >
            Edit ✏️
          </Link>
          <AddToCart id={product.id} />
          <DeleteProduct id={product.id}>Delete 🗑</DeleteProduct>
        </div>
      ) : (
        <div className="buttonList" style={{ textAlign: 'center' }}>
          <Link href="/signin">Please sign in</Link>
        </div>
      )}
    </ItemStyles>
  );
}
