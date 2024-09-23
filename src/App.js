import './css/app.css';
import Menu from './components/menu';
import ButtonsToCopy from './components/buttonsToCopy';
import { DataContext } from './context/dataContext';
import { useContext } from 'react';
import Footer from './components/footer';

function App() {
  const data = useContext(DataContext);
  console.log(data);

  return (
      <div className="app">
        <Menu />
        { Object.keys(data).map((index) => (      
          <ButtonsToCopy showAll={false} category={index} categoryData={data[index]} />
        ))}
        <Footer />
      </div>
  );
}

export default App;
