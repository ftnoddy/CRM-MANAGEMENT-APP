// Reports.js
import React from 'react';

export default function Reports() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Report Name</h3>
          <p className="text-sm mb-2">Details about the report...</p>
          <div className="flex justify-end">
            <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md">View Report</button>
          </div>
        </div>
      </div>
    </section>
  );
}
