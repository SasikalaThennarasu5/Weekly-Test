
import React from 'react';
import withLoaderAndErrorHandler from '../hoc/withLoaderAndErrorHandler';

const PostsComponent = ({ data }) => {
  return (
    <div>
      <h3>Fetched Posts</h3>
      <ul className="list-group">
        {data.slice(0, 5).map((post) => (
          <li key={post.id} className="list-group-item">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export default withLoaderAndErrorHandler(PostsComponent, apiUrl);