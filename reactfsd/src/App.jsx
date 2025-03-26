import ServiceCard from "./components/ServiceCard";
import "./App.css";

function App() {
 return(
  <div className="container">
    <ServiceCard title="fullstack-web-development" description="it contains frontend and backend"/>
    <ServiceCard title="react" description="it is part of frontend course and it is a javascript library"/>
    <ServiceCard title="MERN stack" description="stands for MongoDB, express.js, react.js and node.js"/>
  </div>
 ) 
};
export default App;