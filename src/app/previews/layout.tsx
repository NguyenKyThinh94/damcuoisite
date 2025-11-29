import Link from 'next/link';

export default function PreviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-pink-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">💕</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                damcuoi.site
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                href="/blogs" 
                className="text-gray-600 hover:text-pink-600 transition-colors font-medium"
              >
                Blog
              </Link>
              <Link 
                href="/previews" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all"
              >
                Ví Dụ
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-pink-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo & Copyright */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">💕</span>
                </div>
                <span className="font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  damcuoi.site
                </span>
              </Link>
              <span className="text-gray-500 text-sm">
                © 2024 - Website đám cưới
              </span>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-sm">
              {/* Phone */}
              <a 
                href="https://zalo.me/0769779800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0769779800</span>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61581529663521" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>

              {/* Support */}
              <div className="flex items-center space-x-2 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center space-x-6 text-sm text-gray-500">
              <Link href="/blogs" className="hover:text-pink-600 transition-colors">
                Blog hướng dẫn
              </Link>
              <Link href="/previews" className="hover:text-pink-600 transition-colors">
                Xem ví dụ
              </Link>
              <Link href="/" className="hover:text-pink-600 transition-colors">
                Về chúng tôi
              </Link>
              <Link href="/" className="hover:text-pink-600 transition-colors">
                Liên hệ
              </Link>
              <Link href="/" className="hover:text-pink-600 transition-colors">
                Điều khoản
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
