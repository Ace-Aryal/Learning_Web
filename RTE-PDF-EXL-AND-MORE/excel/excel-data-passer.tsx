import React from "react";
import ExportButtons, { ExcelAttendanceType } from "./download-component";
import { get } from "http";
import { prisma } from "@/lib/prisma";

export default async function TestExcelPage() {
  const attendances = await prisma.attendance.findMany({
    select: {
      checkIn: true,
      checkOut: true,
      user: {
        select: {
          name: true,
        },
      },
      createdAt: true,
    },
  });
  const formattedAttendances = attendances.map((attendance) => ({
    checkIn: attendance.checkIn?.toLocaleTimeString() ?? "N/A",
    checkOut: attendance.checkOut?.toLocaleTimeString() ?? "N/A",
    username: attendance.user.name,
    createdAt: attendance.createdAt.toDateString(),
  }));
  return <ExportButtons data={formattedAttendances} />;
}
