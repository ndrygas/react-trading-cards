'use strict';

function Homepage() {
  return (
  <div>
  <h2>Feel free to browse our collection!</h2>
  <a href="/cards">Cards Page</a><br />
  <img src="/static/img/balloonicorn.jpg"></img>
  </div>
  ); 
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
