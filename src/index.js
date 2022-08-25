import fetch from 'node-fetch';

const run = async () => {
  const response = await fetch('https://api.github.com/users/github');
  const data = await response.json();

  console.log(data);
};

run();
