import {  Route , Routes as Router} from "react-router";

const Home = () => <h1>Home Page</h1>;
const AboutUs = () => <h1>About Us Page</h1>;
    

const App = () => {
    return (
       <div className="app">
        <Router>
            <Route path="/" element={<><Home/></>} />
            <Route path="/about-us" element={<><AboutUs/></>} />   
        </Router>
       </div>
    )
}

export default App;