// app/profile/page.js
import Header from '../../components/Header';

const Profile = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold">Profile</h2>
        <p>Email: {user.email}</p>
        <button onClick={() => auth.signOut()} className="mt-4">Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
