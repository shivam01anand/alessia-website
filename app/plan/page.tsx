"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  Instagram,
  Linkedin,
  Globe,
  Calendar,
  TrendingUp,
  Handshake,
  Camera,
  FileText,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Building,
  Key
} from "lucide-react";

export default function MarketingPlanPage() {
  return (
    <div className="min-h-screen bg-[#F7F4F0]">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#2C2825] text-[#F7F4F0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Private Document
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              2026 Marketing Strategy
            </h1>
            <p className="text-[#F7F4F0]/70 text-lg">
              A roadmap to position Alessia Forcellati as Dubai&apos;s go-to for luxury events and real estate — serving fashion brands, discerning private clients, and European expats building their Dubai life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">The Opportunity</h2>
            </div>
            <div className="space-y-4 text-[#4A4543]">
              <p>
                Dubai&apos;s event management market is valued at <strong>$1.36 billion</strong>, growing 8-10% annually. Luxury fashion brands (Chanel, Dior, Valentino, Prada) are treating Dubai as a Tier 1 event destination. You have credentials most competitors cannot match: direct experience with five global fashion houses, Mediterranean venue pedigree, and Italian heritage.
              </p>
              <p>
                The gap: Your current visibility is near zero. This plan fixes that.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">Who You&apos;re Targeting</h2>
            </div>
            
            <div className="grid gap-6">
              {[
                {
                  segment: "Luxury Fashion Brands",
                  examples: "Valentino, Gucci, Dior, Bulgari, Cartier",
                  need: "Local coordinator who understands European luxury standards",
                  approach: "Leverage your IF Experience credentials. They already know you deliver."
                },
                {
                  segment: "Luxury Retail Groups",
                  examples: "Chalhoub Group, Al Tayer Group, Etoile Group",
                  need: "Event partners for store launches, VIP nights, seasonal activations",
                  approach: "Position as bridge between European fashion and Gulf execution."
                },
                {
                  segment: "European Expats (HNWIs)",
                  examples: "Italian, French, British expats planning celebrations",
                  need: "Someone who gets their cultural references",
                  approach: "Italian heritage is your edge. They want someone who understands la dolce vita."
                },
                {
                  segment: "Luxury Hotels & Venues",
                  examples: "Bulgari Hotel, Armani Hotel, Atlantis The Royal",
                  need: "Event specialists for launches and programming",
                  approach: "Your Sottovento and Moni experience proves venue-level thinking."
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white border border-[#2C2825]/10">
                  <h3 className="font-serif text-xl mb-2">{item.segment}</h3>
                  <p className="text-sm text-[#C4856A] mb-3">{item.examples}</p>
                  <p className="text-[#4A4543] text-sm mb-2"><strong>What they need:</strong> {item.need}</p>
                  <p className="text-[#4A4543] text-sm"><strong>Your approach:</strong> {item.approach}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Estate Strategy */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10 bg-[#2C2825] text-[#F7F4F0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">Real Estate: The New Vertical</h2>
            </div>
            <p className="text-[#F7F4F0]/70 mb-10">
              You&apos;ve spent a year building experience with Meerad Real Estate and Omiyat. Now it&apos;s time to position this as a deliberate expansion, not a side hustle.
            </p>

            {/* The Opportunity */}
            <div className="mb-12">
              <h3 className="font-medium text-lg mb-4 text-[#C4856A]">The Opportunity</h3>
              <div className="space-y-4 text-[#F7F4F0]/80">
                <p>
                  Dubai&apos;s luxury real estate market hit <strong className="text-[#F7F4F0]">AED 528 billion</strong> in 2024. Off-plan sales to international buyers are at record highs. Europeans, especially Italians, are the fastest-growing buyer segment.
                </p>
                <p>
                  Most agents here are transactional. They show properties and close deals. But luxury buyers, especially expats, want someone who understands lifestyle. Someone who can say &quot;this building has the best sunset views for entertaining&quot; or &quot;this developer is known for actually delivering on time.&quot;
                </p>
                <p>
                  Your edge: <strong className="text-[#F7F4F0]">You already know the lifestyle.</strong> You&apos;ve managed events at these developments. You know which buildings attract which crowds. You understand what European buyers expect.
                </p>
              </div>
            </div>

            {/* Target Clients */}
            <div className="mb-12">
              <h3 className="font-medium text-lg mb-4 text-[#C4856A]">Who You&apos;re Targeting</h3>
              <div className="grid gap-4">
                {[
                  {
                    segment: "European Expats Relocating",
                    description: "Italians, French, British moving to Dubai. They want someone who speaks their language (literally) and understands what they're looking for.",
                    approach: "Position as the Italian who already made the move. You know the neighborhoods, the pitfalls, the visa process."
                  },
                  {
                    segment: "Event Clients Looking to Invest",
                    description: "HNWIs you meet through events who mention they're thinking about Dubai property. Natural cross-sell.",
                    approach: "Don't push. Just mention you also help with property. Let them come to you."
                  },
                  {
                    segment: "Investors Wanting Lifestyle Properties",
                    description: "People buying for rental yield but who want properties that actually look good, in buildings with amenities.",
                    approach: "Your eye for aesthetics is the differentiator. You know what photographs well, what impresses guests."
                  },
                  {
                    segment: "Developers Needing Sales Support",
                    description: "Off-plan projects targeting European buyers need agents who can speak to that market.",
                    approach: "Your Omiyat and Meerad experience proves you can work the developer side."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-5 bg-[#F7F4F0]/5 border border-[#F7F4F0]/10">
                    <h4 className="font-medium mb-2">{item.segment}</h4>
                    <p className="text-sm text-[#F7F4F0]/60 mb-2">{item.description}</p>
                    <p className="text-sm text-[#C4856A]">{item.approach}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Synergy */}
            <div className="mb-12">
              <h3 className="font-medium text-lg mb-4 text-[#C4856A]">Events + Real Estate: The Synergy</h3>
              <div className="p-6 bg-[#F7F4F0]/5 border border-[#F7F4F0]/10">
                <p className="text-[#F7F4F0]/80 mb-6">
                  This combination is rare. Most event managers don&apos;t sell property. Most agents don&apos;t understand luxury hospitality. You do both.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-medium mb-2 text-[#C4856A]">Events → Real Estate</p>
                    <ul className="space-y-2 text-[#F7F4F0]/70">
                      <li>• Event clients are often property buyers</li>
                      <li>• You meet HNWIs at every event</li>
                      <li>• You already know the luxury venues/buildings</li>
                      <li>• Trust is pre-built through event work</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2 text-[#C4856A]">Real Estate → Events</p>
                    <ul className="space-y-2 text-[#F7F4F0]/70">
                      <li>• Property buyers need housewarming events</li>
                      <li>• Developers need launch event support</li>
                      <li>• You can offer full lifestyle package</li>
                      <li>• Commission clients for both services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Positioning */}
            <div className="mb-12">
              <h3 className="font-medium text-lg mb-4 text-[#C4856A]">How to Position It</h3>
              <div className="space-y-4 text-[#F7F4F0]/80">
                <p>
                  Don&apos;t position as &quot;event manager who also does real estate.&quot; That sounds scattered.
                </p>
                <p>
                  Position as: <strong className="text-[#F7F4F0]">&quot;Luxury lifestyle consultant. Events and property.&quot;</strong>
                </p>
                <p>
                  The narrative: You help discerning clients live beautifully in Dubai. Sometimes that means planning their event. Sometimes it means finding their home. Often it means both.
                </p>
                <div className="mt-6 p-4 border border-[#C4856A]/30">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#C4856A] mb-2">Updated Tagline Options</p>
                  <ul className="space-y-2 text-sm">
                    <li>&quot;Luxury Events & Real Estate | Dubai&quot;</li>
                    <li>&quot;Italian Lifestyle Consultant | Events & Property | Dubai&quot;</li>
                    <li>&quot;Creating Beautiful Lives in Dubai | Events & Real Estate&quot;</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="font-medium text-lg mb-4 text-[#C4856A]">Real Estate: This Month</h3>
              <div className="space-y-3">
                {[
                  "Add 'Real Estate' to LinkedIn headline and website tagline",
                  "Create Instagram highlight: 'Properties' with best listings/viewings",
                  "Post 1 property-related content piece per week (viewing, market insight, building spotlight)",
                  "Ask Meerad/Omiyat contacts for a testimonial or recommendation",
                  "Identify 3 developments you'd want to specialize in (know them deeply)",
                  "Connect with 20 real estate professionals on LinkedIn (agents, developers, mortgage brokers)"
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-[#F7F4F0]/5">
                    <Key className="w-4 h-4 text-[#C4856A] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#F7F4F0]/80">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Estate Content Strategy */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Camera className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">Real Estate Content Ideas</h2>
            </div>

            <p className="text-[#4A4543] mb-8">
              Property content performs extremely well on Instagram and LinkedIn. It&apos;s visual, aspirational, and people love looking at luxury homes.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#EDE8E1]">
                <h3 className="font-medium mb-4">Instagram Content</h3>
                <ul className="space-y-3 text-[#4A4543] text-sm">
                  <li><strong>Property Tours:</strong> Reels walking through stunning apartments. These go viral.</li>
                  <li><strong>View Shots:</strong> Balcony views, sunset through floor-to-ceiling windows.</li>
                  <li><strong>Before/After:</strong> Empty apartment → styled for viewing.</li>
                  <li><strong>Market Tips:</strong> &quot;3 things European buyers overlook in Dubai&quot;</li>
                  <li><strong>Day in My Life:</strong> Viewings, client meetings, key handovers.</li>
                </ul>
              </div>

              <div className="p-6 bg-[#EDE8E1]">
                <h3 className="font-medium mb-4">LinkedIn Content</h3>
                <ul className="space-y-3 text-[#4A4543] text-sm">
                  <li><strong>Market Insights:</strong> &quot;What I&apos;m seeing in Dubai&apos;s luxury market this month&quot;</li>
                  <li><strong>Client Stories:</strong> &quot;Helped an Italian family relocate to Dubai Marina...&quot;</li>
                  <li><strong>Developer Spotlights:</strong> Why you recommend specific projects.</li>
                  <li><strong>Comparison Posts:</strong> Downtown vs Marina vs Palm for families.</li>
                  <li><strong>Lessons Learned:</strong> Mistakes buyers make, how to avoid them.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white border border-[#2C2825]/10">
              <h3 className="font-medium mb-4">Hashtag Strategy for Real Estate</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "#DubaiRealEstate", "#DubaiProperty", "#LuxuryDubai",
                  "#DubaiApartments", "#ExpatsInDubai", "#ItalianInDubai",
                  "#DubaiInvestment", "#OffPlanDubai", "#DubaiMarina",
                  "#DowntownDubai", "#PalmJumeirah", "#DubaiLife"
                ].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-[#EDE8E1] text-[#4A4543]">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Strategy */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10 bg-[#EDE8E1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Instagram className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">Instagram: Your Visual Portfolio</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-3">Handle Decision</h3>
                <p className="text-[#4A4543] mb-4">
                  <strong>@alesh_forc</strong> is personal. Consider transitioning to <strong>@alessiaforcellati</strong> or keeping personal and creating <strong>@alessia.events</strong> for professional content.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-3">Content Pillars (Post 3-4x per week)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Behind the Scenes", desc: "Event setup, team coordination, venue prep. Shows the work." },
                    { title: "Venue Spotlights", desc: "Tag luxury venues in Dubai, Mykonos, Sardinia. Builds network." },
                    { title: "Detail Shots", desc: "Tablescapes, florals, lighting, moments. Proves your eye." },
                    { title: "Personal Touch", desc: "Your perspective, travels, Italian lifestyle. Makes you human." },
                  ].map((pillar, index) => (
                    <div key={index} className="p-4 bg-white">
                      <h4 className="font-medium text-sm mb-1">{pillar.title}</h4>
                      <p className="text-[#4A4543] text-sm">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Stories Strategy</h3>
                <ul className="space-y-2 text-[#4A4543]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C4856A] mt-0.5 flex-shrink-0" />
                    <span>Daily stories when working events (real-time is powerful)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C4856A] mt-0.5 flex-shrink-0" />
                    <span>Highlights: &quot;Fashion,&quot; &quot;Weddings,&quot; &quot;Corporate,&quot; &quot;About Me&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C4856A] mt-0.5 flex-shrink-0" />
                    <span>Use location tags religiously (Dubai, specific venues)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-3">Hashtag Strategy</h3>
                <p className="text-[#4A4543] text-sm mb-2">Mix of reach and niche:</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "#LuxuryEventsDubai", "#DubaiEvents", "#EventPlannerDubai",
                    "#LuxuryWeddingsDubai", "#FashionEventsDubai", "#ItalianInDubai",
                    "#BrandActivation", "#VIPEvents", "#DestinationWedding"
                  ].map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white text-[#4A4543]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LinkedIn Strategy */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Linkedin className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">LinkedIn: Corporate Credibility</h2>
            </div>
            
            <div className="space-y-6 text-[#4A4543]">
              <p>
                LinkedIn is where Chalhoub Group, Al Tayer, and corporate clients will check you. It needs to be polished.
              </p>
              
              <div>
                <h3 className="font-medium text-[#2C2825] mb-3">Profile Optimization</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C4856A] mt-0.5 flex-shrink-0" />
                    <span><strong>Headline:</strong> &quot;Luxury Event Manager | Fashion Brand Activations | Dubai&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C4856A] mt-0.5 flex-shrink-0" />
                    <span><strong>About:</strong> Your story from Rome to Dubai. Mention Valentino, Chanel, Dior by name.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C4856A] mt-0.5 flex-shrink-0" />
                    <span><strong>Featured:</strong> Link to alessiaforcellati.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C4856A] mt-0.5 flex-shrink-0" />
                    <span><strong>Experience:</strong> Add all roles with detailed descriptions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-[#2C2825] mb-3">Content (1-2x per week)</h3>
                <ul className="space-y-2">
                  <li>Event industry insights (Dubai market trends, fashion calendar)</li>
                  <li>Behind-the-scenes from events (professional angle)</li>
                  <li>Lessons learned posts (&quot;What working with Valentino taught me about...&quot;)</li>
                  <li>Congratulate clients on successful events (tags = visibility)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-[#2C2825] mb-3">Networking Actions</h3>
                <ul className="space-y-2">
                  <li>Connect with: Marketing managers at Chalhoub, Al Tayer, Etoile</li>
                  <li>Connect with: PR agencies in Dubai (they refer event planners)</li>
                  <li>Connect with: Hotel event managers (Bulgari, Armani, Four Seasons)</li>
                  <li>Join: Dubai Event Professionals groups</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Calendar */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10 bg-[#EDE8E1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">2026 Content Calendar</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  month: "March - April",
                  focus: "Foundation",
                  actions: [
                    "Optimize LinkedIn profile completely",
                    "Decide Instagram strategy (rebrand or dual accounts)",
                    "Collect 10-15 high-quality event photos for content",
                    "Write 5 caption templates for recurring post types",
                    "Request LinkedIn recommendations from IF Experience, Moni contacts"
                  ]
                },
                {
                  month: "May - June",
                  focus: "Dubai Fashion Season + Ramadan Events",
                  actions: [
                    "Post about Eid event trends (huge market)",
                    "Tag luxury hotels hosting iftar events",
                    "Dubai Fashion Week content if involved",
                    "Connect with fashion PR agencies before busy season"
                  ]
                },
                {
                  month: "July - August",
                  focus: "Mediterranean Season",
                  actions: [
                    "Throwback content from Mykonos, Sardinia",
                    "Destination wedding content (peak Europe season)",
                    "Position as Dubai + Mediterranean specialist",
                    "Network with European clients planning Dubai winter events"
                  ]
                },
                {
                  month: "September - October",
                  focus: "Dubai Season Launch",
                  actions: [
                    "Dubai social season kicks off (cooler weather)",
                    "Fashion brand activations increase",
                    "Corporate event season begins",
                    "Heavy LinkedIn activity targeting corporate clients"
                  ]
                },
                {
                  month: "November - December",
                  focus: "Peak Season",
                  actions: [
                    "Dubai Shopping Festival activations",
                    "National Day events (Dec 2)",
                    "Year-end corporate galas",
                    "Holiday party season",
                    "Document everything for 2027 portfolio"
                  ]
                }
              ].map((quarter, index) => (
                <div key={index} className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl">{quarter.month}</h3>
                    <span className="text-xs tracking-[0.2em] uppercase text-[#C4856A]">{quarter.focus}</span>
                  </div>
                  <ul className="space-y-2">
                    {quarter.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#4A4543] text-sm">
                        <CheckCircle className="w-4 h-4 text-[#C4856A] mt-0.5 flex-shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Networking */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Handshake className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">Strategic Networking</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#EDE8E1]">
                <h3 className="font-medium mb-4">Events Network</h3>
                <ul className="space-y-3 text-[#4A4543] text-sm">
                  <li><strong>PR Agencies:</strong> They get event briefs first. Be their go-to referral.</li>
                  <li><strong>Hotel Event Managers:</strong> They need external planners for complex events.</li>
                  <li><strong>Wedding Photographers:</strong> Cross-referral network.</li>
                  <li><strong>Florists & Decor:</strong> They know who&apos;s planning what.</li>
                  <li><strong>Italian Business Council Dubai:</strong> Your people.</li>
                </ul>
              </div>

              <div className="p-6 bg-[#EDE8E1]">
                <h3 className="font-medium mb-4">Real Estate Network</h3>
                <ul className="space-y-3 text-[#4A4543] text-sm">
                  <li><strong>Mortgage Brokers:</strong> They know who&apos;s actively buying.</li>
                  <li><strong>Relocation Consultants:</strong> First contact for expats moving to Dubai.</li>
                  <li><strong>Interior Designers:</strong> Buyers need staging and design help.</li>
                  <li><strong>Developer Sales Teams:</strong> Omiyat, Emaar, Meraas contacts.</li>
                  <li><strong>European Consulates:</strong> Expat community connections.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-6 bg-[#EDE8E1]">
              <h3 className="font-medium mb-4">Events to Attend (Both Verticals)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-[#4A4543] text-sm">
                  <li><strong>Dubai Fashion Week:</strong> Your credentials get you in rooms.</li>
                  <li><strong>Art Dubai:</strong> HNWI concentration.</li>
                  <li><strong>Italian Chamber events:</strong> Expat network.</li>
                </ul>
                <ul className="space-y-3 text-[#4A4543] text-sm">
                  <li><strong>Property launches:</strong> Developer events, showroom openings.</li>
                  <li><strong>Cityscape Dubai:</strong> Real estate expo, major networking.</li>
                  <li><strong>Expat networking events:</strong> InterNations, etc.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO & Website */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10 bg-[#EDE8E1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">SEO & Website Growth</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Target Keywords</h3>
                <p className="text-[#4A4543] text-sm mb-4">These are what potential clients Google:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white">
                    <p className="font-medium text-sm mb-2">Events: High Intent</p>
                    <ul className="text-[#4A4543] text-sm space-y-1">
                      <li>&quot;luxury event planner Dubai&quot;</li>
                      <li>&quot;fashion event planner Dubai&quot;</li>
                      <li>&quot;Italian event planner Dubai&quot;</li>
                      <li>&quot;brand activation Dubai&quot;</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="font-medium text-sm mb-2">Real Estate: High Intent</p>
                    <ul className="text-[#4A4543] text-sm space-y-1">
                      <li>&quot;Italian real estate agent Dubai&quot;</li>
                      <li>&quot;European expat property Dubai&quot;</li>
                      <li>&quot;luxury apartments Dubai Marina&quot;</li>
                      <li>&quot;off-plan property Dubai&quot;</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Blog Content Ideas (Add Later)</h3>
                <p className="text-[#4A4543] text-sm mb-4">Each post targets a keyword and builds authority:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-sm mb-2 text-[#C4856A]">Events</p>
                    <ul className="space-y-2 text-[#4A4543] text-sm">
                      <li>&quot;Planning a Luxury Brand Activation in Dubai&quot;</li>
                      <li>&quot;Italian Design Principles in Event Styling&quot;</li>
                      <li>&quot;Destination Wedding Planning: Dubai vs Mediterranean&quot;</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-2 text-[#C4856A]">Real Estate</p>
                    <ul className="space-y-2 text-[#4A4543] text-sm">
                      <li>&quot;An Italian&apos;s Guide to Buying Property in Dubai&quot;</li>
                      <li>&quot;Best Dubai Neighborhoods for European Expats&quot;</li>
                      <li>&quot;Off-Plan vs Ready: What First-Time Dubai Buyers Should Know&quot;</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photography */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Camera className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">Visual Content Strategy</h2>
            </div>
            
            <div className="space-y-6 text-[#4A4543]">
              <p>
                Your website and social media live or die by imagery. Every event is a content opportunity.
              </p>
              
              <div className="p-6 bg-[#EDE8E1]">
                <h3 className="font-medium text-[#2C2825] mb-4">At Every Event, Capture:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2">
                    <li>• Wide venue shots (atmosphere)</li>
                    <li>• Detail shots (tablescapes, florals, lighting)</li>
                    <li>• Setup/breakdown (shows the work)</li>
                    <li>• Your team in action</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Guest reactions (with permission)</li>
                    <li>• Brand moments (logos, products)</li>
                    <li>• You working (not posed, candid)</li>
                    <li>• Video clips for reels</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Professional Headshots</h3>
                <p className="text-sm">
                  Invest in a proper photoshoot. You need: 1 hero portrait for the website, 2-3 candid working shots, 1 LinkedIn headshot. Style: natural light, warm tones, confident but approachable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-20 border-b border-[#2C2825]/10 bg-[#EDE8E1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">Success Metrics</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { metric: "Website Inquiries", target: "5+ per month", by: "Q4 2026" },
                { metric: "Instagram Followers", target: "2,000+", by: "End of 2026" },
                { metric: "LinkedIn Connections", target: "500+ in industry", by: "Q3 2026" },
                { metric: "Google Ranking", target: "Page 1 for 'Italian event planner Dubai'", by: "Q4 2026" },
                { metric: "Portfolio Projects", target: "10+ documented events", by: "End of 2026" },
                { metric: "Property Transactions", target: "3+ closed deals", by: "End of 2026" },
                { metric: "Real Estate Network", target: "5+ developer relationships", by: "Q3 2026" },
                { metric: "Cross-Referrals", target: "Events ↔ Property clients", by: "Q4 2026" },
                { metric: "Referral Sources", target: "5+ active partners (both verticals)", by: "Q3 2026" },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white text-center">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#C4856A] mb-2">{item.metric}</p>
                  <p className="font-serif text-2xl mb-1">{item.target}</p>
                  <p className="text-[#4A4543] text-sm">by {item.by}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-16 md:py-20 bg-[#2C2825] text-[#F7F4F0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-5 h-5 text-[#C4856A]" />
              <h2 className="font-serif text-2xl">This Week: Quick Wins</h2>
            </div>
            
            <div className="space-y-4">
              {[
                "Update LinkedIn headline to 'Luxury Events & Real Estate | Dubai'",
                "Add alessiaforcellati.com to LinkedIn, Instagram bio, email signature, WhatsApp status",
                "Request 3 LinkedIn recommendations from former colleagues (events + real estate)",
                "Create Instagram highlight for 'Properties' alongside 'Events'",
                "Follow 50 relevant accounts (Dubai venues, developers, luxury lifestyle)",
                "Post 1 property tour reel this week (they perform extremely well)",
                "Send website link to 5 people who might refer you for either service",
              ].map((task, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-[#F7F4F0]/5">
                  <span className="font-serif text-xl text-[#C4856A]">{index + 1}</span>
                  <p className="text-[#F7F4F0]/90">{task}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mentor Note */}
      <section className="py-20 md:py-28 bg-[#F7F4F0]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-6">
              A Note on the Hard Part
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-10">
              What nobody tells you about building a name in this industry.
            </h2>
            
            <div className="space-y-6 text-[#4A4543] leading-relaxed">
              <p>
                I moved from Milan to Dubai eleven years ago. I remember the first year vividly. You know you can do the work. You&apos;ve done it at the highest level. But saying it out loud feels wrong. Posting about yourself feels desperate. Calling yourself an expert feels arrogant.
              </p>
              
              <p>
                So you stay quiet. You wait for the work to speak for itself. You tell yourself that good work gets noticed.
              </p>
              
              <p>
                It doesn&apos;t. Not here. Not in a city where everyone is loud and new people arrive every week with flashy portfolios and big claims. The modest ones get overlooked. The ones who &quot;let the work speak&quot; get drowned out by the ones who won&apos;t shut up about their work.
              </p>
              
              <p>
                That&apos;s not a call to become someone you&apos;re not. But it&apos;s a reality check.
              </p>

              <div className="my-10 py-8 border-t border-b border-[#2C2825]/10">
                <p className="font-serif text-xl text-[#2C2825] mb-6">
                  Here is what I know about your situation:
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>You worked for houses that reject 99% of applicants.</strong> Valentino, Chanel, Dior do not hand responsibility to people who aren&apos;t exceptional. You were there for three years. That&apos;s not luck. That&apos;s earned.
                  </li>
                  <li>
                    <strong>You ran one of Mykonos&apos; most exclusive venues.</strong> Moni doesn&apos;t promote people who can&apos;t handle pressure, discretion, and clientele who expect perfection. You were the manager, not an assistant.
                  </li>
                  <li>
                    <strong>You started at Sottovento.</strong> Most people in Dubai have never heard of it. But anyone who knows Mediterranean nightlife knows that&apos;s where you learn hospitality at its highest form. You absorbed that before you were twenty-five.
                  </li>
                  <li>
                    <strong>You moved countries three times to grow.</strong> Rome to Sardinia to Mykonos to Dubai. Each move required starting over, proving yourself again, adapting to new cultures. That resilience is rare.
                  </li>
                </ul>
              </div>

              <p>
                I&apos;m not saying this to make you feel good. I&apos;m saying it because you need to understand what you&apos;re actually working with.
              </p>
              
              <p>
                Most event planners in Dubai learned on the job here. You learned at fashion weeks in Milan and Florence. That&apos;s a different standard. When you feel like an imposter, remember: you&apos;re not competing with their experience. You&apos;re bringing something they don&apos;t have.
              </p>

              <div className="my-10 py-8 border-t border-b border-[#2C2825]/10">
                <p className="font-serif text-xl text-[#2C2825] mb-6">
                  The mindset shifts that helped me:
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>Self-promotion is client service.</strong> If someone needs a luxury event manager with fashion credentials, and they can&apos;t find you because you&apos;re too modest to be visible, you&apos;re not being humble. You&apos;re failing them before they even have a chance to hire you.
                  </li>
                  <li>
                    <strong>Your website isn&apos;t bragging. It&apos;s information.</strong> You&apos;re not claiming to be the best. You&apos;re showing what you&apos;ve done, where you&apos;ve worked, and how to reach you. That&apos;s basic professionalism. The only thing worse than talking about yourself is having nothing to show when someone asks.
                  </li>
                  <li>
                    <strong>The discomfort doesn&apos;t go away. You just do it anyway.</strong> I still feel strange posting about my events. Eleven years in. But I do it because I know what happens when I don&apos;t: someone less qualified gets the call instead.
                  </li>
                  <li>
                    <strong>You don&apos;t need to be loud. You need to be findable.</strong> There&apos;s a difference between shouting and being present. Your website, a clean LinkedIn, consistent Instagram. That&apos;s not aggressive marketing. That&apos;s just existing professionally in 2026.
                  </li>
                  <li>
                    <strong>One yes changes everything.</strong> You don&apos;t need hundreds of clients. You need one Chalhoub project, one high-profile wedding, one venue partnership that leads to referrals. This is a word-of-mouth industry. Your job isn&apos;t to convince the masses. It&apos;s to be ready when the right person looks.
                  </li>
                </ul>
              </div>

              <p>
                Dubai is hard on newcomers. It rewards confidence and penalizes hesitation. But it also rewards quality once you break through. The city forgets quickly, but it also gives second chances quickly. If you&apos;re not getting traction now, you can reset and try differently next season.
              </p>
              
              <p>
                The Italian community here is tight. Use it. The fashion brands already know your name from Europe, even if you don&apos;t realize it. Event managers talk to each other. Your reputation from IF Experience and Moni precedes you more than you think.
              </p>
              
              <p>
                The hardest part of this industry isn&apos;t the events. It&apos;s showing up consistently when you don&apos;t feel like it, posting when you&apos;d rather stay quiet, and sending the email when you&apos;re not sure they&apos;ll respond.
              </p>
              
              <p className="font-serif text-xl text-[#2C2825] mt-10">
                You have the credentials. Now the only job is to stop hiding them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-[#EDE8E1] border-t border-[#2C2825]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[#4A4543] text-sm">
            This document is private. Bookmark it and revisit monthly.
          </p>
          <p className="text-[#4A4543]/50 text-xs mt-2">
            Last updated: March 2026
          </p>
        </div>
      </section>
    </div>
  );
}
