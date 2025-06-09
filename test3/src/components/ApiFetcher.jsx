import React, { useEffect, useState } from 'react';

const ApiFetcher = () => {
  const [query, setQuery] = useState('octocat');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query.trim() === '') return;

    const fetchData = async () => {
      try {
        setError('');
        const res = await fetch(`https://api.github.com/users/${query}`);
        if (!res.ok) throw new Error('User not found');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setData(null);
        setError(err.message);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="box">
      <h2>GitHub User Search</h2>
      <input
        type="text"
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter GitHub username"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <img src={data.avatar_url} alt="avatar" width={80} />
          <p><strong>{data.login}</strong></p>
          <p>{data.bio}</p>
        </div>
      )}
    </div>
  );
};

export default ApiFetcher;
