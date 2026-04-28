import Script from 'next/script';

interface LocalSchemaProps {
  pageType: 'Suburb' | 'Service' | 'FAQ' | 'Homepage' | 'Article';
  locationEntity?: string;
  specificService?: string;
  description?: string;
  title?: string;
  faqs?: { q: string; a: string }[];
}

export default function LocalSchema({
  pageType,
  locationEntity = "Tulsa",
  specificService,
  description,
  title,
  faqs,
}: LocalSchemaProps) {
  const organizationId = 'https://poolbuildertulsa.com/#organization';
  
  const baseSchema = {
    '@context': 'https://schema.org',
  };

  let specificSchema: any = {};

  if (pageType === 'Homepage') {
    specificSchema = {
      '@type': ['HomeAndConstructionBusiness', 'Organization'],
      '@id': organizationId,
      name: 'Pool Builder Tulsa',
      description: description || "Tulsa's most technical custom pool engineers. Specializing in high-performance gunite construction and luxury estate environments in the 918 area code.",
      url: 'https://poolbuildertulsa.com',
      logo: 'https://poolbuildertulsa.com/favicon.ico',
      telephone: '+19180000000', // User to update
      priceRange: '$$$$',
      knowsAbout: [
        'Structural Engineering',
        'Geological Soil Stabilization',
        'Hydraulic Design',
        'Shotcrete Construction',
        'Tulsa Historic Preservation'
      ],
      // Sovereign SAB: Define the territory via GeoCircle instead of a storefront
      location: {
        '@type': 'Place',
        'name': 'Tulsa Metro Area',
        'geo': {
          '@type': 'GeoCircle',
          'itemOffered': { '@type': 'Service', 'name': 'Luxury Pool Engineering' },
          'geoMidpoint': {
            '@type': 'GeoCoordinates',
            'latitude': 36.1540,
            'longitude': -95.9928
          },
          'geoRadius': '50000' // 50km radius covering the entire 918
        }
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        'name': 'Aquatic Engineering Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'High-Performance Gunite Shells' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Vanishing Edge Hydraulics' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Subterranean Equipment Bunkers' } }
        ]
      },
      areaServed: [
        { '@type': 'City', name: 'Tulsa' },
        { '@type': 'City', name: 'Jenks' },
        { '@type': 'City', name: 'Bixby' },
        { '@type': 'City', name: 'Broken Arrow' },
        { '@type': 'City', name: 'Owasso' },
        { '@type': 'City', name: 'Glenpool' },
        { '@type': 'City', name: 'Sand Springs' }
      ],
    };
  }
 else if (pageType === 'Suburb') {
    specificSchema = {
      '@type': 'ProfessionalService',
      name: `Pool Builder Tulsa - ${locationEntity} Division`,
      description: description || `Custom pool construction and specialized geological engineering services in ${locationEntity}, OK.`,
      url: `https://poolbuildertulsa.com/suburbs/${locationEntity.toLowerCase().replace(' ', '-')}`,
      areaServed: {
        '@type': 'City',
        name: locationEntity,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: locationEntity,
        addressRegion: 'OK',
      },
      parentOrganization: {
        '@id': organizationId,
      },
    };
  } else if (pageType === 'Service') {
    specificSchema = {
      '@type': 'Service',
      serviceType: specificService || "Pool Construction",
      description: description,
      provider: {
        '@id': organizationId,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Tulsa Metro Area',
      },
      offers: {
        '@type': 'Offer',
        description: 'Luxury Pool Engineering Consultation'
      }
    };
  } else if (pageType === 'Article') {
    specificSchema = {
      '@type': 'Article',
      headline: title || "Pool Engineering Technical Resource",
      description: description,
      image: 'https://poolbuildertulsa.com/hero-luxury.png',
      author: {
        '@type': 'Organization',
        name: 'Pool Builder Tulsa'
      },
      publisher: {
        '@id': organizationId,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://poolbuildertulsa.com/resources`
      }
    };
  }

  // Add FAQ Schema if present
  const faqSchema = faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  } : null;

  return (
    <>
      <Script
        id={`local-schema-${pageType.toLowerCase()}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...baseSchema, ...specificSchema }),
        }}
      />
      {faqSchema && (
        <Script
          id={`faq-schema-${pageType.toLowerCase()}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
    </>
  );
}
