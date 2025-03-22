// components/DashboardLayout.tsx
'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChartBarIcon, PencilIcon, CogIcon, UserIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const currentPath = usePathname();

  const navigation = [
    { name: 'post', href: '/dashboard/post', icon: PencilIcon},
    { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
    { name: 'Settings', href: '/dashboard/settings', icon: CogIcon},
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-gray-900 p-4">
          <div className="flex items-center space-x-2 px-2">
            <span className="text-white text-2xl font-bold">TravelBlog</span>
          </div>
          
          <nav className="mt-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2.5 text-sm rounded-md
                  ${item.href 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}