import "./App.css";
import { Container } from "react-bootstrap";
import WeatherData from "./components/WeatherData";

const App = () => {
  return (
    <Container className="flex p-3 w-full h-full align-centre items-center justify-center align-middle">
      <Container className="flex flex-col p-5 mb-4 bg-light rounded-3 justify-center w-1/4 h-1/4">
        <WeatherData />
      </Container>
    </Container>
  );
};

export default App;
