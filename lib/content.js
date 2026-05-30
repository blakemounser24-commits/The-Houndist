// All content is taken verbatim from the supplied Houndist PDF (source of truth).
// FAQ answers that were collapsed in the source are reconstructed strictly from
// facts stated elsewhere in the PDF; see README for the few items that need
// Orlando's exact wording.

export const business = {
  name: "The Houndist",
  region: "Berowra & Berowra Heights",
  phone: "0497 925 319",
  email: "Orlando.james@thehoundist.com",
  facebook: "@TheHoundist",
  instagram: "@The_Houndist",
  address: "Berowra NSW 2081, Australia",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Berowra+NSW+2081+Australia",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=The+Houndist+Berowra",
};

export const hero = {
  eyebrow: "Berowra & Berowra Heights",
  titleLines: [
    ["Your", "Dog", "Deserves", { text: "Better", accent: true }],
    ["Than", "Average"],
  ],
  subhead:
    "Professional dog walking and sitting — GPS-tracked, training-included, and tailored to every tail. Available 7am–7pm daily for walks, and 24 hours for sitting.",
  primaryCta: "Book a Consultation",
  secondaryCta: "View Pricing",
  stats: [
    { value: "4", label: "Dogs Max Per Walk" },
    { value: "GPS", label: "Strava Tracked" },
    { value: "Free", label: "Basic Training Included" },
  ],
};

export const offer = {
  eyebrow: "What We Offer",
  title: "Premium Care, Every Time",
  sub: "Every service comes with free basic training, Strava tracking, and individual attention to your dog's needs.",
  cards: [
    {
      tag: "01",
      title: "Dog Walking",
      body: "Precisely timed walks from 20 to 120 minutes. Flexible scheduling 7am–7pm, Monday to Sunday. Strava-tracked for your peace of mind.",
    },
    {
      tag: "02",
      title: "In-Home 24hr Sitting",
      body: "Overnight premium care in your home. Includes walks, feeding, medication, enrichment, and constant companionship — never left alone more than 2 hours.",
    },
    {
      tag: "03",
      title: "Packages & Visits",
      body: "Flexible daytime in-home visits and walk packages over 120-day periods. Ideal for regular clients wanting convenience and value.",
    },
  ],
};

export const pricing = {
  eyebrow: "Transparent Pricing",
  title: "Clear Rates, No Surprises",
  sub: "All prices are for a single dog. Additional dogs and multi-dog households have simple add-on fees listed below.",
  walkingTitle: "Dog Walking Rates",
  walks: [
    { duration: "20 min", note: "Ideal for older / low-energy dogs", price: "$18" },
    { duration: "30 min", note: "Standard walk", price: "$24" },
    { duration: "45 min", note: "Best balance of time and value", price: "$32", flag: "Popular" },
    { duration: "60 min", note: "Premium walk", price: "$40", flag: "Premium" },
    { duration: "90 min", note: "Extended adventure", price: "$55" },
    { duration: "120 min", note: "Full adventure walk", price: "$70" },
  ],
  walksFootnote: "All walks are timed from departure — not including set-up or wind-down.",
  sitting: {
    title: "Premium 24-Hour In-Home Sitting",
    price: "$180",
    per: "per night",
    note: "Indicative for 2 dogs with 30-min walks · Enquire for a personalised quote",
    includes: [
      "2 x walks included",
      "Feeding & medication",
      "Basic training",
      "Cleaning & tidying",
      "Enrichment & play",
      "Overnight stay",
      "Emergency-ready",
      "Max 2hr alone",
    ],
  },
  visitsTitle: "Daytime In-Home Visits",
  visits: [
    { label: "1 × 30 min visit", price: "$20" },
    { label: "1 × 60 min visit", price: "$35" },
    { label: "2 × 30 min visits", price: "$40" },
    { label: "2 × 60 min visits", price: "$70" },
  ],
};

export const multiDog = {
  eyebrow: "Multi-Dog Rates",
  title: "Additional Companion Fees",
  sub: "Up to 4 dogs per household. Each additional dog is priced simply — no surprises.",
  cards: [
    { label: "30 min Walk", price: "+$10", per: "per additional dog" },
    { label: "45 min Walk", price: "+$15", per: "per additional dog" },
    {
      label: "60 min Walk",
      price: "+$20",
      per: "per additional dog (dog 2)",
      extra: ["3rd dog: +$15", "4th dog: +$10"],
    },
  ],
};

