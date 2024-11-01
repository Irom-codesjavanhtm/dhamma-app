// app/learn/[id]/page.js
import { useRouter } from 'next/router';
import Header from '../../../components/Header';

const teachingsDetails = {
  '1': {
    title: 'The Five Precepts',
    content: 'Detailed information about the Five Precepts...',
  },
  '2': {
    title: 'The Noble Eightfold Path',
    content: 'Detailed information about the Noble Eightfold Path...',
  },
};

const TeachingDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic ID from the URL
  const teaching = teachingsDetails[id]; // Get the teaching based on ID

  if (!teaching) return <div>Loading...</div>; // Handle loading state

  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{teaching.title}</h2>
        <p>{teaching.content}</p>
      </div>
    </div>
  );
};

export default TeachingDetail;
