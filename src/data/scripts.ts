export interface ScriptLevel {
  t: string;   // template text with {key|placeholder} tokens
  p: string[]; // key phrases
}

export interface Script {
  id: string;
  collectionId: string;
  em: string;
  nm: string;
  tc: string;
  tb: string;
  qs: string[];
  im: ScriptLevel;
  ih: ScriptLevel;
  al: ScriptLevel;
}

export const SCRIPTS: Script[] = [
  // ─────────────────────────────────────────────
  // 자기소개
  // ─────────────────────────────────────────────
  {
    id: 'intro', collectionId: '자기소개', em: '👋', nm: '자기소개',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: [
      'Tell me about yourself.',
      'Introduce yourself briefly.',
      'Tell me about where you grew up and what you do now.',
    ],
    im: {
      t: "Hello, my name is {name|Jane} and I'm from {city|Busan}, South Korea. I currently live and work in Seoul. I work as {article_job|a software developer} at {place|a mid-sized IT company}, and I've been in this role for about {years|two years}. I really enjoy my job because {reason|the work is creative and I can always see the direct results of what I build}. Outside of work, I like to spend my free time {hobby|hiking and reading} — it helps me relax and recharge after a busy week. I'm really looking forward to today's conversation!",
      p: ["I currently live and work in Seoul", "I really enjoy my job because...", "it helps me relax and recharge"],
    },
    ih: {
      t: "Hello! My name is {name|Jane}, and I'm originally from {city|Busan}, though I've been living in Seoul for the past {years|five years}. I work as {article_job|a product manager} at {company|a tech startup}, where my main responsibilities include {task|coordinating between the design and engineering teams and keeping our product roadmap on track}. What I find most rewarding about my job is {reason|seeing a product I've worked on actually reach users and make their lives a little easier}. Outside of work, I'm passionate about {hobby|photography} — I try to go out and shoot on weekends whenever I can. It's become a great way for me to slow down and stay creative, and I really look forward to it. I'm really looking forward to today's conversation!",
      p: ["my main responsibilities include...", "What I find most rewarding is...", "a great way to slow down and stay creative"],
    },
    al: {
      t: "Hello! My name is {name|Jane}, and I've been based in Seoul for about {years|six years}, though I originally grew up in {city|Busan}. I work as {article_job|a UX designer} at {company|a global e-commerce company}, where I focus on {task|improving the mobile shopping experience for users across Southeast Asia}. What I love most about my role is that it sits at the intersection of {aspect1|psychology, design, and technology} — every project pushes me to think differently. Outside of work, I've been deeply into {hobby|long-distance trail running} for the past {hobby_years|three years}. It sounds intense, but for me it's almost meditative — it gives me space to think and decompress in a way that nothing else really does. I'm genuinely excited to be here today.",
      p: ["it sits at the intersection of...", "every project pushes me to think differently", "almost meditative — gives me space to think and decompress"],
    },
  },
  {
    id: 'intro_2', collectionId: '자기소개', em: '🏠', nm: '출신·성장',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['Where did you grow up?', 'Tell me about your hometown.'],
    im: {
      t: "I grew up in {place|Busan}, which is a port city in the south of Korea. It's well known for {thing|its great seafood, beautiful beaches, and warm weather}. I lived there until my mid-twenties, then moved to Seoul for work. I still go back to visit {freq|every few months}, and whenever I do, I'm reminded of how much I miss {memory|the ocean and the slower pace of life there}. I think growing up in Busan really shaped who I am — it gave me {value|an appreciation for both the energy of city life and the calm of nature}.",
      p: ["well known for its great seafood and beautiful beaches", "reminded of how much I miss the ocean and slower pace", "an appreciation for both city energy and the calm of nature"],
    },
    ih: {
      t: "I'm originally from {city|Busan}, but I've been living in Seoul for about {years|five years} now. I moved here for {reason|work opportunities}, and this city has been where I've built my career since then. My hometown has a very {character|different pace and atmosphere from Seoul} — it's more relaxed, less rushed, and much closer to the sea. Whenever I go back to visit, I feel that contrast quite strongly. Living in Seoul has opened a lot of doors for me professionally, but Busan still feels like home in a way that's hard to fully articulate. I think where you grow up leaves a deeper mark on you than you realize at the time.",
      p: ["a very different pace and atmosphere from Seoul", "I feel that contrast quite strongly whenever I go back", "where you grow up leaves a deeper mark than you realize"],
    },
    al: {
      t: "I grew up in {place|Busan} and lived there until my mid-twenties. What shaped me most about that city was {aspect|the particular mix of urban ambition and natural landscape} — on a good morning, I could {memory|be at the beach before work and in the city center by afternoon}. That contrast taught me early on that {lesson|you don't have to choose between a driven, ambitious life and one that stays connected to something slower and more grounded}. The city has changed a lot since I left — {change|more developed, more tourist-facing} — but that {constant|sense of openness and the proximity to the sea} is still there when I go back. When I walk those old streets now, I notice {insight|how much of who I am — the pace I prefer, the way I think about space and time — was quietly formed in those early years without me realizing it}.",
      p: ["the mix of urban ambition and natural landscape", "you don't have to choose between ambition and staying grounded", "how much of who I am was formed in those early years without me realizing it"],
    },
  },
  {
    id: 'intro_3', collectionId: '자기소개', em: '💼', nm: '직업·일',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['What do you do for work?', 'Describe your job.'],
    im: {
      t: "I work as {article_job|a software developer} at {company|a tech company} in Seoul. I've been there for about {years|two years} now. My main responsibility is to {task|build and maintain web services for our users}, and I usually work closely with {team|a small team} of about five people. I enjoy this job a lot because {reason|the work is creative and I can always see the direct results of what I build}. Outside of work, I try to {hobby|read and exercise} to stay balanced. Overall, I feel genuinely lucky to have found work that I find meaningful and engaging.",
      p: ["my main responsibility is to build and maintain web services", "I enjoy it because the work is creative and results are visible", "genuinely lucky to have found work I find meaningful"],
    },
    ih: {
      t: "I work as {article_job|a product manager} at {company|a startup} in Seoul. My role is to {task|define what we build and keep the design, engineering, and business teams aligned around a shared vision}. It's a job that requires a lot of communication, judgment, and the ability to make decisions with incomplete information. What I enjoy most is {reason|seeing an idea evolve from a rough concept all the way into a real product that people actually use}. The pace is intense at times, but I genuinely feel like I'm growing every week. I think I've found a career path that suits the way I think, and that matters a lot to me.",
      p: ["keep teams aligned around a shared vision", "seeing an idea evolve into a product people actually use", "found a career path that suits the way I think"],
    },
    al: {
      t: "I work as {article_job|a UX designer}, focusing on {domain|mobile experiences for e-commerce users}. At the core of everything I do is a belief that {value|technology should feel genuinely human and accessible} — not just functional, but considerate of the real people using it. The most challenging part of the job is {challenge|balancing what users need against what the business needs}, especially when those two things are in real tension. Over time, I've learned that {lesson|good design often requires the courage to say no} — to complexity, to features that don't truly serve anyone, to the temptation to add rather than refine. What keeps me motivated is the scale of what's at stake. The decisions I make shape how millions of people interact with technology every day, and I find that responsibility both humbling and genuinely energizing.",
      p: ["technology should feel genuinely human and accessible", "the courage to say no — to complexity, to features that don't serve anyone", "decisions that shape how millions of people interact with technology"],
    },
  },
  {
    id: 'intro_4', collectionId: '자기소개', em: '🎯', nm: '목표·가치',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['What are your goals?', 'What do you value most?'],
    im: {
      t: "I have a few goals I'm actively working toward right now. In the short term, my biggest priority is to {goal|improve my English} so I can {reason|communicate more confidently in professional situations}. I'm also hoping to {other|travel somewhere new} in the coming year. To make progress, I try to {habit|practice speaking English whenever I get the opportunity} and carve out time to plan. In the long run, I'd like to {dream|work on projects that have a meaningful, positive impact on people's lives}. More than anything else, I value {value|continuous growth} — I want to keep learning and becoming better at what I do.",
      p: ["communicate more confidently in professional situations", "practice speaking English whenever I get the opportunity", "I value continuous growth"],
    },
    ih: {
      t: "What I value most is {value|doing work that genuinely matters and continuing to grow as a person}. I believe that staying curious is what keeps you sharp, so I try to {habit|read widely and take on challenges that push me outside my comfort zone}. In terms of career, I'd like to {goal|eventually lead a team and work on problems with real social impact}. I'm not rushing — I'd rather {approach|build genuine depth} before taking on more. The question I keep coming back to is {focus|whether what I'm doing is actually helping someone}. If the answer is yes, I feel I'm on the right track. I try not to lose sight of that, even when things get busy.",
      p: ["take on challenges that push me outside my comfort zone", "build genuine depth before taking on more", "whether what I'm doing is actually helping someone"],
    },
    al: {
      t: "When I think about what drives me, it always comes back to {value|wanting to do work that genuinely improves people's lives}. I'm less motivated by {contrast|status or growth for its own sake} and more by the question of {focus|whether what I'm building actually makes someone's day a little better — and whether I can prove it}. That sounds simple, but it's harder to stay true to than it appears, especially in industries that reward scale over real impact. My longer-term goal is to {goal|work on products in areas like health, education, or accessibility} — places where the gap between what exists and what's possible still feels wide and worth closing. I also think seriously about {critique|the tendency in the tech industry to optimize for engagement at the expense of genuine wellbeing}, and I want to be part of building something that genuinely pushes back against that.",
      p: ["whether what I'm building makes someone's day better — and whether I can prove it", "work in areas where the gap between what exists and what's possible is worth closing", "optimize for engagement at the expense of genuine wellbeing"],
    },
  },
  {
    id: 'intro_5', collectionId: '자기소개', em: '🌟', nm: '성격·스타일',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['How would you describe yourself?', 'What kind of person are you?'],
    im: {
      t: "I'd describe myself as {trait|pretty easygoing and genuinely curious}. I enjoy {behavior|meeting new people and learning from them}, and I'm always interested in things I don't fully understand yet. At work, I tend to be {work_style|focused and detail-oriented} — I like to understand things properly before moving forward. I'm not the loudest person in a room, but I {quality|listen carefully and try to make people feel heard}. My friends would probably say I'm {desc|reliable, calm, and easy to talk to}, and those are qualities I'm genuinely proud of.",
      p: ["I enjoy meeting new people and learning from them", "I listen carefully and try to make people feel heard", "reliable, calm, and easy to talk to"],
    },
    ih: {
      t: "I'd describe myself as someone who is {trait|thoughtful and detail-oriented}, but also {balance|genuinely adaptable when circumstances change}. I do my best thinking when I can {condition|focus deeply on one thing at a time}, without too many competing demands. I tend to think carefully before I speak, which might make me seem quiet at first, but I {quality|follow through on my commitments and take reliability seriously}. People who know me well would say I'm {desc|steady and dependable} — not the most dramatic person in the room, but consistent and trustworthy. I think that kind of consistency is underrated, and it's something I try hard to bring to everything I do.",
      p: ["thoughtful and detail-oriented, but genuinely adaptable", "follow through on commitments and take reliability seriously", "steady and dependable — consistent and trustworthy"],
    },
    al: {
      t: "I think of myself as {trait|someone who is deliberate rather than reactive}. I tend to {approach|sit with a problem before responding to it}, and I've come to see that as a genuine strength — even though in fast-moving environments it can sometimes feel like a liability. My real value isn't {contrast|being the most vocal person in a room}; it's {value|asking the questions that slow things down just long enough to get them right}. That said, I can be {self_aware|overly cautious}, and I've had to work actively on trusting my instincts more and acting before I feel completely ready. I've also seen, quite clearly, {lesson|how many avoidable mistakes come from moving too fast without enough reflection}. The balance between deliberation and decisiveness is something I keep working on — and probably always will.",
      p: ["deliberate rather than reactive", "asking questions that slow things down just long enough to get them right", "how many avoidable mistakes come from moving too fast"],
    },
  },

  // ─────────────────────────────────────────────
  // 취미 활동
  // ─────────────────────────────────────────────
  {
    id: 'hobby', collectionId: '취미 활동', em: '🎵', nm: '악기·음악',
    tc: '#B87A1A', tb: 'rgba(184,122,26,0.10)',
    qs: [
      'Tell me about your hobbies.',
      'What do you like to do in your free time?',
      'How has your hobby changed over the years?',
      'Tell me about a hobby you recently picked up.',
    ],
    im: {
      t: "One of my favorite hobbies is {hobby|playing the guitar}. I got into it about {period|three years} ago, and it quickly became one of my favorite ways to unwind after a long day. I usually practice for about {time|thirty minutes to an hour} in the evenings at home. What I enjoy most about it is {reason|how it lets me express myself in a way that's completely different from my work}. I've learned a few songs I can play for friends now, which is always a lot of fun. Before this hobby, I used to spend most of my evenings {past|just watching TV}, so it feels genuinely rewarding to have something creative to come home to. I'd love to keep improving and maybe {goal|join a small band someday}.",
      p: ["one of my favorite ways to unwind after a long day", "lets me express myself differently from my work", "feels genuinely rewarding to have something creative to come home to"],
    },
    ih: {
      t: "One of my favorite hobbies these days is {hobby|indoor rock climbing}. I first tried it about {period|two years} ago when a friend brought me along to a gym, and I was completely hooked from the very first session. I go about {freq|two or three times} a week now, usually after work. What I love most is {reason|how every route is a physical puzzle — you have to read the holds, plan your sequence, and adapt constantly}. It's also a genuinely effective full-body workout. Since I started, I've noticed real improvements in my {change|strength, focus, and ability to handle stress}. It's one of those activities where the more you invest, the more you get back — and that keeps me coming back every week.",
      p: ["completely hooked from the very first session", "every route is a physical puzzle", "the more you invest, the more you get back"],
    },
    al: {
      t: "The hobby I'm most passionate about right now is {hobby|film photography}. I stumbled into it about {period|four years} ago — {trigger|I found an old film camera in my parents' closet and loaded a test roll out of pure curiosity}. What started as an experiment has become something I genuinely can't imagine my life without. What draws me to film specifically is {reason|the intentionality the medium demands — with only thirty-six frames per roll, every single shot requires a real decision}. That constraint, which sounds like a disadvantage, actually {paradox|makes the whole process feel more deliberate and alive}. Beyond the craft, it's changed how I move through the world — {insight|I now notice light, composition, and the texture of everyday scenes in ways I was completely blind to before}. Photography has become less a hobby and more {metaphor|a practice in paying genuine attention}.",
      p: ["the intentionality the medium demands", "every shot requires a real decision", "a practice in paying genuine attention"],
    },
  },
  {
    id: 'hobby_climb', collectionId: '취미 활동', em: '🧗', nm: '클라이밍',
    tc: '#B87A1A', tb: 'rgba(184,122,26,0.10)',
    qs: ['Tell me about your hobbies.', 'What do you like to do in your free time?'],
    im: {
      t: "One of my favorite hobbies is {hobby|indoor rock climbing}. I got into it about {period|two years ago} when a friend invited me to try it, and I've been going regularly ever since. I usually go about {freq|twice a week} after work. What I love most about it is {reason|how it forces you to focus completely — every route is like a puzzle you have to solve with your whole body}. It's also a fantastic workout, and I always leave feeling less stressed than when I arrived. I'd love to keep progressing and eventually {goal|try outdoor climbing} someday.",
      p: ["forces you to focus completely", "a puzzle you solve with your whole body", "always leave feeling less stressed than when I arrived"],
    },
    ih: {
      t: "One of my main hobbies is {hobby|rock climbing}. I started about {period|two years} ago when a friend introduced me to it, and I was immediately drawn in by how different it felt from other exercise. What I find most compelling is {reason|how it demands both physical strength and active problem-solving at the same time} — you can't force your way up a route; you have to think. I go {freq|two or three times a week} now, and the improvements in my {change|grip strength, body awareness, and overall fitness} have been really motivating. But more than the physical side, I've come to value {benefit|how completely it clears my head} — when you're on the wall, there's genuinely no room for anything else. It's become one of the most important parts of my week.",
      p: ["demands physical strength and active problem-solving simultaneously", "you can't force your way up — you have to think", "when you're on the wall, there's no room for anything else"],
    },
    al: {
      t: "The hobby I'm most invested in right now is {hobby|rock climbing}. I fell into it about {period|three years} ago — {trigger|a friend essentially dragged me to a gym, and I went from complete skeptic to fully obsessed within a single session}. What keeps me coming back is {reason|how absolutely present it forces you to be}. When you're halfway up a wall with tired arms, you cannot think about your inbox or your to-do list — and in a world where it's almost impossible to truly disconnect, that's a genuinely rare and valuable thing. Every route is a {aspect|physical problem that requires reading, planning, and constant real-time adaptation}, and the process of failing a route, analyzing why, and eventually cracking it has quietly taught me a great deal about {insight|how to approach difficulty and setbacks in the rest of my life too}. At this point, climbing feels less like a hobby and more like {metaphor|a practice in presence and persistence}.",
      p: ["how absolutely present it forces you to be", "failing, analyzing, and eventually cracking it teaches you about setbacks in life", "a practice in presence and persistence"],
    },
  },
  {
    id: 'hobby_photo', collectionId: '취미 활동', em: '📷', nm: '사진',
    tc: '#2472A0', tb: 'rgba(36,114,160,0.09)',
    qs: ['Tell me about your hobbies.', 'What do you like to do in your free time?'],
    im: {
      t: "I really enjoy {hobby|photography} in my free time. I usually head out on weekends with my {device|phone} and shoot whatever catches my eye — interesting light, everyday scenes, small details that most people walk past without noticing. What I love most about it is {reason|how it forces me to slow down and actually look at my surroundings}. I've been doing it for about {period|two years} now, and I'm already thinking about getting {article_goal|a proper camera} to take it further. It's become a genuinely meaningful part of how I spend my free time, and it's changed how I see the world around me.",
      p: ["forces me to slow down and actually look at my surroundings", "thinking about getting a proper camera to take it further", "changed how I see the world around me"],
    },
    ih: {
      t: "Photography is one of my main hobbies, and something I've become increasingly serious about over the past {period|four years}. I started with just my phone, moved to {gear|a mirrorless camera}, and recently began shooting on {other|film}. What film photography taught me above everything else is {reason|the value of intentionality — with only thirty-six frames per roll, you genuinely think before every shot}. That discipline has changed not just how I make images, but how I see the world day to day — {change|I find myself noticing light, composition, and texture in everyday situations even when I don't have a camera with me}. More than anything, photography has become {lesson|a practice in learning to truly look} — and I think that's a skill that applies well beyond making pictures.",
      p: ["the value of intentionality — you genuinely think before every shot", "noticing light and composition even when I don't have a camera", "a practice in learning to truly look"],
    },
    al: {
      t: "The hobby I'm most passionate about is {hobby|film photography}. I fell into it almost by accident — {trigger|I found an old camera at my parents' house, loaded a test roll expecting nothing much, and was completely stopped in my tracks when the images came back}. That was enough. What draws me to film specifically is {reason|the productive constraint of thirty-six frames — it turns every shot into a genuine, considered choice, which makes the whole process feel more real and intentional}. Beyond the craft, photography has become a way of {insight|practicing a kind of slow, deliberate attention that I find increasingly rare in modern life}. I walk differently now — noticing the angle of afternoon light, the geometry of a shadow, the expression on a stranger's face across a street. It hasn't just changed what I make; it's changed {metaphor|how I inhabit the world}.",
      p: ["the productive constraint of thirty-six frames", "every shot is a genuine, considered choice", "changed how I inhabit the world"],
    },
  },
  {
    id: 'hobby_reading', collectionId: '취미 활동', em: '📚', nm: '독서',
    tc: '#B87A1A', tb: 'rgba(184,122,26,0.10)',
    qs: ['Tell me about your reading habits.', 'What do you like to read?'],
    im: {
      t: "I love reading in my free time. I usually go for {genre|fiction and essays}, and I try to read {freq|a little bit every night before bed}. I'm not the fastest reader, but I get through {amount|a few books a month} and enjoy every one. What I love most about reading is {reason|how it helps me relax while also giving me something real to think about}. I'm especially drawn to {type|stories about ordinary people navigating their lives} — I find them both comforting and thought-provoking. Reading has become one of the most reliable ways I have to {purpose|wind down and feel like myself again at the end of a long day}.",
      p: ["helps me relax while giving me something real to think about", "stories about ordinary people navigating their lives", "wind down and feel like myself again"],
    },
    ih: {
      t: "Reading is one of my most consistent hobbies. I aim to get through {freq|at least a few books a month}, and I'm especially drawn to {genre|non-fiction — psychology, history, and books about how people make decisions and find meaning}. What keeps bringing me back is {reason|how books give me perspectives and ways of thinking that I'd never encounter otherwise} — they force me out of my own point of view in a way that conversation rarely does. I recently joined {other|a book club with some colleagues}, which has pushed me to read things outside my usual range. More than entertainment, reading has become {value|the main way I keep growing as a thinker} — and it's something I'm deliberate about protecting time for.",
      p: ["give me perspectives I'd never encounter otherwise", "force me out of my own point of view", "the main way I keep growing as a thinker"],
    },
    al: {
      t: "I've been a serious reader since I was young, and it remains one of the most important parts of my life. What I value most about reading is {reason|the way a great book lets you genuinely inhabit another consciousness} — not just understand a viewpoint intellectually, but feel it from the inside, live in it for a while. I read across {range|fiction, non-fiction, and essays}, though I keep returning to {genre|books that explore how people construct meaning from their experiences}. The books that have mattered most to me are the ones that {insight|changed the questions I ask, not just the answers I hold} — the ones I'm still turning over in my mind a year later. I guard my reading time deliberately. In a world built to fragment attention, {value|choosing to read slowly and deeply feels like an act of genuine resistance} — and one I'm not willing to give up.",
      p: ["lets you genuinely inhabit another consciousness", "changed the questions I ask, not just the answers I hold", "choosing to read slowly and deeply feels like an act of genuine resistance"],
    },
  },
  {
    id: 'hobby_cooking', collectionId: '취미 활동', em: '🍳', nm: '요리',
    tc: '#B87A1A', tb: 'rgba(184,122,26,0.10)',
    qs: ['Do you like cooking?', 'What do you like to cook?'],
    im: {
      t: "I really enjoy cooking, especially on weekends when I have more time to experiment. I'm not an expert, but I love trying {thing|new recipes and working with different ingredients}. There's something {reason|genuinely satisfying about making something from scratch and having it actually taste good}. I've gotten comfortable with {dishes|a handful of Korean and Western dishes} at this point, and I'm slowly building my skills. Cooking has become a really nice way for me to {benefit|unwind and be creative in a way that has nothing to do with work}. I'd love to keep learning and tackle more challenging recipes as I go.",
      p: ["making something from scratch and having it actually taste good", "slowly building my skills", "unwind and be creative in a way that has nothing to do with work"],
    },
    ih: {
      t: "Cooking has become one of my favorite hobbies over the past couple of years. I now {freq|cook most of my meals at home}, and I've been getting deeper into {cuisine|Korean and Italian food} in particular. What I genuinely love about the process is {reason|how fully sensory it is — the smells, the sounds, the constant adjustments you make as you go}. There's something {benefit|deeply therapeutic} about being completely focused on one physical task with a clear, tangible result at the end. Lately I've been exploring {other|new techniques and regional variations} I didn't know before, which makes every session feel like learning something new. Cooking has quietly become one of the most restorative parts of my week.",
      p: ["how fully sensory the process is", "deeply therapeutic to be focused on one task with a tangible result", "one of the most restorative parts of my week"],
    },
    al: {
      t: "Cooking is how I {purpose|stay creative and grounded} outside of work. What I'm drawn to isn't just the act of making food, but {topic|understanding why things work — why certain flavor combinations make sense, how different techniques transform the same ingredient in completely different ways}. Being in the kitchen is, for me, {reason|almost meditative} — no screens, no multitasking, just full presence with the task in front of me. I've also come to see cooking as {reframe|a form of genuine care and attention}, both for myself and for the people I cook for. There's a directness to it I love: you invest effort, and you get something real and immediate back. Lately I've been going deeper into {cuisine|the regional traditions and food histories} behind different cuisines, which has added a whole new layer of meaning to something I already loved.",
      p: ["understanding why things work — flavors, techniques, transformation", "almost meditative — full presence with no screens", "a form of genuine care and attention"],
    },
  },

  // ─────────────────────────────────────────────
  // 건강·운동
  // ─────────────────────────────────────────────
  {
    id: 'health', collectionId: '건강·운동', em: '🏃', nm: '건강·운동',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: [
      'Tell me about how you stay healthy.',
      'Describe your exercise routine.',
      'How has your approach to health changed?',
    ],
    im: {
      t: "I try to stay healthy through a combination of regular exercise and being mindful about what I eat. For exercise, I go to {place|the gym near my office} about {freq|three times} a week, mostly in the evenings after work. My favorite thing to do there is {exercise|weight training} because {reason|I can track my progress over time, which keeps me genuinely motivated}. On the diet side, I try to avoid {avoid|overly processed food} and eat more {eat|vegetables and protein}. I don't follow a strict plan, but I try to be conscious of what I put into my body. I've found that even small, consistent habits make {habit|a real and noticeable difference} in how I feel each day.",
      p: ["track my progress, which keeps me genuinely motivated", "conscious of what I put into my body", "small consistent habits make a real and noticeable difference"],
    },
    ih: {
      t: "Staying healthy has become a genuine priority for me over the past {period|couple of years}. I exercise {freq|four or five times} a week — mostly {exercise|running in the mornings} — and I've added {other|yoga} once or twice a week for flexibility and stress management. On the diet side, I've cut back significantly on {cut|refined sugar and late-night eating} and started cooking at home most days. Since making these changes, I've seen {result|a real improvement in my energy, sleep quality, and overall mood}. The biggest shift was in how I think about health — I moved from seeing it as {old_view|just about how I look} to understanding it as {new_view|the foundation that makes everything else in my life function well}. That change in perspective made everything much easier to sustain.",
      p: ["added yoga for flexibility and stress management", "real improvement in energy, sleep quality, and mood", "health is the foundation that makes everything else function well"],
    },
    al: {
      t: "I approach health very deliberately and systematically these days. My weekly routine is structured — {routine|running three mornings a week, strength training two evenings, and keeping weekends flexible}. It wasn't always like this. The turning point came {trigger|after a serious period of burnout about two years ago}, when I realized I had been completely neglecting my body while pouring everything into work. Since then, I've stopped treating exercise as optional and started treating it as {reframe|non-negotiable maintenance — the same logic as charging your phone every night, you have to recharge yourself}. The impact has been significant. My cognitive clarity, emotional steadiness, and ability to handle difficult situations have all improved in ways I can't attribute to anything else. I've come to understand, quite viscerally, that {insight|the body and mind are not separate systems — taking care of one is inseparable from performing well in the other}.",
      p: ["non-negotiable maintenance — same logic as charging your phone", "cognitive clarity, emotional steadiness all improved noticeably", "the body and mind are not separate systems"],
    },
  },
  {
    id: 'health_run', collectionId: '건강·운동', em: '👟', nm: '러닝',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['Do you run?', 'Tell me about your running routine.'],
    im: {
      t: "I run {freq|two or three times} a week, usually in the {time|evening} after work. I started about {period|two years ago} as a way to manage stress, and it's become a regular and important part of my week. I typically do about {distance|five kilometers} each time — nothing too intense. What I love about running is {reason|how simple it is — just me, my shoes, and the road}. It's one of the best ways I have to {benefit|clear my head and decompress after a long day}. I'm not competitive about it at all; I just run for how it makes me feel. Even a relatively short run makes a real difference in my mood.",
      p: ["just me, my shoes, and the road", "one of the best ways to clear my head and decompress", "even a short run makes a real difference in my mood"],
    },
    ih: {
      t: "Running is my main form of exercise, and it's something I take seriously. I {freq|run four or five mornings} a week before work, which means getting up earlier than I'd like — but I've found that starting the day with a run {benefit|sets a tone of focus and energy that carries through the whole morning}. I've completed {goal|a couple of half marathons} and I'm currently training toward a full one. The physical benefits are real, but the {mental|mental and emotional benefits} have honestly become more important to me over time. Running is where I process things — difficult decisions, things weighing on me, ideas I'm working through. It's become essential to {value|maintaining my mental clarity and emotional balance}.",
      p: ["sets a tone of focus and energy for the whole morning", "running is where I process difficult decisions and ideas", "essential to maintaining mental clarity and emotional balance"],
    },
    al: {
      t: "I've been running seriously for {years|about five years}, and my relationship with it has transformed considerably. It started as a way to stay fit, but it's become something far more fundamental — {reframe|a form of moving meditation that I structure my entire week around}. The turning point was {trigger|a period of intense burnout a few years ago}, when I realized the only moments I felt genuinely clear-headed were during and after a run. Everything else — the noise, the stress, the compulsive overthinking — seemed to dissolve on the road. Since then, running has become the anchor of my mental health practice, not my fitness routine. The physical gains are real, but {insight|what gets me out there every morning is the cognitive clarity and emotional steadiness I simply can't replicate any other way}.",
      p: ["a form of moving meditation I structure my week around", "the only moments I felt genuinely clear-headed were during a run", "cognitive clarity and emotional steadiness I can't replicate any other way"],
    },
  },
  {
    id: 'health_yoga', collectionId: '건강·운동', em: '🧘', nm: '요가·스트레칭',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['Do you do yoga or stretching?', 'How do you relax your body?'],
    im: {
      t: "I do {exercise|simple stretching} at home a few times a week, and I recently started going to {other|a yoga class} at a studio nearby. I was a little skeptical at first, but I ended up really enjoying it. It's been great for {benefit|improving my flexibility and relieving the tension that builds up from sitting at a desk all day}. I usually do my stretching {when|in the morning or just before bed}, and I've already noticed that my body feels noticeably less stiff. I'd love to make it a more consistent habit — I can already feel the difference when I'm regular about it.",
      p: ["relieving the tension from sitting at a desk all day", "body feels noticeably less stiff", "I can already feel the difference when I'm regular about it"],
    },
    ih: {
      t: "I practice {exercise|yoga} about {freq|once or twice a week}, and it's become an important part of how I take care of myself. I'm particularly drawn to {style|vinyasa} because it's {reason|both physically demanding and mentally focusing at the same time — it's hard to think about anything else when you're in the middle of a challenging flow}. It complements my {other|running} well, helping with flexibility and recovery. Since I started, I've noticed real changes in {change|my posture, my range of motion, and how quickly I recover from physical effort}. What I didn't expect was how much it would help with stress — there's something about the combination of {benefit|breath control, movement, and deliberate stillness} that genuinely settles the nervous system in a way other exercise doesn't.",
      p: ["physically demanding and mentally focusing at the same time", "real changes in posture, range of motion, and recovery", "breath control, movement, and stillness settles the nervous system"],
    },
    al: {
      t: "Yoga has become one of the most meaningful practices in my life, and it's changed how I understand the relationship between {topic|body, mind, and sustained attention}. What I value most is {reason|the discipline of staying present in discomfort — holding a difficult pose and staying with the breath when everything in you wants to move on or give up}. That's not just a physical skill; it transfers directly to how I handle difficult situations in the rest of my life. What yoga has also revealed is {insight|how much unconscious tension the body carries — in the shoulders, the jaw, the hips — tension we don't even register until we slow down and pay attention to it}. I'm not particularly flexible, and I've made peace with that. I've understood that {lesson|the point of the practice isn't to arrive at some ideal state — it's to keep showing up honestly and noticing what's actually there}.",
      p: ["staying present in discomfort — holding a pose when everything wants to give up", "how much unconscious tension the body carries", "the point is to keep showing up honestly and noticing what's actually there"],
    },
  },
  {
    id: 'health_diet', collectionId: '건강·운동', em: '🥗', nm: '식단·영양',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['How do you manage your diet?', 'What do you eat to stay healthy?'],
    im: {
      t: "I try to eat well, even though I don't follow a strict diet. My focus is on {food|eating more vegetables and getting enough protein}, and I try to avoid {avoid|too much junk food and late-night eating}. I cook at home when I can, which makes it easier to control what I'm actually putting into my body. On days when I eat well, I feel {result|noticeably more energetic and focused} compared to days when I don't. Small habits like {habit|drinking enough water and not skipping breakfast} have honestly made a bigger difference than I expected. I'm not perfect about it, but I'm much more conscious about food than I used to be.",
      p: ["eating more vegetables and getting enough protein", "noticeably more energetic and focused on days I eat well", "small habits made a bigger difference than I expected"],
    },
    ih: {
      t: "I've made some real changes to my diet over the past few years, and I've noticed a significant difference. I {habit|cook most of my meals at home now} and try to limit {cut|processed food and added sugar}. I've also started {approach|meal prepping on weekends} so there's always something healthy ready during the busy week. The impact is clear — on weeks when I eat well consistently, I have {result|more sustained energy throughout the day, better sleep, and noticeably sharper focus at work}. I don't follow any specific plan; I just try to make sensible choices most of the time. I've learned that {lesson|consistency over the long run matters far more than being perfect on any given day}.",
      p: ["meal prepping on weekends so there's always something healthy ready", "more sustained energy, better sleep, sharper focus", "consistency over the long run matters far more than being perfect"],
    },
    al: {
      t: "My relationship with food has evolved significantly, and so has how I think about it. I've moved away from seeing diet as {reframe|something to restrict or optimize}, and toward seeing it as {value|a way of taking care of the body I depend on to do everything else well}. The shift came after {trigger|a stretch where I was eating poorly and the impact on my mood, my focus, and my sleep was impossible to ignore anymore}. What became clear was {insight|that what I eat doesn't just affect my body — it directly shapes my cognitive state, my emotional resilience, and how I show up for work and for the people around me}. I'm not rigid about it — I still enjoy eating out and don't cut anything out completely. But I've learned to pay real attention, to notice how different foods actually make me feel, and to make choices that support the kind of energy and clarity I want to sustain.",
      p: ["taking care of the body I depend on to do everything else well", "what I eat shapes my cognitive state and emotional resilience", "notice how different foods actually make me feel"],
    },
  },
  {
    id: 'health_sleep', collectionId: '건강·운동', em: '😴', nm: '수면·휴식',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['How much do you sleep?', 'Do you have a sleep routine?'],
    im: {
      t: "I try to get about {hours|seven hours} of sleep most nights and make a point of {habit|being in bed by midnight}. I also try to avoid {avoid|screens} right before bed, because I've noticed it makes it much harder to fall asleep. Good sleep makes {result|a really noticeable difference in how I feel the next day} — my energy, my mood, my ability to concentrate. I try to keep {routine|a consistent bedtime} even on weekends, which has helped a lot. Sleep is something I used to take for granted, but I now see it as {value|one of the most important pillars of staying healthy and functioning well}.",
      p: ["being in bed by midnight", "a noticeable difference in energy, mood, and concentration", "one of the most important pillars of staying healthy"],
    },
    ih: {
      t: "Sleep is something I've become very intentional about. I aim for {hours|seven to eight hours} a night and try hard to keep {routine|a consistent sleep schedule throughout the week}. I've built {habit|a wind-down routine} in the hour before bed — phone away, some light stretching or reading, and a deliberate mental shift out of work mode. The difference when I'm well-rested versus not is really striking — {result|my focus is sharper, my mood is more stable, and I handle difficult situations noticeably better}. I used to think sleep was something you could sacrifice when life got busy, but I've completely changed my view. Protecting my sleep has become one of the most important health decisions I make, and I notice immediately when I slip.",
      p: ["a wind-down routine — phone away, stretching or reading", "focus sharper, mood more stable, handle difficulties better", "protecting my sleep is one of the most important health decisions I make"],
    },
    al: {
      t: "Sleep is the foundation of how I function, and I treat it as {reframe|non-negotiable recovery — not a luxury or an indulgence, but a basic operating requirement}. I became deliberate about this after {trigger|going through a period of chronic poor sleep and watching my cognitive performance, emotional regulation, and physical health deteriorate in real time}. Experiencing the consequences firsthand made the research feel visceral rather than abstract. Since then, I've built real structure around my sleep — {routine|consistent timing, a proper wind-down, no caffeine after early afternoon, no devices in the bedroom}. The impact on every other area of my life has been significant and lasting. What I've internalized deeply is {insight|that sleep isn't time you're giving up — it's the investment that makes everything you do during waking hours actually work properly}. There is no discipline or effort that can compensate for consistently poor sleep.",
      p: ["non-negotiable recovery — a basic operating requirement", "sleep isn't time you're giving up — it's the investment that makes waking hours work", "no discipline can compensate for consistently poor sleep"],
    },
  },

  // ─────────────────────────────────────────────
  // 공원
  // ─────────────────────────────────────────────
  {
    id: 'park_experience', collectionId: '공원', em: '🌳', nm: '공원에서의 특별한 경험',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: [
      'Tell me about a special experience you had at a park.',
      'Describe a memorable moment in nature or at a park.',
      'What do you remember about visiting a park?',
    ],
    im: {
      t: "I had a really memorable experience at {place|a park near my home} about {period|last spring}. I went there {with|on my own} on {article_day|a quiet Saturday morning}, just to get some fresh air and clear my head. I ended up {memory|sitting under a large tree with a book for a while, then slowly walking around the lake}. What made it special was {feeling|how completely peaceful and still everything felt — I could hear birds, feel a breeze, and there was almost no one around}. I stayed for a couple of hours and came home feeling {result|genuinely rested in a way I hadn't felt in a long time}. It reminded me how much I need those simple, quiet moments.",
      p: ["just to get some fresh air and clear my head", "how completely peaceful and still everything felt", "rested in a way I hadn't felt in a long time"],
    },
    ih: {
      t: "One park experience that really stayed with me happened at {place|Seoul Forest} about {period|a year ago}. I went with {with|a group of close friends} and we spent the afternoon {activity|cycling around the park and then settling in for a picnic under the trees}. What made it unexpectedly special was {memory|stumbling across a small outdoor concert — someone was playing guitar and a little crowd had gathered on the grass to listen}. We ended up sitting there for almost an hour, completely unplanned. It was one of those afternoons that felt effortless and perfect precisely because nothing about it was arranged. It reminded me that {lesson|some of the best moments happen when you stop trying to plan them and just leave room for things to unfold}.",
      p: ["stumbling across a small outdoor concert completely by chance", "effortless and perfect because nothing was arranged", "the best moments happen when you leave room for things to unfold"],
    },
    al: {
      t: "One park experience has stayed with me more than any other. I was hiking {place|a national park trail} I'd wanted to try for a long time, about {period|three years ago}. About halfway up, {episode|the weather turned hard and I had to shelter under a rock overhang with two complete strangers for nearly an hour while the rain came down}. Instead of just waiting in silence, the three of us ended up in a real conversation — about our lives, what had brought us there, what mattered to us. When the rain cleared, we finished the trail together and said goodbye at the summit. I've thought about that hour many times since. It was a clear reminder that {lesson|unexpected disruptions are sometimes exactly what creates genuine connection} — and that {insight|nature has a way of stripping away the usual social formality and letting people meet each other more honestly than they otherwise would}.",
      p: ["sheltered with two strangers for an hour while the rain came down", "unexpected disruptions are sometimes what creates genuine connection", "nature strips away social formality and lets people meet more honestly"],
    },
  },
  {
    id: 'park_walk', collectionId: '공원', em: '🚶', nm: '공원 산책',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['Do you often go to parks?', 'What do you do at the park?'],
    im: {
      t: "I like to go for walks at a park near my home, usually {freq|on weekends}. There's a nice path that loops around, and I usually walk it for about {time|an hour}. I love it because {reason|it's quiet and green — a genuine break from the noise and pace of city life}. I sometimes go {when|early in the morning} before it gets crowded, and those quiet morning walks have become some of my favorite moments of the week. It helps me {benefit|feel refreshed and reset before the day really begins}. It's become a simple but genuinely important ritual that I look forward to.",
      p: ["a genuine break from the noise and pace of city life", "quiet morning walks are some of my favorite moments", "a simple but genuinely important ritual"],
    },
    ih: {
      t: "I try to visit parks {freq|at least once or twice a week} — usually {place|Seoul Forest} or somewhere close by. Depending on how I feel, I'll either {activity|walk slowly and take things in, or go for a run along the path}. For me, the park is {reason|a place to decompress and reset} without needing to go far or make any real plans. There's something about {aspect|being surrounded by trees and open sky} that creates a kind of mental spaciousness I just don't find anywhere else in the city. I often come back feeling {benefit|clearer and calmer} than when I left. It sounds like a small thing, but it makes a genuine difference to my week.",
      p: ["a place to decompress and reset without making any real plans", "being surrounded by trees creates mental spaciousness", "clearer and calmer when I leave than when I arrived"],
    },
    al: {
      t: "Parks are where I go when I need to {purpose|think without distraction, or stop thinking altogether}. What I value most about them is {reason|the genuine absence of agenda} — no productivity target, no one asking anything of me, just walking and noticing whatever happens to be there. In a city designed to keep you moving and consuming and responding, that kind of unstructured time feels increasingly rare and necessary. I've had some of my clearest thinking and most honest conversations on park walks — there's something about {insight|the shared rhythm of walking side by side that seems to lower people's guard and let real conversation happen}. I also deeply appreciate that parks are {value|genuinely free and open to everyone} — one of the last truly public spaces where you don't have to pay to be present. In a city that can feel very transactional, that matters more than people tend to notice.",
      p: ["the genuine absence of agenda", "the shared rhythm of walking lowers people's guard and lets real conversation happen", "one of the last truly public spaces where you don't have to pay to be present"],
    },
  },
  {
    id: 'park_picnic', collectionId: '공원', em: '🧺', nm: '피크닉·야외',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['Have you had a picnic at a park?', 'What do you do outdoors?'],
    im: {
      t: "I've had some really enjoyable picnics at the park with {with|friends}. We usually pack {food|simple food and drinks}, find {spot|a shady spot under a tree}, and spend the afternoon talking and relaxing. What I love about picnics is {reason|how easy and low-key they are — no reservations, no planning, just good company and decent weather}. We usually do it in {season|spring or autumn} when the temperature is just right. There's something about {aspect|eating outside in good company} that makes even simple food taste better and conversation flow much more easily. It's become one of my favorite ways to spend a free afternoon.",
      p: ["no reservations, no planning — just good company and decent weather", "eating outside makes even simple food taste better", "one of my favorite ways to spend a free afternoon"],
    },
    ih: {
      t: "I love picnics, especially in {season|spring and autumn}. What I love most about them is {reason|how wonderfully unpressured they are} — no reservations, no dress code, no schedule to stick to. We usually {routine|pick a spot, spread a blanket, and let the afternoon unfold on its own}. What I've noticed is that {aspect|conversations during picnics tend to go somewhere more real and open than usual} — without the structure of a restaurant or a formal plan, people seem to relax differently. Some of the best and most honest conversations I've had with close friends have happened on a blanket in a park with nowhere to be. It's a simple format that somehow creates the conditions for genuinely good time.",
      p: ["wonderfully unpressured — no reservations, no dress code", "conversations tend to go somewhere more real and open", "simple format that creates conditions for genuinely good time"],
    },
    al: {
      t: "Picnics are one of my favorite social formats, and I've thought about why. What I love is {reason|how they strip away the layers of curated experience — no venue to impress with, no ambiance to pay for, just people, food, and unhurried time}. That simplicity is surprisingly liberating. Some of the picnics I've loved most were {memory|completely unplanned} — a message sent on a Saturday afternoon, a few people gathered, and somehow it became the best thing I did that week. There's a {insight|kind of generosity in that spontaneity} — it creates space for whoever shows up and asks nothing of anyone in advance. In a culture increasingly built around optimizing and booking ahead, a picnic is {value|a quiet and deliberate refusal to over-engineer the way we spend time with each other}.",
      p: ["strips away curated experience — just people, food, and unhurried time", "spontaneity creates space for whoever shows up", "a quiet refusal to over-engineer the way we spend time together"],
    },
  },
  {
    id: 'park_nature', collectionId: '공원', em: '🍃', nm: '자연·계절',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['Do you like being in nature?', 'What season do you like for parks?'],
    im: {
      t: "I really love spending time in nature. My favorite season to visit the park is {season|autumn} — {reason|the air gets crisp, the leaves change color, and everything feels a little more vivid and alive}. Spring is wonderful too, especially when {thing|the cherry blossoms are out}. Whenever I spend time surrounded by {nature|trees and open sky}, I feel {feeling|calmer and more settled} almost right away. I try to get outside {freq|as often as I can}, even for just a short walk. It's one of the simplest and most reliable ways I know to {benefit|recharge and feel more like myself}.",
      p: ["the air gets crisp and everything feels more vivid", "calmer and more settled almost right away", "one of the simplest ways to recharge and feel like myself"],
    },
    ih: {
      t: "I'm really drawn to spending time in nature, and I especially love {aspect|watching how parks change with the seasons}. There's something genuinely moving to me about {example|the arrival of cherry blossoms in spring or the way leaves turn gold and red in autumn} — it's a reminder that {insight|beauty often lives in transition, and that change itself can be something to appreciate rather than resist}. I tend to visit parks most often in {season|spring and autumn}, when the atmosphere feels most alive. Each season has its own {quality|distinct mood} — spring feels full of possibility, while autumn feels more reflective and still. I've started making a point of {habit|visiting the same spots across seasons} to see how they transform, and it's become something I genuinely look forward to.",
      p: ["beauty often lives in transition", "each season has its own distinct mood", "visiting the same spots across seasons to see how they transform"],
    },
    al: {
      t: "Time in nature does something for me that nothing in the built environment quite replicates. What I've come to value most is {reason|the particular quality of attention that natural spaces invite} — slow, receptive, present to what's actually there rather than oriented toward what you need to accomplish. Parks connect me to {topic|the rhythm of the seasons in a way that city life actively works against}. I notice {detail|how the light falls at a different angle in October than in May, how the smell of the air shifts, how the same bench feels completely different in winter versus summer}. There's a kind of {value|temporal honesty} to seasonal change that I find genuinely grounding — a reminder that {insight|nothing stays as it is, and that impermanence is not something to manage around but to move with honestly}. I try to visit the same park across all four seasons deliberately. There's something quietly profound about {lesson|witnessing a full cycle — and recognizing that your own life is also part of a much longer, larger rhythm}.",
      p: ["the particular quality of attention natural spaces invite", "temporal honesty to seasonal change", "witnessing a full cycle and recognizing your life is part of a longer rhythm"],
    },
  },
  {
    id: 'park_activity', collectionId: '공원', em: '🚴', nm: '공원에서의 활동',
    tc: '#1A7A4A', tb: 'rgba(26,122,74,0.09)',
    qs: ['What activities do you do at the park?', 'Do you exercise at the park?'],
    im: {
      t: "When I go to the park, I usually {activity|take a walk or rent a bike} and ride along the paths. Sometimes I just {other|find a quiet bench and sit for a while}. I've also seen people {examples|doing yoga and playing badminton}, and I'd love to try those sometime too. What I appreciate most about parks is {reason|how flexible they are — you can be as active or as still as you want, and both feel completely fine}. I usually go {freq|on weekends} when I have more free time, and I almost always come back feeling {benefit|refreshed and a bit more relaxed}. It's one of the easiest ways I know to take a real break.",
      p: ["as active or as still as you want — both feel completely fine", "almost always come back feeling refreshed", "one of the easiest ways to take a real break"],
    },
    ih: {
      t: "I use the park for {activity|both running and more relaxed activities}, depending on the day. Some visits I'll run several laps; other times I'll {other|bring a book and find somewhere quiet to sit for an hour}. What I love is that the park genuinely accommodates {contrast|both modes — effort and stillness — without any judgment about which you choose}. I've also tried {other|outdoor yoga} a few times when the weather was right, and it was a lovely experience. What I keep coming back to is {reason|how parks let you set your own pace and purpose without any pressure to produce or perform}. That kind of low-stakes freedom is actually pretty rare, and it makes them genuinely restorative.",
      p: ["accommodates both effort and stillness without judgment", "let you set your own pace without pressure to perform", "low-stakes freedom that makes them genuinely restorative"],
    },
    al: {
      t: "I use parks for {purpose|both physical activity and deliberate rest}, often within the same visit. I might {activity|run the full loop early in the morning} and then come back in the afternoon to {other|read and do nothing in particular}. Same place, {insight|completely different register} — and I've come to value that flexibility enormously. What I appreciate most is that parks are one of the very few spaces in the city where {value|there's no implicit expectation to be productive, spend money, or perform in any way}. You're not a customer. You're not optimizing. You're simply there. I've had days where I set out to exercise and ended up {memory|sitting under a tree for two hours because that's what I actually needed in that moment}. The park allows that without judgment. That {lesson|permission to follow what you actually need, rather than what you planned to do}, feels increasingly rare and worth protecting.",
      p: ["same place, completely different register", "no expectation to be productive, spend money, or perform", "permission to follow what you actually need rather than what you planned"],
    },
  },

  // ─────────────────────────────────────────────
  // 여행
  // ─────────────────────────────────────────────
  {
    id: 'travel', collectionId: '여행', em: '✈️', nm: '여행 경험',
    tc: '#B87A1A', tb: 'rgba(184,122,26,0.10)',
    qs: [
      'Tell me about a memorable trip.',
      'Describe your favorite travel destination.',
      'Compare travel now versus the past.',
      'What kind of traveler are you?',
    ],
    im: {
      t: "One of the best trips I've ever taken was to {place|Kyoto, Japan} about {period|two years} ago. I went with {with|two close friends} and we spent {days|five days} exploring {spots|temples, bamboo forests, and quiet traditional streets}. The most memorable moment for me was {memory|visiting Fushimi Inari Shrine early in the morning — the rows of orange torii gates seemed to go on forever and it was almost completely silent}. I remember feeling {feeling|genuinely moved, like I'd stepped into a completely different world}. We also spent a lot of time trying local food, which was a highlight in itself. I'd love to go back and experience it in a different season.",
      p: ["the torii gates seemed to go on forever and it was almost silent", "genuinely moved — like stepping into a different world", "I'd love to go back in a different season"],
    },
    ih: {
      t: "A trip I still think about often was my solo visit to {place|Vietnam} about {period|three years} ago. It was my first time traveling internationally on my own, and I wasn't sure how it would feel. But it turned out to be {eval|one of the most rewarding travel experiences of my life}. I traveled from {city1|Hanoi} down through {city2|Hoi An} to {city3|Ho Chi Minh City}, and the contrast between cities was fascinating. What surprised me most was {surprise|the sheer energy of it all — the constant movement, street food stalls on every corner, the noise and color and heat of it}. More than the sights, what I came home with was the realization that {lesson|I'd been limiting myself by always traveling with others and staying in familiar, comfortable places}. That trip genuinely opened something up for me.",
      p: ["one of the most rewarding travel experiences of my life", "the sheer energy — movement, street food, noise and color", "I'd been limiting myself by staying in familiar, comfortable places"],
    },
    al: {
      t: "If I had to choose one trip that genuinely altered how I see the world, it would be {place|two weeks traveling through rural Morocco} about {period|four years} ago. I went deliberately off the tourist trail — {approach|staying in small family-run guesthouses, eating where locals ate, moving slowly rather than trying to cover ground efficiently}. What I encountered again and again was {impression|a quality of generosity and hospitality that had nothing to do with material wealth} — people offering what they had with a warmth that felt completely genuine and unperformed. The moment I remember most clearly is {episode|getting lost in the medina in Fes, being invited into a stranger's home for tea, and spending three hours in real conversation through broken French and gestures}. That afternoon changed something in me — {lesson|it reframed what wealth actually means, and what it means for a life to feel genuinely full}.",
      p: ["moving slowly rather than trying to cover ground efficiently", "generosity with nothing to do with material wealth", "reframed what wealth means and what makes a life genuinely full"],
    },
  },
  {
    id: 'travel_solo', collectionId: '여행', em: '🎒', nm: '솔로 여행',
    tc: '#B87A1A', tb: 'rgba(184,122,26,0.10)',
    qs: ['Have you traveled alone?', 'What is solo travel like?'],
    im: {
      t: "I've traveled alone a few times, and it always feels very different from group travel. My first solo trip was {place|to Japan}, and I was nervous going in. But I quickly discovered that I loved {reason|having complete freedom over my time and itinerary — no compromises, no waiting around}. I visited {spots|temples and different cities} entirely at my own pace, and along the way I ended up {people|talking to locals and other travelers} in ways I probably wouldn't have in a group. The whole experience taught me that {lesson|I'm more capable and self-reliant when I'm on my own than I'd given myself credit for}. I'd definitely do it again.",
      p: ["complete freedom over my time and itinerary", "talked to people I wouldn't have approached in a group", "more capable and self-reliant than I'd given myself credit for"],
    },
    ih: {
      t: "I've done a mix of solo and group travel, and I think both have their own real value. My most memorable solo trip was to {place|Vietnam}, and what struck me most was {insight|how much more open I was to conversation and connection when I was on my own} — without a group around me, I had to engage with the world differently, and I found I liked who it made me. The loneliness was real at moments, especially in the evenings. But so was {contrast|the growing sense of independence and self-reliance}, which built noticeably as the trip went on. I came home feeling like I'd learned something concrete and important about myself. I think everyone should experience solo travel at least once — {lesson|it shows you things about your own character that you simply can't discover any other way}.",
      p: ["more open to connection when I was on my own", "growing sense of independence that built over the trip", "shows you things about your character you can't discover any other way"],
    },
    al: {
      t: "Solo travel has been one of the most formative experiences of my adult life, and I don't say that lightly. My first major solo trip was to {place|Morocco} about {period|four years} ago — the first time I'd really been on my own for more than a few days in an unfamiliar country. What I discovered was {insight|how quickly you adapt and become more capable when there's no one to defer to} — you read situations faster, you make decisions with more confidence, you become more porous to the place you're in. There were genuine moments of loneliness, which I don't want to minimize. But there were also {clarity|moments of unexpected connection and serendipity that simply wouldn't have been possible in a group}. Solo travel has become, for me, {metaphor|one of the most honest mirrors of self-reliance that exists} — you find out what you're actually made of when everything around you is unfamiliar and the only constant is yourself.",
      p: ["how quickly you adapt when there's no one to defer to", "moments of connection that wouldn't have been possible in a group", "one of the most honest mirrors of self-reliance that exists"],
    },
  },
  {
    id: 'travel_food', collectionId: '여행', em: '🍜', nm: '여행과 음식',
    tc: '#B87A1A', tb: 'rgba(184,122,26,0.10)',
    qs: ['Do you try local food when you travel?', 'What food do you remember from trips?'],
    im: {
      t: "Food is a really big part of traveling for me. Whenever I visit somewhere new, I always make a point of {habit|seeking out local dishes rather than defaulting to familiar options}. In {place|Japan}, for example, I had {food|ramen and sushi} that was {reason|completely unlike anything I'd eaten before — not just in flavor but in the whole experience of eating it}. I love exploring {activity|local markets and street food stalls} because that's often where you find the most interesting and authentic food. Some of my most vivid travel memories are tied to a specific meal. I genuinely believe that {value|food is one of the best windows into a culture}.",
      p: ["seeking out local dishes rather than defaulting to familiar options", "unlike anything I'd eaten before — in flavor and the whole experience", "food is one of the best windows into a culture"],
    },
    ih: {
      t: "I plan my trips heavily around food. Before I go anywhere, I research {focus|the local food culture — what people eat, where they actually eat, what dishes are specific to that place}. Some of my clearest travel memories are of meals — {memory|sitting at a street stall in Thailand eating something I couldn't name, or wandering through a night market in Taiwan at midnight}. For me, {reason|food is the most direct and honest way into understanding a place and its people} — it tells you what they value, how they socialize, and what comfort means in that culture. I've had meals on trips that left a deeper impression than any museum or famous landmark. I always try to eat where locals actually eat, not where they send tourists.",
      p: ["research the local food culture before going", "the most direct and honest way into understanding a place", "meals that left a deeper impression than any landmark"],
    },
    al: {
      t: "My relationship with food while traveling has deepened over the years into something closer to {purpose|a form of genuine cultural inquiry}. I'm interested in {aspect|the whole system behind a meal — where ingredients come from, what the rituals around eating look like, what gets shared and what stays private}. Approached with real attention, a meal can {insight|tell you more about a society's values, rhythms, and history than most museums can}. The most powerful food experience I've had traveling was {episode|being invited into a stranger's home in Morocco for tea and pastries} — the generosity was overwhelming, and it communicated something about that culture that no amount of reading could have conveyed. I've also become more conscious of {balance|how tourism shapes and sometimes distorts local food systems}, so I try deliberately to support small independent places and eat where locals actually eat. Food while traveling isn't sustenance — {value|it's one of the most direct and honest ways we can pay respect to a place and its people}.",
      p: ["a form of genuine cultural inquiry", "a meal tells you more than most museums can", "one of the most direct ways we pay respect to a place"],
    },
  },
  {
    id: 'travel_culture', collectionId: '여행', em: '🏛️', nm: '문화·역사',
    tc: '#B87A1A', tb: 'rgba(184,122,26,0.10)',
    qs: ['Do you visit cultural sites when you travel?', 'What do you learn from travel?'],
    im: {
      t: "I love visiting {sites|temples, museums, and historic streets} when I travel. In {place|Kyoto}, I saw {memory|centuries-old temples and traditional gardens} that were completely unlike anything at home — there was a quietness and a sense of accumulated time that I found really moving. I always try to {approach|read a little about the history and context} before I visit a place, because things are so much more meaningful when I understand what I'm actually looking at. Travel has given me {lesson|a much broader sense of how diverse and layered human civilization really is} — and how much there is still to learn.",
      p: ["a sense of accumulated time that I found moving", "so much more meaningful when I understand what I'm looking at", "a broader sense of how diverse and layered human civilization is"],
    },
    ih: {
      t: "When I travel, I'm drawn most to {aspect|history and architecture} — the physical evidence of how people lived and what they built and believed. I've visited places like {example|Angkor Wat and medieval European cities}, and those experiences have stayed with me in a way that more conventional tourism hasn't. Travel keeps reminding me that {lesson|the world is far older and more layered than my daily life ever suggests}. I prepare seriously before a visit — reading about context, meaning, history — because I've found that {approach|understanding what you're seeing transforms it from impressive to genuinely moving}. Often the most powerful moments come from {memory|small, overlooked details} rather than the headline attractions.",
      p: ["physical evidence of how people lived and what they believed", "the world is far older and more layered than daily life suggests", "understanding what you're seeing transforms it from impressive to genuinely moving"],
    },
    al: {
      t: "My deepest motivation for traveling has always been {purpose|to understand how other people have organized their lives, values, and relationship to time and place}. I'm less interested in completing a list of famous sights than in {value|finding moments where the weight of history genuinely lands} — where you feel, in your body, that you're standing somewhere real happened and left a mark. That happened to me at {place|Angkor Wat} at sunrise, when {episode|the scale of what was built over centuries, and the way the jungle has slowly and relentlessly reclaimed it, hit me in a way I wasn't prepared for and couldn't photograph}. Travel has taught me {insight|how much of what I take to be universal — how I think about success, family, progress, time — is actually just one culturally specific way of seeing things}. That realization is one of the most consistently humbling and valuable things travel has given me.",
      p: ["moments where the weight of history genuinely lands", "the jungle reclaiming what was built — hit me in a way I wasn't prepared for", "what I take to be universal is just one culturally specific way of seeing"],
    },
  },
  {
    id: 'travel_plan', collectionId: '여행', em: '📋', nm: '여행 스타일·계획',
    tc: '#B87A1A', tb: 'rgba(184,122,26,0.10)',
    qs: ['How do you plan trips?', 'Do you prefer planned or spontaneous travel?'],
    im: {
      t: "When I plan a trip, I sort out the essentials — where I'm staying and one or two things I really want to do — but I deliberately leave {flex|plenty of open space in the schedule}. I've found that {reason|overpacking an itinerary actually takes away from the experience} — you spend the whole time trying to stick to a plan instead of being present. Some of my best travel memories came from {memory|getting off the planned route and discovering something I hadn't expected}. I've learned to trust that {lesson|leaving room in a trip is often what allows the best things to happen}.",
      p: ["leave plenty of open space in the schedule", "overpacking an itinerary takes away from the experience", "leaving room is often what allows the best things to happen"],
    },
    ih: {
      t: "My travel style sits between planned and spontaneous. I book {fixed|flights and accommodation} in advance — I need that foundation — but I keep {flex|the day-to-day schedule quite open}. What I've learned from many trips is that {reason|the most memorable moments almost always happen outside whatever I planned} — a recommendation from a local, a detour, something stumbled into by accident. I try to {approach|plan just enough to feel grounded and secure, but not so much that there's no room left for anything to surprise me}. Getting that balance right has made a real and consistent difference to how much I actually enjoy my trips.",
      p: ["the most memorable moments happen outside whatever I planned", "plan enough to feel grounded, but leave room to be surprised", "that balance has made a real difference to how much I enjoy trips"],
    },
    al: {
      t: "My approach to travel planning has shifted considerably — mostly in the direction of {insight|doing less of it and trusting more}. I used to plan in real detail and feel genuine frustration when things deviated from the plan. The shift came after {trigger|a trip where almost everything went wrong — missed connections, closed sites, bad weather for days} — and it somehow turned into one of the most memorable trips I've ever taken, entirely because we had to improvise. Since then, I've come to think of planning as {reframe|creating just enough structure to make real spontaneity possible, rather than building a script you feel obligated to follow}. The goal isn't to optimize every hour — it's to {value|stay present and genuinely open to what's actually there}. Travel has given me real evidence that {lesson|the desire to control outcomes is often exactly what prevents the best outcomes from happening}.",
      p: ["creating just enough structure to make real spontaneity possible", "stay present and genuinely open to what's actually there", "the desire to control outcomes is often what prevents the best outcomes"],
    },
  },

  // ─────────────────────────────────────────────
  // 기술·AI
  // ─────────────────────────────────────────────
  {
    id: 'technology', collectionId: '기술·AI', em: '📱', nm: '기술·AI',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: [
      'How has technology changed your life?',
      'What are your thoughts on social media?',
      'How do you feel about AI becoming more common?',
      'What technology could you not live without?',
    ],
    im: {
      t: "Technology has changed almost every part of how I live and work. The thing I rely on most is {device|my smartphone} — I use it for {uses|navigation, banking, staying connected with friends, and entertainment}. Honestly, it's hard to imagine managing daily life without it at this point. That said, I sometimes worry that {concern|we've all become too dependent on our devices, and that we've lost some ability to just be present without reaching for a screen}. I try to be more intentional about my screen time, especially in the evenings. Overall, I think technology is {view|a genuine positive — but only when you're the one in control of how you use it}.",
      p: ["hard to imagine managing daily life without it", "lost the ability to be present without reaching for a screen", "a genuine positive — but only when you're in control"],
    },
    ih: {
      t: "Technology has reshaped my life in ways I find both exciting and occasionally concerning. The tools I use most — {tools|productivity apps, cloud storage, and communication platforms} — have made my work genuinely more efficient. But they've also made it {downside|much harder to truly switch off at the end of the day}. On AI specifically, I'm genuinely fascinated. What I think people underestimate is {underestimate|how quickly AI will shift from automating repetitive tasks to augmenting — and in some cases replacing — judgment-based work that we assumed required human thinking}. I don't think that's something to fear outright, but it does mean {means|we need to seriously rethink what skills and knowledge will actually matter going forward}. These conversations feel urgent, and I don't think we're having them seriously enough.",
      p: ["much harder to truly switch off", "AI will shift into augmenting judgment-based work", "what skills and knowledge will actually matter going forward"],
    },
    al: {
      t: "Technology is so embedded in how I live and work that I've largely stopped noticing it — which is itself something worth reflecting on carefully. It shapes {domain1|how I communicate, think, and make decisions at work} and {domain2|how I navigate cities, manage my health, and maintain relationships}. What occupies me most right now is the trajectory of AI. I have genuinely mixed feelings. The potential is {positive|extraordinary — accelerating research, democratizing access to knowledge, reducing drudgery at scale}. But so are the risks — {concern|a small number of organizations accumulating unprecedented power, privacy erosion at a scale that's hard to conceptualize, and labor disruptions coming faster than institutions can adapt}. What troubles me most is {nature|that we keep framing these as technical problems when they are fundamentally political and ethical questions} — about who decides, who benefits, and who bears the costs. That framing matters enormously, and I don't think we're getting it right yet.",
      p: ["I've largely stopped noticing technology — which is worth reflecting on", "potential is extraordinary, but the risks are equally real", "framing political questions as technical ones — and getting it wrong"],
    },
  },
  {
    id: 'tech_social', collectionId: '기술·AI', em: '💬', nm: '소셜 미디어',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: ['How do you use social media?', 'What do you think about social media?'],
    im: {
      t: "I use {apps|Instagram and YouTube} mainly for {purpose|entertainment and keeping up with friends and things I care about}. I try to be mindful about how much time I spend, though I don't always succeed. I've noticed that {concern|when I use social media heavily, I tend to feel more distracted and sometimes more anxious} — it's a pattern I've seen clearly enough that I've started setting time limits for myself. I deleted some apps for a while and felt {benefit|noticeably more focused and calmer} within a fairly short time. I think social media has real value, but it also has {impact|real costs that are easy to underestimate when you're in the middle of using it}.",
      p: ["when I use it heavily, I feel more distracted and anxious", "deleting apps led to feeling noticeably more focused and calmer", "real costs that are easy to underestimate when you're in it"],
    },
    ih: {
      t: "My relationship with social media is genuinely {relationship|complicated}. I find it useful for {benefit|staying connected, finding ideas, and keeping up with things I care about}. But it also {downside|pulls me into comparison and consumes time in ways I don't consciously choose}. I've set {habit|screen time limits} on certain apps and turned off most notifications, which has helped considerably. What I've noticed most clearly is {insight|how much better my mood and focus are on days when I barely use it}. I try to be intentional about when I open it and why. It's an ongoing effort, but I think learning to manage your relationship with social media is one of the more important habits to develop in modern life.",
      p: ["pulls me into comparison in ways I don't consciously choose", "mood and focus are much better on days I barely use it", "one of the more important habits to develop in modern life"],
    },
    al: {
      t: "Social media has {impact|restructured how we relate to ourselves and to each other} in ways we're still working to fully understand. The core problem isn't just the time spent — it's {insight|the architecture of these platforms, which is specifically engineered to maximize engagement by triggering comparison, anxiety, and the fear of missing out}. We've traded the capacity for comfortable boredom for an endless loop of stimulation, and we're paying a real cognitive and emotional price for that trade. I've done {experiment|extended periods off certain platforms}, and the improvement in my clarity and creative thinking was genuinely striking each time. I'm not against social media — there is real value in connection and information-sharing. But I'm deeply concerned that {concern|the incentive structures of the companies running these platforms are fundamentally misaligned with the wellbeing of the people using them}. That's not an accidental flaw — it's the business model.",
      p: ["engineered to maximize engagement by triggering comparison and anxiety", "traded comfortable boredom for endless stimulation — and paying the price", "incentive structures are fundamentally misaligned with user wellbeing"],
    },
  },
  {
    id: 'tech_ai', collectionId: '기술·AI', em: '🤖', nm: 'AI·자동화',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: ['What do you think about AI?', 'How might AI change your work?'],
    im: {
      t: "I've been using AI tools like {tools|ChatGPT and translation apps} in my daily work, and they've been genuinely helpful for {use|drafting, summarizing, and brainstorming}. I'm still working out {change|how AI will ultimately reshape my job and the broader field I work in}, but I'm curious and open rather than anxious about it. I think the key is {balance|learning to use these tools thoughtfully — as a complement to your own thinking, not a substitute for it}. I try to {approach|stay informed about new developments} so I can adapt. It feels like an important time to pay close attention.",
      p: ["genuinely helpful for drafting, summarizing, and brainstorming", "curious and open rather than anxious", "use tools as a complement to your thinking, not a substitute"],
    },
    ih: {
      t: "AI is developing faster than most people around me seem to realize, and I find myself thinking about it quite a lot. I use it regularly for {use|research, writing, and working through complex problems}, and I find it genuinely valuable. My view is that it will {impact|augment most professional work rather than simply replace it} — but that will require {concern|a real rethinking of what skills and knowledge actually matter going forward}. The question I keep returning to is {question|what humans will continue to bring that AI genuinely cannot} — creativity, ethical judgment, real empathy, the ability to build trust with other people. I'm excited by the possibilities and honest about how disruptive the transition is going to be for many people.",
      p: ["augment most professional work rather than simply replace it", "what humans will continue to bring that AI cannot", "excited by possibilities and honest about how disruptive it will be"],
    },
    al: {
      t: "AI raises questions I believe our society is genuinely not prepared to answer well. The upside is real — {positive|the potential to accelerate research, democratize expertise, and eliminate the most tedious parts of knowledge work is significant}. But so are the risks — {concern|a small number of organizations accumulating unprecedented concentrations of power, privacy erosion at scale, and labor market disruptions arriving faster than any institution can meaningfully adapt to}. What concerns me most is {nature|that we keep framing these as technical problems when they are fundamentally political ones} — about who benefits, who decides, and who pays the costs. I use AI in my own work and find real value in it. But I also try to {balance|maintain critical distance and not outsource judgment that should stay human}. The goal we should be building toward is {value|expanding human capability without surrendering human agency} — and I'm genuinely uncertain whether that's the direction we're heading.",
      p: ["framing political problems as technical ones", "who benefits, who decides, who pays the costs", "expanding human capability without surrendering human agency"],
    },
  },
  {
    id: 'tech_device', collectionId: '기술·AI', em: '⌚', nm: '스마트 기기·습관',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: ['What devices do you use daily?', 'How do you manage screen time?'],
    im: {
      t: "I use my {device|phone and laptop} constantly — they're central to both my work and daily life. I use my phone for {uses|messages, navigation, music, and keeping up with news}. I'm aware that I {concern|check my phone more than I should}, often out of pure habit rather than any real need. I've tried to set {limit|a few simple rules for myself} — like keeping my phone out of the bedroom and away during meals. When I stick to those, I feel {benefit|less scattered and more present in whatever I'm doing}. Managing my relationship with devices is something I'm still actively working on.",
      p: ["check my phone more than I should — out of habit, not need", "phone out of the bedroom and away during meals", "less scattered and more present when I stick to those rules"],
    },
    ih: {
      t: "My phone and laptop are deeply integrated into how I work and live. I use {tools|apps like Notion and my calendar} to stay organized and on top of things. But I've also become deliberate about {habit|building real boundaries around when and where I use devices}. I've set up {limit|no-phone zones in my bedroom} and turned off most notifications, and both changes have made a real difference to my ability to focus and to genuinely rest. The ongoing tension I navigate is {balance|being accessible and responsive enough for work without feeling permanently on}. I haven't fully solved it, but moving toward fewer automatic defaults and more intentional choices feels like the right direction.",
      p: ["building real boundaries around when and where I use devices", "no-phone zones and most notifications off", "fewer automatic defaults and more intentional choices"],
    },
    al: {
      t: "I've become very deliberate about {topic|the conditions under which I allow myself to be online}. I value {balance|long uninterrupted blocks for deep work} and {boundary|evenings that feel genuinely disconnected from professional demands}. Achieving that has required {journey|actively redesigning my environment rather than trying to rely on willpower} — phone in another room during focused work, no devices in the bedroom, specific limited windows for checking messages. What I've come to understand is that {insight|your environment shapes your defaults, and your defaults shape your behavior far more reliably than your intentions do}. If the phone is easy to reach, I'll reach for it. So I've made it harder. I'm not perfect — there are still days I fall into old patterns — but the days when I protect my attention feel qualitatively and noticeably different. The goal isn't to reject technology; it's to {value|use it on my own terms, in service of what I actually care about}.",
      p: ["redesigning your environment rather than relying on willpower", "your environment shapes defaults, and defaults shape behavior more than intentions", "use technology on my own terms, in service of what I actually care about"],
    },
  },
  {
    id: 'tech_future', collectionId: '기술·AI', em: '🔮', nm: '미래·변화',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: ['How do you think technology will change in the future?', 'What excites or worries you about tech?'],
    im: {
      t: "I think technology will keep transforming how we live and work in ways that are genuinely hard to predict. What I'm most curious about is {question|how AI and automation will affect jobs and what daily life will actually look like in ten or twenty years}. I feel {feeling|cautiously optimistic, but also a bit uncertain} — technology has solved real problems, but it's also created new ones. I hope we find ways to keep {value|human connection and creativity} at the center of how we live, even as things change dramatically. More than anything, I think the key will be {adapt|staying adaptable, curious, and committed to learning} throughout the transition.",
      p: ["how AI and automation will affect jobs and daily life", "cautiously optimistic but also genuinely uncertain", "staying adaptable, curious, and committed to learning"],
    },
    ih: {
      t: "The future of technology is hard to predict with confidence, but a few things seem clear to me. It will keep reshaping {domain|work, healthcare, education, and how we communicate} — probably faster than we're comfortable with. What I'm most interested in is {topic|whether individuals and institutions can adapt thoughtfully} to that pace of change, and whether we have the collective wisdom to {preserve|protect what genuinely matters — privacy, meaningful work, and meaningful human oversight of critical decisions}. The pace already feels {challenge|faster than our laws, schools, and democratic processes can meaningfully keep up with}. I think we urgently need more {need|honest, informed public conversation} about where we actually want technology to take us — because that direction isn't determined by default. It's determined by choices.",
      p: ["whether institutions can adapt thoughtfully to the pace of change", "faster than our laws and democratic processes can keep up with", "the direction is determined by choices, not by default"],
    },
    al: {
      t: "The future of technology will be determined by {insight|the choices we make now — about governance, values, and who gets to shape these systems before they're too embedded to change}. I'm less interested in predicting specific technologies than in {question|the political economy of who benefits and who bears the costs} — because those questions will define the world we actually end up inhabiting. Technology doesn't arrive as a neutral force; it embeds and amplifies the values and power structures of whoever builds and controls it. The question isn't whether AI and automation advance — they will. It's {focus|whether that advance will serve broad human flourishing or primarily serve the interests of the people who own the systems}. I'm cautiously hopeful — we've navigated major transitions before. But {risk|the stakes are high, the window for shaping these systems is narrowing, and the decisions being made right now will be very difficult to reverse}. I hope we find the seriousness that this moment genuinely requires.",
      p: ["the choices we make now before systems are too embedded to change", "who benefits and who bears the costs", "the window for shaping these systems is narrowing"],
    },
  },

  // ─────────────────────────────────────────────
  // 불만 제기
  // ─────────────────────────────────────────────
  {
    id: 'rp_complaint', collectionId: '불만 제기', em: '😤', nm: '불만 제기',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: [
      'You received the wrong item. Call customer service.',
      'Your hotel room has issues. Speak with the front desk.',
      'Your flight was cancelled. Call the airline.',
      'A product is defective. Go to the store.',
    ],
    im: {
      t: "Excuse me — I'm sorry to bother you, but I have a problem I'm hoping you can help with. I {context|ordered a jacket from your website about a week ago}, and when the package arrived, {problem|the item inside was completely wrong — a different color and a different size from what I ordered}. I was really disappointed because {reason|I specifically needed it for an event this coming weekend}. I still have {evidence|the original order confirmation and all the packaging} with me, so I can show exactly what went wrong. What I'd like is {request|either the correct item sent as soon as possible, or a full refund if that's not feasible}. I'm not trying to make this complicated — I just need it resolved. Is there something you can do for me today?",
      p: ["specifically needed it for an event this weekend", "I have the confirmation and all the packaging", "not trying to make this complicated — just need it resolved"],
    },
    ih: {
      t: "Good morning — I'm sorry to interrupt, but I'm dealing with a situation I was hoping you could help me sort out. I {context|checked in yesterday afternoon}, and I've been having {problem|several ongoing issues with my room — the air conditioning isn't working properly, there's a loud noise from the plumbing that woke me up repeatedly, and the shower pressure is barely functional}. I waited to see if things would improve on their own, but they haven't. What I'd like is {request1|to be moved to a different, fully functional room}, or if that's not possible, {request2|some form of compensation that reflects the real gap between what I paid for and what I've actually received}. I'm not trying to be difficult — I simply want to feel like I'm getting what I paid for. What options are available?",
      p: ["waited to see if things improved on their own — they haven't", "simply want to feel like I'm getting what I paid for", "what options are available?"],
    },
    al: {
      t: "Hi — I'm sorry to interrupt, but I need to bring something to your attention that I'm hoping we can resolve. I {context|booked a business class ticket three months ago for a flight this morning}, and I've just been told at the gate that {problem|the flight is cancelled due to a scheduling issue — not weather, not an emergency, but a scheduling issue}. I understand disruptions happen and I'm genuinely not here to be confrontational. However, {impact|I have a client presentation at 2pm that cannot be moved, and the next available flight your system is offering arrives three hours after that meeting starts}. What I need is {request|to be rebooked on any carrier with seats available — not just your airline — that can get me there in time}. I'd also like to discuss {discuss|compensation appropriate to a business class cancellation at this notice}. I believe this is resolvable. What can you do for me right now?",
      p: ["not here to be confrontational", "rebooked on any carrier that can get me there in time", "I believe this is resolvable — what can you do right now?"],
    },
  },
  {
    id: 'rp_delivery', collectionId: '불만 제기', em: '📦', nm: '배달·주문 문제',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: ['Your delivery is late or wrong. Call the store.', 'You ordered food but it never came.'],
    im: {
      t: "Hi there. I {context|placed an order about an hour ago} and it still hasn't arrived. The app shows {status|it's out for delivery}, but the status hasn't changed in a very long time and I'm starting to worry. I've been at {place|the correct delivery address} the whole time. Could you {request|check where the driver is or find out if there's been a problem}? I have plans later and can't wait indefinitely. I'm not trying to be difficult — I just genuinely need to know what's happening with my order.",
      p: ["the status hasn't changed in a very long time", "check where the driver is or if there's been a problem", "need to know what's happening with my order"],
    },
    ih: {
      t: "I'm calling about {context|an order I placed earlier this evening}. It was supposed to arrive by {time|7pm}, but it's now {current|past 8} and nothing has arrived. I checked the app but {action|the tracking hasn't updated at all}. At this point, I need {request|either the delivery to arrive very soon or a full refund}. I'd also appreciate understanding {question|what actually went wrong here}. This isn't the first time I've had issues, and it's genuinely frustrating. I'm not asking for anything unreasonable — I just want either my food or my money back, with some explanation of what happened. Can you look into this for me now?",
      p: ["tracking hasn't updated at all", "either the delivery arrives soon or I need a refund", "want my food or my money back with some explanation"],
    },
    al: {
      t: "I'm calling about what has become {context|a recurring pattern with your delivery service}. This is the {frequency|third time in the past month} that an order has either arrived significantly late or with a problem, and today it came {problem|cold and with the packaging visibly damaged}. I understand things go wrong sometimes, and I'm not calling to vent. But {impact|on multiple occasions I've had to go without dinner or reorder elsewhere}, and at this point I need more than an apology. What I'm asking for today is {request1|a refund for today's order} and {request2|a genuine explanation for why deliveries to my address keep failing} — whether that means flagging my account or escalating to someone who can investigate. I'd prefer to keep using your service, but I need to see {expectation|evidence that this feedback actually leads to something changing}. What can you do?",
      p: ["a recurring pattern — third time this month", "need more than an apology", "evidence that this feedback actually leads to something changing"],
    },
  },
  {
    id: 'rp_reservation', collectionId: '불만 제기', em: '📅', nm: '예약 취소·변경',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: ['Your reservation was cancelled. Call to rebook.', 'You need to change your booking.'],
    im: {
      t: "Hi. I had {article_res|a reservation for tonight} at this restaurant, but I just received a message saying it had been {problem|cancelled}. I absolutely did not cancel it myself — I've been looking forward to this dinner. I have {evidence|the confirmation email on my phone} if you'd like to verify. Is there any way to {request|reinstate the reservation or find another time that works}? I've already made plans around this evening, so I'd really appreciate it if someone could look into what happened. I understand these things occur — I just need to know what my options are.",
      p: ["I absolutely did not cancel it myself", "I have the confirmation email if you'd like to verify", "just need to know what my options are"],
    },
    ih: {
      t: "I'm calling about {context|a reservation under my name for tonight}. I received an automated message this afternoon saying it was {problem|cancelled due to a system error}, which came as a complete surprise. I need to {request|either have the reservation reinstated or receive a clear explanation and appropriate compensation}. I'd arranged my entire evening around this dinner and turned down other options to keep this booking. I'd like to understand {question|what exactly caused this to happen} and what you're prepared to do to make it right. I'm hoping we can sort this out quickly.",
      p: ["came as a complete surprise", "arranged my entire evening around this and turned down other options", "what you're prepared to do to make it right"],
    },
    al: {
      t: "I'm calling about {article_res|a confirmed reservation} that was {problem|cancelled without my knowledge or consent}. I received an automated message citing a system error, but I was given no opportunity to respond or correct anything before it was cancelled on my behalf. I want to be clear — I understand mistakes happen and I'm not calling to be aggressive. What I am asking for is {request1|the reservation reinstated at the original time if that's at all possible}, or if it genuinely isn't, {request2|meaningful compensation that reflects both the inconvenience and the short notice I now have to find an alternative}. I'd also like to know {question|what steps are being taken to prevent this from happening to other customers}. I've dined here before and I'd like to continue — but I need to feel that my time and my planning are genuinely respected. What can you do for me?",
      p: ["cancelled without my knowledge or consent", "meaningful compensation reflecting the inconvenience and short notice", "steps being taken to prevent this from happening again"],
    },
  },
  {
    id: 'rp_service', collectionId: '불만 제기', em: '😕', nm: '서비스 불만',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: ['You had bad service at a restaurant. Speak to the manager.', 'You were treated rudely. Complain.'],
    im: {
      t: "Excuse me — I hope I'm not interrupting. I just wanted to share some feedback about my experience here today. I was dining earlier and found that {problem|the service was quite slow, and the staff seemed a bit disengaged when we asked questions}. The {food|food itself was fine}, but the experience as a whole wasn't what I expected. I've been here before and it's usually much better, so I'm guessing today might have been an off day. I'm not asking for anything — I just felt it was worth {request|mentioning to someone so it can be looked into}. I'd genuinely like to come back, and I hope the experience will be better next time.",
      p: ["staff seemed a bit disengaged when we asked questions", "I've been here before and it's usually much better", "worth mentioning to someone so it can be looked into"],
    },
    ih: {
      t: "I'd like to speak with someone about my experience last night. I dined at this {place|branch} and unfortunately had {article_prob|a disappointing experience} — my order arrived incorrect, the wait was longer than it should have been, and when I raised the issue, {problem|the response from the staff was dismissive and there was no apology offered at all}. I'm not asking for a free meal or anything dramatic. But I do think {request|someone in a position of responsibility should be aware of what happened and consider acknowledging it appropriately}. This was below the standard I've come to expect here. I'd like to speak with {who|a manager}, if that's possible — because I think this is a conversation worth having.",
      p: ["the response was dismissive and no apology was offered", "someone in a position of responsibility should be aware", "I think this is a conversation worth having"],
    },
    al: {
      t: "I'd like to bring something to management's attention that I think warrants a real conversation. I dined at your {place|downtown location} on {when|Saturday evening}, and the experience fell significantly below what I've come to expect from this restaurant. The issues were {problem|multiple and compounding}: the service was inattentive from the start — we waited over twenty minutes before anyone took our order; when the food arrived, two dishes were incorrect; when I raised this politely, the response was dismissive; and when the bill came, {billing|we were charged for items we hadn't ordered or received}. I want to be honest — I'm not someone who enjoys complaining. I've dined here many times and recommended this place to others. What I'm asking for is {request1|a direct response from management}, {request2|an explanation of how situations like this are normally handled}, and {request3|a gesture that makes clear this experience actually mattered to you}. I'd rather see this restaurant improve and keep coming back than walk away. What can you do?",
      p: ["inattentive service, incorrect food, charged for items not received", "not someone who enjoys complaining — I've been a regular here", "I'd rather see this improve and keep coming back"],
    },
  },
  {
    id: 'rp_refund', collectionId: '불만 제기', em: '💰', nm: '환불·교환 요청',
    tc: '#C0404A', tb: 'rgba(192,64,74,0.09)',
    qs: ['You want a refund for a product.', 'You want to exchange an item.'],
    im: {
      t: "Hi. I purchased {article_item|an item} here {when|last week} and unfortunately it {problem|hasn't been working properly since I brought it home}. I've tried using it several times and the problem keeps recurring. I'd like to {request|either exchange it for one that actually works, or get a refund}. I have {evidence|the receipt and the original box} with me, and I believe I'm still within the {policy|return period}. I'm not upset — I understand these things happen. I just want to get it resolved as smoothly as possible. Can you help me with that?",
      p: ["hasn't been working properly since I brought it home", "exchange it for one that works or get a refund", "want to get it resolved as smoothly as possible"],
    },
    ih: {
      t: "I'm calling to follow up on {article_ref|a refund request} I submitted {when|about two weeks ago}. The {problem|product arrived in a defective condition} — I have {evidence|photographs and my order confirmation number} to document this clearly. I've already contacted support once and received no resolution. What I need now is {request|a clear, specific timeline for when the refund will actually be processed}. I've been patient, but two weeks with no meaningful update isn't acceptable. I'm not asking for anything beyond what I'm legitimately owed. I just need someone to take real ownership of this and give me a direct, honest answer.",
      p: ["product arrived defective — I have photographs and order confirmation", "a clear specific timeline for when the refund will be processed", "someone to take real ownership and give me a direct answer"],
    },
    al: {
      t: "I'm reaching out to formally request {article_ref|a full refund} for {context|an order that arrived clearly defective and did not match the product description}. I purchased it {when|three weeks ago}, initiated the return process immediately upon receiving it, and have followed up twice since as instructed — yet the issue remains completely unresolved. At this point I need {request1|a specific, committed date for when the refund will be processed} and {request2|a direct point of contact for any further follow-up needed}. If neither is available through this channel, I'd like to know {alternative|exactly who I should escalate to in order to get this authorized}. I want to be straightforward — I'd prefer to resolve this simply, without involving any external parties or making things more complicated than they need to be. I simply need what I'm owed and a clear path to getting it. What can you do for me?",
      p: ["initiated the return immediately and followed up twice — still unresolved", "a specific committed date and a direct point of contact", "a clear path to getting what I'm owed"],
    },
  },
];

export const COLLECTIONS = ['자기소개', '취미 활동', '건강·운동', '공원', '여행', '기술·AI', '불만 제기'];