export const packages = {
  eyebrow: "Recurring Walks",
  title: "Packages & Bulk Options",
  sub: "For regular clients, package deals are available with flexible scheduling over a 120-day period.",
  callout:
    "Package-based pricing is available for recurring clients walking 1+ times per week. Contact Orlando directly for a tailored quote based on your preferred walk duration and frequency. Two-dog packages are also available.",
  cta: "Enquire About Packages",
};

export const reviews = {
  eyebrow: "Google Reviews",
  title: "What Clients Are Saying",
  sub: "Real reviews from real dog owners in Berowra & Berowra Heights.",
  rating: "5.0",
  ratingMeta: "10 reviews · All 5 stars",
  cta: "See All Reviews on Google Maps",
  items: [
    {
      name: "Robert Edgar",
      when: "1 week ago · Google Review",
      text: "The Houndist service is excellent. He clearly loves the dogs and what he does — highly recommended.",
    },
    {
      name: "Ruth Wicks",
      when: "2 weeks ago · Google Review",
      text: "Orlando is brilliant to deal with. He is reliable, communicates proactively and professionally and shows a real love for our dogs. He takes photos, feeds back on their behaviour and provides little anecdotes which are lovely to receive. I would 100% recommend employing his services!",
    },
    {
      name: "Brendan Wicks",
      when: "2 weeks ago · Google Review",
      text: "Orlando offers an amazing service! His communication is excellent, and he never misses the small details that make a big difference. I can't recommend him highly enough.",
    },
    {
      name: "Emma Power",
      when: "4 weeks ago · Google Review",
      text: "Orlando walks our dogs, Ted & Millie weekly. He also minds them in our home when we need to go away. He takes really good care of them and sends me regular updates. Highly recommend!",
    },
    {
      name: "Kath Edgar",
      when: "2 months ago · Google Review",
      text: "Orlando, AKA The Houndist, has been walking our dogs for a while now. He is excellent and I couldn't rate him higher. He is attentive, has excellent communication skills and treats my dog like his own.",
    },
    {
      name: "Rochelle Barker",
      when: "2 months ago · Google Review",
      text: "I have seen how Orlando treats dogs — he is very kind and considerate of their needs. Offers shade and water when needed. I recommend him.",
    },
    {
      name: "Elisa Townsend",
      when: "4 months ago · Google Review",
      text: "We found Orlando to be very helpful, friendly and professional. He took great care of our cat and property while we were away, and sent regular updates and photos. I would not hesitate to recommend him.",
    },
    {
      name: "Scott Wallace",
      when: "4 months ago · Google Review",
      text: "Orlando is the best. Always on time and eager to please and our 2 dogs love him.",
    },
    {
      name: "Ushma Dhanak",
      when: "6 months ago · Google Review",
      text: "Orlando is the best dog walker we have ever had! He sends a message when he arrives and when he is back, plus pictures of how Snoopy went. He is considerate and we feel totally safe having Snoopy in his care.",
    },
    {
      name: "Natalie Howland",
      when: "9 months ago · Google Review",
      text: "The Houndist looked after my cats so well when I went away. I can't recommend highly enough!!",
    },
  ],
};

export const whyChooseUs = [
  {
    title: "GPS Tracked",
    body: "Every walk logged on Strava. Share reports with family anytime.",
  },
  {
    title: "Training Included",
    body: "Goal-based behavioural improvement on every walk, at no extra charge.",
  },
  {
    title: "Free Consultation",
    body: "Followed by a free 20-min walking or sitting demonstration for your dog.",
  },
  {
    title: "Locally Based",
    body: "Serving Berowra & Berowra Heights with a personal touch — 7 days a week.",
  },
];

export const serviceArea = {
  eyebrow: "Service Area",
  title: "Berowra & Berowra Heights",
  sub: "Based locally and proud of it. Every walk starts and ends at your front door — no transport, no stress, no strangers.",
  cta: "View on Google Maps",
  place: "Berowra",
  address: "Berowra NSW 2081, Australia",
  mapEmbed:
    "https://www.google.com/maps?q=Berowra+NSW+2081+Australia&output=embed",
};

