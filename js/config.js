/* =====================================================================
   COGNASIUM INDIA — LANDING PAGE CONFIG
   Everything you might want to edit lives in this one file.
   Rules used while writing it:
   - Facts come from cognasiumindia.com or the Loom call transcript.
   - Anything marked  // MISSING  needs a real value from Cognasium.
     Sections with empty lists / enabled:false stay hidden on the page.
   ===================================================================== */
window.COGNASIUM_CONFIG = {

  /* ---------- Brand colours (also defined in css/styles.css :root) ----
     Sampled from the Cognasium WhatsApp logo. Change here to override. */
  theme: {
    "--c-yellow": "#FFD51F",      // logo yellow
    "--c-yellow-dark": "#C9A300", // 3D edge under yellow buttons
    "--c-navy": "#00174D",        // logo navy
    "--c-navy-2": "#0B2E7A",      // lighter navy band (Taivas used a royal-blue band here)
    "--c-cream": "#FFF8E1",
    "--c-card": "#FFFFFF",
    "--c-border": "#D9DFEC",
    "--c-text": "#00174D",
    "--c-muted": "#3D4B6E",
    "--c-success": "#16803C"
  },

  brand: {
    name: "Cognasium India",
    logo: "assets/img/logo-mark.png",           // cropped from the WhatsApp profile image (238px)
    logoAlt: "Cognasium India logo: a yellow C with navy figures and the words You got it",
    wordmarkTop: "COGNASIUM",
    wordmarkBottom: "India"
  },

  /* ---------- WhatsApp ------------------------------------------------
     +91 92206 36572 is the real, current number (confirmed by the owner, 16 Nov 2026).
     The old +91 93151 36811 is no longer used anywhere. */
  whatsapp: {
    number: "919220636572",   // digits only, with country code, no +
    // {goal}, {grade}, {programme} are filled from the two-question flow.
    quizMessage:
      "Hi Cognasium! I found you through your website.\n" +
      "My child's main goal: {goal}\n" +
      "Grade: {grade}\n" +
      "I'd like to know more about: {programme}",
    generalMessage:
      "Hi Cognasium! I'd like to know more about your debating programme for my child.",
    stickyLabel: "Chat on WhatsApp",
    stickyNote: "Usually the quickest way to reach us"
  },

  /* ---------- Hero ---------------------------------------------------- */
  hero: {
    chips: ["LIVE ONLINE", "DEBATING & MUN", "BEST FOR GRADES 6 TO 8"],
    titleLines: ["ALREADY", "DEBATING", "AT SCHOOL?"],
    titleAccent: "TAKE IT INTERNATIONAL.",
    lead:
      "Live online debate training with a specialist coach. Three months of preparation, " +
      "then your child's first international tournament. We build the team, find the tournament and register for you.",
    small:
      "For children who already speak English fluently and want to go beyond inter-school competitions.",
    image: "assets/img/hero-coach.jpg",
    imageAlt: "A Cognasium trainer explaining types of rebuttal on a whiteboard"
  },

  /* ---------- Moving ribbon under the hero (real Cognasium programmes) -- */
  marquee: ["Debating", "Model UN", "Current Affairs", "Creative Writing", "Book Clubs", "Reading Clubs", "Workshops", "Individual Classes"],

  /* ---------- Countdown -----------------------------------------------
     Shown ONLY if at least one session below is in the future.
     Leave the list empty and the whole block stays hidden. No fake urgency.
     Example entry:
       { label: "Saturday 5 PM", start: "2026-11-21T17:00:00+05:30",
         grades: "6 TO 8", closesMinutesBefore: 60, seatsLeft: null }      */
  sessions: [
    // MISSING: real upcoming demo/class times from Cognasium
  ],
  countdownHeader: "NEXT LIVE CLASS",

  /* ---------- Two-question flow ---------------------------------------- */
  quiz: {
    q1: {
      label: "QUESTION 1 OF 2",
      title: "What do you most want for your child right now?",
      options: [
        { id: "intl",     icon: "assets/img/icon-debate.png",  title: "Debate internationally", sub: "Already debates at school, wants more", programme: "International Debating Programme" },
        { id: "start",    icon: "assets/img/icon-speaker.png", title: "Start debating",         sub: "Fluent in English, no debate club at school", programme: "Debate Clubs (Beginner)" },
        { id: "confident",icon: "assets/img/learner-centred.png", title: "Speak with confidence", sub: "Knows the answer, holds back", programme: "Debate Clubs (Beginner) or Creative Writing" },
        { id: "news",     icon: "assets/img/icon-news.png",    title: "Understand current affairs", sub: "News, made simple, every week", programme: "Current Affairs Programme" }
      ]
    },
    q2: {
      label: "QUESTION 2 OF 2",
      title: "Which grade is your child in?",
      options: ["5", "6", "7", "8", "9", "10", "11", "12"],
      footnote: "Younger than Grade 5? Message us and we'll tell you what fits."
    },
    // Result card copy, keyed by q1 option id.
    results: {
      intl: {
        title: "International Debating Programme",
        text: "Three months of live online training with a specialist coach, then your child's first international tournament. We form and prepare the team, find the tournament and handle registration."
      },
      start: {
        title: "Debate Clubs: Beginner",
        text: "A first, structured look at how debating works: building an argument, rebuttals and speaking on your feet, live online with a trainer."
      },
      confident: {
        title: "Start small, then speak",
        text: "Not every child is ready for a debate stage on day one. Tell us about your child and we'll suggest where to begin: Debate Clubs for beginners, Book Clubs or Creative Writing."
      },
      news: {
        title: "Current Affairs Programme",
        text: "Simplified news in a WhatsApp community, one theory class a week and a live quiz online every Sunday."
      }
    },
    resultLabel: "YOUR NEXT STEP",
    resultButton: "Send this on WhatsApp",
    restart: "Change answers"
  },

  /* ---------- What you get (5 cards) — from the Loom call ------------- */
  whatYouGet: {
    heading: "WHAT YOU GET",
    cards: [
      { icon: "assets/img/girl.png",        title: "LIVE ONLINE",           text: "Live classes on Google Meet. No travel." },
      { icon: "assets/img/faculty.png",     title: "A SPECIALIST COACH",     text: "Personalised training on argument, rebuttal and delivery." },
      { icon: "assets/img/icon-debate.png", title: "A TEAM, READY",         text: "We form your child's team and prepare it for the tournament." },
      { icon: "assets/img/nep.png",         title: "TOURNAMENT HANDLED",    text: "We find the right international tournament and register you." },
      { icon: "assets/img/feedback.png",    title: "REGULAR FEEDBACK",      text: "Parents know where their child stands and what comes next." }
    ]
  },

  /* ---------- How it works (3 steps) ---------------------------------- */
  howItWorks: {
    heading: "HOW IT WORKS",
    steps: [
      { title: "TELL US ABOUT YOUR CHILD", text: "Answer two questions above and send them to us on WhatsApp." },
      { title: "TRAIN FOR 3 MONTHS",       text: "Live online classes with a specialist coach." },
      { title: "DEBATE INTERNATIONALLY",   text: "Your child's first international tournament, organised by us." }
    ]
  },

  /* ---------- Problem + "who we train" card --------------------------- */
  problem: {
    titleLines: ["GOOD AT SCHOOL DEBATES.", "NEVER BEEN TO AN INTERNATIONAL ONE."],
    text:
      "Most schools only run inter-school competitions. International tournaments, online and abroad in countries like Malaysia and the Philippines, are open to school students. " +
      "Most families simply don't know which ones to enter or how to get a team ready.",
    cardLabel: "WHO WE TRAIN",
    cardTitle: "Which one is your child?",
    rows: [
      { tag: "ADVANCED", title: "Already debating", text: "Wants to compete internationally. This is our main programme." },
      { tag: "BEGINNER", title: "Fluent, never debated", text: "School has no debate set-up. Start with Debate Clubs." },
      { tag: "FIRST STEP", title: "Shy to speak up", text: "Build confidence first through reading, writing and small groups." }
    ],
    // A scored SAMPLE feedback card (like Taivas's) is NOT shown because we don't have
    // Cognasium's real feedback rubric. Fill this in and set enabled:true to show it.
    sampleFeedback: {
      enabled: false, // MISSING: Cognasium's real feedback categories + a sample coach note
      label: "SAMPLE FEEDBACK",
      student: "Sample student, Grade 7",
      scores: [ /* { name: "Rebuttal", score: 3, max: 5 } */ ],
      note: ""
    }
  },

  /* ---------- Pricing (figures from the Loom call — please confirm) -- */
  pricing: {
    enabled: true,
    label: "THE PROGRAMMES",
    intro: "If it sounds right for your child, this is what it costs.",
    plans: [
      {
        featured: true,
        badge: "MAIN PROGRAMME",   // small tag on the card; "" to hide
        name: "INTERNATIONAL DEBATING",
        bigLine: "3-MONTH PROGRAMME",
        price: "₹4,500",
        per: "per month",
        points: [
          "Live online classes with a specialist coach",
          "Team formed and prepared for you",
          "We find the tournament and register you"
        ],
        note: "International tournament fees are charged separately.",
        cta: "Ask about the next batch",
        waMessage: "Hi Cognasium! I'd like to know about the next batch of the International Debating Programme."
      },
      {
        featured: false,
        name: "CURRENT AFFAIRS",
        bigLine: "MONTHLY PROGRAMME",
        price: "₹2,500",
        per: "per month",
        points: [
          "Simplified news in a WhatsApp community",
          "One theory class a week",
          "A live online quiz every Sunday"
        ],
        cta: "Ask about Current Affairs",
        waMessage: "Hi Cognasium! I'd like to know more about the Current Affairs Programme."
      }
    ],
    footnote: "GST and batch timings: message us." // MISSING: confirm whether prices include GST
  },

  /* ---------- Social proof --------------------------------------------- */
  proof: {
    heading: "WHY FAMILIES CHOOSE COGNASIUM",
    // MISSING: real numbers (students trained, tournaments, years). Empty = hidden.
    stats: [
      // { value: "500+", label: "students trained" }
    ],
    photo: "assets/img/classroom.jpg",
    photoAlt: "A Cognasium session in a classroom, with a trainer speaking to a group of students",
    photoCaption: "A Cognasium session in progress",
    tagline: "You are a step away from starting as a reader and ending up a researcher with a lot of debating escapades in between!",
    programmesHeading: "ALL OUR PROGRAMMES",
    programmes: [
      { icon: "assets/img/icon-book.png",       name: "Book Clubs",         sub: "Concepts through Fiction" },
      { icon: "assets/img/icon-news.png",       name: "Reading Clubs",      sub: "Current Affairs & Debating" },
      { icon: "assets/img/icon-speaker.png",    name: "Workshops",          sub: "Less time & Lots to Learn" },
      { icon: "assets/img/icon-debate.png",     name: "Debate Clubs",       sub: "Beginner & Advanced" },
      { icon: "assets/img/learner-centred.png", name: "Individual Classes", sub: "Tailor Made" }
    ],
    verticalsLine: "Also: Model UN (MUN), Creative Writing and the Current Affairs Programme.",
    pillarsHeading: "WHAT WE STAND ON",
    pillars: [
      { icon: "assets/img/nep.png",             name: "NEP 2020" },
      { icon: "assets/img/faculty.png",         name: "State of the art faculty" },
      { icon: "assets/img/feedback.png",        name: "Robust feedback mechanism" },
      { icon: "assets/img/learner-centred.png", name: "Learner centred pedagogy" }
    ],
    // Coach / founder cards. MISSING: names, roles, photos. Empty = hidden.
    coaches: [
      // { name: "", role: "", photo: "assets/img/coach-1.jpg" }
    ]
  },

  /* ---------- Testimonials: the five published on cognasiumindia.com --
     usePhotos:false shows initials instead of photos, because some of the
     published photos are of children. Set to true once you have consent. */
  testimonials: {
    heading: "WHAT PARENTS AND STUDENTS SAY",
    usePhotos: false,
    items: [
      {
        name: "Shweta Agarwal", role: "Parent", photo: "assets/img/t-shweta.jpg",
        quote: "My son Arnav has been training with Cognasium for the past one year and I can safely say it was the best decision that I took for Arnav when it comes to debating! There was a complete transformation in the way Arnav approached debating once he started getting trained. Earlier we felt we did well but did not win. It was quite disheartening, we could not tell what was wrong. My son has only had an upward trajectory with many breaks in globally renowned competitions. I recommend Cognasium to everyone. They are truly a blessing."
      },
      {
        name: "Aarti Kamat", role: "Parent", photo: "assets/img/t-aarti.jpg",
        quote: "Training with Cognasium has been a game changer for my son. They are genuinely involved in teaching such that they work to make a difference and they are great with children. They are extremely approachable. Trainers makes learning fun. I would strongly recommend them for all students planning on national and international debating experience."
      },
      {
        name: "Pehal Singhvi", role: "Student", photo: "assets/img/t-pehal.jpg",
        quote: "Every Time I've interacted with the trainers, I've left with a better understanding of debates. Oh, and their suggestions regarding reading material on any given theme are fabulous, regardless of whether you are just starting out or are an advanced debater. My trainer is the reason I fell in love with Michel Foucault, and was able to grasp the nuances of rebuttals for which I always remain grateful."
      },
      {
        name: "Arha Vishwakarma", role: "", photo: "assets/img/t-arha.jpg",
        quote: "Cognasium has been immensely helpful in building the reading and speaking skills of my ward. His ways of expression, use of a varied vocabulary, understanding complex ideas in simpler ways and applying all out of a constrained environment like a class has progressed significantly."
      },
      {
        name: "Aparna L.", role: "Parent", photo: "assets/img/t-aparna.jpg",
        quote: "It's been an amazing few months with the Book Club. My child's vocabulary has grown immensely, he has a much better understanding of several important social constructs. It's a great way to acquaint children with popular and relevant literature. He looks forward to sharing his thoughts in class. The teachers are engaging, polite and invested which is wonderful to see. I see the book club as something that is adding tremendous value to my child and I couldn't be happier to have him be a part of this."
      }
    ]
  },

  /* ---------- FAQ (4) — answers use facts from the Loom call ----------- */
  faq: {
    heading: "QUESTIONS",
    items: [
      { q: "Are the classes online or in person?",
        a: "Online. Classes are live on Google Meet with a specialist coach, so your child can join from anywhere in India." },
      { q: "My child has never debated. Is this for them?",
        a: "The international programme is built for children who already debate at school. If your child is new to debating, Debate Clubs (Beginner) is the right start. Tell us about your child on WhatsApp and we'll suggest where to begin." },
      { q: "Are international tournament fees included?",
        a: "No. We find the tournament, form and prepare the team and handle the registration, but the tournament's own fee is charged separately. We'll tell you the amount before you sign up." },
      { q: "What does it cost?",
        a: "The International Debating Programme is ₹4,500 a month. The Current Affairs Programme is ₹2,500 a month. Message us for batch timings." }
    ]
  },

  /* ---------- Final call to action ------------------------------------ */
  finalCta: {
    titleLines: ["READY FOR THE", "NEXT STAGE?"],
    text: "Message us on WhatsApp. Tell us your child's grade and how much debating they've done, and we'll take it from there.",
    button: "Message us on WhatsApp",
    callLabel: "Or call +91 92206 36572",
    callNumber: "+919220636572"
  },

  /* ---------- Footer: as published on cognasiumindia.com --------------- */
  footer: {
    contacts: [
      // +91 93151 36811 removed 16 Nov 2026: owner confirmed +91 92206 36572 is the real, current number.
      { label: "Got questions? Call us", value: "+91 9220636572", href: "tel:+919220636572" },
      { label: "Email", value: "cognasiumindia@gmail.com", href: "mailto:cognasiumindia@gmail.com" }
    ],
    social: [
      { label: "Instagram", href: "https://www.instagram.com/cognasiumindia/" },
      { label: "Video tour (YouTube)", href: "https://www.youtube.com/watch?v=p93Ynnxz63U" }
    ],
    copyright: "© {year} Cognasium India. All rights reserved."
  }
};
