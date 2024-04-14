import AddBlog from '../posts/page';
import { useRouter } from 'next/router';

const YourComponent = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/'); 
  };

  return <AddBlog redirect={handleRedirect} />;
};

export default YourComponent;
