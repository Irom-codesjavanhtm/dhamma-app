// app/posts/page.js
import Header from '../../components/Header';
import Card from '../../components/Card';

const Posts = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center">
        <Card title="Post Title 1" content="This is the content of post 1." />
        <Card title="Post Title 2" content="This is the content of post 2." />
      </div>
    </div>
  );
};

export default Posts;
