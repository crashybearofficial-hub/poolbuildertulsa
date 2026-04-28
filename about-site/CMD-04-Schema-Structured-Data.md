# MASTER COMMAND 04: SCHEMA & STRUCTURED DATA GENERATION
## Role: Technical SEO & Schema Architect

### 1. OBJECTIVE
Generate error-free JSON-LD structured data for the current page. This script must explicitly link the "Pool Builder" entity to the specific "Tulsa" geographic entity.

### 2. DATA INPUTS
- [PAGE_TYPE]: (e.g., Suburb Page, Technical Service Page, FAQ, or Homepage)
- [LOCATION_ENTITY]: (e.g., Jenks, OK; Broken Arrow, OK; Tulsa, OK)
- [SPECIFIC_SERVICE]: (e.g., Gunite Pool Construction, Pool Remodeling)

### 3. MANDATORY SCHEMA ARCHITECTURE

#### A. If Page is a [SUBURB] Page (Geographic Entity)
- **Type:** `ProfessionalService` (More specific than LocalBusiness).
- **Properties:**
    - `name`: "Pool Builder Tulsa - [LOCATION_ENTITY] Division"
    - `areaServed`: Define as a `City` or `AdministrativeArea` with the specific [LOCATION_ENTITY] name.
    - `description`: A machine-readable summary of services in that specific suburb.
    - `address`: Use a `PostalAddress` object (even if using a service area, include the City/State/Zip).

#### B. If Page is a [SERVICE] Page (Technical Silo)
- **Type:** `Service`
- **Properties:**
    - `serviceType`: [SPECIFIC_SERVICE]
    - `provider`: Reference the main brand via an `@id` link to the Homepage.
    - `offers`: Define `Offer` with `priceRange` (e.g., "$$$") and `areaServed` as "Tulsa Metro Area".
    - `hasPart`: Link to specific technical FAQs on the page using `Question` and `Answer` schema.

#### C. The "Entity Connection" (The @id Strategy)
- **Constraint:** Use an `@id` URL (e.g., `https://poolbuildertulsa.com/#organization`) in every block.
- **Why:** This tells Google that the "Jenks Page" and the "Gunite Page" belong to the same parent entity, creating a "web" of authority rather than isolated pages.

### 4. OUTPUT FORMATTING
- **Format:** Strict JSON-LD inside `<script type="application/ld+json">` tags.
- **Validation:** Must be compatible with Google Rich Results Test and Schema.org Validator.
- **No Markdown in Code:** The output must be raw code ready for a `<head>` or `<footer>` injection.

### 5. EXECUTION EXAMPLE
"Generate Schema for [SUBURB]: Owasso. Include AreaServed for Zip 74055 and link to the 'Fiberglass Pools' service."