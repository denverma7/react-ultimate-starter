export default function DemoCode({
  code,
}) {
  return (
    <pre className="mt-4 overflow-auto rounded-xl bg-slate-900 p-6 text-sm text-green-300">
      <code>{code}</code>
    </pre>
  );
}