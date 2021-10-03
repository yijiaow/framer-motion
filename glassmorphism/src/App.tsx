import { useState } from 'react';
import Card from './components/Card';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <main>
      <section>
        <div className="container">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};

export default App;
