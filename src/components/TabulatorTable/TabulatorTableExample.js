import React, { useState } from 'react';
import TabulatorTable from './TabulatorTable';
import { Modal } from 'antd';

const TabulatorTableExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleCellClick = (e, cell) => {
    setSelectedRow(cell.getData());
    setIsModalOpen(true);
  };

  const data = [
    { id: 1, name: "John Doe", age: 30, city: "New York" },
    { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob Johnson", age: 35, city: "Chicago" }
  ];

  const columns = [
    { title: "ID", field: "id", sorter: "number" , cellClick: handleCellClick },
    { title: "Name", field: "name", sorter: "string" },
    { title: "Age", field: "age", sorter: "number" },
    { title: "City", field: "city", sorter: "string" }
  ];

  

  return (
    <div style={{  }}>
      <div style={{ width: '100%' }}>
        <TabulatorTable 
          data={data}
          columns={columns}
          options={{
            height: '100%',
            layout: 'fitColumns',
            pagination: true,
            paginationSize: 10
          }}
        />
      </div>
      <Modal
        title="Row Details"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        {selectedRow && (
          <div>
            <p><strong>ID:</strong> {selectedRow.id}</p>
            <p><strong>Name:</strong> {selectedRow.name}</p>
            <p><strong>Age:</strong> {selectedRow.age}</p>
            <p><strong>City:</strong> {selectedRow.city}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TabulatorTableExample;
