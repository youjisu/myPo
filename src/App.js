import './components/global.scss';
import './App.css';
import './firebase';
import PostCard from './components/card/card'
import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';

const db = getDatabase();

const App = () => {
  const [list, setList] = useState({});

  useEffect(() => {
    onValue(ref(db, 'board'), (snapshot) => {
      setList(snapshot.val());
      console.log(snapshot.val());
    }, {
      onlyOnce: true
    });
  }, []);

  return (
    <>
      <div className="container">
        {list && Object.values(list).map(post => (
          <PostCard
            key={post.key}
            title={post.title}
            date={post.date}
            prevTitle={post.prevTitle}
            prevContent={post.prevContent.split('\\n').map((txt) => (<>{txt}<br /></>))}
            mainContent={post.mainContent.split('\\n').map((txt) => (<>{txt}<br /></>))}
          />
        ))}
      </div>
    </>
  );
}

export default App;
