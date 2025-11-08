export const part1Questions = [
  {
    question:
      "Do you prefer spending your weekends socializing in larger gatherings or relaxing at home with a few close friends?",
    type: "radio",
    options: ["Larger gatherings", "Relaxing with close friends"],
  },
  {
    question:
      "When faced with a major life decision, do you usually follow your head (logic) or your heart (feelings)?",
    type: "radio",
    options: ["Head (logic)", "Heart (feelings)"],
  },
  {
    question: "Which of these activities sounds most appealing to you?",
    type: "radio",
    options: [
      "A weekend hiking trip in nature",
      "A museum or art gallery visit",
      "A cozy movie night at home",
      "A concert or live music event",
    ],
  },
  {
    question: "How important is personal growth in your life?",
    type: "radio",
    options: [
      "Extremely important - I am always working on bettering myself",
      "Moderately important - I like to grow but not obsessively",
      "Not very important - I prefer stability and consistency",
    ],
  },
  {
    question: "How do you like to show affection?",
    type: "radio",
    options: [
      "Physical touch (hugs, kisses, etc.)",
      "Words of affirmation (compliments, verbal expressions of love)",
      "Acts of service (doing things to help my partner)",
      "Quality time (spending focused time together)",
    ],
  },
  {
    question: "How do you envision your ideal future?",
    type: "radio",
    options: [
      "Building a family with a partner",
      "raveling the world and having enriching experiences",
      "Focusing on my career and personal goals",
      "Living a simple, peaceful life surrounded by loved ones",
    ],
  },
];

export const part2Questions = [
  {
    question: "Do you have kids?",
    type: "radio",
    options: ["Yes", "No"],
    conditionalInput: {
      Yes: {
        type: "number",
        key: "numKids",
        label: "If yes, how many kids do you have?",
        placeholder: "Enter number of kids",
      },
    },
  },
  {
    question: "Do you want kids in the future?",
    type: "radio",
    options: ["Yes", "Maybe", "No"],
  },
  {
    question: "Will you date a person who has kids?",
    type: "radio",
    options: ["Yes", "Maybe", "No"],
  },
  {
    question: "Do you smoke?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    question: "How would you describe your drinking habits?",
    type: "radio",
    options: [
      "Never- don't drink alcohol at all",
      "Rarely - I drink only on special occasions (e.g., holidays, celebrations)",
      "Socially - I drink occasionally in social settings",
      "Occasionally - I drink a few times a month or less",
      "Regularly - I drink frequently, such as weekly or more",
      "Prefer not to say - I'd rather not disclose this information",
    ],
    conditionalInput: {
      "Never- don't drink alcohol at all": {
        type: "radio",
        key: "neverDrink",
        label:
          'If "Never", would you be comfortable dating someone who drinks?',
        options: ["Yes", "No", "Depends"],
      },
    },
  },
  {
    question: "Do you consider yourself religious or spiritual?",
    type: "radio",
    options: [
      "Yes, I'm religious",
      "Yes, I'm spiritual but not religious",
      "No, I'm not religious or spiritual",
      "Prefer not to say",
    ],
    conditionalInput: {
      "Yes, I'm religious": {
        type: "radio",
        key: "religion",
        label: "If religious, what is your religion?",
        options: ["Christian", "Muslim", "Hindu", "Buddhist", "Other"],
      },
      "Yes, I'm spiritual but not religious": {
        type: "text",
        key: "spiritualBeliefs",
        label: "If spiritual, describe your spiritual beliefs",
        placeholder: "Describe your beliefs here",
      },
    },
  },
  {
    question: "How important is religion/spirituality in your life?",
    type: "radio",
    options: [
      "Not important at all.",
      "Somewhat important",
      "Moderately important.",
      "Very important.",
      "Extremely important",
    ],
  },
  {
    question:
      "Would you date someone with different religious or spiritual beliefs?",
    type: "radio",
    options: [
      "Yes, I'm open to dating someone with different beliefs",
      "No, I prefer someone who shares my beliefs",
      "Maybe, it depends on their level of practice or respect for my beliefs.",
    ],
  },
  {
    question: "How would you describe your level of political engagement?",
    type: "radio",
    options: [
      "Not at all political - I don't follow politics and prefer to avoid political discussions",
      "Slightly political - I'm minimally engaged, but I occasionally follow major events.",
      "Somewhat political - I stay informed about politics and discuss it occasionally.",
      "Very political - I'm actively engaged and enjoy discussing political topics.",
      "Significantly political - Politics is a significant part of my life, and I'm deeply involved",
    ],
  },
  {
    question: "Would you date someone with different political beliefs?",
    type: "radio",
    options: [
      "Yes, I'm open to dating someone with different political views",
      "No, I prefer someone who aligns with my political beliefs",
      "Maybe, it depends on the specific issues or level of engagement",
    ],
  },
  {
    question: "Do you have a pet?",
    type: "radio",
    options: ["Yes", "No"],
    conditionalInput: {
      Yes: {
        type: "radio",
        key: "petType",
        label: "If yes, which pet do you have?",
        options: ["Dog", "Cat", "Bird", "Other"],
      },
    },
  },
];

