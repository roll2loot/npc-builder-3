// constants/regions.ts
export interface Region {
  name: string;
  professions: string[];
}

export const REGIONS: Region[] = [
  {
    name: "Coastal",
professions: [
"Fisher", "Sailor", "Merchant", "Smuggler", "Lighthouse Keeper",
"Shipwright", "Dockworker", "Cartographer", "Innkeeper", "Cook",
"Navigator", "Pearl Diver", "Pirate", "Marine Biologist", "Harbor Master",
"Seafood Vendor", "Boat Builder", "Fishery Owner", "Coastal Guard", "Salt Harvester",
"Explorer", "Historian", "Spy", "Diplomat", "Local Drunk",
"Tidecaller", "Sea Witch", "Leviathan Hunter", "Wrecker", "Netmender",
"Cooperative Manager", "Tide-Mill Operator", "Pickler", "Sailsmith", "Ambergris Dealer",
"Customs Officer", "Exciseman", "Port Magistrate", "Press-Gang Member",
"Aquaculturist", "Stormsinger", "Marine Archaeologist", "Monster Tamer", "Beachcomber", "Rum-Runner"
]
  },
  {
    name: "Desert",
professions: [
"Scavenger", "Nomad", "Desert Guide", "Water Merchant", "Prospector",
"Caravan Guard", "Spice Trader", "Oasis Gardener", "Desert Hunter", "Sand Diver",
"Archaeologist", "Storyteller", "Weaver", "Potter", "Herbalist",
"Bandit", "Explorer", "Trader", "Survivalist", "Dune Surfer", "Hermit",
"Spy", "Diplomat", "Historian", "Mercenary", "Engineer", "Cartographer", "Local Drunk",
"Camel Breeder", "Glassblower", "Geomancer", "Dowsing Witch", "Well Driller",
"Mirage Interpreter", "Beast Tamer", "Obsidian Carver", "Tattoo Artist", "Sandship Captain",
"Salt Miner", "Sun Priest", "Star Navigator", "Oasis Tender", "Ruin Delver",
"Poison Brewer", "Bounty Hunter", "Fossil Hunter", "Dust Devil Herder", "Sarcophagus Maker"
]
  },
  {
    name: "Mountains",
professions: [
"Miner", "Mountaineer", "Herbalist", "Stone Mason", "Goat Herder",
"Blacksmith", "Gemcutter", "Fur Trapper", "Cave Explorer", "Guard",
"Engineer", "Geologist", "Alchemist", "Hunter", "Cartographer",
"Monk", "Hermit", "Weapon Smith", "Armor Smith", "Mercenary",
"Explorer", "Trader", "Spy", "Diplomat", "Historian", "Local Drunk",
"Bridge Warden", "Rune Carver", "Aviary Keeper", "Hot Springs Innkeeper", "Rescue Climber",
"Landslide Scout", "Meteorologist", "Poultice Maker", "Ice Carver", "Beast Tamer",
"Tunnel Delver", "Lumberjack", "Lookout", "Toll Keeper", "Prospector",
"Golem Artisan", "Wind Harvester", "Rope Bridge Weaver", "High-Altitude Botanist", "Scribe of Peaks"
]
  },
  {
    name: "Forest",
professions: [
"Hunter", "Woodcutter", "Trapper", "Druid", "Forester",
"Herbalist", "Pathfinder", "Beekeeper", "Lumberjack", "Scout",
"Poacher", "Witch", "Shaman", "Animal Trainer", "Fletcher",
"Bowyer", "Leatherworker", "Mushroom Forager", "Wood Carver", "Cartographer",
"Explorer", "Trader", "Spy", "Diplomat", "Historian", "Local Drunk",
"Charcoal Burner", "Resin Tapper", "Basket Weaver", "Potion Brewer", "Gamekeeper",
"Bridge Warden", "Fey Interpreter", "Bog Iron Smelter", "Sacred Grove Guardian", "Root Digger",
"Thorn Hedge Layer", "Poultice Maker", "Wild Pig Herder", "River Fisher", "Canopy Harvester",
"Totem Carver", "Village Elder", "Storyteller", "Berry Picker", "Rope Maker"
]
  },
  {
    name: "City",
professions: [
"Guard", "Thief", "Artisan", "Beggar", "Innkeeper",
"Scholar", "Merchant", "Baker", "Blacksmith", "Tailor",
"Doctor", "Lawyer", "Politician", "Spy", "Assassin",
"Priest", "Cook", "Bartender", "Street Performer", "Architect",
"Engineer", "Diplomat", "Historian", "Cartographer", "Mercenary", "Trader", "Local Drunk",
"Rat Catcher", "Alchemist", "Scribe", "Tax Collector", "Cobbler",
"Coinsmith", "Gravedigger", "Apothecary", "Soothsayer", "Bounty Hunter",
"Gang Enforcer", "Gossip", "Lamplighter", "Sewer Jack", "Stablehand",
"Tattooist", "Fence", "Guild Master", "Crier", "Jeweler",
"Bookbinder", "Mortician", "Gambler", "Carriage Driver", "Tinker",
"Actor", "Senator", "Slave", "Smelter", "Clockmaker"
]
  },
  {
    name: "Plains",
professions: [
"Farmer", "Rancher", "Caravan Guard", "Wagoner", "Trapper",
"Horse Breeder", "Grain Merchant", "Scout", "Hunter", "Shepherd",
"Tracker", "Nomad", "Warrior", "Herbalist", "Trader",
"Explorer", "Diplomat", "Historian", "Mercenary", "Engineer",
"Spy", "Cook", "Innkeeper", "Cartographer", "Blacksmith", "Tailor", "Local Drunk",
"Windmill Tender", "Falconer", "Fence Builder", "Thatcher", "Bone Carver",
"Wool Spinner", "Cheesemaker", "Soil Scout", "Storm Watcher", "Grassland Druid",
"Bison Hunter", "Salt Trader", "Wainwright", "Well Digger", "Peddler",
"Archer", "Storyteller", "Tribal Elder", "Saddlemaker", "Beekeeper",
"Gambler", "Bounty Hunter", "Road Warden", "Oracle", "Seed Savant",
"Tattoo Artist", "Militia Member", "Ditch Digger", "Horse Trainer", "Potter"
]
  },
  {
    name: "Swamp",
professions: [
"Trapper", "Fisher", "Herbalist", "Hunter", "Swamp Guide",
"Alchemist", "Witch Doctor", "Poisoner", "Bog Farmer", "Recluse",
"Explorer", "Shaman", "Fungus Forager", "Basket Weaver", "Mud Gatherer",
"Bandit", "Trader", "Survivalist", "Spy", "Diplomat",
"Historian", "Mercenary", "Cartographer", "Engineer", "Cook", "Innkeeper", "Local Drunk",
"Leech Collector", "Gator Hunter", "Boatwright", "Dredger", "Tannin Brewer",
"Bog Iron Smelter", "Lamplighter (Will-o'-Wisp)", "Mire Shaman", "Pearl Diver", "Crabber",
"Snake Charmer", "Raft Pilot", "Bone Carver", "Trapper", "Poultice Maker",
"Moss Harvester", "Rare Orchid Poacher", "Monster Tamer", "Wickerworker", "Toll Keeper",
"Spirit Medium", "Root Digger", "Tar Maker", "Canal Digger", "Frog Gigger",
"Marsh Gas Excavator", "Poleman", "Fence Builder", "Carrion Cleaner", "Omen Reader"
]
  },
  {
    name: "Tundra",
professions: [
"Hunter", "Trapper", "Explorer", "Ice Fisher", "Fur Trader",
"Nomad", "Survivalist", "Shaman", "Storyteller", "Reindeer Herder",
"Ice Carver", "Snow Scout", "Winter Warrior", "Herbalist", "Fisher",
"Trader", "Spy", "Diplomat", "Historian", "Mercenary",
"Engineer", "Cook", "Innkeeper", "Cartographer", "Blacksmith", "Tailor", "Local Drunk",
"Igloo Builder", "Mammoth Hunter", "Aurora Seeker", "Sled-Dog Trainer", "Whale Hunter",
"Blizzard Prophet", "Bone Carver", "Permafrost Miner", "Ice Bridge Scout", "Fat Renderer",
"Snowshoe Maker", "Cryomancer", "Hot Spring Tender", "Glacier Guide", "Ursine Shaman",
"Tusk Carver", "Seal Hunter", "Caches Master", "Healer", "Longnight Brewer",
"Avalanche Watcher", "Rune Etcher", "Frozen Relic Hunter", "Tribal Tattooist", "Salt Merchant",
"Dried Meat Curator", "Totem Carver", "Mittens Maker", "Lamp Oil Maker", "Pathfinder"
]
  },
  {
    name: "Underdark",
professions: [
"Miner", "Fungus Farmer", "Explorer", "Deep Dweller", "Scout",
"Gemcutter", "Alchemist", "Slaver", "Tunnel Guard", "Mushroom Forager",
"Spy", "Assassin", "Trader", "Warrior", "Priest",
"Engineer", "Geologist", "Herbalist", "Weapon Smith", "Armor Smith",
"Diplomat", "Historian", "Cartographer", "Mercenary", "Cook", "Innkeeper", "Local Drunk",
"Spore Harvester", "Lichen Dyer", "Rope Bridge Weaver", "Echo Locator", "Blind Cave Fisher",
"Gloom Stalker", "Pit Beast Tamer", "Psionicist", "Lava Channel Digger", "Ore Smelter",
"Aquifer Tapper", "Whispering Fungus Tender", "Abyssal Angler", "Tunnel Delver", "Carrion Crawler Breeder",
"Myconid Diplomat", "Rune Carver", "Slime Rancher", "Cavern Rigger", "Glowstone Sculptor",
"Puzzle Lock Crafter", "Deep Gnome Illusionist", "Tremor Sense", "Sacrificial Offering", "Warden of the Silent Depths",
"Grappler", "Mold Mender", "Roper Hunter", "Underriver Ferryman", "Echo Miner"
]
  },
  {
    name: "Island",
professions: [
"Sailor", "Fisher", "Explorer", "Pearl Diver", "Pirate",
"Shipwright", "Navigator", "Trader", "Island Guide", "Coconut Harvester",
"Storyteller", "Shaman", "Diver", "Boat Builder", "Harbor Master",
"Seafood Vendor", "Coastal Guard", "Salt Harvester", "Spy", "Diplomat",
"Historian", "Mercenary", "Cartographer", "Engineer", "Cook", "Innkeeper", "Local Drunk",
"Volcano Tender", "Tidal Pool Forager", "Tattoo Artist", "Canoe Carver", "Net Maker",
"Monster Tamer", "Rum Distiller", "Seaweed Farmer", "Turtle Warden", "Jungle Tracker",
"Coral Jeweler", "Bird Caller", "Freshwater Finder", "Monsoon Watcher", "Fruit Dyer",
"Shell Carver", "Outrigger Crafter", "Tiki Carver", "Lagoon Guardian", "Driftwood Sculptor",
"Spice Forager", "Rescue Swimmer", "Taboo Enforcer", "Feather Worker", "Sacrifice Interpreter",
"Tide Chart Maker", "Festival Planner", "Cask Maker", "Volcano Miner", "Message Runner"
]
  },
  // --- New Regions Below ---
  {
    name: "Volcanic",
professions: [
"Miner", "Geologist", "Alchemist", "Engineer", "Explorer",
"Fire Mage", "Obsidian Crafter", "Sulfur Harvester", "Lava Diver", "Guard",
"Mercenary", "Smuggler", "Spy", "Trader", "Weapon Smith",
"Armor Smith", "Herbalist", "Survivalist", "Cook", "Innkeeper",
"Diplomat", "Historian", "Cartographer", "Scholar", "Priest", "Artisan", "Local Drunk",
"Ash Farmer", "Tremor Reader", "Heat Harvester", "Steam Vent Technician", "Forgelord",
"Cinder Scout", "Basalt Mason", "Gem Seeker", "Golem Artificer", "Thermal Aquaculturist",
"Fume Alchemist", "Rune Etcher", "Lens Grinder", "Magma Channeler", "Bog Iron Smelter",
"Glassblower", "Sacrificial Attendant", "Cavern Insulator", "Fire Salamander Tamer", "Pumice Carver",
"Breathing Mask Maker", "Ore Refiner", "Geode Breaker", "Tunnel Cooler", "Fissure Watcher",
"Emberweaver", "Spellforge Attendant", "Heat Exhaustion Healer", "Rare Metal Prospector", "Clan Fire-Keeper"
]
  },
  {
    name: "Arctic",
professions: [
"Hunter", "Trapper", "Explorer", "Ice Fisher", "Fur Trader",
"Nomad", "Survivalist", "Shaman", "Storyteller", "Reindeer Herder",
"Ice Carver", "Snow Scout", "Winter Warrior", "Herbalist", "Fisher",
"Trader", "Spy", "Diplomat", "Historian", "Mercenary",
"Engineer", "Cook", "Innkeeper", "Cartographer", "Blacksmith", "Tailor", "Local Drunk",
"Igloo Architect", "Aurora Interpreter", "Blizzard Prophet", "Mammoth Tusk Carver", "Seal Oil Renderer",
"Kayak Builder", "Sled Dog Breeder", "Permafrost Farmer", "Ice Bridge Engineer", "Whalebone Sculptor",
"Frostbite Healer", "Cryomancer", "Glacier Guide", "Snow Goggle Carver", "Avalanche Survivor",
"Northern Lights Painter", "Ice Floe Scout", "Walrus Hunter", "Frozen Relic Curator", "Thermal Spring Keeper",
"Crevice Rescuer", "Hoarfrost Collector", "Driftwood Salvager", "Salt Ice Miner", "Polar Bear Shaman",
"Longnight Watch", "Frozen Meat Preserver", "Snowshoe Maker", "Ice Runecarver", "Tribal Tattooist"
]
  },
  {
    name: "Jungle",
professions: [
"Explorer", "Hunter", "Herbalist", "Trapper", "Guide",
"Shaman", "Poisoner", "Animal Trainer", "Archaeologist", "Mercenary",
"Smuggler", "Spy", "Trader", "Warrior", "Priest",
"Survivalist", "Cook", "Innkeeper", "Blacksmith", "Tailor",
"Diplomat", "Historian", "Scholar", "Cartographer", "Artisan", "Engineer", "Local Drunk",
"Canopy Harvester", "Vine Bridge Weaver", "Potion Brewer", "Temple Raider", "Jaguar Cultist",
"Insect Farmer", "Rare Orchid Hunter", "Zipline Courier", "Disease Specialist", "Giant Serpent Tamer",
"Canoe Carver", "Headhunter", "Totem Carver", "Parrot Trapper", "Quicksand Scout",
"Waterfall Diver", "Mud Bath Attendant", "Jungle Drum Messenger", "Sacrificial Offering", "Carnivorous Plant Tender",
"Ancient Script Decipherer", "Bamboo Craftsman", "Spore Collector", "Riverboat Captain", "Cursed Relic Hunter",
"Monsoon Predictor", "Volcano Watcher", "Trap Setter", "Featherworker", "Tribal Storykeeper"
]
  },
  {
    name: "Wasteland",
professions: [
"Scavenger", "Nomad", "Wasteland Guide", "Water Merchant", "Prospector",
"Caravan Guard", "Bandit", "Mechanic", "Survivalist", "Trader",
"Engineer", "Spy", "Mercenary", "Cook", "Innkeeper",
"Blacksmith", "Tailor", "Herbalist", "Hunter", "Explorer",
"Diplomat", "Historian", "Scholar", "Cartographer", "Priest", "Artisan", "Local Drunk",
"Radiation Witch", "Mutant Hunter", "Bone Picker", "Rust Farmer", "Cage Fighter",
"Slave Trader", "Blight Cultist", "Sand Shark Skinner", "Rad Storm Chaser", "Junk Sculptor",
"Well Driller", "Carrion Cleaner", "Tattoo Artist", "Bounty Hunter", "Gun Runner",
"Crop Thief", "Ruin Delver", "Makeshift Surgeon", "Radiation Healer", "Glow-Moss Forager",
"Tunnel Rat", "Still Operator", "Beast Tamer", "Ash Farmer", "Ration Hoarder",
"Terror Prophet", "Pit Boss", "Grave Robber", "Rust Lord", "Silt Miner"
]
  },
  {
    name: "Arcane City",
professions: [
"Wizard", "Scholar", "Alchemist", "Artificer", "Enchanter",
"Librarian", "Scribe", "Magical Item Crafter", "Arcane Guard", "Researcher",
"Diplomat", "Engineer", "Spy", "Merchant", "Innkeeper",
"Cook", "Tailor", "Blacksmith", "Priest", "Warrior",
"Historian", "Mercenary", "Cartographer", "Explorer", "Artisan", "Politician", "Local Drunk",
"Golem Artisan", "Potion Vendor", "Wardsmith", "Mana Well Tender", "Familiar Breeder",
"Spellscroll Scribe", "Dream Interpreter", "Chronomancer's Apprentice", "Aetheric Navigator", "Magical Pest Controller",
"Rune Carver", "Alchemical Waste Disposer", "Magical Lawyer", "Divination Consultant", "Teleportation Inspector",
"Mage-Tower Architect", "Illusionist for Hire", "Curse-Breaker", "Mana Tax Collector", "Arcane Blacksmith",
"Planar Diplomat", "Ley Line Surveyor", "Magical Beast Trainer", "Crystal Tuner", "Antimagic Enforcer",
"Spell Component Forager", "Academy Janitor", "Magical Fence", "Guild Bureaucrat", "Relic Authenticator"
]
  },
  {
    name: "Feywild",
professions: [
"Fey Guide", "Storyteller", "Bard", "Herbalist", "Dream Weaver",
"Nature Spirit", "Trickster", "Diplomat", "Explorer", "Musician",
"Artist", "Dancer", "Gardener", "Beekeeper", "Shaman",
"Spy", "Merchant", "Innkeeper", "Cook", "Tailor",
"Blacksmith", "Priest", "Cartographer", "Warrior", "Historian", "Mercenary", "Local Drunk",
"Glimmerdew Collector", "Prank Broker", "Oath-Binder", "Memory Thief", "Moonblossom Cultivator",
"Will-o'-Wisp Herder", "Gossip Harvester", "Seasonal Ambassador", "Riddle Master", "Laughter Brewer",
"Glamour Weaver", "Portal Warden", "Unicorn Groom", "Pixie Negotiator", "Timeless Historian",
"Shadow-Twin", "Wish-Fulfillment Agent", "Echo Miner", "Satyr Party Planner", "Mirage Cartographer",
"Fate Spinner", "Lost Thing Finder", "Changeling Caretaker", "Eternal Feast Caterer", "Whispering Reed Flutist",
"Mushroom Circle Dancer", "Starlight Bottler", "Emotion Sculptor", "Wild Hunt Organizer", "Twilight Poet"
]
  },
  {
    name: "Shadow Lands",
professions: [
"Shadow Guide", "Reaper", "Assassin", "Spy", "Thief",
"Necromancer", "Grave Robber", "Whisperer", "Cultist", "Mercenary",
"Smuggler", "Trader", "Warrior", "Priest", "Scholar",
"Historian", "Engineer", "Cook", "Innkeeper", "Blacksmith",
"Tailor", "Herbalist", "Cartographer", "Hunter", "Explorer", "Diplomat", "Local Drunk",
"Soul Broker", "Bone Carver", "Wraith Wrangler", "Carrion Collector", "Mourning Singer",
"Crypt Keeper", "Shade Tender", "Grief Eater", "Cursed Artifact Curator", "Echo Hunter",
"Mist Weaver", "Sarcophagus Maker", "Ghost-Light Lamplighter", "Sorrow Brewer", "Vigil Keeper",
"Mausoleum Architect", "Sin Eater", "Spectral Hound Trainer", "Ash Farmer", "Last Rites Priest",
"Pallbearer", "Epitaph Etcher", "Necrotic Herbalist", "Despair Miner", "Twilight Cartographer",
"Banshee Vocal Coach", "Soul Anchor Smith", "Funeral Pyre Tender", "Haunting Consultant", "Gravedigger"
]
  },
  {
    name: "Aetherial Plane",
professions: [
"Planar Explorer", "Aether Weaver", "Astral Merchant", "Void Hunter", "Dreamer",
"Scholar", "Engineer", "Spy", "Trader", "Warrior",
"Priest", "Artisan", "Cook", "Innkeeper", "Blacksmith",
"Tailor", "Herbalist", "Hunter", "Explorer", "Diplomat",
"Historian", "Mercenary", "Cartographer", "Politician", "Assassin", "Thief", "Local Drunk",
"Starlight Forger", "Concept Architect", "Resonance Harmonizer", "Thought Fisher", "Memory Sculptor",
"Paradox Resolver", "Prism Smith", "Echo Harvester", "Motive Analyst", "Chrono-Anchor",
"Idea Gardener", "Silence Broker", "Gravity Bender", "Consensus Weaver", "Possibility Miner",
"Mind-Scape Cartographer", "Philosophy Chef", "Soul-Stitch Tailor", "Law of Physics Lawyer", "Wish-Fulfillment Actuary",
"Celestial Choir Director", "Rift Warden", "Abstract Mathematician", "Reality Therapist", "Mnemonic Vintner",
"Potentiality Assessor", "Light-Sailor", "Metaphor Smith", "Fate's Accountant", "Dreamstuff Renderer"
]
  },
  {
    name: "Blighted Lands",
professions: [
"Scavenger", "Survivalist", "Blighted Hunter", "Mutant", "Recluse",
"Herbalist", "Poisoner", "Warrior", "Mercenary", "Bandit",
"Spy", "Trader", "Cook", "Innkeeper", "Blacksmith",
"Tailor", "Explorer", "Diplomat", "Historian", "Scholar",
"Priest", "Artisan", "Cartographer", "Engineer", "Assassin", "Thief", "Local Drunk",
"Corpse-Eater", "Spore Collector", "Toxin Brewer", "Waste Drudge", "Carrion Cleaner",
"Blight-Tender", "Mutation Scavenger", "Rust Lord", "Fungal Forager", "Plague Doctor",
"Contamination Scout", "Bone Picker", "Flesh-Stitcher", "Rot Farmer", "Pustule Popper",
"Gloom Sniffer", "Canker Miner", "Withering Warden", "Desolation Guide", "Mire Shambler",
"Blight-Sworn", "Tainted Alchemist", "Ruin Delver", "Ash Walker", "Weeping Soothsayer",
"Scab Picker", "Blight-Worshipper", "Grisly Curio Merchant", "Pox Marked", "Sorrow Eater"
]
  },
  {
    name: "Floating Islands",
professions: [
"Sky Sailor", "Cloud Miner", "Airship Pilot", "Wind Mage", "Explorer",
"Engineer", "Artisan", "Merchant", "Guard", "Smuggler",
"Spy", "Trader", "Warrior", "Priest", "Scholar",
"Historian", "Mercenary", "Cook", "Innkeeper", "Blacksmith",
"Tailor", "Herbalist", "Cartographer", "Local Drunk", "Hunter", "Diplomat", "Politician",
"Aetherium Prospector", "Gravity Smith", "Storm Wrangler", "Sky Fisher", "Rope Bridge Weaver",
"Propeller Mechanic", "Thermal Current Diver", "Fog Harvester", "Crystal Tuner", "Winged Mount Breeder",
"Parachute Maker", "Acrophobia Therapist", "Avalanche Spotter", "Mist Cartographer", "Zeppelin Navigator",
"Ballast Master", "Lightning Rod Installer", "Aerie Architect", "Featherfall Enchanter", "Cloud Sculptor",
"Sky-Whale Hunter", "Oxygen Vine Farmer", "Star Chart Astrologer", "Updraft Surfer", "Precipitation Diviner",
"Island Geode Cracker", "Atmospheric Chef", "Celestial Event Planner", "Gale-force Bard", "Vertigo Doctor"
]
  }
  // ---1063 options
];
