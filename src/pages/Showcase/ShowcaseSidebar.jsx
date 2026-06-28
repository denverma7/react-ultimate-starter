import { showcaseNavigation } from "./data/navigation";

export default function ShowcaseSidebar() {
  return (
    <aside className="sticky top-0 h-screen w-72 overflow-y-auto border-r bg-white p-6">
      <h1 className="mb-8 text-2xl font-bold">
        React Framework
      </h1>

      {showcaseNavigation.map((section) => (
        <div key={section.title} className="mb-8">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {section.title}
          </h2>

          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-2 transition hover:bg-slate-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}