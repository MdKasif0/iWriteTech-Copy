import React from "react";

interface Column {
  header: string;
  accessor: string;
}

interface ComparisonTableProps {
  columns: Column[];
  data: Record<string, string | React.ReactNode>[];
}

export function ComparisonTable({ columns, data }: ComparisonTableProps) {
  return (
    <div className="w-full overflow-x-auto my-8 rounded-xl border border-border bg-card">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            {columns.map((col, idx) => (
              <th 
                key={col.accessor} 
                className={`p-4 font-semibold text-foreground whitespace-nowrap ${
                  idx === 0 ? "sticky left-0 bg-muted/95 backdrop-blur-sm z-10 border-r border-border" : ""
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
            >
              {columns.map((col, colIndex) => (
                <td 
                  key={col.accessor} 
                  className={`p-4 ${
                    colIndex === 0 
                      ? "sticky left-0 bg-card/95 backdrop-blur-sm z-10 border-r border-border font-medium" 
                      : "text-muted-foreground"
                  }`}
                >
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
