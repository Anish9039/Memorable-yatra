// pages/dashboard/index.tsx
import { PlusIcon } from '@heroicons/react/24/outline';
import DashboardLayout from '../page';
import { ChartBarIcon, PencilIcon, CogIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';



const posts = [
  {
    id: 1,
    title: 'Exploring the Swiss Alps: A Winter Wonderland',
    excerpt: 'Discover the breathtaking beauty of the Swiss Alps through our comprehensive travel guide...',
    author: 'Sarah Johnson',
    date: '2023-12-15',
    status: 'Published'
  },
  {
    id: 2,
    title: 'Tropical Paradise: Bali Travel Tips',
    excerpt: 'Everything you need to know before visiting Bali - from cultural etiquette to hidden gems...',
    author: 'Mike Chen',
    date: '2023-11-28',
    status: 'Draft'
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
        
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        <Link href='/dashboard/post/Newpost'>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          New Post
        </button>
        </Link>
       
      </div>

      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span className={`px-2 py-1 rounded-full ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {post.status}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <PencilIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}