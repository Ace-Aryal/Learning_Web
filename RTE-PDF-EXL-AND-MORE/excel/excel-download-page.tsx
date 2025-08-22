"use client";
import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
export type ExcelAttendanceType = {
  checkIn: string;
  checkOut: string;
  username: string;
  createdAt: string;
};
// Export JSON → Excel (.xlsx)
const exportToExcel = (data: ExcelAttendanceType[]) => {
  const worksheet = XLSX.utils.json_to_sheet(data); // JSON → Sheet
  const workbook = XLSX.utils.book_new(); // Create Workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, "users.xlsx"); // Trigger download
};

// Export JSON → CSV
const exportToCSV = (data: ExcelAttendanceType[]) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

  const csvBuffer = XLSX.write(workbook, { bookType: "csv", type: "array" });
  const blob = new Blob([csvBuffer], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, "users.csv");
};

export default function ExportButtons({
  data,
}: {
  data: ExcelAttendanceType[];
}) {
  return (
    <div className="space-x-2">
      <button
        onClick={() => exportToExcel(data)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download Excel
      </button>
      <button
        onClick={() => exportToCSV(data)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Download CSV
      </button>
    </div>
  );
}