export const blog = {
  eyebrow: "Dog Care Tips",
  title: "From The Houndist Blog",
  sub: "Practical dog care advice from a professional who walks and sits dogs every day in Berowra.",
  posts: [
    {
      slug: "why-regular-dog-walking-is-essential",
      category: "Dog Walking · Health",
      title: "Why Regular Dog Walking is Essential for Your Dog's Health",
      excerpt:
        "The physical, mental, and behavioural benefits of consistent daily walks — and why professional help makes a difference.",
      byline: "By Orlando James, The Houndist · Berowra & Berowra Heights · 8 min read",
    },
    {
      slug: "dog-sitting-vs-kennels",
      category: "Dog Sitting · In-Home Care",
      title: "Dog Sitting vs Kennels: Why In-Home Care is Better for Your Dog",
      excerpt:
        "Why more Berowra families are choosing in-home sitting over kennels — and what to expect from a premium sit.",
      byline: "By Orlando James, The Houndist · Berowra & Berowra Heights · 7 min read",
    },
    {
      slug: "how-to-choose-a-dog-walker-in-berowra",
      category: "Advice · Choosing a Walker",
      title: "How to Choose a Dog Walker in Berowra: What to Look For",
      excerpt:
        "The questions to ask, red flags to watch for, and what separates a great dog walker from an average one.",
      byline: "By Orlando James, The Houndist · Berowra & Berowra Heights · 6 min read",
    },
  ],
};

