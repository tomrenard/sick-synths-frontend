import PleaseSignIn from '../components/PleaseSignIn';
import RequestReset from '../components/RequestReset';

export default function AccountPage() {
  return (
    <PleaseSignIn>
      <RequestReset />
    </PleaseSignIn>
  );
}
