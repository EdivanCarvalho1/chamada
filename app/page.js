import Image from "next/image";

export default function Home() {
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
      <tr className="bg-white border-b">
        <td className="px-4 py-2 text-sm text-gray-900">João Silva</td>
        <td className="px-4 py-2 text-sm text-gray-900">Sim</td>
      </tr>
      <tr className="bg-gray-50 border-b">
        <td className="px-4 py-2 text-sm text-gray-900">Maria Oliveira</td>
        <td className="px-4 py-2 text-sm text-gray-900">Não</td>
      </tr>
    </tbody>
  </table>
</div>
  );
}
