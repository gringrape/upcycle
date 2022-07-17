import { useState } from 'react';

import users from '../data/users';

import random from '../utils/random';

type User = {
    id: number;
    name: string;
}

export default function App() {
  const [winners, pick] = useState<User[]>([]);

  const handleClick = () => {
    const chosenUsers = random({
      start: 0,
      end: users.length,
      count: 2,
    }).map((i) => users[i]);

    pick(chosenUsers);
  };

  return (
    <div>
      <h1>분리수거 가챠</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleClick}>
        pick
      </button>
      {winners.length ? (
        <p>
          축하합니다!
          {' '}
          {winners.map((winner) => winner.name).join(', ')}
          {' '}
          당첨입니다!
          😜
        </p>
      ) : null}
    </div>
  );
}
