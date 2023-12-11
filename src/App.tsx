import { useState } from 'react';
import './App.scss';
import Form from './Components/Form/form';
import Joke from './Components/Joke/joke';

function App() {
  const [userName, setUserName] = useState<string>();
  const [jokesData, setJokesData] = useState<JokeData[]>([]);

  interface FormData {
    name: string;
    type: string;
    count: number;
  }

  interface JokeData {
    id: number;
    setup: string;
    punchline: string;
  }

  const fetchData = async (type: string, count: number) => {
    console.log(type, count)
    const resp: Response = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
    console.log(resp);
    const data: JokeData[] = await resp.json();
    console.log(data);
    setJokesData(data.slice(0, count));
  };

  const handleSendData = (data: FormData) => {
    setUserName(data.name);
    fetchData(data.type, data.count);
  };

  return (
    <div className="app">
      {jokesData.length > 0 ? (
          <div className="app__container">
            <h2>{userName}</h2>
            <h3>There are jokes for you!</h3>
            {jokesData.map((item: JokeData) => <Joke key={item.id} setup={item.setup} punchline={item.punchline} />)}
          </div>
        ) : (
          <div className="app__container">
            <h2>Welcome to jokes generator</h2>
            <h3>Please fill the form:</h3>
            <Form onSubmitData={handleSendData} />
          </div>
        )
      }
    </div>
  );
}

export default App;
