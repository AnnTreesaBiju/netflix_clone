import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';
function App() {
  // 
  return (
    <div>
      {/* component must place by a self closing tag */}
      {/* data transfering from parent to chlid */}
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>

  );
}

export default App;