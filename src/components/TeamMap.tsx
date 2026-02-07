"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// US Atlas TopoJSON - freely available from US Census
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// 65 cities with professional sports teams (MLB, NHL, NFL, MLS, NBA, WNBA, NWSL, MLR)
const teamCities: { name: string; coordinates: [number, number] }[] = [
  // Northeast
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "Boston", coordinates: [-71.0589, 42.3601] },
  { name: "Philadelphia", coordinates: [-75.1652, 39.9526] },
  { name: "Pittsburgh", coordinates: [-79.9959, 40.4406] },
  { name: "Washington DC", coordinates: [-77.0369, 38.9072] },
  { name: "Baltimore", coordinates: [-76.6122, 39.2904] },
  { name: "Buffalo", coordinates: [-78.8784, 42.8864] },
  { name: "Hartford", coordinates: [-72.6851, 41.7658] },
  { name: "Newark", coordinates: [-74.1724, 40.7357] },
  { name: "Providence", coordinates: [-71.4128, 41.824] },

  // Southeast
  { name: "Miami", coordinates: [-80.1918, 25.7617] },
  { name: "Atlanta", coordinates: [-84.388, 33.749] },
  { name: "Orlando", coordinates: [-81.3792, 28.5383] },
  { name: "Tampa", coordinates: [-82.4572, 27.9506] },
  { name: "Charlotte", coordinates: [-80.8431, 35.2271] },
  { name: "Raleigh", coordinates: [-78.6382, 35.7796] },
  { name: "Nashville", coordinates: [-86.7816, 36.1627] },
  { name: "Jacksonville", coordinates: [-81.6557, 30.3322] },
  { name: "New Orleans", coordinates: [-90.0715, 29.9511] },
  { name: "Louisville", coordinates: [-85.7585, 38.2527] },

  // Midwest
  { name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { name: "Detroit", coordinates: [-83.0458, 42.3314] },
  { name: "Cleveland", coordinates: [-81.6944, 41.4993] },
  { name: "Cincinnati", coordinates: [-84.512, 39.1031] },
  { name: "Columbus", coordinates: [-82.9988, 39.9612] },
  { name: "Indianapolis", coordinates: [-86.1581, 39.7684] },
  { name: "Milwaukee", coordinates: [-87.9065, 43.0389] },
  { name: "Minneapolis", coordinates: [-93.265, 44.9778] },
  { name: "St. Louis", coordinates: [-90.1994, 38.627] },
  { name: "Kansas City", coordinates: [-94.5786, 39.0997] },
  { name: "Green Bay", coordinates: [-88.0198, 44.5133] },

  // Southwest
  { name: "Dallas", coordinates: [-96.797, 32.7767] },
  { name: "Houston", coordinates: [-95.3698, 29.7604] },
  { name: "San Antonio", coordinates: [-98.4936, 29.4241] },
  { name: "Austin", coordinates: [-97.7431, 30.2672] },
  { name: "Phoenix", coordinates: [-112.074, 33.4484] },
  { name: "Denver", coordinates: [-104.9903, 39.7392] },
  { name: "Las Vegas", coordinates: [-115.1398, 36.1699] },
  { name: "Oklahoma City", coordinates: [-97.5164, 35.4676] },
  { name: "Tulsa", coordinates: [-95.9928, 36.154] },
  { name: "Albuquerque", coordinates: [-106.6504, 35.0844] },

  // West Coast
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
  { name: "San Diego", coordinates: [-117.1611, 32.7157] },
  { name: "Seattle", coordinates: [-122.3321, 47.6062] },
  { name: "Portland", coordinates: [-122.6765, 45.5152] },
  { name: "Sacramento", coordinates: [-121.4944, 38.5816] },
  { name: "Oakland", coordinates: [-122.2711, 37.8044] },
  { name: "San Jose", coordinates: [-121.8863, 37.3382] },
  { name: "Anaheim", coordinates: [-117.9145, 33.8366] },
  { name: "Fresno", coordinates: [-119.7871, 36.7378] },

  // Mountain/Plains
  { name: "Salt Lake City", coordinates: [-111.891, 40.7608] },
  { name: "Boise", coordinates: [-116.2023, 43.615] },
  { name: "Omaha", coordinates: [-95.9345, 41.2565] },
  { name: "Des Moines", coordinates: [-93.6091, 41.5868] },
  { name: "Wichita", coordinates: [-97.3301, 37.6872] },
  { name: "Memphis", coordinates: [-90.049, 35.1495] },
  { name: "Birmingham", coordinates: [-86.8025, 33.5207] },

  // Additional markets
  { name: "Richmond", coordinates: [-77.436, 37.5407] },
  { name: "Norfolk", coordinates: [-76.2859, 36.8508] },
  { name: "Charleston", coordinates: [-79.9311, 32.7765] },
  { name: "Spokane", coordinates: [-117.4260, 47.6588] },
  { name: "Tucson", coordinates: [-110.9747, 32.2226] },
  { name: "Colorado Springs", coordinates: [-104.8214, 38.8339] },
  { name: "Reno", coordinates: [-119.8138, 39.5296] },
];

export function TeamMap() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <p className="mb-3 font-[family-name:var(--font-radnika)] text-sm tracking-wide text-text-tertiary">
            Coverage
          </p>
          <h2 className="font-[family-name:var(--font-radnika)] text-3xl font-medium -tracking-[0.02em] text-text-primary sm:text-4xl lg:text-5xl">
            Coast to Coast
          </h2>
          <p className="mt-4 max-w-2xl font-[family-name:var(--font-radnika)] text-lg text-text-tertiary">
            Supporting 150+ professional teams across 65 cities nationwide
          </p>
        </div>

        {/* Map */}
        <div className="relative my-[-60px] -mx-6 lg:-mx-8">
          <ComposableMap
            projection="geoAlbersUsa"
            projectionConfig={{
              scale: 1000,
            }}
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <defs>
              {/* Subtle glow filter for pins */}
              <filter id="pin-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="0 0 0 0 0.62
                          0 0 0 0 0.78
                          0 0 0 0 0.18
                          0 0 0 0.5 0"
                  result="glow"
                />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="transparent"
                    stroke="#a8a29e"
                    strokeWidth={0.5}
                    strokeOpacity={0.4}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {teamCities.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle
                  r={3}
                  fill="#9fc72e"
                  filter="url(#pin-glow)"
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