export const part3Questions = [
  {
    question: "How important is spontaneity to you in a relationship?",
    type: "radio",
    options: [
      "Very important - I love unexpected plans and surprises",
      "Somewhat important - I enjoy spontaneity in moderation",
      "Not very important - I prefer routines and predictability",
      "Not important at all - I like structure and consistency",
    ],
  },
  {
    question: "How would you describe your communication style?",
    type: "radio",
    options: [
      "Direct and straightforward",
      "Thoughtful and reflective",
      "Warm and expressive",
      "Easygoing and adaptable",
    ],
  },
  {
    question: "How do you recharge after a busy day?",
    type: "radio",
    options: [
      "Quiet time alone",
      "Spending time with loved ones",
      "Exercising or being outdoors",
      "Watching a show, reading, or relaxing",
    ],
  },
  {
    question: "What kind of vacation do you enjoy most?",
    type: "radio",
    options: [
      "Relaxing on a beach",
      "Exploring new cities and cultures",
      "Adventure and outdoor activities",
      "Quiet retreat in nature or at home",
    ],
  },
  {
    question:
      "Do you enjoy trying new hobbies or sticking to the ones you know and love?",
    type: "radio",
    options: [
      "I love exploring new hobbies regularly",
      "I like mixing new and familiar activities",
      "I mostly stick with what I know",
      "I rarely try new hobbies",
    ],
  },
  {
    question:
      "When it comes to resolving conflicts, do you prefer to address them right away or take time to reflect?",
    type: "radio",
    options: [
      "Address them immediately",
      "Discuss soon after cooling off",
      "Reflect first, then communicate",
      "Prefer to let time settle things naturally",
    ],
  },
  {
    question:
      "How do you feel about sharing responsibilities in a relationship?",
    type: "radio",
    options: [
      "Equal partnership in all areas",
      "Flexible based on strengths and schedules",
      "Prefer traditional or defined roles",
      "Prefer handling things independently",
    ],
  },
  {
    question: "What role does family play in your life?",
    type: "radio",
    options: [
      "Central - family is deeply involved in my daily life",
      "Important - I stay connected regularly",
      "Balanced - I value family but maintain independence",
      "Limited - I keep family interactions minimal",
    ],
  },
  {
    question:
      "How important is it for your partner to share your core values and beliefs?",
    type: "radio",
    options: [
      "Extremely important - alignment is essential",
      "Somewhat important - shared values help but aren't everything",
      "Not very important - differences keep things interesting",
      "Not important - individuality matters most",
    ],
  },
  {
    question:
      "When it comes to emotional expression, are you more open or reserved?",
    type: "radio",
    options: [
      "Very open - I share emotions freely",
      "Somewhat open - I express when comfortable",
      "Somewhat reserved - I take time to open up",
      "Very reserved - I rarely show emotions outwardly",
    ],
  },
  {
    question:
      "In a relationship, what is more important: emotional, intellectual, shared interests, or physical chemistry?",
    type: "radio",
    options: [
      "Emotional connection",
      "Intellectual connection",
      "Shared interests and lifestyle",
      "Physical chemistry",
    ],
  },
];

export const part4Questions = [
  {
    question: "How do you handle stress or challenges in life?",
    type: "radio",
    options: [
      "Stay calm and work through it logically",
      "Seek support or talk it out",
      "Take time alone to recharge",
      "Distract myself until I'm ready to deal with it",
    ],
  },
  {
    question: "What is your approach to financial planning in a relationship?",
    type: "radio",
    options: [
      "Plan and budget together regularly",
      "Maintain separate finances but discuss big goals",
      "One partner manages most finances",
      "Prefer to keep finances fully independent",
    ],
  },
  {
    question: "How do you feel about taking risks in life?",
    type: "radio",
    options: [
      "I thrive on taking bold risks",
      "I'm cautious but open to new opportunities",
      "I prefer stability and predictability",
      "I avoid risks whenever possible",
    ],
  },
  {
    question: "How important is maintaining a healthy lifestyle?",
    type: "radio",
    options: [
      "Very important - it's a daily priority",
      "Somewhat important - I try to stay balanced",
      "Not very important - I don't focus on it much",
      "Not important - I prefer to live freely",
    ],
  },
  {
    question: "How do you feel about pets in a relationship?",
    type: "radio",
    options: [
      "Love them - pets are family",
      "Like them - open to having one",
      "Neutral - okay with or without",
      "Prefer not to have pets",
    ],
  },
  {
    question: "How do you prefer your partner to handle disagreements?",
    type: "radio",
    options: [
      "Open discussion immediately",
      "Calm conversation after cooling off",
      "Reflect first, then talk later",
      "Avoid conflict unless necessary",
    ],
  },
  {
    question:
      "How do you feel about physical intimacy early in a relationship?",
    type: "radio",
    options: [
      "Comfortable with it when there's chemistry",
      "Prefer to build emotional connection first",
      "Take time to develop trust before intimacy",
      "Prefer waiting until strong commitment",
    ],
  },
  {
    question: "How do you handle showing love and affection in public?",
    type: "radio",
    options: [
      "Very comfortable - I enjoy it",
      "Somewhat comfortable - small gestures are fine",
      "Reserved - I prefer private affection",
      "Avoid it - I keep affection private",
    ],
  },
  {
    question: "Are you more of a morning person or a night owl?",
    type: "radio",
    options: [
      "Early riser - most productive in mornings",
      "Balanced - depends on the day",
      "Night owl - most active late",
      "Flexible - I adapt to my partner's rhythm",
    ],
  },
  {
    question: "How organized and tidy do you like your living space to be?",
    type: "radio",
    options: [
      "Very organized - everything in its place",
      "Somewhat organized - mostly tidy with a few exceptions",
      "Relaxed - comfortable with some mess",
      "Unbothered - clutter doesn't affect me",
    ],
  },
];
