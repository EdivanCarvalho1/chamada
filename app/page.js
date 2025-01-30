import { neon } from "@neondatabase/serverless";

export default async function Home() {
  const sql = neon(process.env.DATABASE_URL);
  console.log(process.env.DATABASE_URL)
  const results = await sql('SELECT nome from nome')
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
          {results.map((result) => (
            <tr className="bg-white border-b">
              <td className="px-4 py-2 text-sm text-gray-900">{result.nome}</td>
              <td className="px-4 py-2 text-sm text-gray-900"><input type="checkbox"></input></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
