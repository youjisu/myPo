import './components/global.scss';
import './App.css';
import './firebase';
import PostCard from './components/card/card'
import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';

const db = getDatabase();

const App = () => {
  const [list, setList] = useState(null);

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
        {list && Object.values(list).map((post, idx) => {
          console.log(idx);
          return (
            <div style={{ display: 'contents' }} key={idx}>
              <PostCard
                key={idx}
                title={post.title}
                date={post.date}
                img={post.img}
                prevTitle={post.prevTitle}
                prevContent={post.prevContent.split('\\n').map((txt) => (<>{txt}<br /></>))}
                mainContent={post.mainContent.split('\\n').map((txt) => (<>{txt}<br /></>))}
              />
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
