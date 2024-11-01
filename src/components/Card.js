// components/Card.js
const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-4">
      <h2 className="text-2xl font-semibold text-darkYellow">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
