// app/community/page.js
import { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import Header from '../../components/Header';
import CreatePost from '../../components/CreatePost';
import Card from '../../components/Card';

const Community = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold">Community Posts</h2>
        <CreatePost />
        <div className="flex flex-wrap justify-center">
          {posts.map(post => (
            <Card key={post.id} title={`Post by User`} content={post.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
