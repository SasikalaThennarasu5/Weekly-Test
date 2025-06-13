import React from 'react';
import withDataFetch from '../hoc/withDataFetch';

const Task9 = ({ data }) => {
  return (
    <div>
      <h2>Task 9 . Fetch data from an API inside an HOC and pass it to the 
wrapped component. </h2>
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default withDataFetch(Task9, 'https://jsonplaceholder.typicode.com/posts');