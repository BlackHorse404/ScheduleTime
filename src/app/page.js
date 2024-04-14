"use client"
import Image from "next/image";
import Script from "next/script";
import { useEffect } from 'react'
import fetchSheet from "@/scripts/ConnectSheet"


export default function Home() {

  useEffect(()=>{
    fetchSheet()
  })
  

  return (
    <>
      <h1 className="text-center py-6 text-3xl font-sans uppercase font-bold">
        Thời Khoá Biểu

        dfsdfdsfdsfdsfdsfdsfds
      </h1>
      <main className="pe-6 py-2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs uppercase text-white bg-blue-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Thứ hai
                </th>
                <th scope="col" className="px-6 py-3">
                  Thứ ba
                </th>
                <th scope="col" className="px-6 py-3">
                  Thứ tư
                </th>
                <th scope="col" className="px-6 py-3">
                  Thứ năm
                </th>
                <th scope="col" className="px-6 py-3">
                  Thứ sáu
                </th>
                <th scope="col" className="px-6 py-3">
                  Thứ bảy
                </th>
                <th scope="col" className="px-6 py-3">
                  Chủ nhật
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
              </tr>

              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
              </tr>

              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
                <td className="px-6 py-4">Môn 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