// Full article bodies (verbatim from the PDF) rendered on /blog/[slug].
export const articleBodies = {
  "why-regular-dog-walking-is-essential": [
    { type: "p", text: "As a professional dog walker based in Berowra and Berowra Heights, I see the difference regular walks make in dogs every single day. Dogs that are walked consistently are calmer, healthier, and significantly happier than those who aren't. Here's why regular dog walking isn't a luxury — it's a necessity." },
    { type: "h2", text: "1. Physical Health Benefits" },
    { type: "p", text: "Dogs are built to move. Without adequate exercise, domesticated dogs develop a cascade of health problems. Obesity is one of the most common — over 40% of Australian pet dogs are overweight or obese. A 30–45 minute walk every day can be the single biggest thing you do for your dog's weight and long-term health." },
    { type: "h3", text: "Joint Health & Cardiovascular Fitness" },
    { type: "p", text: "Regular walking keeps cartilage lubricated and muscles strong around joints — slowing arthritis in senior dogs. It also improves heart and lung function; dogs that walk regularly tend to live longer, healthier lives." },
    { type: "h2", text: "2. Mental Health & Stimulation" },
    { type: "p", text: "A walk is a rich mental adventure for your dog. Every blade of grass carries information about other animals and people. This mental stimulation is just as important as physical exercise. A bored dog is a destructive dog — chewing, barking, digging are almost always signs of insufficient stimulation." },
    { type: "h3", text: "Anxiety Relief" },
    { type: "p", text: "Dogs confined to the same environment without new experiences develop stress and anxiety. Regular walks expose your dog to varied sights, sounds, and smells — building confidence and reducing anxiety over time." },
    { type: "h2", text: "3. Socialisation" },
    { type: "p", text: "Walking exposes your dog to other dogs, people, bikes, and unpredictable situations. This exposure is critical for developing a well-adjusted, confident temperament — especially in younger dogs. A well-walked dog is far less likely to be reactive or fearful." },
    { type: "p", text: "At The Houndist, every walk includes free basic training and behavioural improvement tailored to your dog's individual needs — so your dog isn't just exercising, they're learning." },
    { type: "h2", text: "How Often Should You Walk Your Dog?" },
    { type: "ul", items: [
      "High-energy breeds (Labradors, Border Collies, Kelpies): 60–90 minutes daily",
      "Medium-energy breeds (Beagles, Cocker Spaniels): 30–60 minutes daily",
      "Low-energy or older dogs: 20–30 minutes at a gentle pace",
    ] },
    { type: "h2", text: "The Role of a Professional Dog Walker" },
    { type: "p", text: "A professional dog walker understands animal behaviour, reads body language, and provides structured, enriching experiences. At The Houndist, every walk is tracked via Strava with check-in messages on departure and return — giving you full peace of mind." },
  ],
  "dog-sitting-vs-kennels": [
    { type: "p", text: "When you head away, the big question is: what do I do with my dog? More and more families in Berowra and Berowra Heights are discovering that professional in-home dog sitting is a far superior option to kennels — for their dog's wellbeing, and their own peace of mind." },
    { type: "h2", text: "The Problems with Kennels" },
    { type: "h3", text: "Stress & Anxiety" },
    { type: "p", text: "Kennels are unfamiliar, loud, and filled with strange dogs. For anxious, sensitive, or older dogs, a kennel stay is a genuinely stressful experience. Dogs can stop eating, develop anxiety, or come home unsettled for days." },
    { type: "h3", text: "Illness Risk" },
    { type: "p", text: "Any environment housing large numbers of dogs carries elevated risk. Kennel cough, respiratory infections, parasites, and skin conditions can spread quickly." },
    { type: "h3", text: "Lack of Individual Attention" },
    { type: "p", text: "Even the best kennels are managing many dogs at once. Individual attention is limited — your dog may spend most of their time in a run with minimal human interaction." },
    { type: "h2", text: "Why In-Home Sitting Wins" },
    { type: "p", text: "Your dog stays in their safe space. At home, everything is familiar — the smells, the sounds, the furniture. This dramatically reduces stress. A professional in-home sitter is focused entirely on your dog, maintains your existing routine, and keeps an eye on your property too." },
    { type: "h2", text: "What's Included with The Houndist Sitting" },
    { type: "ul", items: [
      "2 × GPS-tracked walks per day",
      "Feeding and fresh water",
      "Medication administration",
      "Playtime and enrichment",
      "Basic training on every walk",
      "Your dog never left alone more than 2 hours",
      "Regular photo & message updates",
      "Home maintenance & security presence",
    ] },
    { type: "p", text: "Every new sitting arrangement starts with a free consultation and 20-minute demonstration — no pressure, no commitment, just making sure it's the right fit for your dog." },
  ],
  "how-to-choose-a-dog-walker-in-berowra": [
    { type: "p", text: "Choosing someone to walk your dog is a big decision. You're trusting another person with your animal's safety — often while you're at work. In Berowra and Berowra Heights, not all dog walkers are equal. Here's what to look for." },
    { type: "h2", text: "1. Genuine Love for Dogs" },
    { type: "p", text: "You can usually tell within five minutes whether someone is genuinely passionate about dogs. A great walker will ask detailed questions about your dog's personality, health, triggers, and preferences — and notice things about your dog that even you might have missed." },
    { type: "h2", text: "2. Experience & Behaviour Knowledge" },
    { type: "p", text: "A walker should understand dog body language, manage reactive dogs calmly, and handle multiple dogs safely. Ask how long they've been walking dogs and how they handle difficult situations. At The Houndist, every walk includes free basic training and behavioural improvement." },
    { type: "h2", text: "3. Transparent Communication" },
    { type: "p", text: "You should always know what's happening. A professional walker sends a message on departure and return, and updates you if anything unexpected happens. The Houndist uses Strava GPS tracking on every walk." },
    { type: "h2", text: "4. A Proper Meet-and-Greet" },
    { type: "p", text: "No reputable walker takes your dog out without a prior introduction. The Houndist starts every new client with a free consultation and free 20-minute demo walk." },
    { type: "h2", text: "5. Clear, Honest Pricing" },
    { type: "p", text: "Pricing should be transparent with no hidden fees. The Houndist publishes all rates clearly — from $18 for a 20-minute walk to $70 for a 2-hour adventure." },
    { type: "h2", text: "Red Flags to Watch For" },
    { type: "ul", items: [
      "Vague or inconsistent pricing",
      "Unwilling to do a meet-and-greet first",
      "No Google reviews or references",
      "Walking too many dogs at once (4 per walker is the safe max)",
      "Slow or poor communication",
      "No GPS tracking or walk reporting",
    ] },
  ],
};

