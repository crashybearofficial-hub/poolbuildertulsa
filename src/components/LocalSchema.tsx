import Script from 'next/script';

interface LocalSchemaProps {
  pageType: 'Suburb' | 'Service' | 'FAQ' | 'Homepage' | 'Article';
  locationEntity?: string;
  specificService?: string;
  description?: string;
  title?: string;
  url?: string;
  faqs?: { q: string; a: string }[];
}

export default function LocalSchema({
  pageType,
  locationEntity = "Tulsa",
  specificService,
  description,
  title,
  url,
  faqs,
}: LocalSchemaProps) {
  const organizationId = 'https://poolbuildertulsa.com/#organization';
  
  const baseSchema = {
    '@context': 'https://schema.org',
  };

  // Determine canonical URL dynamically or use override
  let pageUrl = url;
  if (!pageUrl) {
    if (pageType === 'Homepage') {
      pageUrl = 'https://poolbuildertulsa.com';
    } else if (pageType === 'Suburb') {
      const slugMap: { [key: string]: string } = {
        'jenks': 'jenks-luxury',
        'bixby': 'bixby-estates',
        'midtown': 'midtown-historic',
        'midtown tulsa': 'midtown-historic',
        'broken arrow': 'broken-arrow-limestone',
        'owasso': 'owasso-limestone',
        'glenpool': 'glenpool-alluvial'
      };
      const slug = slugMap[locationEntity.toLowerCase()] || locationEntity.toLowerCase().replace(' ', '-');
      pageUrl = `https://poolbuildertulsa.com/suburbs/${slug}`;
    } else if (pageType === 'Service') {
      const serviceSlugMap: { [key: string]: string } = {
        'gunite': 'gunite-engineering',
        'gunite shell engineering': 'gunite-engineering',
        'fiberglass': 'fiberglass-performance',
        'fiberglass performance': 'fiberglass-performance',
        'remodeling': 'historic-restoration',
        'historic restoration': 'historic-restoration',
        'vanishing edge hydraulics': 'vanishing-edge-hydraulics',
        'subterranean equipment bunkers': 'subterranean-equipment-bunkers'
      };
      const slug = serviceSlugMap[(specificService || '').toLowerCase()] || '';
      pageUrl = slug ? `https://poolbuildertulsa.com/services/${slug}` : 'https://poolbuildertulsa.com';
    } else if (pageType === 'Article') {
      pageUrl = 'https://poolbuildertulsa.com/resources';
    } else {
      pageUrl = 'https://poolbuildertulsa.com';
    }
  }
  
  let specificSchema: any = {};

  if (pageType === 'Homepage') {
    specificSchema = {
      '@type': ['HomeAndConstructionBusiness', 'Organization'],
      '@id': organizationId,
      name: 'Pool Builder Tulsa',
      description: description || "Tulsa's most technical custom pool engineers. Specializing in high-performance gunite construction and luxury estate environments in the 918 area code.",
      url: pageUrl,
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
      url: pageUrl,
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
      url: pageUrl,
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
