import React, { useEffect, useState } from 'react';
import './App.scss';
import { PrimaryButton } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';
import Axios from 'axios';
import { Cross } from './assets/icons/Cross';

const App = () => {

  const [books, setBooks] = useState<unknown[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3000/api/books').then(({data}) => {
      setBooks(data);
    });
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const onCreate = () => {
    if (loading) {
      return;
    }

    setLoading(true)
    Axios.post('http://localhost:3000/api/books', {
      title: name
    }).then((res) => {
      const id = res.data._id;
      return Axios.get('http://localhost:3000/api/books/' + id);
    }).then(({ data }) => {
      setBooks((books) => [...books, data])
    }).finally(() => {
      setLoading(false);
    })
  }

  const booksJSX = books.map((book: any) => {
    const deleteBook = () => {
      Axios.delete('http://localhost:3000/api/books/' + book._id).then(() => {
        setBooks((books) => books.filter((b: any) => b._id !== book._id))
      })
    }

    return <div className='text-16 mb-8' key={book._id}> {book.title} <span onClick={deleteBook}>
      <Cross/>
    </span></div>
  })

  return (
    <div className="app">
      <Card className='mb-16'>
        <h3 className='title-18 mb-16'>Add Book</h3>
        <div className="form">
          <Input placeholder='Name' value={name} onChange={onChange}/>
          <PrimaryButton onClick={onCreate} spinner={loading}> Add Book</PrimaryButton>
        </div>
      </Card>

      { booksJSX }
    </div>
  );
};

export default App;
