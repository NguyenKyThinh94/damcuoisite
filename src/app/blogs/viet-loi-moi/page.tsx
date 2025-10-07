import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cách viết lời mời đám cưới hay và ấn tượng | damcuoi.site',
  description: 'Những mẹo viết lời mời đám cưới trên website sao cho vừa trang trọng vừa thể hiện được cá tính của cặp đôi.',
  keywords: ['lời mời đám cưới', 'viết lời mời', 'invitation wording', 'wedding invitation'],
  openGraph: {
    title: 'Cách viết lời mời đám cưới hay và ấn tượng',
    description: 'Mẹo viết lời mời đám cưới vừa trang trọng vừa thể hiện cá tính',
    type: 'article',
    images: ['https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function VietLoiMoi() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="aspect-video max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Cách viết lời mời đám cưới hay và ấn tượng"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Mẹo hay
          </span>
          <span className="text-gray-500 text-sm">25 tháng 5, 2024</span>
          <span className="text-gray-500 text-sm">6 phút đọc</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
          Cách viết lời mời đám cưới hay và ấn tượng
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Những mẹo viết lời mời đám cưới trên website sao cho vừa trang trọng vừa thể hiện được 
          cá tính độc đáo của cặp đôi.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-4xl mx-auto">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
          <p className="text-amber-800 font-medium mb-0">
            💌 <strong>Power of Words:</strong> Lời mời là ấn tượng đầu tiên guests có về đám cưới của bạn. 
            7 strategies trong bài này sẽ giúp tạo ra invitation vừa meaningful vừa memorable, 
            reflect đúng personality và love story của cặp đôi.
          </p>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Lời mời đám cưới không chỉ là thông báo về sự kiện, mà còn là cách để chia sẻ niềm vui 
          và thể hiện tình cảm của cặp đôi với những người thân yêu. Hãy cùng khám phá cách viết 
          lời mời ấn tượng và đầy cảm xúc.
        </p>

        {/* Tone & Style */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Chọn Tone & Style phù hợp</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Different invitation styles"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-4">🎩 Formal & Traditional</h4>
              <div className="text-amber-700 space-y-3 text-sm">
                <p><strong>Đặc điểm:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ngôn ngữ trang trọng, lịch sự</li>
                  <li>Cấu trúc câu đầy đủ</li>
                  <li>Tránh từ lóng, từ viết tắt</li>
                  <li>Sử dụng danh hiệu đầy đủ</li>
                </ul>
                <div className="bg-white p-3 rounded mt-3">
                  <p className="text-xs italic">
                    "Gia đình chúng tôi trân trọng kính mời quý vị đến dự lễ thành hôn..."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-4">💕 Casual & Personal</h4>
              <div className="text-orange-700 space-y-3 text-sm">
                <p><strong>Đặc điểm:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ngôn ngữ thân thiện, gần gũi</li>
                  <li>Chia sẻ cảm xúc cá nhân</li>
                  <li>Sử dụng humor phù hợp</li>
                  <li>Direct và conversational</li>
                </ul>
                <div className="bg-white p-3 rounded mt-3">
                  <p className="text-xs italic">
                    "Hi friends! Chúng mình sắp cưới rồi và muốn các bạn cùng chia sẻ niềm vui này..."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-4">✨ Modern & Creative</h4>
              <div className="text-red-700 space-y-3 text-sm">
                <p><strong>Đặc điểm:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Kết hợp formal và casual</li>
                  <li>Sử dụng metaphors, imagery</li>
                  <li>Creative formatting</li>
                  <li>Unique personal touches</li>
                </ul>
                <div className="bg-white p-3 rounded mt-3">
                  <p className="text-xs italic">
                    "Tình yêu là hành trình, đám cưới là celebration. Join us as we say 'I do'..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Lines */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Opening Lines ấn tượng</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Câu mở đầu quyết định 80% ấn tượng của lời mời. Hãy chọn approach phù hợp với 
            personality và relationship với guests.
          </p>
          
          <div className="space-y-6">
            <div className="bg-rose-50 p-6 rounded-lg">
              <h4 className="font-semibold text-rose-800 mb-4">💍 Love Story Approach</h4>
              <div className="space-y-3 text-rose-700 text-sm">
                <div className="bg-white p-4 rounded">
                  <p className="italic">"Từ một cuộc gặp gỡ tình cờ đến tình yêu đích thực, chúng mình đã quyết định viết tiếp câu chuyện bằng lời thề nguyền..."</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="italic">"After 3 years of stolen glances, coffee dates, and countless memories, we're ready to say 'forever'..."</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="italic">"Love brought us together, laughter keeps us strong, và giờ đây chúng mình muốn celebrate với những người quan trọng nhất..."</p>
                </div>
              </div>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-4">🎉 Celebration Focus</h4>
              <div className="space-y-3 text-pink-700 text-sm">
                <div className="bg-white p-4 rounded">
                  <p className="italic">"Get ready to party! Chúng mình sắp cưới và muốn các bạn cùng dance the night away..."</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="italic">"Save the date, clear your schedule, and prepare for the celebration of a lifetime as we become Mr. & Mrs..."</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="italic">"Eat, drink, and be merry! Join us for food, fun, and forever as we tie the knot..."</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-4">🤝 Community & Family</h4>
              <div className="space-y-3 text-purple-700 text-sm">
                <div className="bg-white p-4 rounded">
                  <p className="italic">"Với tình yêu và sự ủng hộ của gia đình, bạn bè, chúng mình xin trân trọng mời mọi người đến chứng kiến..."</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="italic">"Surrounded by love, supported by family and friends, we invite you to witness our promise of forever..."</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="italic">"Together with our families, chúng mình muốn share this special moment với những người đã luôn bên cạnh..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Essential Information Structure</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-4">📋 Must-Have Information</h4>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Who:</strong> Tên đầy đủ cả hai, tên gia đình</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>What:</strong> Wedding ceremony, reception, party</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>When:</strong> Date, time cụ thể, thời gian kết thúc</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Where:</strong> Venue name, địa chỉ đầy đủ</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Dress code:</strong> Formal, semi-formal, themed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>RSVP:</strong> Deadline, contact method</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>Contact:</strong> Phone, email backup</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="font-semibold text-cyan-800 mb-4">💡 Nice-to-Have Additions</h4>
              <ul className="text-cyan-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">◦</span>
                  <span>Weather forecast & backup plans</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">◦</span>
                  <span>Transportation & parking info</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">◦</span>
                  <span>Accommodation suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">◦</span>
                  <span>Gift registry hoặc honeymoon fund</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">◦</span>
                  <span>Wedding hashtag cho social media</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">◦</span>
                  <span>Special dietary accommodations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">◦</span>
                  <span>Photography policy (unplugged ceremony?)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg mt-6">
            <h4 className="font-semibold text-blue-900 mb-4">📝 Sample Complete Invitation</h4>
            <div className="bg-white p-4 rounded text-sm text-gray-700 leading-relaxed">
              <p className="italic">
                "Together with our families,<br/>
                <strong>NGUYỄN VĂN A & TRẦN THỊ B</strong><br/>
                joyfully invite you to celebrate our wedding<br/><br/>
                
                <strong>Saturday, June 15th, 2024</strong><br/>
                Ceremony at 4:00 PM | Reception to follow<br/>
                Saigon Pearl Ballroom<br/>
                92 Nguyễn Hữu Cảnh, Bình Thạnh, TP.HCM<br/><br/>
                
                Cocktail attire requested<br/>
                Please RSVP by May 1st at damcuoi.site<br/>
                For questions: 0901-234-567<br/><br/>
                
                Can't wait to celebrate with you!<br/>
                #AandBForever"
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Considerations */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Cultural & Traditional Elements</h2>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Vietnamese wedding traditions"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-4">🏮 Vietnamese Traditions</h4>
              <div className="space-y-4 text-green-700 text-sm">
                <div>
                  <p className="font-medium">Traditional Phrasing:</p>
                  <div className="bg-white p-3 rounded mt-1">
                    <p className="italic">"Thành kính kính mời ông bà, anh chị đến dự..."</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Tea Ceremony Invitation:</p>
                  <div className="bg-white p-3 rounded mt-1">
                    <p className="italic">"Lễ vu quy: 8:00 AM | Lễ thành hôn: 6:00 PM"</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Family Honor:</p>
                  <div className="bg-white p-3 rounded mt-1">
                    <p className="italic">"Gia đình chúng tôi xin trân trọng kính mời..."</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-4">🌏 Bilingual Invitations</h4>
              <div className="space-y-4 text-emerald-700 text-sm">
                <div>
                  <p className="font-medium">Structure Options:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Vietnamese first, English second</li>
                    <li>Side-by-side columns</li>
                    <li>Separate pages/sections</li>
                    <li>Key info in both languages</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Balance:</p>
                  <div className="bg-white p-3 rounded mt-1">
                    <p className="italic">Honor traditions while staying personal and accessible to all guests</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Cultural Notes:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Explain Vietnamese customs briefly</li>
                    <li>Include pronunciation guides</li>
                    <li>Note gift-giving traditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional Impact */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              5
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Creating Emotional Connection</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-4">💝 Personal Touches</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 text-purple-700 text-sm">
                  <div>
                    <p className="font-medium">Inside Jokes & Memories:</p>
                    <div className="bg-white p-2 rounded text-xs italic">
                      "From our first terrible attempt at cooking together to planning this perfect day..."
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Shared Values:</p>
                    <div className="bg-white p-2 rounded text-xs italic">
                      "We believe love grows stronger when shared with community..."
                    </div>
                  </div>
                </div>
                <div className="space-y-3 text-purple-700 text-sm">
                  <div>
                    <p className="font-medium">Gratitude Expression:</p>
                    <div className="bg-white p-2 rounded text-xs italic">
                      "Thank you for being part of our journey. Now help us celebrate the next chapter..."
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Future Vision:</p>
                    <div className="bg-white p-2 rounded text-xs italic">
                      "As we promise forever, we want our favorite people there to witness..."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-4">✨ Sensory Language</h4>
              <div className="grid md:grid-cols-3 gap-4 text-pink-700 text-sm">
                <div>
                  <p className="font-medium">Visual Words:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Sparkling</li>
                    <li>Glowing</li>
                    <li>Radiant</li>
                    <li>Shimmering</li>
                    <li>Illuminated</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Emotional Words:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Joyful</li>
                    <li>Blissful</li>
                    <li>Heartwarming</li>
                    <li>Enchanting</li>
                    <li>Unforgettable</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Action Words:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Celebrate</li>
                    <li>Dance</li>
                    <li>Toast</li>
                    <li>Embrace</li>
                    <li>Cherish</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              6
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Strong Call-to-Action & Next Steps</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-4">📞 RSVP Instructions</h4>
              <div className="space-y-4 text-orange-700 text-sm">
                <div>
                  <p className="font-medium">Clear & Urgent:</p>
                  <div className="bg-white p-3 rounded mt-1">
                    <p className="italic">"Please RSVP by March 15th so we can finalize catering and seating arrangements. Your response helps us create the perfect celebration!"</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Multiple Options:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Website RSVP form (preferred)</li>
                    <li>Phone number backup</li>
                    <li>Email alternative</li>
                    <li>Text message option</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">What to Include:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Number of guests attending</li>
                    <li>Meal preferences</li>
                    <li>Dietary restrictions</li>
                    <li>Song requests</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-4">🎯 Engagement Tactics</h4>
              <div className="space-y-4 text-red-700 text-sm">
                <div>
                  <p className="font-medium">Create Excitement:</p>
                  <div className="bg-white p-3 rounded mt-1">
                    <p className="italic">"Get ready for an unforgettable night of dancing, delicious food, and celebrating love!"</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Social Media Integration:</p>
                  <div className="bg-white p-3 rounded mt-1">
                    <p className="italic">"Share your excitement! Tag us @couplesname and use #LoveWins2024"</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Interactive Elements:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Photo sharing encouraged</li>
                    <li>Wedding hashtag usage</li>
                    <li>Song request submissions</li>
                    <li>Well wishes & advice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              7
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Common Mistakes to Avoid</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-4">❌ What NOT to Do</h4>
              <ul className="text-red-700 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✗</span>
                  <span><strong>Too much information:</strong> Overwhelming guests với chi tiết không cần thiết</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✗</span>
                  <span><strong>Unclear timeline:</strong> Không specific về thời gian ceremony vs reception</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✗</span>
                  <span><strong>Missing RSVP deadline:</strong> Không deadline rõ ràng cho RSVP</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✗</span>
                  <span><strong>Generic wording:</strong> Copy-paste invitation không personal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✗</span>
                  <span><strong>Inconsistent tone:</strong> Mix formal và casual awkwardly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">✗</span>
                  <span><strong>No contact backup:</strong> Chỉ có website, không phone number</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-4">✅ Best Practices</h4>
              <ul className="text-green-700 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span><strong>Proofread multiple times:</strong> Check dates, times, addresses, names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span><strong>Test all links:</strong> Verify RSVP form, maps, contact info work</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span><strong>Get second opinions:</strong> Ask friends/family to review before publishing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span><strong>Mobile-friendly:</strong> Ensure easy reading trên phone</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span><strong>Update regularly:</strong> Keep information current as plans solidify</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span><strong>Backup communication:</strong> Multiple ways cho guests to reach you</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Templates & Examples */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">📝 Ready-to-Use Templates</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Download 15+ invitation templates với different styles and personalities để customize cho đám cưới của bạn
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">5</div>
              <div>Formal templates</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">6</div>
              <div>Casual styles</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-2xl font-bold">4</div>
              <div>Cultural variations</div>
            </div>
          </div>
        </div>

        {/* Final Tips */}
        <div className="bg-white rounded-2xl p-8 border border-amber-200 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            💡 Pro Tips for Perfect Invitations
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-amber-50 rounded-lg">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">Write Multiple Drafts</h4>
                  <p className="text-amber-600 text-sm">Viết 3-4 versions khác nhau, then pick best elements từ mỗi draft</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800">Read Aloud</h4>
                  <p className="text-orange-600 text-sm">Đọc to để check flow, rhythm, và emotional impact</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-red-50 rounded-lg">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-red-800">Consider Your Audience</h4>
                  <p className="text-red-600 text-sm">Adjust tone based on guest mix: older relatives vs. college friends</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-pink-800">Set the Right Expectations</h4>
                  <p className="text-pink-600 text-sm">Hint at formality level, activities, và overall vibe của event</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-1">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800">Make it Scannable</h4>
                  <p className="text-purple-600 text-sm">Use formatting để key info stands out: dates, times, locations</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-indigo-50 rounded-lg">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 mt-1">
                  6
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800">Plan for Updates</h4>
                  <p className="text-indigo-600 text-sm">Design invitation để easy to update nếu có changes last-minute</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 border border-amber-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sẵn sàng viết lời mời perfect?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Template website đám cưới của chúng tôi có sẵn invitation sections được optimize 
            để easy edit và beautiful display
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/previews/type1"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all"
            >
              Khám phá Templates
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition-all"
            >
              Đọc thêm Writing Tips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
