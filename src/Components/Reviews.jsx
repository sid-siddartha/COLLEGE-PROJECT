import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);



const reviews = [
   {
    id: 1,
    name: 'Aarav Sharma',
    title: 'Fitness Coach',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    review:
      'AI Fitness Trainer has helped my clients fix their posture in ways that were never possible remotely. The accuracy is incredible.',
  },
  {
    id: 2,
    name: 'Isha Patel',
    title: 'Yoga Instructor',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    review:
      'As someone who values form over reps, this app is a blessing. It points out subtle posture flaws during asanas perfectly.',
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    title: 'Home Gym User',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'No more second-guessing if I’m squatting right. The AI gives feedback instantly — it’s like having a personal trainer 24/7.',
  },
  {
    id: 4,
    name: 'Sneha Desai',
    title: 'Postnatal Yoga Practitioner',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    review:
      'With a baby around, I can’t go to the gym. This trainer keeps my posture aligned while working out at home safely.',
  },
  {
    id: 5,
    name: 'Kabir Iyer',
    title: 'CrossFit Enthusiast',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
    review:
      'I train hard, and form matters. This AI trainer has caught mistakes that even my coach missed. Truly next-gen tech!',
  },
  {
    id: 6,
    name: 'Diya Nair',
    title: 'Beginner Gym-Goer',
    avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
    review:
      'As a beginner, I feared getting injured. This app builds my confidence by showing exactly how to fix my form.',
  },
  {
    id: 7,
    name: 'Ankit Reddy',
    title: 'Body Transformation Coach',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    review:
      'I recommend this tool to every remote client. It ensures accountability and proper posture in every workout.',
  },
  {
    id: 8,
    name: 'Ritika Verma',
    title: 'Pilates Trainer',
    avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
    review:
      'The elegance of this app matches its accuracy. Posture correction during Pilates has never been so effortless.',
  },
  {
    id: 9,
    name: 'Neel Joshi',
    title: 'Sports Physiotherapist',
    avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
    review:
      'Excellent for rehab patients. Ive seen huge improvements in posture recovery thanks to consistent use of this trainer.',
  },
  {
    id: 10,
    name: 'Tanya Singh',
    title: 'Dance Choreographer',
    avatar: 'https://randomuser.me/api/portraits/women/73.jpg',
    review:
      'Great posture leads to great movement. This app ensures my dancers hold form even during intense workouts.',
  },
];
export default function Reviews() {
  const scrollRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });
  };

  return (
    <div className="relative flex items-center justify-center p-10">
      {/* Scrollable Reviews */}
      <div
        ref={scrollRef}
        className="w-full max-w-7xl overflow-x-auto flex gap-8 snap-x snap-mandatory px-4 py-8 scroll-smooth scrollbar-hide"
      >
        {reviews.map(({ id, name, title, avatar, review }, index) => (
          <div
            key={id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="min-w-[400px] max-w-[450px] hover:cursor-pointer snap-center bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-3xl p-8 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
              />
              <div>
                <h4 className="text-xl font-semibold">{name}</h4>
                <p className="text-sm text-white/70">{title}</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed text-base">
              “{review}”
            </p>
          </div>
        ))}
      </div>

      {/* Scroll Icon Button */}
      <button
        onClick={scrollRight}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:cursor-pointer hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full z-20"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
