import React from 'react'
import { useState } from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  }
  return (    
  <div>
    <form onSubmit={onSubmit}>
      <input onChange={onChange}/>
      <button>Search</button>
    </form>
  </div>
  )};

export default RepositoriesList
