'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { DataInterface } from '../data.interface';

interface Type6ClientProps {
  data: DataInterface;
}

export default function Type6({ data }: Type6ClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Destructure data with fallbacks
  const {
    brideName = "AVIVA",
    groomName = "BENJI",
    weddingDate = "JULY 13, 2024",
    location = "San Francisco, CA",
    hashtag = "#AvivaAndBenji",
    heroImage = "https://images.zola.com/07660b47-0cdb-4c0a-9425-ebcc5525de00?w=1000",
    backgroundMusic = { url: "", title: "Wedding Music" },
    storyVideo = { url: "", title: "Câu chuyện tình yêu của chúng tôi", description: "" },
    aboutBride = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    aboutGroom = { name: "", image: "", description: "", hobbies: [], favoriteThings: [] },
    galleryImages = [],
    event = { title: "", date: "", time: "", venue: "", address: "", description: "", mapUrl: "", calendarUrl: "" },
    giftRegistry = { bride: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" }, groom: { name: "", bankName: "", accountNumber: "", accountName: "", qrCode: "" } }
  } = data;

  // Audio controls
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Auto-play music - only run once when component mounts
  useEffect(() => {
    if (!audioRef.current || !backgroundMusic.url || audioLoaded) return;

    const audio = audioRef.current;
    audio.volume = 0.3;
    setAudioLoaded(true);
    
    // Try to auto-play music immediately
    const playMusic = async () => {
      try {
        audio.currentTime = 0;
        await audio.play();
        setIsPlaying(true);
        console.log('Auto-play successful');
      } catch (error) {
        console.log('Auto-play prevented by browser, waiting for user interaction');
        setIsPlaying(false);
      }
    };

    // Add event listeners for user interaction - only once
    const handleFirstInteraction = async () => {
      if (!isPlaying && audio && !audio.paused) return;
      
      try {
        await audio.play();
        setIsPlaying(true);
        console.log('Audio started after user interaction');
        // Remove listeners after successful interaction
        document.removeEventListener('click', handleFirstInteraction, true);
        document.removeEventListener('touchstart', handleFirstInteraction, true);
        document.removeEventListener('keydown', handleFirstInteraction, true);
      } catch (error) {
        console.log('Failed to play audio:', error);
      }
    };

    // Wait a bit for audio to load, then try to play
    const timer = setTimeout(() => {
      playMusic();
    }, 500);

    // Add multiple event listeners for better coverage
    document.addEventListener('click', handleFirstInteraction, true);
    document.addEventListener('touchstart', handleFirstInteraction, true);
    document.addEventListener('keydown', handleFirstInteraction, true);

    // Cleanup
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleFirstInteraction, true);
      document.removeEventListener('touchstart', handleFirstInteraction, true);
      document.removeEventListener('keydown', handleFirstInteraction, true);
    };
  }, [backgroundMusic.url]); // Only depend on URL change

  // Handle audio events - only setup once
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !backgroundMusic.url || audioLoaded) return;

    const handleCanPlay = async () => {
      // Only try auto-play if not already playing
      if (!isPlaying && audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Auto-play blocked, waiting for user interaction');
        }
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    audio.addEventListener('canplaythrough', handleCanPlay, { once: true });
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, [backgroundMusic.url, audioLoaded]); // Only run when URL changes or audio loads

  // Reset audio loaded state when URL changes
  useEffect(() => {
    setAudioLoaded(false);
    setIsPlaying(false);
  }, [backgroundMusic.url]);

  // Gallery functions
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Background Music */}
      {backgroundMusic.url && (
        <audio
          ref={audioRef}
          src={backgroundMusic.url}
          loop
          autoPlay
          muted={false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadStart={() => {
            // Ensure audio is ready for auto-play
            if (audioRef.current) {
              audioRef.current.volume = 0.3;
            }
          }}
        />
      )}

      {/* Music Controls - Fixed Position */}
      {backgroundMusic.url && (
        <div className="fixed top-6 right-6 z-50 flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
            title={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          <button
            onClick={toggleMute}
            className="w-8 h-8 text-gray-600 hover:text-black transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-600 hidden sm:block">{backgroundMusic.title}</span>
            {isPlaying && (
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-200"></div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section - Minimalist Black & White */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Wedding Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Names */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-[0.3em] uppercase">
                {groomName}
              </h1>
              <div className="flex items-center justify-center space-x-8">
                <div className="w-20 h-px bg-white"></div>
                <span className="text-2xl font-light">&</span>
                <div className="w-20 h-px bg-white"></div>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-[0.3em] uppercase">
                {brideName}
              </h1>
            </div>

            {/* Date */}
            <div className="border-t border-b border-white/30 py-8 mt-16">
              <p className="text-xl md:text-2xl font-light tracking-widest uppercase">
                {weddingDate}
              </p>
              <p className="text-lg text-white/80 mt-2">{location}</p>
            </div>

            {/* Hashtag */}
            <p className="text-lg font-light tracking-wider text-white/90 mt-8">
              {hashtag}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-white/50"></div>
          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-2"></div>
        </div>
      </section>

      {/* Video Section - Clean Layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-thin text-black mb-6 uppercase tracking-wide">
              Our Story
            </h2>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {storyVideo.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-none shadow-2xl overflow-hidden border border-gray-200">
              <div className="aspect-video bg-black">
                {storyVideo.url ? (
                  <iframe
                    src={storyVideo.url}
                    title={storyVideo.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-lg">Video Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-light text-center text-black mb-4">{storyVideo.title}</h3>
                <div className="w-16 h-px bg-gray-400 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin text-black mb-6 uppercase tracking-wide">
              About Us
            </h2>
            <div className="w-24 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Bride */}
            <div className="text-center">
              <div className="mb-12">
                <div className="relative w-80 h-80 mx-auto mb-8">
                  <Image
                    src={aboutBride.image}
                    alt={aboutBride.name}
                    fill
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-4 border-black"></div>
                </div>
                <h3 className="text-3xl font-thin text-black mb-2 uppercase tracking-wider">The Bride</h3>
                <h4 className="text-2xl font-light text-black mb-6">{aboutBride.name}</h4>
                <div className="w-16 h-px bg-black mx-auto mb-8"></div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-12 max-w-md mx-auto">
                {aboutBride.description}
              </p>

              <div className="space-y-8">
                <div>
                  <h5 className="text-lg font-medium text-black mb-4 uppercase tracking-wide">Hobbies</h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {aboutBride.hobbies.map((hobby, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 border border-black text-black text-sm font-light hover:bg-black hover:text-white transition-colors"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-medium text-black mb-4 uppercase tracking-wide">Favorites</h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {aboutBride.favoriteThings.map((thing, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-black text-white text-sm font-light hover:bg-gray-800 transition-colors"
                      >
                        {thing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Groom */}
            <div className="text-center">
              <div className="mb-12">
                <div className="relative w-80 h-80 mx-auto mb-8">
                  <Image
                    src={aboutGroom.image}
                    alt={aboutGroom.name}
                    fill
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-4 border-black"></div>
                </div>
                <h3 className="text-3xl font-thin text-black mb-2 uppercase tracking-wider">The Groom</h3>
                <h4 className="text-2xl font-light text-black mb-6">{aboutGroom.name}</h4>
                <div className="w-16 h-px bg-black mx-auto mb-8"></div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-12 max-w-md mx-auto">
                {aboutGroom.description}
              </p>

              <div className="space-y-8">
                <div>
                  <h5 className="text-lg font-medium text-black mb-4 uppercase tracking-wide">Hobbies</h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {aboutGroom.hobbies.map((hobby, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 border border-black text-black text-sm font-light hover:bg-black hover:text-white transition-colors"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-medium text-black mb-4 uppercase tracking-wide">Favorites</h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {aboutGroom.favoriteThings.map((thing, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-black text-white text-sm font-light hover:bg-gray-800 transition-colors"
                      >
                        {thing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Grid Layout */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 uppercase tracking-wide">
              Gallery
            </h2>
            <div className="w-24 h-px bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">Our Beautiful Moments</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group overflow-hidden"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 border-2 border-white/20 group-hover:border-white/50 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Section - Elegant Design */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin text-black mb-6 uppercase tracking-wide">
              Wedding Details
            </h2>
            <div className="w-24 h-px bg-black mx-auto"></div>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="bg-black text-white text-center py-12">
              <h3 className="text-3xl font-light mb-2">{event.date}</h3>
              <h4 className="text-2xl font-thin uppercase tracking-wider">{event.title}</h4>
            </div>

            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-black mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="text-lg font-medium text-black mb-2 uppercase tracking-wide">Time</h5>
                  <p className="text-gray-700">{event.time}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-black mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h5 className="text-lg font-medium text-black mb-2 uppercase tracking-wide">Location</h5>
                  <p className="text-gray-700">{event.venue}</p>
                  <p className="text-gray-500 text-sm">{event.address}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <p className="text-gray-700 leading-relaxed text-center">
                  {event.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-black hover:bg-gray-800 text-white font-light uppercase tracking-wide transition-colors"
                >
                  View Map
                </a>
                <a
                  href={event.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-black hover:bg-black hover:text-white text-black font-light uppercase tracking-wide transition-colors"
                >
                  Add to Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin text-black mb-6 uppercase tracking-wide">
              Gift Registry
            </h2>
            <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
              we would be grateful for your contribution to our future together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bride */}
            <div className="border border-gray-200 bg-gray-50">
              <div className="bg-black text-white text-center py-8">
                <h3 className="text-2xl font-light uppercase tracking-wider">{giftRegistry.bride.name}</h3>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Bank</span>
                    <span className="text-black">{giftRegistry.bride.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Account</span>
                    <span className="text-black font-mono">{giftRegistry.bride.accountNumber}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Name</span>
                    <span className="text-black">{giftRegistry.bride.accountName}</span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <Image
                    src={giftRegistry.bride.qrCode}
                    alt={`QR Code for ${giftRegistry.bride.name}`}
                    width={150}
                    height={150}
                    className="mx-auto border border-gray-300"
                  />
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(giftRegistry.bride.accountNumber);
                    alert('Account number copied to clipboard!');
                  }}
                  className="w-full px-6 py-3 bg-black hover:bg-gray-800 text-white font-light uppercase tracking-wide transition-colors"
                >
                  Copy Account Number
                </button>
              </div>
            </div>

            {/* Groom */}
            <div className="border border-gray-200 bg-gray-50">
              <div className="bg-black text-white text-center py-8">
                <h3 className="text-2xl font-light uppercase tracking-wider">{giftRegistry.groom.name}</h3>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Bank</span>
                    <span className="text-black">{giftRegistry.groom.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Account</span>
                    <span className="text-black font-mono">{giftRegistry.groom.accountNumber}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Name</span>
                    <span className="text-black">{giftRegistry.groom.accountName}</span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <Image
                    src={giftRegistry.groom.qrCode}
                    alt={`QR Code for ${giftRegistry.groom.name}`}
                    width={150}
                    height={150}
                    className="mx-auto border border-gray-300"
                  />
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(giftRegistry.groom.accountNumber);
                    alert('Account number copied to clipboard!');
                  }}
                  className="w-full px-6 py-3 bg-black hover:bg-gray-800 text-white font-light uppercase tracking-wide transition-colors"
                >
                  Copy Account Number
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-thin uppercase tracking-[0.2em] mb-4">
            {groomName} & {brideName}
          </h3>
          <div className="w-16 h-px bg-white mx-auto mb-4"></div>
          <p className="text-lg font-light tracking-wider mb-2">{hashtag}</p>
          <p className="text-lg font-light">{weddingDate}</p>
          <div className="mt-8">
            <p className="text-sm text-gray-400 italic">
              "Two hearts, one love, forever together"
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div className="relative max-w-5xl max-h-[90vh] w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-60 rounded-full p-3 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="relative w-full h-[80vh]">
              <Image
                src={galleryImages[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-60 px-6 py-3 rounded-full">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          <div 
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          ></div>
        </div>
      )}
    </div>
  );
}
