const personalityData = [
    {
        ID: 1,
        Personality: "ISTJ",
        PersonalityTitle: "ISTJ - The Human Calendar",
        ShortDescription: "'The Human Calendar' ISTJs are like walking planners. If it's not on their schedule, it doesn't exist. Fun? Only if it's penciled in.",
        RomanticRelationships: "'The Date Dictator' Plans dates with the precision of a Swiss watch. Will remember your anniversary but might forget to smile. Spontaneity? What's that?",
        IdealJob: "'Spreadsheet Tyrant' Professional organizer or librarian. Finds joy in alphabetizing your chaos. Their dream job is making sure everyone follows the rules.",
        StrengthsWeaknesses: "'The Reliable Ruler' Strength: Unfailingly reliable. Weakness: Control freak. Will micromanage your life into a color-coded spreadsheet.",
        WorkHabits: "'The Deadline Despot' Works with the precision of a Swiss watch. Has a checklist for their checklists. Never misses a deadline, not even in their dreams.",
        CompatiblePersonality: "'The Party Police' ESFJ: The social butterfly who drags them to parties. Together, they create a balance of order and chaos.",
        Parenting: "'The Routine Regulator' Teaches kids the magic of routines. Bedtime is a sacred ritual. Kids will grow up knowing the power of a well-timed nap.",
        Image: "01-istj-librarian.png"
      },
      {
        ID: 2,
        Personality: "ISFJ",
        PersonalityTitle: "ISFJ - The Human Comfort Blanket",
        ShortDescription: "'The Human Comfort Blanket' ISFJs are like walking hugs. If you need a shoulder to cry on, they've got tissues and cookies ready.",
        RomanticRelationships: "'The Love Nurse' Plans dates with the care of a nurse. Will remember your anniversary and bring you soup when you're sick. Spontaneity? Only if it's safe.",
        IdealJob: "'Caregiving Overlord' Professional caregiver or nurse. Finds joy in taking care of everyone's needs. Their dream job is making sure everyone is happy and healthy.",
        StrengthsWeaknesses: "'The Dependable Doormat' Strength: Unfailingly caring. Weakness: Can be a bit of a pushover. Will put everyone else's needs before their own.",
        WorkHabits: "'The Diligent Worker Bee' Works with the dedication of a honeybee. Has a checklist for everyone's needs. Never leaves a task unfinished, even if it means staying late.",
        CompatiblePersonality: "'The Social Butterfly' ESFJ: The social butterfly who brings out their fun side. Together, they create a balance of care and excitement.",
        Parenting: "'The Nurturing Nanny' Teaches kids the importance of kindness. Bedtime stories are a nightly ritual. Kids will grow up knowing the value of a loving home.",
        Image: "02-isfj-nurse.png"
      },
      {
        ID: 3,
        Personality: "INFJ",
        PersonalityTitle: "INFJ - The Mystic Unicorn",
        ShortDescription: "'The Mystic Unicorn' INFJs are like mythical creatures. Rare, magical, and always ready to save the world with their deep insights and idealism.",
        RomanticRelationships: "'The Love Guru' Plans dates with the wisdom of a sage. Will remember your anniversary and write you a poem. Spontaneity? Only if it's meaningful.",
        IdealJob: "'Visionary Overlord' Professional counselor or life coach. Finds joy in guiding others to their true potential. Their dream job is making the world a better place.",
        StrengthsWeaknesses: "'The Insightful Idealist' Strength: Deeply insightful. Weakness: Overly idealistic. Will see the best in everyone, even when it's not there.",
        WorkHabits: "'The Thoughtful Worker' Works with the dedication of a monk. Has a vision board for their goals. Never leaves a task unfinished, even if it means sacrificing sleep.",
        CompatiblePersonality: "'The Debater' ENTP: The quick-witted debater who challenges their ideas. Together, they create a balance of insight and intellect.",
        Parenting: "'The Dream Weaver' Teaches kids the importance of dreams. Bedtime stories are philosophical lessons. Kids will grow up knowing the power of imagination.",
        Image: "03-infj-counselor.png"
      },
      {
        ID: 4,
        Personality: "INTJ",
        PersonalityTitle: "INTJ - The Mastermind",
        ShortDescription: "'The Mastermind' INTJs are like chess grandmasters. Always ten steps ahead, plotting world domination while sipping their morning coffee.",
        RomanticRelationships: "'The Love Strategist' Plans dates like a military campaign. Will remember your anniversary and analyze the optimal gift. Spontaneity? Only if it's part of the plan.",
        IdealJob: "'Evil Genius' Professional strategist or CEO. Finds joy in solving complex problems. Their dream job is running the world from behind the scenes.",
        StrengthsWeaknesses: "'The Strategic Perfectionist' Strength: Brilliant strategist. Weakness: Overthinks everything. Will plan your life down to the last detail.",
        WorkHabits: "'The Efficiency Expert' Works with the precision of a Swiss watch. Has a master plan for every project. Never misses a deadline, ever.",
        CompatiblePersonality: "'The Free Spirit' ENFP: The enthusiastic free spirit who brings out their playful side. Together, they create a balance of logic and creativity.",
        Parenting: "'The Brain Trainer' Teaches kids the importance of strategy. Bedtime stories are lessons in critical thinking. Kids will grow up knowing the power of a well-laid plan.",
        Image: "04-intj-chess-player.png"
      },
      {
        ID: 5,
        Personality: "ISTP",
        PersonalityTitle: "ISTP - The Tinkerer",
        ShortDescription: "'The Tinkerer' ISTPs are like MacGyver. Give them a paperclip and some duct tape, and they'll build you a spaceship.",
        RomanticRelationships: "'The Adventure Seeker' Plans dates like action movies. Will remember your anniversary but might forget to sit still. Spontaneity? Only if it involves adrenaline.",
        IdealJob: "'Gadget Guru' Professional mechanic or engineer. Finds joy in taking things apart. Their dream job is fixing what others can't.",
        StrengthsWeaknesses: "'The Practical Maverick' Strength: Ingenious problem-solver. Weakness: Impulsive. Will fix your car but might forget to tell you.",
        WorkHabits: "'The Hands-On Hero' Works with the precision of a surgeon. Has a toolbox for every occasion. Never leaves a project unfinished, unless something more exciting comes up.",
        CompatiblePersonality: "'The Entertainer' ESFP: The lively entertainer who brings out their fun side. Together, they create a balance of practicality and excitement.",
        Parenting: "'The Cool Parent' Teaches kids the importance of hands-on learning. Bedtime stories are DIY projects. Kids will grow up knowing the value of creativity.",
        Image: "05-istp-mechanic.png"
      },
      {
        ID: 6,
        Personality: "ISFP",
        PersonalityTitle: "ISFP - The Artistic Wanderer",
        ShortDescription: "'The Artistic Wanderer' ISFPs are like bohemian artists. Always chasing beauty and inspiration, often found daydreaming in a meadow.",
        RomanticRelationships: "'The Romantic Artist' Plans dates like a scene from a romance novel. Will remember your anniversary and paint you a picture. Spontaneity? Only if it's poetic.",
        IdealJob: "'Creative Free Spirit' Professional artist or musician. Finds joy in expressing emotions through art. Their dream job is creating beauty in a chaotic world.",
        StrengthsWeaknesses: "'The Sensitive Soul' Strength: Deeply creative. Weakness: Overly sensitive. Will create masterpieces but might cry over spilled paint.",
        WorkHabits: "'The Inspired Worker' Works with the passion of a true artist. Has a sketchbook for every idea. Never leaves a project unfinished, unless inspiration strikes elsewhere.",
        CompatiblePersonality: "'The Adventurer' ESTP: The thrill-seeker who brings out their adventurous side. Together, they create a balance of creativity and excitement.",
        Parenting: "'The Creative Nurturer' Teaches kids the importance of self-expression. Bedtime stories are imaginative adventures. Kids will grow up knowing the power of creativity.",
        Image: "06-isfp-musician.png"
      },
      {
          ID: 7,
          Personality: "INFP",
          PersonalityTitle: "INFP - The Dreamy Idealist",
          ShortDescription: "'The Dreamy Idealist' INFPs are like walking daydreams. Always lost in thought, imagining a world where everyone holds hands and sings kumbaya.",
          RomanticRelationships: "'The Love Poet' Plans dates like scenes from a fairy tale. Will remember your anniversary and write you a sonnet. Spontaneity? Only if it's romantic.",
          IdealJob: "'Fantasy Novelist' Professional writer or artist. Finds joy in creating worlds where everything is perfect. Their dream job is living in their imagination.",
          StrengthsWeaknesses: "'The Sensitive Dreamer' Strength: Deeply empathetic. Weakness: Overly sensitive. Will understand your feelings but might cry over a sad commercial.",
          WorkHabits: "'The Inspired Creator' Works with the passion of a true artist. Has a journal for every idea. Never leaves a project unfinished, unless a new dream takes over.",
          CompatiblePersonality: "'The Charismatic Leader' ENFJ: The inspiring leader who brings out their confidence. Together, they create a balance of dreams and action.",
          Parenting: "'The Gentle Guide' Teaches kids the importance of following their hearts. Bedtime stories are magical adventures. Kids will grow up knowing the power of dreams.",
          Image: "07-infp-book-writer.png"
        },
        {
          ID: 8,
          Personality: "INTP",
          PersonalityTitle: "INTP - The Absent-Minded Professor",
          ShortDescription: "'The Absent-Minded Professor' INTPs are like walking encyclopedias. Always lost in thought, solving the mysteries of the universe while forgetting where they left their keys.",
          RomanticRelationships: "'The Love Theorist' Plans dates like scientific experiments. Will remember your anniversary but might forget to show up. Spontaneity? Only if it's logical.",
          IdealJob: "'Mad Scientist' Professional researcher or inventor. Finds joy in discovering new theories. Their dream job is solving the world's problems from their cluttered lab.",
          StrengthsWeaknesses: "'The Brilliant Scatterbrain' Strength: Highly intelligent. Weakness: Absent-minded. Will solve complex problems but might forget to eat lunch.",
          WorkHabits: "'The Night Owl' Works best at 3 AM. Has a whiteboard for every idea. Never leaves a project unfinished, unless a new theory takes over.",
          CompatiblePersonality: "'The Enthusiastic Explorer' ENFP: The lively explorer who brings out their adventurous side. Together, they create a balance of logic and excitement.",
          Parenting: "'The Curious Mentor' Teaches kids the importance of questioning everything. Bedtime stories are science experiments. Kids will grow up knowing the power of curiosity.",
          Image: "08-intp-scientist.png"
        },
        {
          ID: 9,
          Personality: "ESTP",
          PersonalityTitle: "ESTP - The Daredevil",
          ShortDescription: "'The Daredevil' ESTPs are like adrenaline junkies. Always seeking the next thrill, whether it's skydiving or arguing just for fun.",
          RomanticRelationships: "'The Spontaneous Lover' Plans dates like action movies. Will remember your anniversary but might forget to sit still. Spontaneity? Only if it's thrilling.",
          IdealJob: "'Stunt Performer' Professional thrill-seeker or entrepreneur. Finds joy in taking risks. Their dream job is anything that gets their heart racing.",
          StrengthsWeaknesses: "'The Energetic Risk-Taker' Strength: Highly energetic. Weakness: Impulsive. Will take on any challenge but might forget to think it through.",
          WorkHabits: "'The Pressure Performer' Works best under pressure. Has a knack for last-minute miracles. Never leaves a project unfinished, unless something more exciting comes up.",
          CompatiblePersonality: "'The Nurturer' ISFJ: The caring nurturer who brings out their softer side. Together, they create a balance of excitement and stability.",
          Parenting: "'The Fun Parent' Teaches kids the importance of living life to the fullest. Bedtime stories are thrilling adventures. Kids will grow up knowing the value of excitement.",
          Image: "09-estp-race-car-driver.png"
        },
        {
          ID: 10,
          Personality: "ESFP",
          PersonalityTitle: "ESFP - The Party Animal",
          ShortDescription: "'The Party Animal' ESFPs are like walking celebrations. Always the life of the party, they can turn any situation into a festival.",
          RomanticRelationships: "'The Flamboyant Lover' Plans dates like extravagant events. Will remember your anniversary and throw a surprise party. Spontaneity? Only if it's fabulous.",
          IdealJob: "'Event Maestro' Professional entertainer or event planner. Finds joy in making people smile. Their dream job is hosting the world's biggest party.",
          StrengthsWeaknesses: "'The Charismatic Whirlwind' Strength: Highly charismatic. Weakness: Easily bored. Will charm everyone but might forget to follow through.",
          WorkHabits: "'The Social Worker' Works best in a lively environment. Has a knack for making work fun. Never leaves a project unfinished, unless there's a party to attend.",
          CompatiblePersonality: "'The Practical Tinkerer' ISTP: The hands-on tinkerer who brings out their practical side. Together, they create a balance of fun and functionality.",
          Parenting: "'The Fun Parent' Teaches kids the importance of enjoying life. Bedtime stories are theatrical performances. Kids will grow up knowing the value of joy.",
          Image: "10-esfp-party-animal.png"
        },
        {
          ID: 11,
          Personality: "ENFP",
          PersonalityTitle: "ENFP - The Enthusiastic Dreamer",
          ShortDescription: "'The Enthusiastic Dreamer' ENFPs are like walking fireworks. Bursting with energy and ideas, they can light up any room and then forget why they walked in.",
          RomanticRelationships: "'The Spontaneous Romantic' Plans dates like whimsical adventures. Will remember your anniversary and surprise you with a spontaneous trip. Spontaneity? Only if it's magical.",
          IdealJob: "'Creative Visionary' Professional storyteller or motivational speaker. Finds joy in inspiring others. Their dream job is spreading positivity and creativity everywhere.",
          StrengthsWeaknesses: "'The Energetic Scatterbrain' Strength: Highly enthusiastic. Weakness: Easily distracted. Will start a million projects but might forget to finish them.",
          WorkHabits: "'The Inspirational Worker' Works best in a dynamic environment. Has a knack for motivating the team. Never leaves a project unfinished, unless a new idea strikes.",
          CompatiblePersonality: "'The Mastermind' INTJ: The strategic mastermind who brings out their focused side. Together, they create a balance of creativity and logic.",
          Parenting: "'The Imaginative Parent' Teaches kids the importance of dreaming big. Bedtime stories are fantastical adventures. Kids will grow up knowing the power of imagination.",
          Image: "11-enfp-storyteller.png"
        },
        {
          ID: 12,
          Personality: "ENTP",
          PersonalityTitle: "ENTP - The Debating Dynamo",
          ShortDescription: "'The Debating Dynamo' ENTPs are like walking debates. Always ready to argue, they can turn any conversation into a lively discussion.",
          RomanticRelationships: "'The Argumentative Lover' Plans dates like intellectual challenges. Will remember your anniversary and debate the best way to celebrate. Spontaneity? Only if it's thought-provoking.",
          IdealJob: "'Professional Devil's Advocate' Lawyer or entrepreneur. Finds joy in challenging ideas. Their dream job is questioning everything and everyone.",
          StrengthsWeaknesses: "'The Quick-Witted Rebel' Strength: Highly intelligent. Weakness: Argumentative. Will outsmart everyone but might forget to be tactful.",
          WorkHabits: "'The Innovative Worker' Works best in a dynamic environment. Has a knack for finding creative solutions. Never leaves a project unfinished, unless a new debate arises.",
          CompatiblePersonality: "'The Insightful Idealist' INFJ: The thoughtful idealist who brings out their empathetic side. Together, they create a balance of intellect and compassion.",
          Parenting: "'The Debate Coach' Teaches kids the importance of questioning everything. Bedtime stories are intellectual challenges. Kids will grow up knowing the power of critical thinking.",
          Image: "12-entp-lawyer.png"
        },
        {
          ID: 13,
          Personality: "ESTJ",
          PersonalityTitle: "ESTJ - The Boss",
          ShortDescription: "'The Boss' ESTJs are like walking rulebooks. Always in charge, they can turn any situation into a well-organized operation.",
          RomanticRelationships: "'The Love Manager' Plans dates like business meetings. Will remember your anniversary and schedule a romantic dinner. Spontaneity? Only if it's efficient.",
          IdealJob: "'Chief Executive Officer' Professional manager or project leader. Finds joy in organizing chaos. Their dream job is running the world with an iron fist.",
          StrengthsWeaknesses: "'The Organized Overlord' Strength: Highly organized. Weakness: Bossy. Will manage everything but might forget to relax.",
          WorkHabits: "'The Taskmaster' Works with the precision of a drill sergeant. Has a plan for every project. Never leaves a task unfinished, ever.",
          CompatiblePersonality: "'The Nurturer' ISFJ: The caring nurturer who brings out their softer side. Together, they create a balance of order and compassion.",
          Parenting: "'The Rule Enforcer' Teaches kids the importance of discipline. Bedtime is a strict routine. Kids will grow up knowing the value of structure.",
          Image: "13-estj-boss.png"
        },
        {
          ID: 14,
          Personality: "ESFJ",
          PersonalityTitle: "ESFJ - The Social Butterfly",
          ShortDescription: "'The Social Butterfly' ESFJs are like walking party planners. Always ready to host, they can turn any gathering into a social extravaganza.",
          RomanticRelationships: "'The Love Host' Plans dates like grand events. Will remember your anniversary and throw a surprise party. Spontaneity? Only if it's festive.",
          IdealJob: "'Event Maestro' Professional event planner or social coordinator. Finds joy in organizing social gatherings. Their dream job is making sure everyone is having a good time.",
          StrengthsWeaknesses: "'The Caring Coordinator' Strength: Highly sociable. Weakness: Overly concerned with others' opinions. Will make everyone happy but might forget to relax.",
          WorkHabits: "'The Team Player' Works best in a collaborative environment. Has a knack for bringing people together. Never leaves a project unfinished, unless there's a social event to attend.",
          CompatiblePersonality: "'The Reliable Inspector' ISTJ: The organized inspector who brings out their practical side. Together, they create a balance of fun and functionality.",
          Parenting: "'The Fun Parent' Teaches kids the importance of social skills. Bedtime stories are interactive performances. Kids will grow up knowing the value of community.",
          Image: "14-esfj-planner2.png"
        },
        {
          ID: 15,
          Personality: "ENFJ",
          PersonalityTitle: "ENFJ - The Charismatic Leader",
          ShortDescription: "'The Charismatic Leader' ENFJs are like walking motivational posters. Always inspiring, they can turn any situation into a pep rally.",
          RomanticRelationships: "'The Love Coach' Plans dates like motivational seminars. Will remember your anniversary and give an inspiring speech. Spontaneity? Only if it's uplifting.",
          IdealJob: "'Motivational Speaker' Professional coach or counselor. Finds joy in inspiring others. Their dream job is spreading positivity and changing lives.",
          StrengthsWeaknesses: "'The Inspiring Overachiever' Strength: Highly charismatic. Weakness: Overly idealistic. Will motivate everyone but might forget to take a break.",
          WorkHabits: "'The Team Motivator' Works best in a collaborative environment. Has a knack for boosting team morale. Never leaves a project unfinished, unless there's a pep talk to give.",
          CompatiblePersonality: "'The Dreamy Idealist' INFP: The sensitive dreamer who brings out their empathetic side. Together, they create a balance of inspiration and imagination.",
          Parenting: "'The Encouraging Parent' Teaches kids the importance of believing in themselves. Bedtime stories are motivational speeches. Kids will grow up knowing the power of self-confidence.",
          Image: "15-enfj-motivational-speaker.png"
        },
        {
          ID: 16,
          Personality: "ENTJ",
          PersonalityTitle: "ENTJ - The Commander",
          ShortDescription: "'The Commander' ENTJs are like walking power suits. Always in charge, they can turn any situation into a strategic operation.",
          RomanticRelationships: "'The Love General' Plans dates like military campaigns. Will remember your anniversary and strategize the perfect gift. Spontaneity? Only if it's efficient.",
          IdealJob: "'CEO of Everything' Professional leader or entrepreneur. Finds joy in taking charge. Their dream job is running the world with an iron fist.",
          StrengthsWeaknesses: "'The Strategic Overlord' Strength: Highly strategic. Weakness: Bossy. Will lead everyone but might forget to listen.",
          WorkHabits: "'The Taskmaster' Works with the precision of a general. Has a plan for every project. Never leaves a task unfinished, ever.",
          CompatiblePersonality: "'The Creative Visionary' INFP: The imaginative dreamer who brings out their softer side. Together, they create a balance of strategy and creativity.",
          Parenting: "'The Drill Sergeant' Teaches kids the importance of discipline. Bedtime is a strict routine. Kids will grow up knowing the value of structure and leadership.",
          Image: "16-entj-commander.png"
        }
];

