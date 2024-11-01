// app/page.js
import Link from 'next/link';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome to the Dhamma App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/posts" className="text-yellow-500">Posts</Link>
          </li>
          <li>
            <Link href="/learn" className="text-yellow-500">Learn</Link>
          </li>
          <li>
            <Link href="/profile" className="text-yellow-500">Profile</Link>
          </li>
          <li>
            <Link href="/community" className="text-yellow-500">Community</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
