import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | damcuoi.site Blog',
    default: 'Blog - damcuoi.site | Chia sẻ kinh nghiệm tổ chức đám cưới',
  },
  description: 'Khám phá những bài viết hữu ích về tổ chức đám cưới, xu hướng thiết kế website cưới, và những mẹo hay cho ngày trọng đại của bạn.',
  keywords: ['blog đám cưới', 'website đám cưới', 'tổ chức đám cưới', 'thiết kế website cưới', 'xu hướng đám cưới'],
  authors: [{ name: 'damcuoi.site Team' }],
  openGraph: {
    title: 'Blog - damcuoi.site',
    description: 'Chia sẻ kinh nghiệm và xu hướng tổ chức đám cưới hiện đại',
    type: 'website',
    locale: 'vi_VN',
  },
};

// Danh sách blogs gợi ý
const suggestedBlogs = [
  {
    title: "Vì sao cần website đám cưới?",
    excerpt: "Khám phá tầm quan trọng của website đám cưới trong thời đại số",
    href: "/blogs/vi-sao-can-website",
    date: "10 tháng 6, 2024"
  },
  {
    title: "10 mẹo chọn template đám cưới hoàn hảo",
    excerpt: "Hướng dẫn chi tiết cách chọn template phù hợp với phong cách đám cưới",
    href: "/blogs/chon-template-dam-cuoi",
    date: "8 tháng 6, 2024"
  },
  {
    title: "Xu hướng thiết kế website đám cưới 2024",
    excerpt: "Cập nhật những xu hướng mới nhất trong thiết kế website đám cưới",
    href: "/blogs/xu-huong-thiet-ke-2024",
    date: "5 tháng 6, 2024"
  },
  {
    title: "Cách tùy chỉnh website đám cưới dễ dàng",
    excerpt: "Hướng dẫn từng bước tùy chỉnh website đám cưới theo ý muốn",
    href: "/blogs/tuy-chinh-website",
    date: "3 tháng 6, 2024"
  }
];

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">💕</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  damcuoi.site
                </h1>
                <p className="text-xs text-gray-500">Blog</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                href="/blogs" 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Tất cả bài viết
              </Link>
              <Link 
                href="/previews/type1" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all"
              >
                Xem Templates
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-pink-600 hover:bg-pink-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Suggested Blogs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bài viết gợi ý</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {suggestedBlogs.map((blog, index) => (
              <Link 
                key={index}
                href={blog.href}
                className="group block p-4 rounded-xl border border-pink-100 hover:border-pink-300 hover:bg-pink-50/50 transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {blog.excerpt}
                </p>
                <p className="text-xs text-gray-500">
                  {blog.date}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/previews/type1"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              <span>Khám phá Templates</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-pink-200/50 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">💕</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  damcuoi.site
                </h3>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Nền tảng tạo website đám cưới hàng đầu Việt Nam. Giúp các cặp đôi tạo ra những trang web đám cưới đẹp, 
                chuyên nghiệp và đầy ý nghĩa cho ngày trọng đại.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Templates</h4>
              <div className="space-y-3">
                <Link href="/previews/type1" className="block text-gray-600 hover:text-pink-600 transition-colors">Type 1 - Classic</Link>
                <Link href="/previews/type2" className="block text-gray-600 hover:text-pink-600 transition-colors">Type 2 - Modern</Link>
                <Link href="/previews/type3" className="block text-gray-600 hover:text-pink-600 transition-colors">Type 3 - Elegant</Link>
                <Link href="/previews/type4" className="block text-gray-600 hover:text-pink-600 transition-colors">Type 4 - Romantic</Link>
                <Link href="/previews/type5" className="block text-gray-600 hover:text-pink-600 transition-colors">Type 5 - Luxury</Link>
                <Link href="/previews/type6" className="block text-gray-600 hover:text-pink-600 transition-colors">Type 6 - Minimal</Link>
                <Link href="/previews/type7" className="block text-gray-600 hover:text-pink-600 transition-colors">Type 7 - Ocean</Link>
                <Link href="/previews/type8" className="block text-gray-600 hover:text-pink-600 transition-colors">Type 8 - Mobile</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-pink-200/50 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 damcuoi.site. All rights reserved. Made with 💕 for your special day.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