function getQueryStringValue(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function displayResultPersonalityData() {
  const container = document.getElementById('personality-information');
  const personalityValue = getQueryStringValue('personality') || personalityData[0].Personality;
  const personality = personalityData.find(p => p.Personality === personalityValue) || personalityData[0];

  const personalityHTML = `
      <h2>${personality.PersonalityTitle}</h2>
      <div id="personality-container">
        <img src="./img/${personality.Image}" alt="${personality.Personality}">
        <div class = "personality-description">
          <h3>Short Description</h3>
          <p>${personality.ShortDescription}</p>
          <h3>Romantic Relationships</h3>
          <p>${personality.RomanticRelationships}</p>
          <h3>Ideal Job</h3>
          <p>${personality.IdealJob}</p>
          <h3>Strengths & Weaknesses</h3> 
          <p>${personality.StrengthsWeaknesses}</p>
          <h3>Work Habits</h3> 
          <p>${personality.WorkHabits}</p>
          <h3>Compatible Personality</h3>
          <p>${personality.CompatiblePersonality}</p>
          <h3>Parenting</h3>
          <p>${personality.Parenting}</p>
        </div>
      <div>
    `;

  container.innerHTML = personalityHTML;
}

function displayPersonalityData() {
  const container = document.getElementById('personality-information');

  personalityData.forEach(personality => {
    // Create an HTML block for each personality
    const personalityHTML = `   
      <h2>${personality.PersonalityTitle}</h2>
      <div id="personality-container">
        <img src="./img/${personality.Image}" alt="${personality.Personality}">
        <div class = "personality-description">
          <h3>Short Description</h3>
          <p>${personality.ShortDescription}</p>
          <h3>Romantic Relationships</h3>
          <p>${personality.RomanticRelationships}</p>
          <h3>Ideal Job</h3>
          <p>${personality.IdealJob}</p>
          <h3>Strengths & Weaknesses</h3> 
          <p>${personality.StrengthsWeaknesses}</p>
          <h3>Work Habits</h3> 
          <p>${personality.WorkHabits}</p>
          <h3>Compatible Personality</h3>
          <p>${personality.CompatiblePersonality}</p>
          <h3>Parenting</h3>
          <p>${personality.Parenting}</p>
        </div>
      <div>
    `;

    // Append the HTML to the container
    container.innerHTML += personalityHTML;
  });
}

// Determine which function to call based on the current URL
if (window.location.pathname.includes('result.html')) {
  window.onload = displayResultPersonalityData;
} else {
  window.onload = displayPersonalityData;
}