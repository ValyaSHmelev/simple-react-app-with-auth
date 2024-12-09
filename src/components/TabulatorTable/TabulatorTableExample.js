import React from 'react';
import TabulatorTable from './TabulatorTable';

const TabulatorTableExample = () => {
  const data = [
    { id: 1, name: "John Doe", age: 30, city: "New York" },
    { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob Johnson", age: 35, city: "Chicago" }
  ];

  const columns = [
    { title: "ID", field: "id", sorter: "number" },
    { title: "Name", field: "name", sorter: "string" },
    { title: "Age", field: "age", sorter: "number" },
    { title: "City", field: "city", sorter: "string" },
  ];

  return (
    <div>
      <h2>Tabulator Example</h2>
      <TabulatorTable 
        data={data}
        columns={columns}
        options={{
          height: "100%",
          pagination: true,
          paginationSize: 30,
        }}
      />
    </div>
  );
};

export default TabulatorTableExample;
