import { compatibilityView } from '../authority.mjs';
// Published fields are canonical references. Unreferenced values are legacy-only
// historical metadata and must never be used to independently regenerate pages.
const legacy = compatibilityView({
  "pages": {
    "index.html": {
      "primary": "plumbing and electrical repairs Perth",
      "owners": [
        "/"
      ],
      "intent": "entity-navigation",
      "heading": {
        "$source": "page",
        "file": "index.html",
        "path": [
          "seo",
          "title"
        ]
      },
      "body": {
        "$source": "fragment",
        "file": "index.html",
        "path": [
          "sections",
          1,
          "html"
        ],
        "node": [],
        "mode": "text",
        "trim": true
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "plumbing.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "plumbing.html",
            "path": [
              "seo",
              "title"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "electrical.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "electrical.html",
            "path": [
              "seo",
              "title"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "seo",
              "title"
            ]
          }
        ]
      ],
      "faq": []
    },
    "about.html": {
      "primary": "{{ppp:shared:business.name:raw}} Perth team",
      "owners": [],
      "intent": "trust",
      "heading": {
        "$source": "fragment",
        "file": "about.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          0,
          0,
          1
        ],
        "mode": "text",
        "trim": true
      },
      "body": {
        "$source": "fragment",
        "file": "about.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          0,
          0,
          2
        ],
        "mode": "text",
        "trim": true
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "seo",
              "title"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "about.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              0,
              0,
              8,
              1
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "plumbing.html": {
      "primary": "plumber Perth",
      "owners": [
        "/plumbing/"
      ],
      "intent": "commercial-hub",
      "heading": {
        "$source": "fragment",
        "file": "plumbing.html",
        "path": [
          "sections",
          5,
          "container"
        ],
        "node": [
          1,
          4,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "plumbing.html",
        "path": [
          "sections",
          5,
          "container"
        ],
        "node": [
          1,
          4,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "hot-water-problems-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          "faq.html",
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              5,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-hot-water-plumbing-or-electrical.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              6,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-pressure-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "water-pressure-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "items",
              2,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              3,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "items",
              4,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              5,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              1,
              0,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              1,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "plumbing.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                1,
                0,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "plumbing.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                1,
                0,
                0,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              "faq.html",
              {
                "$source": "fragment",
                "file": "plumbing.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  0,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "hot-water-problems-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  3,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "insights-hot-water-plumbing-or-electrical.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "plumbing.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  0,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "contact.html",
                "path": [
                  "sections",
                  0,
                  "container"
                ],
                "node": [
                  1,
                  4,
                  2,
                  4,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "plumbing.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  0,
                  3,
                  3,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              1,
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              1,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "plumbing.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                1,
                0,
                1,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "perth-cbd-inner-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  1,
                  2,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "northern-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  1,
                  2,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "southern-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  1,
                  2,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "eastern-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "page",
                "file": "eastern-suburbs.html",
                "path": [
                  "seo",
                  "jsonLd",
                  0,
                  "@graph",
                  4,
                  "areaServed"
                ]
              }
            ],
            [
              {
                "$source": "page",
                "file": "western-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "page",
                "file": "western-suburbs.html",
                "path": [
                  "seo",
                  "jsonLd",
                  0,
                  "@graph",
                  4,
                  "areaServed"
                ]
              }
            ],
            [
              {
                "$source": "page",
                "file": "perth-hills-swan-valley.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  1,
                  2,
                  5,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "plumbing.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              1,
              0,
              2
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "plumbing.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                1,
                0,
                2,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "plumbing.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                1,
                0,
                2,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              "about.html",
              {
                "$source": "fragment",
                "file": "plumbing.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  2,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "electrical.html": {
      "primary": "electrician Perth",
      "owners": [
        "/electrical/"
      ],
      "intent": "commercial-hub",
      "heading": "Match the electrical request to the work",
      "body": {
        "$source": "fragment",
        "file": "electrical.html",
        "path": [
          "sections",
          6,
          "container"
        ],
        "node": [
          1,
          4,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "northern-suburbs.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              4,
              "hasOfferCatalog",
              "itemListElement",
              0,
              "itemOffered",
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          "faq.html",
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              5,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "items",
              2,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              3,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "items",
              4,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              6,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              2,
              0,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "electrical.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                2,
                0,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "electrical.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                2,
                0,
                0,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "power-faults-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  1,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              "faq.html",
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  3,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              2,
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "electrical.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                2,
                0,
                1,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "perth-cbd-inner-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  1,
                  2,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "northern-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  1,
                  2,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "southern-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  1,
                  2,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "eastern-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "page",
                "file": "eastern-suburbs.html",
                "path": [
                  "seo",
                  "jsonLd",
                  0,
                  "@graph",
                  4,
                  "areaServed"
                ]
              }
            ],
            [
              {
                "$source": "page",
                "file": "western-suburbs.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "page",
                "file": "western-suburbs.html",
                "path": [
                  "seo",
                  "jsonLd",
                  0,
                  "@graph",
                  4,
                  "areaServed"
                ]
              }
            ],
            [
              {
                "$source": "page",
                "file": "perth-hills-swan-valley.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  1,
                  2,
                  5,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "electrical.html",
            "path": [
              "sections",
              7,
              "html"
            ],
            "node": [
              2,
              0,
              2
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "electrical.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                2,
                0,
                2,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "electrical.html",
              "path": [
                "sections",
                7,
                "html"
              ],
              "node": [
                2,
                0,
                2,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              "about.html",
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  2,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "property-management.html": {
      "primary": "property manager plumbing and electrical Perth",
      "owners": [
        "/property-maintenance/"
      ],
      "intent": "commercial-managed",
      "heading": "From an occupant report to authorised repair work",
      "body": {
        "$source": "join",
        "parts": [
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "container"
            ],
            "node": [
              1,
              4,
              1,
              0
            ],
            "mode": "text"
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              0
            ],
            "mode": "text"
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "container"
            ],
            "node": [
              1,
              4,
              3,
              0
            ],
            "mode": "text"
          }
        ],
        "separator": "\n\n"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "container"
            ],
            "node": [
              1,
              4,
              4,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "container"
            ],
            "node": [
              1,
              4,
              4,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-tenant-property-manager-maintenance-handover.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "container"
            ],
            "node": [
              1,
              4,
              4,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-useful-property-work-order.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "container"
            ],
            "node": [
              1,
              4,
              4,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "container"
            ],
            "node": [
              1,
              4,
              4,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-clearer-property-maintenance-enquiry.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "container"
            ],
            "node": [
              1,
              4,
              4,
              5,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "items",
              2,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "items",
              3,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              7,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              7,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              4,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              6,
              "html"
            ],
            "node": [
              1,
              0,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              6,
              "html"
            ],
            "node": [
              1,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "property-management.html",
              "path": [
                "sections",
                6,
                "html"
              ],
              "node": [
                1,
                0,
                0,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [
            {
              "$source": "fragment",
              "file": "property-management.html",
              "path": [
                "sections",
                6,
                "html"
              ],
              "node": [
                1,
                0,
                0,
                2,
                0,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "property-management.html",
              "path": [
                "sections",
                6,
                "html"
              ],
              "node": [
                1,
                0,
                0,
                2,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "property-management.html",
              "path": [
                "sections",
                6,
                "html"
              ],
              "node": [
                1,
                0,
                0,
                2,
                2,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "property-management.html",
              "path": [
                "sections",
                6,
                "html"
              ],
              "node": [
                1,
                0,
                0,
                2,
                3,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "property-management.html",
              "path": [
                "sections",
                6,
                "html"
              ],
              "node": [
                1,
                0,
                0,
                2,
                4,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "news-clearer-property-maintenance-enquiry.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "property-management.html",
                "path": [
                  "sections",
                  4,
                  "container"
                ],
                "node": [
                  1,
                  4,
                  4,
                  5,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "news-useful-property-work-order.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "property-management.html",
                "path": [
                  "sections",
                  6,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  0,
                  3,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "property-management.html",
                "path": [
                  "sections",
                  6,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  0,
                  3,
                  2,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "property-management.html",
                "path": [
                  "sections",
                  6,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  0,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "property-management.html",
            "path": [
              "sections",
              6,
              "html"
            ],
            "node": [
              1,
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "property-management.html",
              "path": [
                "sections",
                6,
                "html"
              ],
              "node": [
                1,
                0,
                1,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "property-management.html",
              "path": [
                "sections",
                6,
                "html"
              ],
              "node": [
                1,
                0,
                1,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "insights-tenant-property-manager-maintenance-handover.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "property-management.html",
                "path": [
                  "sections",
                  6,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "service-areas.html": {
      "primary": "Perth plumbing and electrical service areas",
      "owners": [],
      "intent": "location-navigation",
      "heading": {
        "$source": "fragment",
        "file": "service-areas.html",
        "path": [
          "sections",
          1,
          "container"
        ],
        "node": [
          1,
          4,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "service-areas.html",
        "path": [
          "sections",
          1,
          "container"
        ],
        "node": [
          1,
          4,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "service-areas.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "service-areas.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "service-areas.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "service-areas.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "service-areas.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "service-areas.html",
            "path": [
              "sections",
              1,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "service-areas.html",
            "path": [
              "sections",
              1,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "insights.html": {
      "primary": "Perth plumbing and electrical problem guides",
      "owners": [],
      "intent": "informational-hub",
      "heading": {
        "$source": "fragment",
        "file": "insights.html",
        "path": [
          "sections",
          0,
          "container"
        ],
        "node": [
          0,
          2,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "insights.html",
        "path": [
          "sections",
          0,
          "container"
        ],
        "node": [
          0,
          2,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "insights-reporting-a-plumbing-leak.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              0,
              2,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-hot-water-plumbing-or-electrical.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              4,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-safety-switch-keeps-tripping.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              0,
              2,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-tenant-property-manager-maintenance-handover.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              0,
              2,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "insights.html",
            "path": [
              "sections",
              0,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights.html",
            "path": [
              "sections",
              0,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "news.html": {
      "primary": "Ellis Perth maintenance booking updates",
      "owners": [],
      "intent": "company-process-hub",
      "heading": {
        "$source": "fragment",
        "file": "news.html",
        "path": [
          "sections",
          0,
          "container"
        ],
        "node": [
          0,
          2,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "news.html",
        "path": [
          "sections",
          0,
          "container"
        ],
        "node": [
          0,
          2,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "news-clearer-property-maintenance-enquiry.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "news.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              0,
              2,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-useful-property-work-order.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "news.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              0,
              2,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-keeping-access-information-together.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "news.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              0,
              2,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "news.html",
            "path": [
              "sections",
              0,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "news.html",
            "path": [
              "sections",
              0,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "faq.html": {
      "primary": "plumbing and electrical repair questions Perth",
      "owners": [
        "/pricing/"
      ],
      "intent": "booking-help",
      "heading": {
        "$source": "fragment",
        "file": "faq.html",
        "path": [
          "sections",
          1,
          "container"
        ],
        "node": [
          1,
          1,
          2,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "faq.html",
        "path": [
          "sections",
          1,
          "container"
        ],
        "node": [
          1,
          1,
          2,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              5,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              6,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              7,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-pressure-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              8,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              9,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              10,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              11,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              12,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              13,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              1,
              2,
              3,
              14,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              3,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              4,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              5,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              5,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              5,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              6,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              6,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              6,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              7,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              7,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              7,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              2,
              0,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "faq.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                2,
                0,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "faq.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                2,
                0,
                0,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  0,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  1,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  2,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  3,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  3,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  4,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  4,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  5,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "faq.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  5,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        }
      ]
    },
    "contact.html": {
      "primary": "book plumbing and electrical repairs Perth",
      "owners": [],
      "intent": "conversion",
      "heading": {
        "$source": "fragment",
        "file": "contact.html",
        "path": [
          "sections",
          0,
          "container"
        ],
        "node": [
          1,
          4,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "contact.html",
        "path": [
          "sections",
          0,
          "container"
        ],
        "node": [
          1,
          4,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-clearer-property-maintenance-enquiry.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              4,
              0
            ],
            "mode": "attribute",
            "attribute": "href"
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "container"
            ],
            "node": [
              1,
              4,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              2,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "contact.html",
            "path": [
              "sections",
              0,
              "items",
              3,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "blocked-drains-perth.html": {
      "primary": "blocked drains Perth",
      "owners": [
        "/plumbing/blocked-drains/"
      ],
      "intent": "commercial-repair",
      "heading": {
        "$source": "fragment",
        "file": "blocked-drains-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "blocked-drains-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "toilet-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "blocked-drains-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "blocked-drains-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "toilet-repairs-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "blocked-drains-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "property-management.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "blocked-drains-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              "faq.html",
              {
                "$source": "fragment",
                "file": "blocked-drains-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "blocked-drains-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                2
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "blocked-drains-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                2
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "blocked-drains-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "blocked-drains-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "blocked-drains-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "blocked-drains-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "toilet-repairs-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "blocked-drains-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "water-leak-detection-perth.html": {
      "primary": "water leak detection Perth",
      "owners": [
        "/plumbing/leak-detection/"
      ],
      "intent": "commercial-detection",
      "heading": {
        "$source": "fragment",
        "file": "water-leak-detection-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "water-leak-detection-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-pressure-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "water-pressure-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "water-leak-detection-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "water-leak-detection-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "insights-reporting-a-plumbing-leak.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "water-leak-detection-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  1,
                  2,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "burst-pipe-repair-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "water-leak-detection-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  2,
                  8,
                  3
                ],
                "mode": "text"
              }
            ],
            [
              "about.html",
              {
                "$source": "fragment",
                "file": "water-leak-detection-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  0,
                  5
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "water-leak-detection-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "water-leak-detection-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "water-leak-detection-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                2
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "water-leak-detection-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "water-leak-detection-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "fragment",
                "file": "insights-reporting-a-plumbing-leak.html",
                "path": [
                  "sections",
                  1,
                  "html"
                ],
                "node": [
                  0,
                  2,
                  0,
                  2
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "water-leak-detection-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "burst-pipe-repair-perth.html": {
      "primary": "burst pipe repairs Perth",
      "owners": [
        "/plumbing/burst-pipe-repairs/"
      ],
      "intent": "commercial-repair",
      "heading": {
        "$source": "fragment",
        "file": "burst-pipe-repair-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "burst-pipe-repair-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "burst-pipe-repair-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "burst-pipe-repair-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "insights-reporting-a-plumbing-leak.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "burst-pipe-repair-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  2,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "hot-water-problems-perth.html": {
      "primary": "hot water repairs Perth",
      "owners": [
        "/hot-water/",
        "/hot-water/electric-hot-water/"
      ],
      "intent": "commercial-repair",
      "heading": {
        "$source": "fragment",
        "file": "hot-water-problems-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "hot-water-problems-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "insights-hot-water-plumbing-or-electrical.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          "faq.html",
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-pressure-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "water-pressure-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-plumber-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              5,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              5,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "hot-water-problems-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "hot-water-problems-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                2,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "hot-water-problems-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                3,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "insights-hot-water-plumbing-or-electrical.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "hot-water-problems-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  4,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "hot-water-problems-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  4,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              "faq.html",
              {
                "$source": "fragment",
                "file": "hot-water-problems-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  4,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "hot-water-problems-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "hot-water-problems-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "hot-water-problems-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "hot-water-problems-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                2
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "hot-water-problems-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "hot-water-problems-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "hot-water-problems-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "insights-hot-water-plumbing-or-electrical.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "hot-water-problems-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "tap-mixer-repairs-perth.html": {
      "primary": "tap repairs Perth",
      "owners": [
        "/plumbing/tap-repairs/"
      ],
      "intent": "commercial-repair",
      "heading": {
        "$source": "fragment",
        "file": "tap-mixer-repairs-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "tap-mixer-repairs-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-pressure-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "water-pressure-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "tap-mixer-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "tap-mixer-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "tap-mixer-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                2
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "tap-mixer-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "tap-mixer-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "tap-mixer-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "tap-mixer-repairs-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "toilet-repairs-perth.html": {
      "primary": "toilet repairs Perth",
      "owners": [
        "/plumbing/toilet-repairs/"
      ],
      "intent": "commercial-repair",
      "heading": {
        "$source": "fragment",
        "file": "toilet-repairs-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "toilet-repairs-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              6,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              6,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "toilet-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "toilet-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "fragment",
                "file": "toilet-repairs-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  0,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "toilet-repairs-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "toilet-repairs-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  1,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "toilet-repairs-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "contact.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "toilet-repairs-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "toilet-repairs-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "toilet-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "toilet-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "toilet-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "toilet-repairs-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "blocked-drains-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "toilet-repairs-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "power-faults-perth.html": {
      "primary": "electrical fault finding Perth",
      "owners": [
        "/electrical/fault-finding/"
      ],
      "intent": "commercial-diagnosis",
      "heading": {
        "$source": "fragment",
        "file": "power-faults-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "power-faults-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "power-faults-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "power-faults-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "safety-switch-tripping-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "power-faults-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "lighting-power-points-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "power-faults-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              "about.html",
              {
                "$source": "fragment",
                "file": "power-faults-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "power-faults-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "power-faults-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "power-faults-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                2
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "power-faults-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "power-faults-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "insights-safety-switch-keeps-tripping.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "power-faults-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "safety-switch-tripping-perth.html": {
      "primary": "safety switch tripping Perth",
      "owners": [
        "/electrical/rcd-safety-switches/"
      ],
      "intent": "commercial-repair",
      "heading": {
        "$source": "fragment",
        "file": "safety-switch-tripping-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "safety-switch-tripping-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-safety-switch-keeps-tripping.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              4,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "faq.html",
            "path": [
              "sections",
              1,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "sections",
              3,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "safety-switch-tripping-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "safety-switch-tripping-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "power-faults-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "safety-switch-tripping-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "property-management.html",
                "path": [
                  "sections",
                  6,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  0,
                  3,
                  2,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "safety-switch-tripping-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "property-management.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "safety-switch-tripping-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "safety-switch-tripping-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "safety-switch-tripping-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                2
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "safety-switch-tripping-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "safety-switch-tripping-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "insights-safety-switch-keeps-tripping.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "safety-switch-tripping-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "lighting-power-points-perth.html": {
      "primary": "lighting and power point service overview Perth",
      "owners": [
        "/electrical/power-points/",
        "/electrical/lighting-repairs/"
      ],
      "intent": "commercial-service-overview",
      "heading": {
        "$source": "fragment",
        "file": "lighting-power-points-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "lighting-power-points-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "renewables-smart-home-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "file"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "lighting-power-points-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "lighting-installation-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "lighting-power-points-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  2,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        },
        {
          "id": {
            "$source": "fragment",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "lighting-power-points-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "lighting-power-points-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "power-points-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "lighting-power-points-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  2,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "smoke-alarm-maintenance-perth.html": {
      "primary": "smoke alarm replacement Perth",
      "owners": [
        "/electrical/smoke-alarms/"
      ],
      "intent": "commercial-maintenance",
      "heading": {
        "$source": "fragment",
        "file": "smoke-alarm-maintenance-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "smoke-alarm-maintenance-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "smoke-alarm-maintenance-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "smoke-alarm-maintenance-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "ceiling-fans-perth.html",
                "path": [
                  "breadcrumbs",
                  1,
                  "href"
                ]
              },
              {
                "$source": "fragment",
                "file": "smoke-alarm-maintenance-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "fragment",
                "file": "smoke-alarm-maintenance-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  1,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "smoke-alarm-maintenance-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "contact.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "smoke-alarm-maintenance-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "smoke-alarm-maintenance-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "smoke-alarm-maintenance-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "insights-tenant-property-manager-maintenance-handover.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "smoke-alarm-maintenance-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              2
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "smoke-alarm-maintenance-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                2,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "smoke-alarm-maintenance-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                2,
                2
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "smoke-alarm-maintenance-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                2,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "smoke-alarm-maintenance-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "fragment",
                "file": "smoke-alarm-maintenance-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  4,
                  4,
                  1
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "smoke-alarm-maintenance-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  2,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "fixtures-appliances-perth.html": {
      "primary": "fixture and appliance connections Perth",
      "owners": [
        "/plumbing/appliance-connections/",
        "/electrical/appliance-connections/"
      ],
      "intent": "commercial-install",
      "heading": {
        "$source": "fragment",
        "file": "fixtures-appliances-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "fixtures-appliances-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "toilet-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              2,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              3,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              5,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              5,
              "answer"
            ],
            "node": [
              0,
              0
            ],
            "mode": "text",
            "trim": true
          },
          {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              2,
              "items",
              4,
              "answer"
            ],
            "node": [
              0,
              1
            ],
            "mode": "attribute",
            "attribute": "href"
          }
        ]
      ],
      "sections": [
        {
          "id": {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              0,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                3,
                0,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                3,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                0,
                3,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "fragment",
                "file": "electrical.html",
                "path": [
                  "sections",
                  7,
                  "html"
                ],
                "node": [
                  2,
                  0,
                  0,
                  3,
                  1,
                  0
                ],
                "mode": "attribute",
                "attribute": "href"
              },
              {
                "$source": "fragment",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  4,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "tap-mixer-repairs-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  4,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "contact.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  0,
                  4,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              1,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                1,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                1,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "bullets": [],
          "links": [
            [
              {
                "$source": "page",
                "file": "toilet-repairs-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "blocked-drains-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "contact.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  1,
                  3,
                  2,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ]
        },
        {
          "id": {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              2
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": "Understand the symptoms before choosing the work",
          "body": [
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                2,
                1
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                2,
                2
              ],
              "mode": "text"
            }
          ],
          "topics": [
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                2,
                0
              ],
              "mode": "text"
            },
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                2,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "blocked-drains-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  2,
                  3,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        },
        {
          "id": {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              3
            ],
            "mode": "attribute",
            "attribute": "id"
          },
          "heading": {
            "$source": "fragment",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              8,
              3,
              0,
              0
            ],
            "mode": "text"
          },
          "body": [
            {
              "$source": "fragment",
              "file": "fixtures-appliances-perth.html",
              "path": [
                "sections",
                0,
                "html"
              ],
              "node": [
                1,
                0,
                8,
                3,
                1,
                0
              ],
              "mode": "text"
            }
          ],
          "links": [
            [
              {
                "$source": "page",
                "file": "dishwasher-installation-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  3,
                  2,
                  0,
                  0,
                  0
                ],
                "mode": "text"
              }
            ],
            [
              {
                "$source": "page",
                "file": "toilet-installation-perth.html",
                "path": [
                  "file"
                ]
              },
              {
                "$source": "fragment",
                "file": "fixtures-appliances-perth.html",
                "path": [
                  "sections",
                  0,
                  "html"
                ],
                "node": [
                  1,
                  0,
                  8,
                  3,
                  2,
                  1,
                  0,
                  0
                ],
                "mode": "text"
              }
            ]
          ],
          "bullets": []
        }
      ]
    },
    "renewables-smart-home-perth.html": {
      "primary": "smart home electrical work Perth",
      "owners": [
        "/electrical/smart-home/"
      ],
      "intent": "conditional-commercial",
      "heading": {
        "$source": "fragment",
        "file": "renewables-smart-home-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "renewables-smart-home-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          2,
          2
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "renewables-smart-home-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "renewables-smart-home-perth.html",
            "path": [
              "sections",
              2,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "renewables-smart-home-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "renewables-smart-home-perth.html",
            "path": [
              "sections",
              2,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "renewables-smart-home-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "renewables-smart-home-perth.html",
            "path": [
              "sections",
              2,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "perth-cbd-inner-suburbs.html": {
      "primary": "CBD and Inner Perth plumbing and electrical repairs",
      "owners": [
        "/areas/east-perth/",
        "/areas/north-perth/",
        "/areas/west-perth/"
      ],
      "intent": "regional-service",
      "heading": {
        "$source": "fragment",
        "file": "perth-cbd-inner-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "perth-cbd-inner-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "perth-cbd-inner-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "perth-cbd-inner-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "perth-cbd-inner-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "perth-cbd-inner-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "perth-cbd-inner-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "perth-cbd-inner-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "northern-suburbs.html": {
      "primary": "Northern Suburbs Perth plumbing and electrical repairs",
      "owners": [
        "/areas/joondalup/"
      ],
      "intent": "regional-service",
      "heading": {
        "$source": "fragment",
        "file": "northern-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "northern-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "northern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "northern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "northern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "northern-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "northern-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "southern-suburbs.html": {
      "primary": "Southern Suburbs Perth plumbing and electrical repairs",
      "owners": [
        "/areas/canning-vale/",
        "/areas/rockingham/",
        "/areas/south-perth/"
      ],
      "intent": "regional-service",
      "heading": {
        "$source": "fragment",
        "file": "southern-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "southern-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "southern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "southern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "southern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "southern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "southern-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "southern-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "eastern-suburbs.html": {
      "primary": "Eastern Suburbs Perth plumbing and electrical repairs",
      "owners": [
        "/areas/midland/",
        "/areas/perth-airport/"
      ],
      "intent": "regional-service",
      "heading": {
        "$source": "fragment",
        "file": "eastern-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "eastern-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "eastern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "eastern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "eastern-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "eastern-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "eastern-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "western-suburbs.html": {
      "primary": "Western Suburbs Perth plumbing and electrical repairs",
      "owners": [
        "/areas/fremantle/"
      ],
      "intent": "regional-service",
      "heading": {
        "$source": "fragment",
        "file": "western-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "western-suburbs.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "western-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "western-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "western-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "western-suburbs.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "western-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "western-suburbs.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "perth-hills-swan-valley.html": {
      "primary": "Perth Hills and Swan Valley plumbing and electrical repairs",
      "owners": [],
      "intent": "regional-service",
      "heading": {
        "$source": "fragment",
        "file": "perth-hills-swan-valley.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "perth-hills-swan-valley.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "perth-hills-swan-valley.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "perth-hills-swan-valley.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "eastern-suburbs.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "perth-hills-swan-valley.html",
            "path": [
              "sections",
              1,
              "container"
            ],
            "node": [
              1,
              0,
              2,
              0,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "perth-hills-swan-valley.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "perth-hills-swan-valley.html",
            "path": [
              "sections",
              1,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "insights-reporting-a-plumbing-leak.html": {
      "primary": "how to report a plumbing leak",
      "owners": [
        "/advice/no-water-or-power/"
      ],
      "intent": "informational-leak",
      "heading": {
        "$source": "fragment",
        "file": "insights-reporting-a-plumbing-leak.html",
        "path": [
          "sections",
          4,
          "html"
        ],
        "node": [
          0,
          1,
          5,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "insights-reporting-a-plumbing-leak.html",
        "path": [
          "sections",
          44,
          "container"
        ],
        "node": [
          1,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-reporting-a-plumbing-leak.html",
            "path": [
              "sections",
              44,
              "container"
            ],
            "node": [
              1,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-reporting-a-plumbing-leak.html",
            "path": [
              "sections",
              44,
              "container"
            ],
            "node": [
              1,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "insights-reporting-a-plumbing-leak.html",
            "path": [
              "sections",
              44,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-reporting-a-plumbing-leak.html",
            "path": [
              "sections",
              44,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-reporting-a-plumbing-leak.html",
            "path": [
              "sections",
              44,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-reporting-a-plumbing-leak.html",
            "path": [
              "sections",
              44,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "insights-safety-switch-keeps-tripping.html": {
      "primary": "what to do when a safety switch keeps tripping",
      "owners": [],
      "intent": "informational-electrical",
      "heading": {
        "$source": "fragment",
        "file": "insights-safety-switch-keeps-tripping.html",
        "path": [
          "sections",
          4,
          "html"
        ],
        "node": [
          0,
          1,
          5,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "insights-safety-switch-keeps-tripping.html",
        "path": [
          "sections",
          3,
          "html"
        ],
        "node": [
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-safety-switch-keeps-tripping.html",
            "path": [
              "sections",
              13,
              "container"
            ],
            "node": [
              1,
              1,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-safety-switch-keeps-tripping.html",
            "path": [
              "sections",
              13,
              "container"
            ],
            "node": [
              1,
              1,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "insights-safety-switch-keeps-tripping.html",
            "path": [
              "sections",
              13,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-safety-switch-keeps-tripping.html",
            "path": [
              "sections",
              13,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-safety-switch-keeps-tripping.html",
            "path": [
              "sections",
              13,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-safety-switch-keeps-tripping.html",
            "path": [
              "sections",
              13,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "insights-hot-water-plumbing-or-electrical.html": {
      "primary": "hot water problem plumbing or electrical",
      "owners": [],
      "intent": "informational-hot-water",
      "heading": {
        "$source": "fragment",
        "file": "insights-hot-water-plumbing-or-electrical.html",
        "path": [
          "sections",
          4,
          "html"
        ],
        "node": [
          0,
          1,
          4,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "insights-hot-water-plumbing-or-electrical.html",
        "path": [
          "sections",
          3,
          "html"
        ],
        "node": [
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "hot-water-problems-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-hot-water-plumbing-or-electrical.html",
            "path": [
              "sections",
              10,
              "container"
            ],
            "node": [
              1,
              1,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-hot-water-plumbing-or-electrical.html",
            "path": [
              "sections",
              10,
              "container"
            ],
            "node": [
              1,
              1,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "insights-hot-water-plumbing-or-electrical.html",
            "path": [
              "sections",
              10,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-hot-water-plumbing-or-electrical.html",
            "path": [
              "sections",
              10,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-hot-water-plumbing-or-electrical.html",
            "path": [
              "sections",
              10,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-hot-water-plumbing-or-electrical.html",
            "path": [
              "sections",
              10,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "insights-tenant-property-manager-maintenance-handover.html": {
      "primary": "tenant property manager maintenance handover checklist",
      "owners": [],
      "intent": "informational-managed",
      "heading": {
        "$source": "fragment",
        "file": "insights-tenant-property-manager-maintenance-handover.html",
        "path": [
          "sections",
          4,
          "html"
        ],
        "node": [
          0,
          1,
          4,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "insights-tenant-property-manager-maintenance-handover.html",
        "path": [
          "sections",
          3,
          "html"
        ],
        "node": [
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-tenant-property-manager-maintenance-handover.html",
            "path": [
              "sections",
              10,
              "container"
            ],
            "node": [
              1,
              1,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-useful-property-work-order.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-tenant-property-manager-maintenance-handover.html",
            "path": [
              "sections",
              10,
              "container"
            ],
            "node": [
              1,
              1,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "insights-tenant-property-manager-maintenance-handover.html",
            "path": [
              "sections",
              10,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-tenant-property-manager-maintenance-handover.html",
            "path": [
              "sections",
              10,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-tenant-property-manager-maintenance-handover.html",
            "path": [
              "sections",
              10,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "insights-tenant-property-manager-maintenance-handover.html",
            "path": [
              "sections",
              10,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "news-clearer-property-maintenance-enquiry.html": {
      "primary": "how to write a property maintenance enquiry",
      "owners": [],
      "intent": "company-process-enquiry",
      "heading": {
        "$source": "fragment",
        "file": "news-clearer-property-maintenance-enquiry.html",
        "path": [
          "sections",
          4,
          "html"
        ],
        "node": [
          0,
          1,
          4,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "news-clearer-property-maintenance-enquiry.html",
        "path": [
          "sections",
          3,
          "html"
        ],
        "node": [
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-clearer-property-maintenance-enquiry.html",
            "path": [
              "sections",
              9,
              "container"
            ],
            "node": [
              1,
              1,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "insights-tenant-property-manager-maintenance-handover.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-clearer-property-maintenance-enquiry.html",
            "path": [
              "sections",
              9,
              "container"
            ],
            "node": [
              1,
              1,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "news-clearer-property-maintenance-enquiry.html",
            "path": [
              "sections",
              9,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-clearer-property-maintenance-enquiry.html",
            "path": [
              "sections",
              9,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-clearer-property-maintenance-enquiry.html",
            "path": [
              "sections",
              9,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-clearer-property-maintenance-enquiry.html",
            "path": [
              "sections",
              9,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "news-useful-property-work-order.html": {
      "primary": "plumbing electrical work order checklist",
      "owners": [],
      "intent": "company-process-authorisation",
      "heading": {
        "$source": "fragment",
        "file": "news-useful-property-work-order.html",
        "path": [
          "sections",
          4,
          "html"
        ],
        "node": [
          0,
          1,
          4,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "news-useful-property-work-order.html",
        "path": [
          "sections",
          3,
          "html"
        ],
        "node": [
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-useful-property-work-order.html",
            "path": [
              "sections",
              10,
              "container"
            ],
            "node": [
              1,
              1,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-keeping-access-information-together.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-useful-property-work-order.html",
            "path": [
              "sections",
              10,
              "container"
            ],
            "node": [
              1,
              1,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "news-useful-property-work-order.html",
            "path": [
              "sections",
              10,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-useful-property-work-order.html",
            "path": [
              "sections",
              10,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-useful-property-work-order.html",
            "path": [
              "sections",
              10,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-useful-property-work-order.html",
            "path": [
              "sections",
              10,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "news-keeping-access-information-together.html": {
      "primary": "repair visit access information checklist",
      "owners": [],
      "intent": "company-process-access",
      "heading": {
        "$source": "fragment",
        "file": "news-keeping-access-information-together.html",
        "path": [
          "sections",
          4,
          "html"
        ],
        "node": [
          0,
          1,
          4,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "news-keeping-access-information-together.html",
        "path": [
          "sections",
          3,
          "html"
        ],
        "node": [
          0,
          1
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "news-useful-property-work-order.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-keeping-access-information-together.html",
            "path": [
              "sections",
              10,
              "container"
            ],
            "node": [
              1,
              1,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-keeping-access-information-together.html",
            "path": [
              "sections",
              10,
              "container"
            ],
            "node": [
              1,
              1,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": [
        [
          {
            "$source": "page",
            "file": "news-keeping-access-information-together.html",
            "path": [
              "sections",
              10,
              "items",
              0,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-keeping-access-information-together.html",
            "path": [
              "sections",
              10,
              "items",
              0,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ],
        [
          {
            "$source": "page",
            "file": "news-keeping-access-information-together.html",
            "path": [
              "sections",
              10,
              "items",
              1,
              "question"
            ]
          },
          {
            "$source": "fragment",
            "file": "news-keeping-access-information-together.html",
            "path": [
              "sections",
              10,
              "items",
              1,
              "answer"
            ],
            "node": [],
            "mode": "text",
            "trim": true
          }
        ]
      ]
    },
    "lighting-installation-perth.html": {
      "primary": "lighting installation perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "lighting-installation-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "lighting-installation-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "lighting-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "lighting-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "lighting-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "lighting-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": []
    },
    "power-points-perth.html": {
      "primary": "power point installation perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "power-points-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "power-points-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-points-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-points-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-points-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "power-points-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ],
        [
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "page",
            "file": "emergency-electrician-perth.html",
            "path": [
              "seo",
              "jsonLd",
              0,
              "@graph",
              2,
              "name"
            ]
          }
        ]
      ],
      "faq": []
    },
    "dishwasher-installation-perth.html": {
      "primary": "dishwasher installation perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "dishwasher-installation-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "dishwasher-installation-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              4,
              6,
              3,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "dishwasher-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "toilet-installation-perth.html": {
      "primary": "toilet installation perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "toilet-installation-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "toilet-installation-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              4,
              6,
              3,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "toilet-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "toilet-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "fixtures-appliances-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "toilet-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "toilet-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "toilet-installation-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "shower-plumbing-repairs-perth.html": {
      "primary": "shower leak repairs perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "shower-plumbing-repairs-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "shower-plumbing-repairs-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              4,
              6,
              3,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "shower-plumbing-repairs-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "water-pressure-perth.html": {
      "primary": "low water pressure plumber perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "water-pressure-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "water-pressure-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              4,
              6,
              3,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              4,
              6,
              3,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "water-leak-detection-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "water-pressure-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "tap-mixer-repairs-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "water-pressure-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "hot-water-problems-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "water-pressure-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "ceiling-fans-perth.html": {
      "primary": "ceiling fan installation perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "ceiling-fans-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "ceiling-fans-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "exhaust-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "exhaust-fans-perth.html": {
      "primary": "bathroom exhaust fan replacement perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "exhaust-fans-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "exhaust-fans-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "exhaust-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "lighting-installation-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "exhaust-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "exhaust-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "exhaust-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "switchboard-upgrades-perth.html": {
      "primary": "switchboard upgrades perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "switchboard-upgrades-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "switchboard-upgrades-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "rcd-testing-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "rcd-testing-perth.html": {
      "primary": "rcd testing perth",
      "owners": [],
      "intent": "commercial-confirmed-service",
      "heading": {
        "$source": "fragment",
        "file": "rcd-testing-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "rcd-testing-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "rcd-testing-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "smoke-alarm-maintenance-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "rcd-testing-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "switchboard-upgrades-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "rcd-testing-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "property-management.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "rcd-testing-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "emergency-plumber-perth.html": {
      "primary": "emergency plumber perth",
      "owners": [],
      "intent": "commercial-emergency",
      "heading": {
        "$source": "fragment",
        "file": "emergency-plumber-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "emergency-plumber-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "blocked-drains-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              4,
              6,
              3,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "burst-pipe-repair-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "emergency-plumber-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "blocked-drains-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "emergency-plumber-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "hot-water-problems-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "emergency-plumber-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "emergency-plumber-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    },
    "emergency-electrician-perth.html": {
      "primary": "emergency electrician perth",
      "owners": [],
      "intent": "commercial-emergency",
      "heading": {
        "$source": "fragment",
        "file": "emergency-electrician-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          0
        ],
        "mode": "text"
      },
      "body": {
        "$source": "fragment",
        "file": "emergency-electrician-perth.html",
        "path": [
          "sections",
          0,
          "html"
        ],
        "node": [
          1,
          0,
          1,
          0
        ],
        "mode": "text"
      },
      "links": [
        [
          {
            "$source": "page",
            "file": "ceiling-fans-perth.html",
            "path": [
              "breadcrumbs",
              1,
              "href"
            ]
          },
          {
            "$source": "fragment",
            "file": "ceiling-fans-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              0,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-faults-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "emergency-electrician-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              1,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "safety-switch-tripping-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "emergency-electrician-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              2,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "power-points-perth.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "emergency-electrician-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              3,
              0,
              0
            ],
            "mode": "text"
          }
        ],
        [
          {
            "$source": "page",
            "file": "contact.html",
            "path": [
              "file"
            ]
          },
          {
            "$source": "fragment",
            "file": "emergency-electrician-perth.html",
            "path": [
              "sections",
              0,
              "html"
            ],
            "node": [
              1,
              0,
              2,
              4,
              0,
              0
            ],
            "mode": "text"
          }
        ]
      ],
      "faq": []
    }
  },
  "safety": {
    "plumbing.html": {
      "$source": "fragment",
      "file": "plumbing.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        1,
        4,
        0
      ],
      "mode": "inner"
    },
    "electrical.html": {
      "$source": "fragment",
      "file": "ceiling-fans-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        0,
        3,
        0
      ],
      "mode": "inner"
    },
    "power-faults-perth.html": {
      "$source": "fragment",
      "file": "power-faults-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        1,
        4,
        0
      ],
      "mode": "inner"
    },
    "safety-switch-tripping-perth.html": {
      "$source": "fragment",
      "file": "safety-switch-tripping-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        1,
        4,
        0
      ],
      "mode": "inner"
    },
    "insights-safety-switch-keeps-tripping.html": {
      "$source": "fragment",
      "file": "insights-safety-switch-keeps-tripping.html",
      "path": [
        "sections",
        1,
        "html"
      ],
      "node": [
        0,
        2,
        0
      ],
      "mode": "inner"
    },
    "blocked-drains-perth.html": {
      "$source": "fragment",
      "file": "blocked-drains-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        1,
        4,
        0
      ],
      "mode": "inner"
    },
    "toilet-repairs-perth.html": {
      "$source": "fragment",
      "file": "toilet-repairs-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        1,
        4,
        0
      ],
      "mode": "inner"
    },
    "water-leak-detection-perth.html": {
      "$source": "fragment",
      "file": "water-leak-detection-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        1,
        4,
        0
      ],
      "mode": "inner"
    },
    "insights-reporting-a-plumbing-leak.html": {
      "$source": "fragment",
      "file": "insights-reporting-a-plumbing-leak.html",
      "path": [
        "sections",
        1,
        "html"
      ],
      "node": [
        0,
        2,
        0
      ],
      "mode": "inner"
    },
    "lighting-installation-perth.html": {
      "$source": "fragment",
      "file": "ceiling-fans-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        0,
        3,
        0
      ],
      "mode": "inner"
    },
    "power-points-perth.html": {
      "$source": "fragment",
      "file": "ceiling-fans-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        0,
        3,
        0
      ],
      "mode": "inner"
    },
    "ceiling-fans-perth.html": {
      "$source": "fragment",
      "file": "ceiling-fans-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        0,
        3,
        0
      ],
      "mode": "inner"
    },
    "exhaust-fans-perth.html": {
      "$source": "fragment",
      "file": "ceiling-fans-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        0,
        3,
        0
      ],
      "mode": "inner"
    },
    "switchboard-upgrades-perth.html": {
      "$source": "fragment",
      "file": "ceiling-fans-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        0,
        3,
        0
      ],
      "mode": "inner"
    },
    "rcd-testing-perth.html": {
      "$source": "fragment",
      "file": "ceiling-fans-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        0,
        3,
        0
      ],
      "mode": "inner"
    },
    "emergency-plumber-perth.html": {
      "$source": "fragment",
      "file": "blocked-drains-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        1,
        4,
        0
      ],
      "mode": "inner"
    },
    "emergency-electrician-perth.html": {
      "$source": "fragment",
      "file": "ceiling-fans-perth.html",
      "path": [
        "hero"
      ],
      "node": [
        1,
        0,
        3,
        0
      ],
      "mode": "inner"
    }
  },
  "metadata": {
    "property-management.html": {
      "description": {
        "$source": "page",
        "file": "property-management.html",
        "path": [
          "seo",
          "description"
        ]
      }
    },
    "contact.html": {
      "title": {
        "$source": "page",
        "file": "contact.html",
        "path": [
          "seo",
          "title"
        ]
      },
      "description": {
        "$source": "page",
        "file": "contact.html",
        "path": [
          "seo",
          "description"
        ]
      }
    },
    "faq.html": {
      "title": {
        "$source": "page",
        "file": "faq.html",
        "path": [
          "seo",
          "title"
        ]
      },
      "h1": {
        "$source": "page",
        "file": "faq.html",
        "path": [
          "seo",
          "jsonLd",
          0,
          "@graph",
          2,
          "name"
        ]
      },
      "description": {
        "$source": "page",
        "file": "faq.html",
        "path": [
          "seo",
          "description"
        ]
      }
    },
    "news-clearer-property-maintenance-enquiry.html": {
      "title": {
        "$source": "page",
        "file": "news-clearer-property-maintenance-enquiry.html",
        "path": [
          "seo",
          "title"
        ]
      },
      "description": {
        "$source": "page",
        "file": "news-clearer-property-maintenance-enquiry.html",
        "path": [
          "seo",
          "description"
        ]
      }
    },
    "news-useful-property-work-order.html": {
      "title": {
        "$source": "page",
        "file": "news-useful-property-work-order.html",
        "path": [
          "seo",
          "title"
        ]
      },
      "description": {
        "$source": "page",
        "file": "news-useful-property-work-order.html",
        "path": [
          "seo",
          "description"
        ]
      }
    },
    "news-keeping-access-information-together.html": {
      "title": {
        "$source": "page",
        "file": "news-keeping-access-information-together.html",
        "path": [
          "seo",
          "title"
        ]
      },
      "description": {
        "$source": "page",
        "file": "news-keeping-access-information-together.html",
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
    "smoke-alarm-maintenance-perth.html": {
      "description": {
        "$source": "page",
        "file": "smoke-alarm-maintenance-perth.html",
        "path": [
          "seo",
          "description"
        ]
      }
    },
    "perth-cbd-inner-suburbs.html": {
      "title": {
        "$source": "page",
        "file": "perth-cbd-inner-suburbs.html",
        "path": [
          "seo",
          "title"
        ]
      }
    },
    "northern-suburbs.html": {
      "title": {
        "$source": "page",
        "file": "northern-suburbs.html",
        "path": [
          "seo",
          "title"
        ]
      }
    },
    "southern-suburbs.html": {
      "title": {
        "$source": "page",
        "file": "southern-suburbs.html",
        "path": [
          "seo",
          "title"
        ]
      }
    },
    "perth-hills-swan-valley.html": {
      "title": {
        "$source": "page",
        "file": "perth-hills-swan-valley.html",
        "path": [
          "seo",
          "title"
        ]
      }
    },
    "lighting-power-points-perth.html": {
      "title": {
        "$source": "page",
        "file": "lighting-power-points-perth.html",
        "path": [
          "seo",
          "title"
        ]
      },
      "h1": {
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
      "description": {
        "$source": "page",
        "file": "lighting-power-points-perth.html",
        "path": [
          "seo",
          "description"
        ]
      }
    }
  }
} as const);
export default legacy;
