import React from "react";
import Statement from "./Input/statement";
import Constran from "./Input/Constran";
import TestCase from "./Input/testCase";


const ProblemStatement = () => {

    const testCases = [
        { input: '12 1321 131', output: '12231 131' },
        { input: '5 987 23', output: 'NO' },
        { input: '18 1500 201', output: 'YES' },
      ];


  return (
    <div>

      <Statement titel={"Problem"} description={"The minimum wage in Chefland is 1111 dollars per hour. Given that Chef earns XX dollars per hour, find whether his income is strictly above the minimum wage."}/>

      <Constran titel={"Input Format"} data={["The first and only line contains an integer XX, denoting the income of Chef per hour",]}/>


      <Constran titel={"Output Format"} data={[" Output on a new line, YES, if Chef's income is strictly above the minimum wage. Otherwise, output NO. You may print each character of the string in uppercase or lowercase (for example, the strings YES, yEs, yes, and yeS will all be treated as identical).",]}/>

      <Constran titel={"Constraints"} data={["1≤X≤20",]}/>

      <TestCase testCases={testCases} />

      <Statement titel={"Explanation:"} description={"Chef's income is 2020 dollars per hour, which is strictly higher than the minimum wage."}/>

    </div>
  );
};

export default ProblemStatement;
