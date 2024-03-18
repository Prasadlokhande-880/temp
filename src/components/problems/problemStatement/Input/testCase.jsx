import React from 'react';

const TestCase = (props) => {
  return (
    <div>
      {props.testCases.map((testCase, index) => (
        <div key={index}>
          <section className="mt-8">
            <h1 className="text-2xl font-bold">{`Sample ${index + 1}:`}</h1>
          </section>
          <section>
            <div className="relative overflow-x-auto m-5">
              <table className="text-sm text-left rtl:text-right w-1/2 bg-gray-800 rounded-md overflow-hidden">
                <thead className="text-[16px] uppercase bg-gray-700 text-gray-100">
                  <tr>
                    <th className="px-6 py-3">Input</th>
                    <th className="px-6 py-3">Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-gray-800 odd:bg-gray-900 border-b border-gray-700">
                    <td className="px-6 py-4 border-r border-gray-700">
                      {testCase.input}
                    </td>
                    <td className="px-6 py-4">{testCase.output}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default TestCase;
