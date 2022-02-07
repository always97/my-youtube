import React from 'react';

const Search = () => {
  return (
    <div className='nav'>
      <div>
        <img src='/images/logo.png' />
        <span>youtube</span>
      </div>
      <form>
        <input type="text" />
        <button><img className='searchImg' src="/images/search.png"/></button>
      </form>
    </div>
  );
};

export default Search;