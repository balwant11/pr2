import Navigation from './components/navigation/Navigation';
import './App.css';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div>
      <Navigation />
      <main className='main-container'>
      <Header />
      <ContactForm />
      </main>
    </div>
  );
}

export default App;