export const faq = {
  eyebrow: "Frequently Asked Questions",
  title: "Everything You Need to Know About The Houndist",
  meta: "Berowra & Berowra Heights · Updated May 2025",
  helpline: {
    lead: "Can't find your answer? SMS Orlando directly —",
    phone: "0497 925 319",
    email: "Orlando.james@thehoundist.com",
  },
  groups: [
    {
      heading: "Getting Started",
      items: [
        {
          q: "Do you offer a free consultation?",
          a: "Yes — every new client starts with a free consultation followed by a free 20-minute demonstration walk. No pressure, no commitment.",
        },
        {
          q: "What areas do you service?",
          a: "Berowra and Berowra Heights. Every walk starts and ends at your front door — no transport, no stress, no strangers.",
        },
        {
          q: "How do I book?",
          a: "SMS or text Orlando directly on 0497 925 319, or email Orlando.james@thehoundist.com. Every new client starts with a free consultation and a free 20-minute demonstration walk.",
        },
        {
          q: "How do I pay?",
          a: "Get in touch with Orlando on 0497 925 319 to arrange payment to suit you.",
        },
      ],
    },
    {
      heading: "Dog Walking",
      items: [
        {
          q: "What walk lengths are available?",
          a: "Walks run from 20 to 120 minutes: 20 min ($18), 30 min ($24), 45 min ($32), 60 min ($40), 90 min ($55) and 120 min ($70). All walks are timed from departure — not including set-up or wind-down.",
        },
        {
          q: "Are walks GPS tracked?",
          a: "Yes. Every walk is logged on Strava, so you can share reports with family anytime.",
        },
        {
          q: "What days and hours?",
          a: "Walks are available 7am–7pm daily, Monday to Sunday. In-home sitting is available 24 hours.",
        },
        {
          q: "Can you walk multiple dogs?",
          a: "Yes — up to 4 dogs per household. Each additional dog is priced simply with a small add-on fee.",
        },
        {
          q: "Is training included?",
          a: "Yes. Every walk includes free basic training and goal-based behavioural improvement at no extra charge.",
        },
        {
          q: "Do you offer packages?",
          a: "Yes. Package deals are available for recurring clients walking 1+ times per week, with flexible scheduling over a 120-day period. Two-dog packages are also available — contact Orlando for a tailored quote.",
        },
      ],
    },
    {
      heading: "Dog Sitting & Visits",
      items: [
        {
          q: "What does 24-hour sitting include?",
          a: "Overnight premium care in your home: 2 walks, feeding & medication, enrichment & play, basic training, cleaning & tidying, an overnight stay, and emergency-readiness. Your dog is never left alone more than 2 hours. From $180 per night.",
        },
        {
          q: "What daytime visit options are available?",
          a: "1 × 30 min visit ($20), 1 × 60 min visit ($35), 2 × 30 min visits ($40), and 2 × 60 min visits ($70).",
        },
        {
          q: "Do you look after cats too?",
          a: "Yes — The Houndist also cares for cats while you're away, with regular updates and photos.",
        },
      ],
    },
    {
      heading: "Other Questions",
      items: [
        {
          q: "My dog is anxious or reactive — can you still help?",
          a: "Yes. Every new arrangement starts with a free consultation and a free 20-minute demonstration walk, so we can make sure it's the right fit for your dog before committing.",
        },
        {
          q: "What happens in a medical emergency?",
          a: "The Houndist is emergency-ready. Contact Orlando on 0497 925 319 to discuss your dog's specific needs and emergency arrangements.",
        },
        {
          q: "Can I read reviews before booking?",
          a: "Yes — The Houndist has a 5.0 rating from 10 five-star Google reviews. You can read them on this page or see them all on Google Maps.",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Ready to Book a Consultation?",
  channels: [
    { label: "SMS / Text (Preferred)", value: "0497 925 319", href: "sms:0497925319" },
    { label: "Email", value: "Orlando.james@thehoundist.com", href: "mailto:Orlando.james@thehoundist.com" },
    { label: "Facebook", value: "@TheHoundist", href: "https://www.facebook.com/TheHoundist" },
    { label: "Instagram", value: "@The_Houndist", href: "https://www.instagram.com/The_Houndist" },
  ],
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
