import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import NewsContainer from './Components/NewsContainer/NewsContainer';
import Footer from './Components/Footer/Footer';

function App() {
  const [category, setCategory] = useState("general") 
  const [newsArray, setNewsArray] = useState([]) //for all the news
  const [newsResults, setNewsResults] = useState(); //to store total no. results shown by our api

  const newsApi= async () => {
    try {
      const news= await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`);
      
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);

    } catch (error) {
      console.log(error);
    }
  };

console.log(newsArray);

  useEffect(() => {
    newsApi(); // eslint-disable-next-line
  }, [newsResults, category]);


  return (
    <div className="App">
      <NavigationBar setCategory={setCategory}/>
      <NewsContainer newsArray={newsArray} newsResults={newsResults} />
      <Footer />
      </div>
  );
}

export default App;
