import SingleOrder from '../../components/SingleOrder';

/* eslint-disable react/prop-types */
export default function SingleOrderPage({ query }) {
  return <SingleOrder id={query.id} />;
}
