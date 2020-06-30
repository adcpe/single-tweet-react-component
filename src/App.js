import React from 'react';
import tuits from './tuits';

import profileImg from './images/profile.png';
import commentsImg from './images/comments.png';
import likesImg from './images/likes.png';
import './styles.css';

function formatDate(date) {
  const months = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Setiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre',
  };
  const month = months[date.getUTCMonth()];

  return `${date.getUTCDate()} ${month}`;
}

function Image({ className, source, alt }) {
  return <img className={className} src={source} alt={alt} />;
}

function Tweet({ avatarSrc, userName, accountName, body, createdDate, commentsCount, likesCount }) {
  const date = formatDate(createdDate);

  return (
    <article className='tweet'>
      <div className='tweet-left'>
        <Image className='profile-img' source={avatarSrc} alt='Profile' />
      </div>
      <div className='tweet-right'>
        <p className='tweet-main-info'>
          <span className='user-name'>{userName}</span>
          <span className='greyed-text'>
            @{accountName} - {date}
          </span>
        </p>
        <p className='tweet-body'>{body}</p>
        <div className='tweet-footer'>
          <p className='footer-info'>
            <Image className='footer-icon' source={commentsImg} alt='Comments' /> {commentsCount}
          </p>
          <p className='footer-info'>
            <Image className='footer-icon' source={likesImg} alt='Likes' /> {likesCount}
          </p>
        </div>
      </div>
    </article>
  );
}

const ownTuits = [
  {
    creator: {
      username: 'zongoku',
      name: 'SonGoku',
    },
    body: 'Ready for Ruby on Rails module evaluation!',
    creationDate: new Date(),
    commentsCount: 39,
    likesCount: 62,
  },
  {
    creator: {
      username: 'zongoku',
      name: 'SonGoku',
    },
    body: 'Been quiet lately.',
    creationDate: new Date('2020-05-11'),
    commentsCount: 102,
    likesCount: 22,
  },
  {
    creator: {
      username: 'zongoku',
      name: 'SonGoku',
    },
    body: 'My first react component tweet!',
    creationDate: new Date('2020-03-03'),
    commentsCount: 555,
    likesCount: 321,
  },
];

const sortedTuits = tuits
  .concat(ownTuits)
  .sort((a, b) => a.creationDate < b.creationDate)
  .map((tuit) => {
    return (
      <Tweet
        avatarSrc={profileImg}
        userName={tuit.creator.name}
        accountName={tuit.creator.username}
        body={tuit.body}
        createdDate={tuit.creationDate}
        commentsCount={tuit.commentsCount}
        likesCount={tuit.likesCount}
      />
    );
  });

function App() {
  return <div className='app'>{sortedTuits}</div>;
}

export default App;
