import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = Object.values(data).every((value) => value > 0);

  function handleChange(inputIdentifier, value) {
    setData((prevData) => ({
      ...prevData,
      [inputIdentifier]: +value,
    }));
  }

  return (
    <>
      <Header />
      <UserInput data={data} handleChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter valid values</p>}
      {inputIsValid && <ResultTable data={data} />}
    </>
  );
}
export default App;
