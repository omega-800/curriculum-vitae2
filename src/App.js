import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Career from './pages/Career';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import Art from './pages/Art';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <Switch>
          <Route exact path="/">
            <Header
              title="Guten Tag! Ich bin Georgiy Shevoroshkin"
              text="ein motivierter Schüler und leidenschaftlicher Programmierer aus der IMS Hottingen. Auf dieser Webseite sind mein Lebenslauf, meine Attestate und Projekte zu sehen. Sie finden auch viele weitere Informationen über meine Freizeitbeschäftigungen, Interessen und Fakten über mich, die auf den Bewerbungsunterlagen nicht zu sehen sind"
              />
            <Home />
          </Route>
          <Route path="/career">
            <Header
              title="Karriere"
              text="Währenddessen ich diese Aufträge erledigte oder bei den Firmen arbeitete, sammelte ich in verschiedensten Bereichen Wissen"
              />
            <Career />
          </Route>
          <Route path="/certificates">
            <Header
              title="Zertifikate und Zeugnisse"
              text="Hier sind meine Zeugnisse und Zertifikate ersichtlich"
              />
            <Certificates />
          </Route>
          <Route path="/projects">
            <Header
              title="Projekte"
              text="Dies sind einige der Projekte, welche ich über die letzten Jahre programmiert habe"
              />
            <Projects />
          </Route>
          <Route path="/art">
            <Header
              title="Kunst"
              text="Kunst oder besser gesagt Kreativität ist ein riesiger Bestandteil meines Lebens. Ich verbringe viel Zeit, mithilfe von verschiedenen Medien meine Ideen zu manifestieren und der Inspiration und Kreativität freien Lauf zu lassen"
              />
              <Art />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
