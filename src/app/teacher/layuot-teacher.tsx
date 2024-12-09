import LayuotHeader from "@/src/app/header/layout-header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export default function LayuotTeacher() {
  return (
    <div>
      <LayuotHeader></LayuotHeader>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h4 className="text-2xl font-bold tracking-tight text-gray-900">
            Giáo Viên
          </h4>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Table>
          <TableCaption>A list of recent invoices for teacher</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Mã Giảng Viên</TableHead>
                <TableHead className="w-[150px]">Trạng Thái</TableHead>
                <TableHead className="w-[150px]">Khóa Học</TableHead>
                <TableHead className="w-[150px]">Link Lớp Học</TableHead>
                <TableHead className="text-right">Tổng</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">STU001</TableCell>
                <TableCell>Đã Trả</TableCell>
                <TableCell>Chuyển Khoản</TableCell>
                <TableCell>JavaScript Cơ Bản</TableCell>
                <TableCell>link-to-class1.com</TableCell>
                <TableCell className="text-right">150.000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
