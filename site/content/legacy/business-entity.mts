import { compatibilityView } from '../authority.mjs';
// Published fields are canonical references. Unreferenced values are legacy-only
// historical metadata and must never be used to independently regenerate pages.
const legacy = compatibilityView({
  "origin": {
    "$source": "shared",
    "key": "business.origin"
  },
  "id": {
    "$source": "shared",
    "key": "business.id"
  },
  "name": {
    "$source": "shared",
    "key": "business.name"
  },
  "legalName": {
    "$source": "shared",
    "key": "business.legalName"
  },
  "abn": {
    "$source": "shared",
    "key": "business.abn"
  },
  "registration": {
    "$source": "shared",
    "key": "business.registration"
  },
  "telephone": {
    "$source": "shared",
    "key": "business.telephone"
  },
  "email": {
    "$source": "shared",
    "key": "business.email"
  },
  "address": {
    "@type": {
      "$source": "shared",
      "key": "business.address.@type"
    },
    "streetAddress": {
      "$source": "shared",
      "key": "business.address.streetAddress"
    },
    "addressLocality": {
      "$source": "shared",
      "key": "business.address.addressLocality"
    },
    "addressRegion": {
      "$source": "shared",
      "key": "business.address.addressRegion"
    },
    "postalCode": {
      "$source": "shared",
      "key": "business.address.postalCode"
    },
    "addressCountry": {
      "$source": "shared",
      "key": "business.address.addressCountry"
    }
  },
  "logo": {
    "$source": "shared",
    "key": "business.logo"
  },
  "instagram": {
    "$source": "shared",
    "key": "business.instagram"
  },
  "facebook": {
    "$source": "shared",
    "key": "business.facebook"
  },
  "linkedin": {
    "$source": "shared",
    "key": "business.linkedin"
  },
  "maps": {
    "$source": "shared",
    "key": "business.maps"
  }
} as const);
export default legacy;
