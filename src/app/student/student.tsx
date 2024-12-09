import LayuotHeader from "@/src/app/header/layout-header";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import React from 'react'

export default function LayoutStudent() {
    return (
        <div>
            <LayuotHeader></LayuotHeader>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h4 className="text-2xl font-bold tracking-tight text-gray-900">
                        Học Viên
                    </h4>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Table>
                        <TableCaption>A list of recent invoices for students.</TableCaption>
                        <TableHeader>
                            {/* <TableRow >
                                <TableHead className="w-[100px]"></TableHead>
                                <TableHead className="w-[150px]"></TableHead>
                                <TableHead className="w-[150px]"></TableHead>
                                <TableHead className="w-[150px]"></TableHead>
                                <TableHead className="w-[150px]"></TableHead>
                                <TableHead className="w-[200px] text-end">
                                    <button
                                        type="submit"
                                        className="flex mb-3 w-full justify-center rounded-md bg-slate-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Thêm Sinh Viên
                                    </button>
                                </TableHead>
                            </TableRow> */}
                        </TableHeader>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">Mã Người Dùng</TableHead>
                                <TableHead className="w-[150px]">Trạng Thái</TableHead>
                                <TableHead className="w-[150px]">Cách Thanh Toán</TableHead>
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
                            <TableRow>
                                <TableCell className="font-medium">STU002</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Paypal</TableCell>
                                <TableCell>React JS Nâng Cao</TableCell>
                                <TableCell>link-to-class2.com</TableCell>
                                <TableCell className="text-right">200.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU003</TableCell>
                                <TableCell>Chưa Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>Vue.js Cho Người Mới</TableCell>
                                <TableCell>link-to-class3.com</TableCell>
                                <TableCell className="text-right">180.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU004</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>Node.js Cơ Bản</TableCell>
                                <TableCell>link-to-class4.com</TableCell>
                                <TableCell className="text-right">120.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU005</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>Python Cho Người Mới</TableCell>
                                <TableCell>link-to-class5.com</TableCell>
                                <TableCell className="text-right">160.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU006</TableCell>
                                <TableCell>Chưa Trả</TableCell>
                                <TableCell>Paypal</TableCell>
                                <TableCell>Fullstack Web Development</TableCell>
                                <TableCell>link-to-class6.com</TableCell>
                                <TableCell className="text-right">300.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU007</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Paypal</TableCell>
                                <TableCell>Web Design Cơ Bản</TableCell>
                                <TableCell>link-to-class7.com</TableCell>
                                <TableCell className="text-right">110.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU008</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>Mobile App Development</TableCell>
                                <TableCell>link-to-class8.com</TableCell>
                                <TableCell className="text-right">250.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU009</TableCell>
                                <TableCell>Chưa Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>AI & Machine Learning</TableCell>
                                <TableCell>link-to-class9.com</TableCell>
                                <TableCell className="text-right">350.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU010</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Paypal</TableCell>
                                <TableCell>Data Science</TableCell>
                                <TableCell>link-to-class10.com</TableCell>
                                <TableCell className="text-right">220.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU011</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>Digital Marketing</TableCell>
                                <TableCell>link-to-class11.com</TableCell>
                                <TableCell className="text-right">180.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU012</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Paypal</TableCell>
                                <TableCell>Cybersecurity</TableCell>
                                <TableCell>link-to-class12.com</TableCell>
                                <TableCell className="text-right">240.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU013</TableCell>
                                <TableCell>Chưa Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>Game Development</TableCell>
                                <TableCell>link-to-class13.com</TableCell>
                                <TableCell className="text-right">280.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU014</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>3D Animation</TableCell>
                                <TableCell>link-to-class14.com</TableCell>
                                <TableCell className="text-right">190.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU015</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Paypal</TableCell>
                                <TableCell>Photography</TableCell>
                                <TableCell>link-to-class15.com</TableCell>
                                <TableCell className="text-right">170.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU016</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>Video Editing</TableCell>
                                <TableCell>link-to-class16.com</TableCell>
                                <TableCell className="text-right">160.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU017</TableCell>
                                <TableCell>Chưa Trả</TableCell>
                                <TableCell>Paypal</TableCell>
                                <TableCell>UI/UX Design</TableCell>
                                <TableCell>link-to-class17.com</TableCell>
                                <TableCell className="text-right">200.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU018</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Chuyển Khoản</TableCell>
                                <TableCell>Blockchain Basics</TableCell>
                                <TableCell>link-to-class18.com</TableCell>
                                <TableCell className="text-right">230.000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">STU019</TableCell>
                                <TableCell>Đã Trả</TableCell>
                                <TableCell>Paypal</TableCell>
                                <TableCell>Financial Management</TableCell>
                                <TableCell>link-to-class19.com</TableCell>
                                <TableCell className="text-right">210.000</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>
            </main>
        </div>
    );
}

