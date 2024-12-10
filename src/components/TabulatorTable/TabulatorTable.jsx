import React, { useEffect, useRef } from 'react';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

const TabulatorTable = ({ data, columns, options = {} }) => {
  const tableRef = useRef(null);
  const tabulator = useRef(null);

  useEffect(() => {
    // Initialize Tabulator
    if (tableRef.current) {
      tabulator.current = new Tabulator(tableRef.current, {
        data: data,
        columns: columns,
        layout: 'fitColumns',
        responsiveLayout: 'hide',
        layoutMode: 'fitData',
        renderVertical: 'basic',
        ...options,
      });

      // Добавляем обработчик изменения размера
      const resizeObserver = new ResizeObserver(() => {
        if (tabulator.current) {
          setTimeout(() => {
            tabulator.current.redraw(true);
          });
        }
      });

      resizeObserver.observe(tableRef.current);

      // Cleanup on unmount
      return () => {
        resizeObserver.disconnect();
        if (tabulator.current) {
          tabulator.current.destroy();
        }
      };
    }
  }, [data, columns, options]);

  return <div ref={tableRef} />;
};

export default TabulatorTable;
