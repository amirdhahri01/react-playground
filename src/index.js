import ReactDOM from 'react-dom/client';
import { createElement } from 'react';
import "./index.css"
const MyAwesomeNavBar = () => {
  return (
     <div className="nav">
      <ul className='nav-list'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Info</li>
        <li>Testimonials</li>
      </ul>
     </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const reactElement  = <h1>Hello There</h1>
console.log(MyAwesomeNavBar());

root.render(<>
    <MyAwesomeNavBar/>
</>);

