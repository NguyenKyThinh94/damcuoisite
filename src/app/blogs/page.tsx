import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - damcuoi.site | Chia sẻ kinh nghiệm tổ chức đám cưới',
  description: 'Khám phá những bài viết hữu ích về tổ chức đám cưới, xu hướng thiết kế website cưới, và những mẹo hay cho ngày trọng đại của bạn.',
  keywords: ['blog đám cưới', 'website đám cưới', 'tổ chức đám cưới', 'thiết kế website cưới', 'xu hướng đám cưới'],
  openGraph: {
    title: 'Blog - damcuoi.site',
    description: 'Chia sẻ kinh nghiệm và xu hướng tổ chức đám cưới hiện đại',
    type: 'website',
  },
};

// Danh sách blog posts
const blogPosts = [
  {
    id: 1,
    title: "Vì sao cần website đám cưới?",
    excerpt: "Khám phá tầm quan trọng của website đám cưới trong thời đại số. Tại sao các cặp đôi hiện đại nên có website riêng cho ngày trọng đại?",
    href: "/blogs/vi-sao-can-website",
    date: "10 tháng 6, 2024",
    readTime: "5 phút đọc",
    category: "Xu hướng",
    featured: true,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "10 mẹo chọn template đám cưới hoàn hảo",
    excerpt: "Hướng dẫn chi tiết cách chọn template phù hợp với phong cách đám cưới của bạn. Từ màu sắc đến layout, tất cả đều quan trọng.",
    href: "/blogs/chon-template-dam-cuoi",
    date: "8 tháng 6, 2024",
    readTime: "7 phút đọc",
    category: "Thiết kế",
    featured: false,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Xu hướng thiết kế website đám cưới 2024",
    excerpt: "Cập nhật những xu hướng mới nhất trong thiết kế website đám cưới. Từ minimalist đến luxury, khám phá style nào phù hợp với bạn.",
    href: "/blogs/xu-huong-thiet-ke-2024",
    date: "5 tháng 6, 2024",
    readTime: "6 phút đọc",
    category: "Xu hướng",
    featured: true,
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Cách tùy chỉnh website đám cưới dễ dàng",
    excerpt: "Hướng dẫn từng bước tùy chỉnh website đám cưới theo ý muốn. Thay đổi màu sắc, font chữ, hình ảnh mà không cần biết code.",
    href: "/blogs/tuy-chinh-website",
    date: "3 tháng 6, 2024",
    readTime: "8 phút đọc",
    category: "Hướng dẫn",
    featured: false,
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Tối ưu website đám cưới cho mobile",
    excerpt: "Hơn 70% khách mời sẽ xem website đám cưới trên điện thoại. Tìm hiểu cách tối ưu trải nghiệm mobile cho website của bạn.",
    href: "/blogs/toi-uu-mobile",
    date: "1 tháng 6, 2024",
    readTime: "5 phút đọc",
    category: "Thiết kế",
    featured: false,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Checklist hoàn chỉnh cho website đám cưới",
    excerpt: "Danh sách kiểm tra đầy đủ để đảm bảo website đám cưới của bạn có tất cả thông tin cần thiết và hoạt động hoàn hảo.",
    href: "/blogs/checklist-website",
    date: "28 tháng 5, 2024",
    readTime: "10 phút đọc",
    category: "Hướng dẫn",
    featured: false,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Cách viết lời mời đám cưới hay và ấn tượng",
    excerpt: "Những mẹo viết lời mời đám cưới trên website sao cho vừa trang trọng vừa thể hiện được cá tính của cặp đôi.",
    href: "/blogs/viet-loi-moi",
    date: "25 tháng 5, 2024",
    readTime: "6 phút đọc",
    category: "Mẹo hay",
    featured: false,
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Tích hợp RSVP: Quản lý khách mời thông minh",
    excerpt: "Hướng dẫn sử dụng tính năng RSVP để quản lý khách mời hiệu quả. Từ thiết lập form đến theo dõi phản hồi.",
    href: "/blogs/tich-hop-rsvp",
    date: "22 tháng 5, 2024",
    readTime: "7 phút đọc",
    category: "Tính năng",
    featured: true,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["Tất cả", "Xu hướng", "Thiết kế", "Hướng dẫn", "Mẹo hay", "Tính năng"];

export default function BlogsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Blog damcuoi.site
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Chia sẻ kinh nghiệm, xu hướng và mẹo hay cho việc tổ chức đám cưới hiện đại
        </p>
      </div>

      {/* Categories Filter */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-200/50 mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                  : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* All Blog Posts */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-3">📚</span>
          Tất cả bài viết ({blogPosts.length})
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={post.href} className="group block">
              <article className="bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/50 overflow-hidden hover:shadow-lg transition-all h-full">
                <div className="aspect-video bg-gradient-to-r from-pink-200 to-purple-200 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.featured 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                        : 'bg-white/90 text-pink-700'
                    }`}>
                      {post.featured ? '⭐ ' + post.category : post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-16">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Đăng ký nhận thông tin mới</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Nhận những bài viết mới nhất về xu hướng đám cưới và mẹo thiết kế website 
            đẹp ngay trong hộp thư của bạn
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
              Đăng ký
            </button>
          </div>
          <p className="text-sm opacity-75 mt-3">
            Chúng tôi cam kết không spam và bạn có thể hủy đăng ký bất cứ lúc nào.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/50 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Sẵn sàng tạo website đám cưới?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Khám phá hơn 8 template đám cưới tuyệt đẹp, dễ dàng tùy chỉnh và hoàn toàn miễn phí
          </p>
          <Link 
            href="/previews/type1"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all"
          >
            <span>Khám phá Ví Dụ</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
