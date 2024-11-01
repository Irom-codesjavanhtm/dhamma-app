// app/learn/page.js
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input';

const teachings = [
  { id: 1, title: 'The Five Precepts', description: 'A foundational teaching in Buddhism.' },
  { id: 2, title: 'The Noble Eightfold Path', description: 'A guide to ethical and mental development.' },
];

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTeachings, setFilteredTeachings] = useState(teachings);

  useEffect(() => {
    const results = teachings.filter(teaching =>
      teaching.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTeachings(results);
  }, [searchTerm]);

  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold">Learn</h2>
        <Input
          placeholder="Search teachings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex flex-wrap justify-center mt-4">
          {filteredTeachings.map(teaching => (
            <Card
              key={teaching.id}
              title={teaching.title}
              content={teaching.description}
              link={`/learn/${teaching.id}`} // Correct link to teaching detail page
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
