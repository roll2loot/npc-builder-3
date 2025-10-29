// constants/species.ts

export interface CategorizedTraits {
  build: string[];
  eyes: string[];
  hair: string[];
  notableFeatures: string[]; // This will hold 1-2 features
}

export interface Species {
  name: string;
  traits: CategorizedTraits;
}

export const SPECIES: Species[] = [
  {
    name: "Human",
    traits: {
        build: [
            "Athletic", "Lean", "Average", "Muscular", "Stocky",
            "Brawny", "Wiry", "Statuesque", "Slender", "Heavy-set",
            "Broad-shouldered", "Curvaceous", "Portly", "Lanky", "Petite"
        ],
        eyes: [
            "Blue", "Brown", "Green", "Hazel", "Grey", "Black",
            "Amber", "Violet", "Gold", "Light Blue", "Deep Brown",
            "Muted Green", "Silver", "Yellow", "Red"
        ],
        hair: [
            "Brown", "Black", "Blonde", "Red", "Auburn", "Grey", "White",
            "Platinum", "Ash Brown", "Ginger", "Salt-and-Pepper", "Deep Indigo",
            "Copper", "Strawberry Blonde", "Jet Black", "Silver"
        ],
        notableFeatures: [
            "Freckles", "Scar over left eye", "Tattoo on arm", "Missing tooth", "Calloused hands",
            "Gentle eyes", "Strong jawline", "Subtle limp", "Nervous tic", "Distinct birthmark",
            "Deep dimples", "Sharp nose", "Unusually long fingers", "Thick eyebrows", "Rosy cheeks",
            "Weathered skin", "Full beard", "Elaborate piercings", "Cleft chin", "Monocle",
            "Visible veins (hands/arms)", "Bad posture", "Missing finger", "An extra finger", "A prominent mole", "Long, elegant neck",
            "Shaved head", "Grizzled stubble", "A distinctive scent", "Fidgety hands", "Always wears gloves",
            "A high forehead", "Crooked teeth", "Tattoo on neck", "Sunken eyes", "A distinctive laugh", "Suspiciosly perfect teeth",
            "Wears spectacles"
        ]
    }
  },
  {
    name: "Elf",
    traits: {
        build: [
            "Slender", "Ethereal", "Wiry", "Graceful",
            // --- 10 Requested Additions for Build ---
            "Willowy (F)", "Lithe", "Tall and Lean", "Hardened (M)", "Delicate",
            "Sleek", "Muscled (M)", "Trim", "Frail-looking", "Crystalline (F)"
        ],
        eyes: [
            "Keen Green", "Deep Blue", "Silver", "Gold", "Amber", "Gray",
            // --- 9 Requested Color Additions for Eyes ---
            "Violet", "Emerald", "Moonstone White", "Jade", "Topaz",
            "Aqua", "Peridot", "Sapphire", "Iridescent"
        ],
        hair: [
            "Long, flowing", "Silver", "Golden", "Dark as night", "Auburn",
            // --- 9 Requested Color Additions for Hair ---
            "Platinum Blonde", "Copper", "Deep Crimson", "Icy White", "Obsidian Black",
            "Ash Gray", "Pale Lavender", "Bronze", "Sun-kissed Brown"
        ],
        notableFeatures: [
            "Pointed ears", "Elongated fingers", "Intricate facial tattoos", "High cheekbones", "Deep set eyes",
            "Whisper-soft voice", "Delicate features", "Unassuming posture", "Naturally elegant", "Smooth skin",
            "Slightly shimmering aura", "Piercing gaze", "Fine, almost translucent skin", "A natural glow", "A faint scent of wildflowers",
            // --- 21 Requested Additions for Notable Features ---
            "A crown of braids", "No discernible body hair", "Slightly taller than average", "A perpetual look of contemplation", "Eyes that rarely blink",
            "Complexion like porcelain", "Scarred by battle (rare)", "Wears simple, natural jewelry", "Quiet, almost silent footsteps", "An air of ancient sadness",
            "Thin lips", "Hair adorned with forest flowers", "Perfectly straight teeth", "Eyes that glow faintly in the dark", "A history of great age written in their gaze",
            "Hands that seem skilled in craft", "Garments woven from natural fibers", "A single feather woven into their hair", "Melodious singing voice", "Always carries a carved wooden staff",
            "A slight, perpetual smile"
        ]
    }
},
  {
    name: "Dwarf",
    traits: {
        build: [
            "Stocky", "Sturdy", "Muscular", "Broad-shouldered",
            // --- 10 Requested Additions for Build ---
            "Brawny (M)", "Compact", "Barrel-chested", "Grizzled", "Thick-waisted",
            "Wide-hipped (F)", "Powerfully Built", "Squat", "Iron-Hard (M)", "Solid"
        ],
        eyes: [
            "Deep Blue", "Brown", "Grey", "Steel-colored", "Amber",
            // --- 9 Requested Color Additions for Eyes ---
            "Obsidian", "Coal Black", "Hazel", "Moss Green", "Gold Flecked",
            "Slate", "Silver", "Topaz", "Copper"
        ],
        hair: [
            "Thick beard", "Braided", "Short and coarse", "Red beard", "Black beard", "Brown beard",
            // --- 9 Requested Color Additions for Hair (including new textures/styles) ---
            "Greasy and unkempt", "Fiery Red", "Ash Gray", "Salt-and-Pepper", "Long, oiled braids",
            "Bald head with braided beard", "Platinum White", "Wire-like", "Close-cropped (F)"
        ],
        notableFeatures: [
            "Broad nose", "Weathered skin", "Deep voice", "Missing finger", "Scar on forehead",
            "Gruff demeanor", "Steady gaze", "Earthy smell", "Hardened gaze", "Barrel chest",
            "Runes tattooed on arms", "Heavy brow", "Calloused hands", "A booming laugh", "A pipe always clenched between teeth",
            // --- 21 Requested Additions for Notable Features ---
            "Numerous rings on fingers", "Belt of polished metal links", "Hair tied back with leather straps", "Missing teeth (from fighting)", "A perpetually skeptical expression",
            "Deep, resonant laugh", "A limp from an old mining accident", "Smells strongly of ale and sweat", "Intricate gold tooth", "Hands stained with soot and earth",
            "Carries a heavy mining pick", "Wears spectacles on the nose", "Whispers only when angry", "A prominent, jutting chin", "Gold wire woven into the beard/hair",
            "An unusually quiet set of footsteps", "A perpetual frown", "A distinctive signet ring", "Thick leather clothing", "Ears pierced with large gold hoops",
            "A small, woven pouch for valuables"
        ]
    }
},
  {
    name: "Halfling",
    traits: {
        build: [
            "Plump", "Nimble", "Round", "Stout",
            // --- 10 Requested Additions for Build ---
            "Chubby", "Slight", "Tightly-Knit", "Pocket-Sized (F)", "Well-Fed",
            "Compact", "Pudgy", "Spry", "Hard-Working (M)", "Delicately Built (F)"
        ],
        eyes: [
            "Bright Blue", "Hazel", "Sparkling Green", "Warm Brown",
            // --- 9 Requested Color Additions for Eyes ---
            "Honey", "Mirthful Black", "Moss Green", "Deep Amber", "Nut Brown",
            "Golden", "Clear Gray", "Bright Emerald", "Tawny"
        ],
        hair: [
            "Curly", "Messy", "Short and wispy", "Brown", "Blonde", "Ginger",
            // --- 9 Requested Color Additions for Hair (including new textures/styles) ---
            "Coarse", "Straw Blonde", "Deep Auburn", "Ash Brown", "Sun-Bleached",
            "Oiled and Neat", "Silver (prematurely)", "Tangled", "Dusty Black"
        ],
        notableFeatures: [
            "Small stature", "Freckled nose", "Hearty laugh", "Long toes", "Shy smile",
            "Rosy cheeks", "Quick reflexes", "Inquisitive expression", "Always seems hungry", "Modest attire",
            "Fidgety hands", "Whistling habit", "Unassuming presence", "Always finds trouble", "A tendency to collect shiny things",
            // --- 21 Requested Additions for Notable Features ---
            "Wears comfortable, loose clothing", "Barefoot", "A distinct smell of baked goods", "Small, neat braids (F)", "A perpetually sunny disposition",
            "Hands adept at gardening/cooking", "A well-worn apron", "A very loud sneeze", "Talks with hands", "Slightly large ears",
            "Often carries a basket or bag", "Soft, downy feet", "A love for colourful patches on clothes", "Never wears shoes", "A comforting voice",
            "A perpetually optimistic air", "A small, silver locket", "Teeth stained by pipe-smoking", "A faint scar from a kitchen accident", "Always hums a tune",
            "Unusually quiet while moving"
        ]
    }
},
  {
    name: "Orc",
    traits: {
        build: [
            "Muscular", "Powerful", "Bulky", "Scarred",
            // --- 10 Requested Additions for Build ---
            "Brutish (M)", "Hulking", "Thick-Skinned", "Lean and Sinewy", "Top-Heavy",
            "Cleft (F)", "Massive", "Warped", "Crude (M)", "Squat"
        ],
        eyes: [
            "Glowering Red", "Dark Brown", "Piercing Yellow",
            // --- 9 Requested Color Additions for Eyes ---
            "Bloodshot", "Fiery Orange", "Slit-Pupiled", "Pale White", "Onyx Black",
            "Deep Olive", "Silver-Flecked", "Icy Blue", "Jade Green"
        ],
        hair: [
            "Shaved head", "Coarse black", "Braided with bone", "Mohawk",
            // --- 9 Requested Color Additions for Hair (including new textures/styles) ---
            "Greasy and matted", "Oiled Topknot", "Dirty Brown", "Stiff White", "Scorched Ends",
            "Clumps of fur (on skin)", "Spiked and Hardened", "Long and Uncut", "Ash Grey"
        ],
        notableFeatures: [
            "Green skin", "Tusks", "Scarred face", "Rough voice", "Large jaw",
            "Piercings", "Intimidating presence", "One eye missing", "Brand marks", "Aggressive stance",
            "Thick neck", "Worn teeth", "Crude armor", "Powerful limbs", "A constant scowl",
            // --- 21 Requested Additions for Notable Features ---
            "Jagged ears (torn in battle)", "Heavy metal jewelry", "Loud, grating laugh", "A prominent belly scar", "Body odor of stale blood and sweat",
            "Missing tusks (broken)", "One leg slightly shorter than the other", "A thick, guttural accent", "Always carries a weapon", "Hands the size of dinner plates",
            "Tattoos of tribal markings", "Eyes set close together", "Hair tied back with leather and sinew", "A permanently hunched back", "Smells of campfire smoke",
            "Unusually nimble for their size", "Teeth filed to points", "A chipped ear", "A single, heavy braid (F)", "A perpetual snort when talking",
            "Skin like rough hide"
        ]
    }
},
  {
    name: "Gnome",
    traits: {
        build: [
            "Small and slender", "Sprightly", "Compact",
            // --- 10 Requested Additions for Build ---
            "Pocket-sized", "Tightly-Wound", "Nimble", "Chunky (M)", "Wiry",
            "Delicately Built (F)", "Adept", "Surprisingly Strong", "Round-Bellied", "Quick"
        ],
        eyes: [
            "Bright, curious", "Sparkling Blue", "Emerald Green",
            // --- 9 Requested Color Additions for Eyes ---
            "Electric Blue", "Ruby Red", "Gold-Flecked", "Light Gray", "Amethyst",
            "Silver", "Vibrant Yellow", "Peridot Green", "Fuchsia"
        ],
        hair: [
            "Bushy eyebrows", "Messy", "Colorful", "Wild and untamed", "White",
            // --- 9 Requested Color Additions for Hair (including new textures/styles) ---
            "Intricately braided (F)", "Stands on end", "Pompous curl (M)", "Fluorescent Pink", "Deep Teal",
            "Thinning on top", "Coarse and stiff", "Ginger", "Jet Black"
        ],
        notableFeatures: [
            "Pointed nose", "Colorful clothing", "Inventive hands", "Loud laugh", "Tinker's tools always at hand",
            "Quick movements", "Energetic disposition", "Sparkling gaze", "Mischievous grin", "Dusty clothes",
            "A faint smell of ozone", "Ageless face", "Talkative", "Fiddly fingers", "Whimsical expression",
            // --- 21 Requested Additions for Notable Features ---
            "Exaggerated gestures", "Wears large, round spectacles", "A penchant for mechanical devices", "Always humming to themself", "Faint scorch marks on clothing",
            "Hair tied with small clockwork gears", "A collection of strange keys on a belt", "Unusual pockets sewn into clothes", "Skin slightly stained with unknown chemicals", "Can't stand still",
            "A high-pitched, infectious giggle", "Always carries a journal", "Patches of singed hair", "Enormous, pointed hat", "Speaks very quickly",
            "Earrings made of tiny springs", "Small, neat beard (M)", "A permanent oil stain on their thumb", "Always tries to fix things", "A very large, ornate belt buckle",
            "Chews on the end of a quill"
        ]
    }
},
  {
    name: "Half-Devil",
    traits: {
        build: [
            "Lean", "Sinewy", "Average",
            // --- 10 Requested Additions for Build ---
            "Seductive (F)", "Cunningly Wiry", "Muscled and Taut", "Tapered (M)", "Angular",
            "Lithe", "Powerfully Built", "Razor Thin", "Statuesque (F)", "Broad-shouldered"
        ],
        eyes: [
            "Fiery Orange", "Solid Black", "Golden slit", "Green, no pupil",
            // --- 9 Requested Color Additions for Eyes ---
            "Crimson", "Molten Gold", "Icy Blue", "Deep Violet", "Silver with Red Flecks",
            "Smoke Gray", "Yellow (like a snake)", "Garnet Red", "Pulsating Brown"
        ],
        hair: [
            "Dark and coarse", "Unnaturally colored (blue, purple)", "Wispy black",
            // --- 9 Requested Color Additions for Hair (including new textures/styles) ---
            "Like spun copper", "Bone White", "Oily and slicked back", "Charcoal Gray", "Deep Crimson Red",
            "Naturally spiked", "Platinum Blonde", "Thick and wild", "Tangled and matted"
        ],
        notableFeatures: [
            "Horns (various shapes)", "Tail (various lengths)", "Red skin", "Purple skin", "Scaly patches",
            "Claws", "Fangs", "Unusual skin patterns", "Smell of sulfur", "Demonic grin",
            "Dark, brooding expression", "Pierced ears", "Scarred body", "Unnerving stillness", "Slightly pointed teeth",
            // --- 21 Requested Additions for Notable Features ---
            "Voice that carries a rasp", "Skin unusually cold to the touch", "Cloven hooves (hidden by boots)", "A shadow that moves independently", "Eyes that glow in the dark",
            "Subtle, barely visible wings (scars)", "A single, heavy metal chain worn as a necklace", "Cannot shed tears", "A chilling, echoing laugh", "Runs unnaturally fast",
            "A gaze that inspires fear", "Extremely pale skin", "A strong aversion to holy symbols", "Thin, dry lips", "Always wears dark clothing",
            "An innate charisma", "Hands that never seem clean", "A burn mark in the shape of a symbol", "A quiet, manipulative manner", "A voice that shifts tone unexpectedly",
            "A forked tongue"
        ]
    }
},
  {
    name: "Dragonborn",
    traits: {
        build: [
            "Powerful", "Imposing", "Muscular",
            // --- 10 Requested Additions for Build ---
            "Bulwark (M)", "Lanky", "Hulking", "Broad-Chested", "Graceful (F)",
            "Thick-Necked", "Slender and Swift", "Towering", "Armored (Scales)", "Iron-Clad"
        ],
        eyes: [
            "Glimmering Gold", "Fierce Slit Pupil", "Deep Emerald",
            // --- 9 Requested Color Additions for Eyes ---
            "Molten Copper", "Volcanic Black", "Electric Blue", "Ruby Red", "Pale Amber",
            "Obsidian", "Silver", "Jade Green", "Bronze"
        ],
        hair: [
            "Head-frill (various colors)", "Spiked Crest", "Bone Ridge", "Long, stiff mane of scales", "Vestigial Horns",
            "Short, dense crest", "Fin-like head spikes", "Metallic sheen to scales", "Thick scale-plate on skull"
        ],
        notableFeatures: [
            "Scales (various colors)", "Snout", "Thick tail", "Broad wings (vestigial or full)", "Deep, rumbling voice",
            "Heavy brow", "Claws", "Strong jaw", "Proud bearing", "Thick, leathery skin",
            "Scarred scales", "Smell of ozone or brimstone", "Resilient frame", "Imposing stature", "Scars from draconic battles",
            // --- 21 Requested Additions for Notable Features ---
            "Visible Breath Weapon marks (around the mouth)", "Scales that reflect light", "A long, whip-like tail", "Unnaturally warm or cool skin", "A constant, low hiss when talking",
            "Heavy jewelry made from unrefined ore", "A single, massive horn", "Unusually long fangs", "Scales that change color with mood", "Eyes that show a faint inner flame",
            "Deep, scarred ridges on their back", "A slow, deliberate movement", "Hands used more as weapons than tools", "A deep reverence for gold/treasure", "Unblinking gaze",
            "Voice echoes in small spaces", "A metallic tang to their breath", "No visible ears (slits only)", "Heavy, weighted footsteps", "A large, cracked scale on the cheek",
            "A segmented, plated neck"
        ]
    }
},
  {
    name: "Half-Elf",
    traits: {
        build: [
            "Balanced", "Graceful", "Average", "Lean",
            // --- 10 Requested Additions for Build ---
            "Willowy (F)", "Athletic", "Hardy", "Slender", "Wiry",
            "Muscular (M)", "Compact", "Statuesque (F)", "Well-Proportioned", "Lithe"
        ],
        eyes: [
            "Expressive", "Warm Brown", "Clear Blue", "Mysterious Green",
            // --- 9 Requested Color Additions for Eyes ---
            "Hazel (with gold flecks)", "Deep Violet", "Silver-Gray", "Light Blue", "Copper",
            "Forest Green", "Amber", "Muted Blue", "Intense Black"
        ],
        hair: [
            "Long and wavy", "Straight and fine", "Brown", "Blonde", "Black", "Auburn",
            // --- 9 Requested Color Additions for Hair (including new textures/styles) ---
            "Thick and coarse", "Sun-bleached", "Ash Blonde", "Jet Black", "Silver streak",
            "Curly and unruly", "Shoulder-length (M)", "Copper Red", "Honey Brown"
        ],
        notableFeatures: [
            "Slightly pointed ears", "Combination of human and elf traits", "Quiet demeanor", "Graceful movements", "Often wears a thoughtful expression",
            "A distinct scar", "Hair color from both sides", "Mixed heritage evident", "Curious and open", "Soft-spoken",
            "Observant", "Often feels out of place", "Strong sense of justice", "Quick wit", "Travel-worn appearance",
            // --- 21 Requested Additions for Notable Features ---
            "Unusually high cheekbones", "A deep, resonant voice", "A slight hesitation when asked about family", "A habit of listening more than speaking", "Fluent in multiple languages",
            "Wears clothes that suit various climates", "Hands equally skilled with a blade or a quill", "A nervous energy", "Subtle laugh lines", "Always carries a single, meaningful item",
            "A preference for practical over ornate attire", "Eyes that miss nothing", "Melodious singing voice", "A slightly sharper jawline", "A faint birthmark on the neck",
            "Moves with an economic efficiency", "Hair tied back with a simple leather thong", "A talent for mimicry", "Always seems to be watching the horizon", "A faint scent of lavender or cedar",
            "A calm, steady pulse"
        ]
    }
},
  {
    name: "Half-Orc",
    traits: {
        build: [
            "Muscular", "Rugged", "Burly",
            // --- 10 Requested Additions for Build ---
            "Raw-boned", "Powerfully Built", "Stocky", "Lithe (F)", "Broad-shouldered (M)",
            "Grizzled", "Hulking", "Compact and Dense", "Wiry", "Athletic"
        ],
        eyes: [
            "Deep-set", "Wary Brown", "Piercing Grey", "Intense Green",
            // --- 9 Requested Color Additions for Eyes ---
            "Yellow-Green", "Obsidian Black", "Bloodshot", "Dull Hazel", "Steel Blue",
            "Muted Gold", "Fierce Amber", "Pale Gray", "Dark Olive"
        ],
        hair: [
            "Short, coarse black", "Shaved", "Mohawk", "Braided",
            // --- 9 Requested Color Additions for Hair (including new textures/styles) ---
            "Greasy and matted", "Sun-bleached ends", "Long, unkempt mane", "Reddish-Brown", "Salt-and-Pepper",
            "Slicked back", "Thick sideburns", "Patches of stubble", "Wire-like"
        ],
        notableFeatures: [
            "Greenish skin", "Prominent lower jaw", "Small tusks", "Scarred face", "Rough complexion",
            "Intimidating presence", "Often misunderstood", "Strong and resilient", "Unflinching stare", "Simple attire",
            "Often prefers solitude", "A hidden artistic side", "Calloused fists", "A tribal tattoo", "A chipped ear",
            // --- 21 Requested Additions for Notable Features ---
            "A guttural laugh", "Unusually expressive hands", "Hands stained with earth and oil", "A subtle limp from an old injury", "Thick leather wrist wraps",
            "A surprising love for animals", "Wears one piece of refined jewelry", "Voice unexpectedly soft when calm", "A prominent ridge above the eyes", "Teeth that are filed or chipped",
            "Always carries a practical tool", "Patches of thicker, orcish skin", "A natural instinct for danger", "Stands slightly hunched", "A strong, clean smell of leather",
            "A nervous habit of cracking knuckles", "A broad, flattened nose", "Tattooed symbols of protection", "Very large, powerful feet", "Wears clothes mended many times",
            "Hair tied with bone fragments"
        ]
    }
},
    {
    name: "Goblin",
    traits: {
        build: [
            "Small and wiry", "Scrawny", "Nimble",
            // --- 10 Requested Additions for Build ---
            "Bowed-legged", "Frail-looking", "Taut and Quick", "Warped", "Pot-bellied",
            "Slight (F)", "Cunningly Fast", "Runt", "Lean and Hungry", "Surprisingly Strong (M)"
        ],
        eyes: [
            "Beady Red", "Yellowish", "Dark and Shifty",
            // --- 9 Requested Color Additions for Eyes ---
            "Clouded White", "Oily Black", "Vibrant Orange", "Mottled Green", "Bloodshot",
            "Slit-Pupiled", "Pale Silver", "Deep Violet", "Murky Brown"
        ],
        hair: [
            "Sparse and greasy", "Mohawk", "None",
            // --- 9 Requested Color Additions for Hair (including new textures/styles) ---
            "Rat-tail braid", "Clumped and matted", "Dirty White", "Patchy (Alopecia)", "Lice-ridden",
            "Stiff, black bristles", "Oily topknot", "Reddish-Brown", "Shaved (unevenly)"
        ],
        notableFeatures: [
            "Green skin", "Pointed nose", "Large ears", "Small, beady eyes", "Jagged teeth",
            "Sneering grin", "Hunched posture", "Nervous twitch", "Filthy clothing", "A distinct smell of damp earth",
            // --- 21 Requested Additions for Notable Features ---
            "A constant, high-pitched whine", "Scars from poor hygiene", "Mismatched boots", "Fingernails caked with dirt", "Always carries a piece of junk/stolen item",
            "A habit of licking their lips", "Crooked spine", "Speaks with a lisp", "Multiple, infected piercings", "Always fidgeting",
            "A cough that won't go away", "Unusually long arms", "Covered in bites/fleas", "Wears a makeshift bandage", "A loud, hacking laugh",
            "Eyes constantly darting around", "A single, large tooth", "Warts on hands/face", "Stained clothes (unidentifiable substances)", "An unnatural fear of light",
            "A tattered cloak"
        ]
    }
},
  {
    name: "Half-Celestial",
    traits: {
        build: [
            "Graceful", "Slender", "Ethereal",
            // --- 10 Requested Additions for Build ---
            "Statuesque (F)", "Perfectly Proportioned", "Tall and Fine", "Muscled (M, like marble)", "Willowy",
            "Lithe and Strong", "Delicately Built (F)", "Compact (but flawless)", "Toned (M)", "Effortlessly Balanced"
        ],
        eyes: [
            "Luminous Gold", "Silver", "Sky Blue", "Radiant White",
            // --- 9 Requested Color Additions for Eyes ---
            "Pale Amethyst", "Topaz", "Clear Emerald", "Diamond-like", "Iridescent",
            "Burning Blue", "Copper", "Deep Violet", "Pure Platinum"
        ],
        hair: [
            "Silvery", "Golden", "White", "Dark, with metallic sheen",
            // --- 9 Requested Color Additions for Hair (including new textures/styles) ---
            "Platinum Blonde", "Flowing like liquid light", "Deep Mahogany", "Ash Gray", "Celestial Blue",
            "Woven with starlight", "Crimson (unusual but striking)", "Angelic ringlets", "Honey Blonde"
        ],
        notableFeatures: [
            "Luminous eyes", "Feathery wings (emergent or subtle)", "Melodious voice", "Graceful posture", "A faint halo",
            "Unnaturally beautiful", "Calm demeanor", "A soft, warm glow", "Serene expression", "A touch of divine grace",
            // --- 21 Requested Additions for Notable Features ---
            "No visible scars or blemishes", "A gentle, comforting scent (like frankincense)", "Unusually clear skin", "A habit of speaking in allegories", "Clothing never seems to wrinkle or stain",
            "Voice carries an unexpected echo", "Hands are delicate yet capable", "A tendency to offer aid without being asked", "A quiet intensity", "Fingernails that glimmer",
            "A slight aversion to iron/metal", "Eyes that never seem to blink", "An air of profound empathy", "Always wears white or pale colors", "A natural light that illuminates their surroundings",
            "A single, perfect feather worn on their person", "Perfectly straight teeth", "An aura of quiet authority", "A melodic, chiming laugh", "Their reflection seems brighter than reality",
            "Speaks slowly, thoughtfully"
        ]
    }
},
  {
    name: "Birdfolk",
    traits: {
        build: [
            "Lightweight", "Avian", "Agile",
            // --- 10 Requested Additions for Build ---
            "Sleek and Tapered", "Broad Wingspan (M)", "Delicate-Boned", "Muscular (Wings)", "Grounded (Heavy)",
            "Slender and Fast (F)", "Kestrel-like", "Scrawny", "Powerful Legs", "Top-Heavy (Feathers)"
        ],
        eyes: [
            "Sharp, bird-like", "Golden", "Black", "Piercing Blue",
            // --- 9 Requested Color Additions for Eyes ---
            "Deep Amber", "Hawkish Yellow", "Iridescent Green", "Solid White", "Ruby Red",
            "Obsidian", "Clouded", "Topaz", "Silvery-Gray"
        ],
        hair: [
            "Feathers (various colors)", "Crest", "Plumage",
            // --- 9 Requested Additions for Hair/Feathers ---
            "Soft Down", "Stiff Quills", "Elaborate Preening (F)", "Patches of Missing Feathers", "Dark, oily plumage",
            "Mottled Brown/Gray", "Shining Black", "Feathered 'beard'", "White-Tipped"
        ],
        notableFeatures: [
            "Feathered body", "Jeweled beak", "Taloned feet", "Broad wings", "Hollow bones",
            "Head-bobbing habit", "Chirping sounds", "Bright plumage", "A distinctive squawk", "Always looking skyward",
            // --- 21 Requested Additions for Notable Features ---
            "Hands used like wings when running", "Slightly hooked beak", "A talent for mimicry", "Unusually quiet flight", "Wears simple leather harness",
            "Feathers shed constantly", "Preens obsessively", "A calloused patch on the chest (from landing)", "Wears shiny trinkets", "Legs covered in fine scales",
            "Eyes that constantly track movement", "A powerful grip in their talons", "Smells faintly of dust and ozone", "Sleeps standing up", "A nervous, skittish manner",
            "Wings scarred from battle", "Voice echoes the last person they spoke to", "Never wears shoes", "A habit of dropping things from height", "Distinct feather patterns on the face",
            "A preference for high places"
        ]
    }
},
  {
    name: "Goliath",
    traits: {
        build: [
            "Massive", "Muscular", "Stone-like", "Sturdy",
            // --- 10 Requested Additions for Build ---
            "Towering", "Granite-Slab (M)", "Broad and Immovable", "Lithe for their size", "Dense and Heavy",
            "Statuesque (F)", "Barrel-Chested", "Iron-Hard", "Top-Heavy", "Mountain-Born"
        ],
        eyes: [
            "Dark, focused", "Grey", "Brown", "Blue",
            // --- 9 Requested Color Additions for Eyes ---
            "Icy Blue", "Slate Gray", "Obsidian Black", "Muted Green", "Pale Yellow",
            "Silver", "Deep Violet", "Bronze", "Glacial White"
        ],
        hair: [
            "Shaved", "Short and coarse", "None (some have stony growths)",
            // --- 9 Requested Additions for Hair/Growths ---
            "Thick, knotted braids", "Scattered patches of fur", "Stiff, black bristles", "Long, oiled (M)", "White-streaked",
            "Fine down (F)", "A prominent bone ridge", "Frost-tipped", "Earth-toned"
        ],
        notableFeatures: [
            "Gray skin with dark patches", "Stone-like features", "Large build", "Calloused hands", "Intimidating presence",
            "Small, stony growths on skin", "Deep, resonant voice", "A stoic expression", "Always seems ready for a challenge", "A strong, earthy scent",
            // --- 21 Requested Additions for Notable Features ---
            "Tattoos symbolizing great deeds", "Skin marked with scars and frostbite", "Wears minimal clothing (for cold resistance)", "A slight tremor from cold", "Always carries a competition stone",
            "Broad, flat nose", "A preference for speaking in riddles", "Hands the size of shield bosses", "Loud, booming laugh", "Eyes constantly scanning the high ground",
            "A habit of scratching their stony skin", "Extremely wide feet", "A single, broken horn/growth", "Movements are slow and deliberate", "A natural gift for counting/odds",
            "Wears a bone necklace", "A quiet, competitive intensity", "Cheeks perpetually windburned", "Voice carries a rumble like rolling stone", "A deep mark on the back of the neck (tribal mark)",
            "Speaks in short, declarative sentences"
        ]
    }
},
  {
    name: "Lizardfolk",
    traits: {
        build: [
            "Lean and reptilian", "Sleek", "Agile",
            // --- 10 Requested Additions for Build ---
            "Bulky (M, for wrestling)", "Whipcord Thin", "Heavy-Tailed", "Taut and Muscular", "Broad-Backed",
            "Serpentine (F)", "Swamp-bloated", "Jagged-Spined", "Crocodile-like", "Compact"
        ],
        eyes: [
            "Slitted pupils", "Yellow", "Orange", "Black",
            // --- 9 Requested Color Additions for Eyes ---
            "Swamp Green", "Blood Red", "Pale Blue", "Solid Gold", "Muted Gray",
            "Icy White", "Clouded", "Copper", "Aqua"
        ],
        hair: [
            "Orange and Black scales", "Green scales", "Dark, spotted scales", "Hot Pink scales",
            // --- 9 Requested Additions for Scales/Crests ---
            "Dull, mottled brown scales", "A bright red frill/crest", "Spines along the back", "Smooth, obsidian scales", "Scales like rough leather",
            "Crests tied with bones", "Scales the color of aged bronze", "Iridescent scales", "Patches of tough scutes"
        ],
        notableFeatures: [
            "Scaly skin (various colors)", "Snout", "Forked tongue", "Powerful jaws", "Webbed fingers/toes",
            "Cold-blooded demeanor", "Unblinking stare", "A faint reptilian odor", "Sharp claws", "Often carries crude weapons",
            // --- 21 Requested Additions for Notable Features ---
            "Tail used as a third hand", "A perpetual, unsettling smile (teeth showing)", "Skin camouflaged like moss or bark", "Eats food raw and whole", "Prefers to communicate through sign language/hissing",
            "Can hold breath for a long time", "Neck pouch for storing food", "Scars that disrupt scale patterns", "Always slightly damp", "Eyes set wide apart",
            "Wears jewelry made of found swamp material", "Moves with sudden, jerking speed", "A habit of basking in the sun", "No sense of human property", "Loud, clicking throat sounds",
            "Teeth filed to sharp points", "Unnaturally long neck", "A vestigial third eye (unmoving)", "Smell of fish and wet mud", "A fascination with fire/heat",
            "Walks on the balls of their feet"
        ]
    }
},
  {
    name: "Kenku",
    traits: {
        build: [
            "Slender", "Feathered", "Nimble",
            // --- 10 Requested Additions for Build ---
            "Bowed-legged", "Frail-looking", "Taut and Quick", "Hunched and Shifty", "Muscled (Legs)",
            "Bird-boned", "Awkwardly Tall (M)", "Compact", "Quick-footed (F)", "Gaunt"
        ],
        eyes: [
            "Shifty", "Black", "Intense",
            // --- 9 Requested Color Additions for Eyes ---
            "Beady Red", "Yellowish", "Dark Amber", "Muted Gray", "Silver-Flecked",
            "Obsidian", "Fierce Blue", "Cloudy White", "Copper"
        ],
        hair: [
            "Feathers (dark)", "Spotted feathers", "Missing feathers on head", "One bright pink feather",
            // --- 9 Requested Additions for Feathers/Plumage ---
            "Oily and matted", "Iridescent sheen", "White-tipped", "Soft downy neck feathers", "Feathers the color of soot",
            "Patches of stubble", "Feathers worn at the edges", "Clean, sleek plumage", "Tied with found string"
        ],
        notableFeatures: [
            "Feathered body", "No voice of their own (mimics others)", "Clawed feet", "Often carries small, shiny objects",
            "Constantly mimicking sounds", "A curious tilt of the head", "Quick, darting movements", "Always seems to be observing", "A talent for forgery",
            // --- 21 Requested Additions for Notable Features ---
            "Wears a tattered hood/cowl", "A limp from a clumsy fall", "Hands that are always busy fidgeting", "Smells faintly of dust and alleyways", "Eyes constantly track the exit",
            "A distinct sound they repeat when nervous", "Clothing made of scavenged scraps", "Perpetually nervous posture", "A fear of high places", "Slightly hooked beak",
            "Scars that disrupt feather patterns", "Walks with a quick, shuffling gait", "Wears one mismatched piece of jewelry", "An extensive collection of keys", "A habit of hoarding small items",
            "A loud, echoing sneeze (always the same one)", "Unnaturally long, grasping fingers", "Teeth stained from poor diet", "Always looking over their shoulder", "A skill for picking pockets",
            "Feathered wings (vestigial/clipped)"
        ]
    }
},
  {
    name: "Cat-Folk",
    traits: {
        build: [
            "Lithesome", "Agile", "Feline",
            // --- 10 Requested Additions for Build ---
            "Sleek and Muscular", "Whipcord Lean", "Graceful (F)", "Broad-Shouldered (M)", "Compact",
            "Long-Limbed", "Taut and Quick", "Bulky Mane (M)", "Puma-like", "Slender and Tapered"
        ],
        eyes: [
            "Intriguing, cat-like", "Amber", "Green", "Slitted",
            // --- 9 Requested Color Additions for Eyes ---
            "Piercing Gold", "Jade", "Silver", "Icy Blue", "Solid Black",
            "Copper", "Mottled Hazel", "Deep Violet", "Bright Yellow"
        ],
        hair: [
            "Striped Fur", "Orange Fur", "Dark Fur", "Spotted Fur",
            // --- 9 Requested Additions for Fur/Mane ---
            "Clouded Leopard Spots", "Sleek Black Panther Fur", "Tawny Lion's Mane (M)", "White and Pristine", "Calico Patches",
            "Deep Crimson Fur", "Soft, Downy Fur", "Thick, Grizzled Fur", "Tiger Stripes"
        ],
        notableFeatures: [
            "Feline fur and features", "Declawed", "Agile movements", "A long, expressive tail", "Curious by nature",
            "Constantly grooming", "A soft purr", "Always seeking new experiences", "A playful demeanor", "Love for shiny objects",
            "Long Whiskers", "Tufted ears",
            // --- 21 Requested Additions for Notable Features ---
            "A dislike for water/rain", "A habit of observing from high places", "Voice carries a distinct, throaty rumble", "Pads on hands/feet", "A tendency to nap unexpectedly",
            "Sharp, retractable claws (not filed)", "Always lands on their feet", "Wears one piece of intricate, simple jewelry", "A distinctive howl/yowl", "A constant, low-level energy",
            "Eyes reflect light in the dark", "A nervous flick of the tail", "Speaks with a soft, melodic accent", "A talent for sneaking", "Patches of scarred/missing fur",
            "Unusually sharp teeth", "A tendency to mark territory (subtly)", "Highly sensitive hearing (ears twitching)", "Wears clothes for utility over fashion", "A powerful, sudden leap",
            "A low tolerance for boredom"
        ]
    }
},
  {
    name: "Merfolk",
    traits: {
        build: [
            "Aquatic", "Sleek", "Muscular", "Multilegged",
            // --- 10 Requested Additions for Build ---
            "Serpentine", "Powerful-tailed", "Streamlined", "Broad-finned (M)", "Delicately-scaled (F)",
            "Luminous", "Wiry and Taut", "Coral-encrusted", "Towering (M)", "Compact and Fast"
        ],
        eyes: [
            "Calm and observant", "Deep Blue", "Green",
            // --- 9 Requested Color Additions for Eyes ---
            "Iridescent Silver", "Electric Yellow", "Oceanic Gold", "Solid Black", "Pearlescent White",
            "Fuchsia (from deep-sea dwelling)", "Pale Aqua", "Emerald Green", "Amethyst"
        ],
        hair: [
            "Webbed fins", "Seaweed-like hair (various colors)",
            // --- 9 Requested Additions for Hair/Fins ---
            "Woven with pearls", "Deep Indigo (like the abyss)", "Transparent fins", "Bright coral red", "Flowing like liquid light",
            "Matted with sand and shells", "Dark green (like kelp)", "Bioluminescent strands", "Short, slicked back"
        ],
        notableFeatures: [
            "Blue-green skin", "Webbed fingers and toes", "Fin-like ears", "Gilled neck", "A faint scent of the sea",
            "Smooth, almost slick skin", "A serene expression", "Often adorned with shells", "A deep, resonant voice", "Unfazed by pressure",
            // --- 21 Requested Additions for Notable Features ---
            "Scales that shift color", "Hands that never wrinkle", "A habit of humming low tones", "Teeth filed to sharp points", "Scarred by deep-sea creatures",
            "A slight layer of protective slime/mucus", "Bioluminescent markings on the body", "An unusually low body temperature", "Voice cracks when out of water", "Always wears a practical utility belt",
            "Skin mottled like a stone bottom", "Unblinking gaze", "A mesmerizing, rhythmic movement", "Cannot speak common tongue without effort", "A preference for the dark",
            "Wears a piece of shipwrecked metal", "Can mimic the calls of sea birds", "An obsession with dry-land objects", "A wide, powerful tail fin", "Fingers that grip like an octopus's tentacles",
            "A faint, electrical tingling when touched"
        ]
    }
},
  {
    name: "Serpent-Folk",
    traits: {
        build: [
            "Slender", "Serpentine", "Sinuous",
            // --- 10 Requested Additions for Build ---
            "Coil-Muscled", "Agile and Quick", "Whipcord Thin", "Heavy-Bodied (M)", "Delicate (F)",
            "Lithe and Graceful", "Taut and Powerful", "Hooded (Neck Flaps)", "Compact", "Unnaturally Flexible"
        ],
        eyes: [
            "Serpentine, slitted", "Hypnotic", "Golden", "Black",
            // --- 9 Requested Color Additions for Eyes ---
            "Viper Green", "Molten Copper", "Iridescent Blue", "Clouded White", "Onyx",
            "Ruby Red", "Pale Yellow", "Deep Amethyst", "Topaz"
        ],
        hair: [
            "Scaly crests", "Smooth green scales", "Dark smooth scales", "Patched scales",
            // --- 9 Requested Additions for Scales/Crests ---
            "Bright, venomous colors", "Dull, camouflaged scales", "A ridge of bony spikes", "Scales like armor plates", "Iridescent sheen",
            "A crown of stiff feathers (rare)", "Banded patterns (like a coral snake)", "Scales the color of dry sand", "Sleek, black hooding"
        ],
        notableFeatures: [
            "Scaly patches on skin", "Forked tongue", "Hypnotic gaze", "Subtle hiss in speech", "Unsettling stillness",
            "Coiled posture", "A cold touch", "A faint smell of ozone", "Often wears minimal clothing", "A calculating stare",
            // --- 21 Requested Additions for Notable Features ---
            "Teeth filed to sharp points", "Unblinking eyes", "Fangs (retractable or permanent)", "Skin feels like dry leather", "A voice that is smooth and low",
            "Hands used with unsettling precision", "Scarred by fire or cold", "A slight wobble when standing (used to coiling)", "Always speaks in whispers or riddles", "Jewelry made of polished bone",
            "A visible venom sac in the neck", "Walks on the balls of their feet", "A long, whip-like tail (concealed)", "A preference for dim, warm light", "Skin shimmers under torchlight",
            "A disconcerting smile", "Unnaturally long fingers", "Constantly monitors the temperature", "A large, beautiful scale worn as a token", "Cannot tolerate cold water",
            "A tendency to wrap around objects"
        ]
    }
},
  {
    name: "Living Machine",
    traits: {
        build: [
            "Constructed", "Solid", "Imposing",
            // --- 10 Requested Additions for Build ---
            "Sleek Chassis", "Bulk-Plated (M)", "Angular and Sharp", "Fluid and Flexible (F)", "Crystalline",
            "Heavily Modified", "Lightweight Alloy", "Industrial", "Towering", "Compact and Durable"
        ],
        eyes: [
            "Glowing (various colors)", "Fixed", "Unblinking",
            // --- 9 Requested Color Additions for Eyes ---
            "Vibrant Neon Green", "Pulsating Red", "Static Blue", "Molten Gold", "UV Purple",
            "Dull Gray (unpowered)", "Iridescent Oil-Slick", "White Halogen", "Flickering Amber"
        ],
        hair: [
            "Caseless", "Wires Protruding", "Long thick wires in a braid", "Welded on helmet",
            // --- 9 Requested Additions for Head/Covering ---
            "Fiber-optic dreadlocks", "Polished chrome dome", "Hair-like woven synth-fiber", "A retractable antenna", "A heavy iron cowl",
            "Smooth ceramic shell", "Etched metal plating", "A mane of segmented piping", "Sparse, frayed wires"
        ],
        notableFeatures: [
            "Constructed body", "Metallic sheen", "No facial expressions", "Solid, unyielding posture", "Visible joints and plating",
            "A deep, resonant voice (mechanical)", "Often bears battle scars", "A sense of quiet determination", "Unwavering gaze", "A distinct metallic scent",
            // --- 21 Requested Additions for Notable Features ---
            "Steam hisses from joints", "Faint whirring internal mechanisms", "Hands that transform into tools", "A specific serial number branded on a plate", "Chassis covered in rust/patina",
            "Fingers perpetually twitching", "Voice modulator is glitchy", "Unnaturally perfect balance", "Cannot process sarcasm", "Eyes flicker when confused",
            "Always carries a dedicated power cell", "A limb replaced with a different model", "Cracked optical lens", "Skin plated with an unusual material (wood, stone)", "Unaware of personal space",
            "Small runes etched into the metal", "Moves with unnerving speed", "A habit of mimicking human sounds (badly)", "No body temperature", "A distinct oil leak stain",
            "Worn, faded paint on armor"
        ]
    }
    // total # of combos = 105,840
}
];
