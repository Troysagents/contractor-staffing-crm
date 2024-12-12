import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Contractors', href: '/contractors', icon: '👥' },
    { name: 'Clients', href: '/clients', icon: '🏢' },
    { name: 'Jobs', href: '/jobs', icon: '📋' },
    { name: 'Reports', href: '/reports', icon: '📈' },
  ];

  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed left-0 top-0 pt-16">
      <nav className="mt-5">
        <div className="px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
              >
                <span className="mr-4">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}