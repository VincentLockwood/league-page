/*   STEP 1   */
export const leagueID = "649952222217588736"; // your league ID
export const leagueName = "PnC Dynasty"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the PnC Dynasty league site. Established in 2017 by a group of friends from college as a redraft league, they decided to leave the ESPN platform in 2019, integrating Sleeper and shifting to a Dynasty league.</p>
  <p>Winning this league will not only net you money, but also a customized championship ring and the “Pete Belt” which was named after the first ever league champion. Not everyone plays for first on a given season, but you certainly don’t want to fall to last. PNC requires the last place finisher to complete a league punishment. The punishment changes every season and is voted on by the owners prior to week 1. </p>
  <p>The league has parity, with some win now teams, but in fantasy anything can happen. Roster construction varies by owner as some have older teams and other have very young rosters that, if the players live up to their potential, could lead the owner to the playoffs. 1st round picks to many are valuable, but some owners aren’t scared to swap those for proven players. Due to deeper rosters and a twelve person league, bench depth for many is a disadvantage. This can cause desperate moves when stars go down. Three taxi spots are also available for owners, allowing you to place rookies and sophomores in those spots. After that, it’s up to the owner to move them to their bench/roster or drop them to the free agent market.</p>
  <p>Here you will be able to experience our league as if it was your own. We host live stream podcasts once a week, going over our league, a love/hate section and answer any questions our viewers have to help elevate their team each and every week. We look forward to the season, bringing you content every week and allowing you to follow our journey.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#2-add-managers
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Vinny",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Financial District NYC. AKA The money Maker", // (optional)
      "bio": "The commissioner of the league. I aim to make sure everyone has a fun time while also building the best team to absolutely destroy them. I work full time in downtown Manhattan but in my free time I am full blown fantasy and video games. I base all my moves off emotions because watching film is a waste of time.",
      "photo": "/managers/Commissioner Logo.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Chris", // Can be anything (usually your rival's name)
        link: 10, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Chris Logo.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5846, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It is what it is. Win now while building my future.",
      "tradingScale": 8, // 1 - 10
    },
    {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Andy",
      "location": "I am from the country land of Long Island. Having farm fields as my backyard and being 2 min from the sound is really hard to beat. It’s 40 times better than living in Nassau.", // (optional)
      "bio": "Hey fuckers, my name is Andrzej Skobodzinski Faron. I’m a full blown polak that really wasn’t into football until sophomore year of college yet I’ve found myself addicted to the nfl now.",
      "photo": "/managers/IMG_3883.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Ryan", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Ryan Logo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4029, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I have no fuckin clue what I am doing but it seems to be working.",
      "tradingScale": 1, // 1 - 10
    },
    {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "El Hadj",
      "location": "I'm the King of Queens", // (optional)
      "bio": "General Manager of Kings of Queens here!  Began playing fantasy football in 2016. 3-Time ReDraft PPR Fantasy Champion",
      "photo": "/managers/El Hadj Logo.png", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Peter", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Petes Logo.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3198, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Capture Top Tiers RBs, and Knock the Top Tiers WRs on their Knees!!",
      "tradingScale": 8, // 1 - 10
    },
    {
      "roster": 12, // unknown
      "name": "Smith",
      "location": "Long Island", // (optional)
      "bio": "Worked in baseball, now working in finance and using data to drive educated decision making",
      "photo": "/managers/Smith Logo.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Leo", // Can be anything (usually your rival's name)
        link: 8, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Leos Logo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4070, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Short term competitiveness & long-term sustainability",
      "tradingScale": 9, // 1 - 10
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Ryan",
      "location": "Hicksville, NY", // (optional)
      "bio": "Football Enthusiast for 20 years and Fantasy Player 10 of those years. Will do almost anything to cancel Sunday plans so I can park my ass on the couch for 8 hours of commercial-free football and roll into Sunday Night Football. Worked for the Heisman Trophy Ceremony for 10 years and currently working at a global bank doing Cost Basis, even though a dream job would be to work in some back office capacity for the NFL. Autograph collector and general sports enthusiast with a focus on all things Football.",
      "photo": "/managers/Ryan Logo.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Andy", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/IMG_3883.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3321, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Establish a great starting lineup, Beat my rival, Prevent performing another Stand-Up Routine",
      "tradingScale": 7, // 1 - 10
    },
    {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Parker",
      "location": "Detroit", // (optional)
      "bio": "Marathon runner, competitive eater and last place fantasy finisher. I like to take long bus rides to nowhere and read graphic novels. I'm the full package.",
      "photo": "/managers/Parker Logo.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Derek", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Derek Logo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Having come in last place the prior season, I had to reevaluate my methods as a fantasy manager. I didn't think I was particularly uninformed but a string of injuries exposed weaknesses that ultimately lead to me losing most weeks. This year, I want to retool at several key positions so that I'm more equipped to make a playoff push in a year or so. But also, my team is the best and everyone was cheating last year / I let my little brother draft and manage my team",
      "tradingScale": 10, // 1 - 10
    },
    {
      "roster": 1,
      "name": "Badger",
      "location": "snow city USA", // (optional)
      "bio": "Finance by day, dynasty football by night.   Once you go to a dynasty format, there is no going back. I enjoy making player projections and betting on sports.",
      "photo": "/managers/Badgers Logo.png", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Dan", // Can be anything (usually your rival's name)
        link: 9, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Dan Logo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "pray Saquon comes back healthy.",
      "tradingScale": 6, // 1 - 10
    },
    {
      "roster": 8,  // unknown
      "name": "Derek",
      "location": "New York State, where *only* the Buffalo Bills play", // (optional)
      "bio": "Staring at a screen in my apartment for the past 2 years.. I better either be getting a promotion or winning the championship this year.",
      "photo": "/managers/Derek Logo.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Parker", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Parker Logo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Secure a disgusting WR trio (check and fuck around with everything else in order to win a chip.",
      "tradingScale": 8, // 1 - 10
    },
    {
      "roster": 4,  
      "name": "Leo",
      "location": "Newbury, MA but now live in Manhattan", // (optional)
      "bio": "Just a guy who knows more about professional cycling than he does football but tries every year anyways",
      "photo": "/managers/Leos Logo.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Smith", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Smith Logo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1555, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "DEF", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookis", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Throw money at a lot of rookies in hopes that a few pan out",
      "tradingScale": 11, // 1 - 10
    },
    {
      "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Dan",
      "location": "Oceanside which is actually not next to the ocean", // (optional)
      "bio": "I have a BA in Journalism and I know way too many lines from the office.",
      "photo": "/managers/Dan Logo.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Badger", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Badgers Logo.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6118, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Don’t suck",
      "tradingScale": 10, // 1 - 10
    },
    {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Chris",
      "location": "Garage", // (optional)
      "bio": "nomad",
      "photo": "/managers/Chris Logo.png", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Vinny", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Commissioner Logo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3321, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "next man up",
      "tradingScale": 7, // 1 - 10
    },
    {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Peter",
      "location": "The top Rope", // (optional)
      "bio": "Song and Dance Man (I work on movie and music stuff)",
      "photo": "/managers/Petes Logo.png", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "El Hadj", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/El Hadj Logo.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Catches mean everything in PPR. That’s why I’m WR and TE. Also TE is the most important spot on the roster in this format",
      "tradingScale": 10, // 1 - 10
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/Commissioner Logo.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },