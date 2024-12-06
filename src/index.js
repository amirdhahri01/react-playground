import ReactDOM from 'react-dom/client';
import ReacLogo from "./imgs/react-logo.png"
// import { createElemet, Fragment } from 'react';
import "./index.css"
// const MyAwesomeNavBar = () => {
//   return (
//      <div className="nav">
//       <ul className='nav-list'>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//         <li>Info</li>
//         <li>Testimonials</li>
//       </ul>
//      </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

// const reactElement  = <h1>Hello There</h1>
// console.log(MyAwesomeNavBar());

// const h1 = document.createElement("h1");
// h1.textContent = "This is imperative coding"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)

root.render(<div className='app'>
    {/* <MyAwesomeNavBar/> 
     <img src={ReacLogo} alt="" />
    <h1>Fun Facts About React!</h1>
    <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordn Walke</li>
        <li>Has well over 200k stars on github</li>
        <li>Is maintained by Meta</li>
        <li>Power thousands of entreprise apps, includin mobile apps</li>
    </ul> */}
    <Page />

</div>);

function Header() {
    return (
        <header>
            <img src={ReacLogo} alt="" />
            <nav>
                <ul className='nav-list'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
function MainContent() {
    return (
        <main>
            <h1>Fun Facts About React!</h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was originally created by Jordn Walke</li>
                <li>Has well over 200k stars on github</li>
                <li>Is maintained by Meta</li>
                <li>Power thousands of entreprise apps, includin mobile apps</li>
            </ul>
        </main>
    )
}
function Footer() {
    return (
        <footer>
            All Rights Reserved 2024&copy;
        </footer>
    )
}
function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}
