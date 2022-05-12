import { useState } from 'react';

type IValue = {
  [key: string]: string;
};

type IData = {
  type: string;
  value: IValue;
};

function useRandomJokes() {
  const [jokes, setJokes] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const fetchJokes = async (firstName: string, lastName: string) => {
    setLoading(true);
    await fetch(
      `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
    )
      .then((res) => res.json())
      .then((data: IData) => {
        // console.log(data);

        setLoading(false);
        setJokes(data.value.joke);
      });
  };

  return [loading, jokes, fetchJokes] as const;
}

export default useRandomJokes;
