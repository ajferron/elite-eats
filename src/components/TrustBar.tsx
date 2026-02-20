const LEAGUES = [
  { abbr: "MLB", name: "Major League Baseball" },
  { abbr: "NBA", name: "National Basketball Association" },
  { abbr: "NHL", name: "National Hockey League" },
  { abbr: "MLS", name: "Major League Soccer" },
  { abbr: "NFL", name: "National Football League" },
  { abbr: "WNBA", name: "Women's National Basketball Association" },
  { abbr: "NWSL", name: "National Women's Soccer League" },
  { abbr: "PWHL", name: "Professional Women's Hockey League" },
  { abbr: "LOVB", name: "League One Volleyball" },
  { abbr: "MLR", name: "Major League Rugby" },
  { abbr: "NCAA", name: "National Collegiate Athletic Association" },
];

function LeagueItem({ abbr, name }: { abbr: string; name: string }) {
  return (
    <>
      <span
        title={name}
        className="flex-shrink-0 text-2xl lg:text-2xl font-black font-sans tracking-[0.05em] text-stone transition-opacity hover:opacity-100"
        // style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
      >
        {abbr}
      </span>
      <span
        className="flex-shrink-0 text-stone/30 select-none"
        aria-hidden="true"
      >
        ·
      </span>
    </>
  );
}

export function TrustBar() {
  return (
    <section className="w-full overflow-hidden pt-12 pb-6">
      <p className="label-section mb-8 text-center text-sm lg:mb-10">
        Trusted by teams across major professional &amp; collegiate leagues
      </p>

      <div className="flex animate-scroll">
        {/* Two identical sets — translateX(-50%) jumps back seamlessly */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex flex-shrink-0 items-center gap-6 lg:gap-8 pr-6"
            aria-hidden={copy === 1 || undefined}
          >
            {LEAGUES.map((league) => (
              <LeagueItem
                key={league.abbr}
                abbr={league.abbr}
                name={league.name}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
