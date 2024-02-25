import { Container, Form, Table } from "react-bootstrap";
import TableCell from "./WeatherCard";
import { useEffect, useState } from "react";
import { getWeatherData } from "../api/actions";
import WeatherCard from "./WeatherCard";

const WeatherData = () => {
  const [data, setData] = useState<WeatherData>();
  const exampleData: Array<WeatherData> = [
    {
      city: "London",
      temperature: 60,
      humidity: 89,
      wind: 10,
      rain: 2,
    },
    {
      city: "New York",
      temperature: 25,
      humidity: 70,
      wind: 15,
      rain: 0,
    },
    {
      city: "Tokyo",
      temperature: 30,
      humidity: 80,
      wind: 20,
      rain: 0,
    },
  ];

  useEffect(() => {
    console.log("Fetching Weather Data...");
    getWeatherData("London")
      .then((res) => {
        if (res) {
          console.log(res);
          setData(res);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      console.log("Cleaning up...");
    };
  }, []);
  return (
    <>
      <Container className="flex flex-col p-5 mb-4 bg-slate-700 rounded-3 justify-center">
        <h2 className="text-xl text-white">Welcome to Weather Application</h2>

        <div className="flex flex-col p-5 mb-4 bg-light rounded-3 items-center justify-center">
          <h1 className="header">Weather Data</h1>
          <div className="mb-4">
            <Form.Label htmlFor="cityname">City</Form.Label>
            <Form.Control type="text" id="cityname" />
            <Form.Text id="passwordHelpBlock" muted>
              Enter one of the cities supported by the API.
            </Form.Text>
          </div>
          <WeatherCard data={exampleData[0]} />
        </div>
      </Container>
    </>
  );
};

export default WeatherData;
