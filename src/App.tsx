import React, {FC} from 'react';
import { Container } from './components/ph/styles/Container.styled';
import PlaceholderApp from './components/PlaceholderApp';
// import {Test} from './components/Test'

const App: FC = () =>  {
  return (
    <div className="App">
      <Container>
        <PlaceholderApp/>
      </Container>
    </div>
  );
}

export default App;
