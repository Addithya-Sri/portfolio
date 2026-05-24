export default function StatBlock({ label, value }) {
  return (
    <div className="panel p-5">
      <p className="mono-label">{label}</p>
      <p className="mt-2 font-mono text-xl font-semibold text-slate-100 sm:text-2xl">
        {value}
      </p>
    </div>
  );
}
