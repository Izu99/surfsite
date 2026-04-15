export type BlogPost = {
  id: number
  title: string
  slug: string
  description: string
  content: string
  image: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: string
  published: boolean
  featured: boolean
}

export const CATEGORIES = ['Surf Tips', 'Sri Lanka', 'Gear', 'Lifestyle', 'News']

export const initialBlogs: BlogPost[] = [
  {
    id: 1,
    title: "Hirikatiya Beach: Sri Lanka's Best Kept Surfing Secret",
    slug: 'hirikatiya-beach-best-surfing-secret',
    description:
      "Nestled on Sri Lanka's southern coast, Hirikatiya Beach offers world-class waves, warm water, and a laid-back vibe that keeps surfers coming back season after season.",
    content: `Hirikatiya Beach sits quietly on Sri Lanka's southern coastline, just a short drive from the more famous Mirissa. But for those in the know, Hirikatiya has long been considered the jewel of Sri Lankan surfing — a horseshoe-shaped bay that catches swell from nearly every direction and serves up waves suitable for every skill level.

## Why Hirikatiya Stands Out

Unlike the crowded breaks of Arugam Bay or the unpredictable swells of Unawatuna, Hirikatiya offers something rare: consistency. The bay's unique geography means that even on days when the rest of the coast is flat, Hirikatiya almost always has something rideable. The left-hand point break on the western side of the bay is a particular favourite among intermediate surfers, offering long, clean walls that invite carving and progression.

## The Water

The Indian Ocean water here sits at a comfortable 27–29°C year-round, making wetsuits unnecessary and extending sessions naturally. Visibility is excellent, and the sandy bottom (with occasional reef sections) means it's forgiving for beginners learning to fall.

## The Vibe

Hirikatiya has grown steadily over the past decade from a quiet fishing village to a surf destination, but it hasn't lost its soul. The main strip features a handful of surf schools, yoga studios, and beachfront cafes serving fresh coconuts and rice-and-curry. Evenings are for watching the sunset from the beach, not partying in clubs.

## Getting Here

The nearest town with bus connections is Dickwella, about 3km away. From Colombo, it's a 3.5-hour drive south along the coastal highway. Most surf camps — including ours — offer airport transfers from Colombo or Mattala.

## When to Come

The primary surf season runs from October through April, with the most consistent swells typically arriving in December and January. The offshore winds in the morning create picture-perfect grooming conditions. Even during the shoulder months (May and September), you'll find smaller but perfectly manageable waves ideal for lessons.

If you've been dreaming of tropical surf in an authentic Sri Lankan setting, Hirikatiya should be at the top of your list.`,
    image:
      'https://plus.unsplash.com/premium_photo-1672509995777-ede97d83c304?q=80&w=870&auto=format&fit=crop',
    category: 'Sri Lanka',
    tags: ['Hirikatiya', 'Sri Lanka', 'Beach', 'Travel'],
    author: 'Noah Fernando',
    date: '2026-04-10',
    readTime: '5 min read',
    published: true,
    featured: true,
  },
  {
    id: 2,
    title: '5 Essential Surfing Tips for Complete Beginners',
    slug: '5-essential-surfing-tips-beginners',
    description:
      'Starting your surf journey? These five fundamentals will shorten your learning curve and get you standing on the board faster than you think.',
    content: `Learning to surf is one of the most rewarding physical challenges you'll ever take on. It demands balance, timing, strength, and a willingness to get knocked around by the ocean. But with the right foundations in place, even total beginners can be standing up and riding waves within a few sessions. Here are the five tips our instructors at Noah Surf School share with every new student.

## 1. Master the Pop-Up on Land First

The "pop-up" — transitioning from lying flat to standing — is the single most important technique in surfing. Before you enter the water, practice it on the beach until it's automatic. Lie flat on your board, place your hands near your chest (not at the rails), push up explosively, and land with your feet hip-width apart, back foot across the tail, front foot centred. The movement should feel like one fluid jump, not a three-step crawl.

## 2. Choose the Right Board

Beginners should always start on a foam longboard (a "foamie") of at least 8 feet. The extra volume makes paddling easier and provides a stable platform for learning to stand. Resist the urge to jump onto a shortboard early — you'll spend more time paddling back out than actually riding waves.

## 3. Read the Waves Before You Paddle

Spend five minutes watching the break before you get in the water. Notice where the waves are forming (the "peak"), which direction they're peeling, and where other surfers are positioning themselves. Understanding how to read waves is what separates surfers who progress quickly from those who stay frustrated for months.

## 4. Paddle Efficiently

Poor paddling technique is the number-one reason beginners struggle. Keep your body centred on the board (not too far back, not too far forward), cup your hands slightly, and use long, deep strokes that reach forward and pull through to your hip. Your head should be up and your chest slightly arched.

## 5. Fall Safely

Falling is inevitable — even pros fall constantly. The key is falling away from your board (not onto it), covering your head with your arms as you surface, and always surfacing slowly to check for your board and other surfers before opening your eyes. Never dive headfirst into unknown water.

Start with these five principles and you'll be amazed at how quickly you progress. See you in the water.`,
    image:
      'https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?q=80&w=2070&auto=format&fit=crop',
    category: 'Surf Tips',
    tags: ['Beginners', 'Tips', 'Technique', 'Learning'],
    author: 'Noah Fernando',
    date: '2026-03-28',
    readTime: '6 min read',
    published: true,
    featured: false,
  },
  {
    id: 3,
    title: 'Choosing the Right Surfboard for Sri Lanka Conditions',
    slug: 'choosing-right-surfboard-sri-lanka',
    description:
      "Sri Lanka's warm, varied surf calls for specific board choices. Here's how to pick the right shape and volume for Hirikatiya's waves.",
    content: `Selecting the right surfboard can make the difference between a frustrating session and a breakthrough one. Sri Lanka's conditions — warm water, mostly mellow point breaks and beach breaks with occasional powerful reef sections — call for specific board shapes. Here's how to choose.

## Understanding Volume

Volume (measured in litres) determines how well a board floats and how easy it is to paddle. As a rule of thumb, beginners should ride a board with volume equal to or greater than their body weight in kilos. So if you weigh 75kg, look for a board of at least 75 litres.

As you improve, you'll want to reduce volume gradually, which increases the board's responsiveness and turns but makes paddling harder.

## For Beginners: The Foam Longboard

8–10 feet, 80–110L. All our beginner lessons use these. They're virtually indestructible, easy to paddle, and stable enough to stand on confidently. The soft foam deck means falls hurt less.

## For Intermediates: The Mini-Mal or Funboard

7–8 feet, 55–75L. Once you can consistently catch and ride waves to the shoulder, step down to a mini-malibu or funboard. These offer more manoeuvrability than a longboard while retaining enough volume to catch slower waves.

## For Advanced: The Shortboard

5'8"–6'4", 26–38L. For more powerful, steeper waves on reef sections. High performance surfing — snaps, cutbacks, barrels. Requires strong paddling fitness and precise timing.

## Conditions at Hirikatiya

Most of the year, Hirikatiya's waves are in the 2–4 foot range — ideal for beginners and intermediates. On big swell days (December–January), the point break can reach 6+ feet and is best suited to experienced surfers on shortboards or mid-lengths.

## Rent Before You Buy

When you're in Sri Lanka for a week or two, renting makes far more financial sense than buying and trying to transport a board home. At our school we stock everything from foam longboards to high-performance shortboards — and our instructors will recommend the right one for your level each session.`,
    image:
      'https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?q=80&w=2070&auto=format&fit=crop',
    category: 'Gear',
    tags: ['Surfboards', 'Equipment', 'Gear', 'Beginner'],
    author: 'Kasun Perera',
    date: '2026-03-15',
    readTime: '7 min read',
    published: true,
    featured: false,
  },
  {
    id: 4,
    title: 'Sri Lanka Surf Season: Month-by-Month Guide',
    slug: 'sri-lanka-surf-season-guide',
    description:
      "Plan your Sri Lanka surf trip around the best swells. Our month-by-month breakdown covers wave quality, crowds, and what to expect at Hirikatiya Beach.",
    content: `Sri Lanka is blessed with two distinct surf seasons thanks to the island's position in the Indian Ocean — the south and west coasts peak from October to April, while the east coast (Arugam Bay) fires from May to September. This means surf is available year-round somewhere on the island. Here's what to expect at Hirikatiya on the south coast.

## October–November: Transition Season

The southwest monsoon is winding down. Waves are inconsistent but starting to pick up. Water is warm (28°C+), crowds are minimal, and accommodation prices are at their lowest. Perfect for surfers who want uncrowded lineups and don't mind some flat days mixed in.

## December–January: Peak Season

The best months to surf Hirikatiya. The northeast trade winds create offshore conditions in the morning, and powerful swells generated in the southern Indian Ocean push through. Expect 3–6 foot waves on regular days, with 8–10 foot sets on overhead swells. Book accommodation early — the village fills up fast.

## February–March: Still Excellent

Slightly less consistent than December–January but still very good. Waves in the 2–5 foot range. The crowds have thinned out post-January school holidays, making this one of the best value times to visit.

## April: Shoulder Season

Hit or miss. Some incredible swells can arrive, but the monsoon transition brings unpredictability. Generally a good month for intermediate surfers — less power means it's more forgiving, and the breaks are perfect for progressing technique.

## May–September: Off Season

The southwest monsoon brings onshore winds and messy conditions to the south coast. This is when experienced local surfers head to Arugam Bay on the east coast for its world-class right-hand point break.

## Our Recommendation

For first-time visitors, aim for December–February. For budget-conscious travellers wanting good (but not epic) conditions, March and October are excellent. Whatever month you choose, our instructors are here year-round.`,
    image:
      'https://images.unsplash.com/photo-1455729552865-3658a5d39692?q=80&w=2070&auto=format&fit=crop',
    category: 'Sri Lanka',
    tags: ['Travel', 'Seasons', 'Sri Lanka', 'Planning'],
    author: 'Noah Fernando',
    date: '2026-02-20',
    readTime: '6 min read',
    published: true,
    featured: false,
  },
  {
    id: 5,
    title: 'Why Yoga and Surfing Are the Perfect Pair',
    slug: 'yoga-and-surfing-perfect-pair',
    description:
      'Flexibility, breath control, balance, and mental focus — the benefits of yoga translate directly to surfing performance. Here is why we combine both at our surf camps.',
    content: `At Noah Surf School, every multi-day camp includes a morning yoga session before the surf lesson. This isn't a gimmick or just a nice wellness add-on — it's a deliberate training choice backed by what we've observed in hundreds of students over the years.

## Balance and Core Stability

Surfing demands constant micro-adjustments from your core. Every wave, every turn, every moment on the board requires your stabilising muscles to fire rapidly. Yoga — especially practices like Vinyasa and Hatha — trains exactly these muscles through sustained holds and flowing sequences.

Students who arrive with a consistent yoga practice typically reach their first successful standing rides faster than those without. The body already knows how to be stable.

## Hip Flexibility for the Pop-Up

The pop-up requires explosive hip flexor engagement. Tight hips are one of the most common limiters we see in adult beginners. Yoga's emphasis on hip openers — warrior poses, pigeon pose, lizard lunge — directly addresses this and makes the pop-up movement more natural and faster.

## Breath Control Under Pressure

Being held under by a wave is one of the most confronting experiences in surfing. Your instinct is to panic. Yogic breathing — specifically the Ujjayi breath — trains you to stay calm when oxygen feels scarce. This translates to safer hold-downs and faster recovery between waves.

## Mental Presence

Surfing is a presence sport. Thinking about what you should have done on the last wave means you miss the next one. Meditation and the mindfulness cultivated in yoga practice are identical to what surfers call "being in the flow." Students who arrive with a meditation practice tend to progress faster and enjoy their sessions more.

## Our Surf & Yoga Camp

Our 5-day Surf & Yoga Camp at Hirikatiya combines two morning yoga sessions (sunrise on the beach) with two daily surf lessons. Accommodation, meals, and board rental are included. It's the most popular programme we offer, and consistently our most reviewed experience.`,
    image:
      'https://images.unsplash.com/photo-1669488510582-5ff5f465b83a?q=80&w=871&auto=format&fit=crop',
    category: 'Lifestyle',
    tags: ['Yoga', 'Fitness', 'Wellness', 'Training'],
    author: 'Amara Silva',
    date: '2026-02-05',
    readTime: '5 min read',
    published: true,
    featured: false,
  },
  {
    id: 6,
    title: 'Noah Surf School Wins Sri Lanka Tourism Award 2026',
    slug: 'noah-surf-school-tourism-award-2026',
    description:
      "We're proud to announce that Noah Surf School has been recognised as Best Adventure Tourism Experience by the Sri Lanka Tourism Development Authority.",
    content: `We are thrilled to share that Noah Surf School has been awarded the Best Adventure Tourism Experience at the 2026 Sri Lanka Tourism Development Authority (SLTDA) Excellence Awards, held in Colombo last month.

## About the Award

The SLTDA Excellence Awards recognise outstanding contributions to Sri Lanka's tourism industry across 15 categories. The Best Adventure Tourism Experience award evaluates operators on safety standards, environmental responsibility, guest experience quality, and positive impact on local communities.

## What This Means

Winning this award is a reflection of the incredible team we have built over the past 14 years. Every instructor, every support staff member, every person who has contributed to the Noah Surf School experience — this recognition belongs to all of you.

It's also a reflection of the students and travellers who chose us, trusted us with their first ocean experiences, and shared their stories with their friends and families back home.

## Our Commitment to Hirikatiya

Part of the award criteria was community impact. We are proud that over 70% of our team members are from the local Hirikatiya and Dickwella community. We have trained 40 local young people as certified surf instructors through our ISA-accredited instructor development programme, and we partner with local guesthouses and restaurants to keep the economic benefits of tourism within the community.

## What's Next

We will use this recognition to continue improving our programmes and to launch two new initiatives in 2026: a free-to-access children's surf programme for local kids aged 8–16, and a coral reef monitoring partnership with the Marine Environment Research Institute of Sri Lanka.

Thank you to everyone who has been part of the Noah Surf School journey. The ocean gave us all of this. We try to give back accordingly.`,
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    category: 'News',
    tags: ['Award', 'News', 'Achievement', 'Community'],
    author: 'Noah Fernando',
    date: '2026-01-18',
    readTime: '4 min read',
    published: true,
    featured: false,
  },
]
