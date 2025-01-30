'use client'
import { useEffect, useState } from "react";
import { neon } from "@neondatabase/serverless";

export default function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sql = neon("postgres://neondb_owner:npg_TbOZEoW9wiC7@ep-shrill-base-a4jiquhl-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require");
      const data = await sql("SELECT nome FROM nome");
      setResults(data);
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-2 border-black">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase">Aluno</th>
            <th className="px-4 py-2 bg-gray-200 text-left text-sm font-medium text-gray-700 uppercase">Está no ônibus?</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-4 py-2 text-sm text-gray-900">{result.nome}</td>
              <td className="px-4 py-2 text-sm text-gray-900"><input type="checkbox" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
