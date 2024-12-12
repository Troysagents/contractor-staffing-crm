import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />
      <main className="pl-64 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}