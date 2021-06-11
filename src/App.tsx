import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import convert from 'color-convert';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Child} />
    </Switch>
  );
}

function Home() {
  return (
    <div className="main">
      <h1>Color routing</h1>
      <div>
        Insert color codes, each followed by a seperator: <strong>"-"</strong> in the url to see them appear
        on the screen
      </div>
      <div>
        In order to use hex codes in the URL, use the <strong>UTF-8 equvelent "%23"</strong> in place of the
        hash symbol.
      </div>
      <div>
        A similar approach should be applied when using hsl or hsla. In place of the percent signs, use
        <strong> "%25"</strong>
      </div>
      <br />
      <div>
        Note, The first hash in the URL <strong>"#"</strong> must persist
      </div>
    </div>
  );
}

function Child() {
  const params = useParams() as any;
  const queryId: string = params.id;
  const id = queryId.split('-');

  const decodedURIs: string[] = [];
  for (let j = 0; j < id.length; j++) {
    decodedURIs.push(decodeURIComponent(id[j]));
  }
  const items = [];

  for (let i = 0; i < id.length; i++) {
    items.push(
      <div key={i} style={{ backgroundColor: decodedURIs[i] }}>
        <div style={{ display: 'flex', height: 50 + 'vh', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className="text">{decodedURIs[i]}</h1>
        </div>
      </div>
    );
  }

  return <div>{items}</div>;
}

export default App;
