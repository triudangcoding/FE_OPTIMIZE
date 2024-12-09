import LayuotHeader from "@/src/app/header/layout-header";
import React from "react";

export default function HeaderPage() {
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
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
      </main>
    </div>
  );
}
