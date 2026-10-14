import { compatibilityView } from '../authority.mjs';
// Published fields are canonical references. Unreferenced values are legacy-only
// historical metadata and must never be used to independently regenerate pages.
const legacy = compatibilityView({
  "hot-water-problems-perth.html": {
    "description": {
      "$source": "page",
      "file": "hot-water-problems-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "blocked-drains-perth.html": {
    "headline": {
      "$source": "page",
      "file": "blocked-drains-perth.html",
      "path": [
        "seo",
        "jsonLd",
        0,
        "@graph",
        2,
        "name"
      ]
    },
    "title": {
      "$source": "page",
      "file": "blocked-drains-perth.html",
      "path": [
        "seo",
        "title"
      ]
    },
    "description": {
      "$source": "page",
      "file": "blocked-drains-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "water-leak-detection-perth.html": {
    "description": {
      "$source": "page",
      "file": "water-leak-detection-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "burst-pipe-repair-perth.html": {
    "description": {
      "$source": "page",
      "file": "burst-pipe-repair-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "tap-mixer-repairs-perth.html": {
    "description": {
      "$source": "page",
      "file": "tap-mixer-repairs-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "toilet-repairs-perth.html": {
    "headline": {
      "$source": "page",
      "file": "toilet-repairs-perth.html",
      "path": [
        "seo",
        "jsonLd",
        0,
        "@graph",
        2,
        "name"
      ]
    },
    "title": {
      "$source": "page",
      "file": "toilet-repairs-perth.html",
      "path": [
        "seo",
        "title"
      ]
    },
    "description": {
      "$source": "page",
      "file": "toilet-repairs-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "power-faults-perth.html": {
    "description": {
      "$source": "page",
      "file": "power-faults-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "safety-switch-tripping-perth.html": {
    "description": {
      "$source": "page",
      "file": "safety-switch-tripping-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "lighting-power-points-perth.html": {
    "headline": {
      "$source": "page",
      "file": "lighting-power-points-perth.html",
      "path": [
        "seo",
        "jsonLd",
        0,
        "@graph",
        2,
        "name"
      ]
    },
    "title": {
      "$source": "page",
      "file": "lighting-power-points-perth.html",
      "path": [
        "seo",
        "title"
      ]
    },
    "description": {
      "$source": "page",
      "file": "lighting-power-points-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "smoke-alarm-maintenance-perth.html": {
    "headline": {
      "$source": "page",
      "file": "smoke-alarm-maintenance-perth.html",
      "path": [
        "seo",
        "jsonLd",
        0,
        "@graph",
        2,
        "name"
      ]
    },
    "title": {
      "$source": "page",
      "file": "smoke-alarm-maintenance-perth.html",
      "path": [
        "seo",
        "title"
      ]
    },
    "description": {
      "$source": "page",
      "file": "smoke-alarm-maintenance-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "fixtures-appliances-perth.html": {
    "description": {
      "$source": "page",
      "file": "fixtures-appliances-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  },
  "renewables-smart-home-perth.html": {
    "description": {
      "$source": "page",
      "file": "renewables-smart-home-perth.html",
      "path": [
        "seo",
        "description"
      ]
    }
  }
} as const);
export default legacy;
