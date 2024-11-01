// components/CreatePost.js
import { useState } from 'react';
import Button from './Button';

const CreatePost = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        content,
        createdAt: new Date(),
      });
      setContent('');
      alert('Post created!');
    } catch (error) {
      alert('Error creating post: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Write something..."
        required
      />
      <Button type="submit">Post</Button>
    </form>
  );
};

export default CreatePost;
