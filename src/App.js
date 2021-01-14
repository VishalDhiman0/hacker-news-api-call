import "./App.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './components/newsCard';

let getItems = async () => {
  let items = [];
  const URI = `https://hacker-news.firebaseio.com/v0/topstories.json`;
  try {
    let myData = await (await axios.get(URI)).data;
    let count = 1;
    for (let i of myData) {
      if (!(count <= 20)) {
        break;
      }
      let value = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${i}.json`
      );
      items.push(value.data);
      count++;
    }
  } catch (e) {
    console.log(e);
  }

  return items;
};

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((val) => {setItems(val)})
  }, []);

  console.log(items);

  return (
      items.map((val) => (
        <NewsCard title={val.title} score={val.score} url={val.url} id={val.id}/>
      ))
  );
}

export default App;
