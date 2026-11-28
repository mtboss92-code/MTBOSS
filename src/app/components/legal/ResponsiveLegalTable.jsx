import { RichText } from "./RichText";

export default function ResponsiveLegalTable({ caption, columns, rows, currentPath }) {
  return (
    <div className="my-6 max-w-full overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-700">
      <table className="w-full border-collapse text-left text-sm" style={{ minWidth: "40rem" }}>
        {caption ? <caption className="border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-left text-sm font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">{caption}</caption> : null}
        <thead className="bg-zinc-50 dark:bg-zinc-900">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="border-b border-zinc-200 px-4 py-3 align-bottom font-semibold text-zinc-950 dark:border-zinc-700 dark:text-white">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")} className="odd:bg-white even:bg-zinc-50/70 dark:odd:bg-zinc-950 dark:even:bg-zinc-900/60">
              {row.map((cell, index) => (
                <td key={`${columns[index]}-${cell}`} className="border-b border-zinc-200 px-4 py-3 align-top leading-6 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                  <RichText text={cell} currentPath={currentPath} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
