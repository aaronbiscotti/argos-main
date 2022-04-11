import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="w-full md:w-60"></aside>
        <Sidebar />
        <main className="flex-1 p-10 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
