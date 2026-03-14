import Hero from '@/components/hero';
import BelowFoldSections from '@/components/BelowFoldSections';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you provide fully customized tour packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We understand every traveler is unique. You can customize any of our existing itineraries or build one entirely from scratch with the help of our expert planners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your cabs well maintained and sanitized?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our entire fleet consists of premium, well-maintained vehicles. Every cab undergoes a rigorous cleaning and sanitization process before each trip to ensure your safety and comfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to pay the full amount upfront to book?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, you don't need to pay the full amount initially. You can secure your booking by paying a minimal advance deposit (usually 20%), and the rest can be managed closer to your trip date.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure safety during wildlife tours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our wildlife and nature tours (like Bhitarkanika) are led by certified local guides who know the terrain perfectly. We strictly adhere to all forest department safety guidelines and protocols.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I need to cancel my trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a highly flexible cancellation policy. Cancellations made 7 days prior to the journey receive a near-full refund. Please check our detailed cancellation terms for specific package rules.',
      },
    },
  ],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <BelowFoldSections />
    </div>
  );
}
