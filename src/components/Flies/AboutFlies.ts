import boss_eating from '../../assets/Flies/boss/boss_eating.png'
import boss_flying from '../../assets/Flies/boss/boss_flying.png'
import boss_kill from '../../assets/Flies/boss/boss_kill.png'
import boss_revive from '../../assets/Flies/boss/boss_revive.png'
import boss_stun from '../../assets/Flies/boss/boss_stun.png'
import boss_summon from '../../assets/Flies/boss/boss_summon.png'
import poison_boss_fly from '../../assets/Flies/boss/poison_boss_fly.png'
import shockwave_effect_fly from '../../assets/Flies/boss/shockwave_effect_fly.png'
import small_fly_eating from '../../assets/Flies/small_fly/small_fly_eating.png'
import small_fly_flying from '../../assets/Flies/small_fly/small_fly_flying.png'
import fly_eating from '../../assets/Flies/default_fly/fly_eating.png'
import fly_flying from '../../assets/Flies/default_fly/fly_flying.png'
import chunky_fly_eating from '../../assets/Flies/chunky_fly/chunky_fly_eating.png'
import chunky_fly_flying from '../../assets/Flies/chunky_fly/chunky_fly_flying.png'
import mother_fly_flying from '../../assets/Flies/mother_fly/mother_fly_flying.png'
import mother_fly_birth from '../../assets/Flies/mother_fly/mother_fly_birth.png'
import egg_idle from '../../assets/Flies/mother_fly/egg_idle.png'
import egg_hatch from '../../assets/Flies/mother_fly/egg_hatch.png'
import knight_fly from '../../assets/Flies/knight/knight_fly.png'
import knight_fly_damage from '../../assets/Flies/knight/knight_fly_damage.png'

type FlyDescriptionSection = {
    title: string;
    content: string[];
};

type FlyDescription = {
    sections: FlyDescriptionSection[];
};

type action = {
    action_name:string
    location:string, 
    frame:number
}
export type Fly = {
    fly_name:string;
    actions:action[]
    description:FlyDescription
    };

const descriptions: Record<string, FlyDescription> = {
  "Normal Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 2",
    "Speed: 120",
    "Bite Damage: 6×",
    "Hitbox: Standard",
    "Role: Basic attacker / food harasser",
    "The Normal Fly is the most common enemy type and acts as the foundation of every infestation. It has average movement speed, low durability, and a simple attack pattern: locate food, land on it, and continuously bite until the meal is damaged or destroyed. While individually weak, Normal Flies become dangerous when they appear in large numbers because they force players to divide their attention across multiple targets."
  ]
  },
    {
    title: "Skill / Behavior: Standard Targeter",
    content: [
    "Searches for the nearest available food source.",
    "Moves unpredictably around the map before landing.",
    "Begins biting immediately once it reaches food.",
    "Can flee after taking repeated hits."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Requires only a few clicks to defeat.",
    "Maintain awareness during swarm events.",
    "Prioritize groups of Normal Flies before they accumulate."
  ]
  }
  ]
  },
  "Swarm Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 2",
    "Speed: 230",
    "Bite Damage: 6×",
    "Hitbox: 32",
    "Eat Time: 1.5 seconds",
    "Role: Fast harassment unit",
    "The Swarm Fly is a small and extremely agile enemy designed to overwhelm players through speed and numbers. Unlike slower flies, it spends very little time traveling or eating, allowing it to quickly damage food before escaping."
  ]
  },
    {
    title: "Skill / Behavior: Swarm Movement",
    content: [
    "Extremely high movement speed.",
    "Small body makes clicking difficult.",
    "Frequently changes direction.",
    "Knockback from swats sends it flying a large distance."
  ]
  },
    {
    title: "Strengths",
    content: [
    "Hard to hit due to its tiny hitbox.",
    "Quickly reaches exposed food.",
    "Becomes dangerous when multiple Swarm Flies attack simultaneously."
  ]
  },
    {
    title: "Weaknesses",
    content: [
    "Very low HP.",
    "Strong knockback interrupts attacks."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "React quickly and click accurately.",
    "Use knockback to remove them from food.",
    "Clear them before they multiply into larger waves."
  ]
  }
  ]
  },
  "Tank Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 5",
    "Speed: 75",
    "Bite Damage: 6×",
    "Hitbox: 52",
    "Eat Time: 3.2 seconds",
    "Role: Heavy durability enemy",
    "The Tank Fly is a slow but extremely durable enemy built to absorb repeated attacks. It lacks speed but compensates with high health and the ability to remain on food for extended periods, making it a constant threat during chaotic waves."
  ]
  },
    {
    title: "Skill / Behavior: Heavy Body",
    content: [
    "Moves slowly toward food.",
    "Requires multiple swats to defeat.",
    "Large hitbox makes it easier to hit.",
    "Continues attacking while taking damage."
  ]
  },
    {
    title: "Strengths",
    content: [
    "High HP.",
    "Difficult to remove quickly.",
    "Punishes players who ignore it."
  ]
  },
    {
    title: "Weaknesses",
    content: [
    "Slow movement.",
    "Large target."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Keep attacking consistently.",
    "Do not leave it unattended.",
    "Eliminate it before faster enemies distract you."
  ]
  }
  ]
  },
  "Mother Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 6",
    "Speed: 95",
    "Bite Damage: 6×",
    "Role: Breeding enemy",
    "The Mother Fly is an infestation-spreading enemy that creates new threats instead of relying only on direct attacks. It targets food and lays eggs that hatch into additional flies, allowing a single Mother Fly to turn into an entire swarm if ignored."
  ]
  },
    {
    title: "Skill / Behavior: Egg Laying",
    content: [
    "Places 1 egg on food.",
    "Eggs hatch into Normal or Swarm Flies.",
    "Prioritizes unprotected meals.",
    "Creates long-term pressure."
  ]
  },
    {
    title: "Strengths",
    content: [
    "Increases enemy numbers.",
    "Can overwhelm players through reproduction.",
    "Dangerous in combination with other flies."
  ]
  },
    {
    title: "Weaknesses",
    content: [
    "Eggs are fragile.",
    "Slower than advanced fly types."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Swat the Mother Fly immediately.",
    "Destroy all eggs before the hatch timer ends.",
    "Prevent chain infestations."
  ]
  }
  ]
  },
  "Queen Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 12",
    "Speed: 82",
    "Bite Damage: 8.1×",
    "Spawn: Every 10th day",
    "Role: Elite breeder / mini-boss enemy",
    "The Queen Fly is the strongest regular fly and appears as a major late-game threat. She combines high durability with powerful reproduction abilities, making her capable of creating a full infestation while surviving heavy attacks."
  ]
  },
    {
    title: "Skill / Behavior: Royal Egg Production",
    content: [
    "Places up to 3 eggs on food.",
    "Creates multiple future enemies.",
    "Requires sustained attacks to defeat."
  ]
  },
    {
    title: "Strengths",
    content: [
    "Highest regular fly HP.",
    "Powerful bite damage.",
    "Can flood the map with new flies."
  ]
  },
    {
    title: "Weaknesses",
    content: [
    "Slow movement.",
    "Large target."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Focus attacks immediately.",
    "Destroy eggs as soon as they appear.",
    "Never allow multiple Queens to remain alive."
  ]
  }
  ]
  },
  "Armored Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 8",
    "Speed: 92",
    "Bite Damage: 6.3×",
    "Role: Defensive evolution",
    "The Armored Fly is an evolved mutation with a reinforced shell that increases its survivability. It is slower than most advanced flies but requires significantly more effort to eliminate."
  ]
  },
    {
    title: "Skill / Behavior: Hardened Shell",
    content: [
    "Reduced effectiveness of casual attacks.",
    "Requires multiple successful swats.",
    "Maintains pressure while absorbing damage."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Use repeated attacks.",
    "Avoid ignoring it during large waves.",
    "Remove it before stronger enemies appear."
  ]
  }
  ]
  },
  "Speed Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 2",
    "Speed: 285",
    "Bite Damage: 6.3×",
    "Hitbox: 30",
    "The Speed Fly is one of the fastest enemies in the game. It relies on movement rather than durability, rushing toward food and escaping before players can react."
  ]
  },
    {
    title: "Skill / Behavior: Extreme Mobility",
    content: [
    "Highest movement speed among normal flies.",
    "Tiny hitbox.",
    "Difficult to track."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Predict movement patterns.",
    "Use knockback.",
    "Strike immediately when it lands."
  ]
  }
  ]
  },
  "Poison Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 4",
    "Speed: 138",
    "Bite Damage: 9.9×",
    "Damage Multiplier: 1.65×",
    "The Poison Fly sacrifices durability for devastating attacks. Each bite deals significantly more damage than common flies, making even short feeding periods dangerous."
  ]
  },
    {
    title: "Skill / Behavior: Toxic Bite",
    content: [
    "No damage-over-time effect.",
    "Deals extremely high immediate food damage."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Prioritize elimination.",
    "Never allow it to remain on food.",
    "Remove it before handling weaker enemies."
  ]
  }
  ]
  },
  "Fire Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 4",
    "Speed: 152",
    "Bite Damage: 11.1×",
    "Damage Multiplier: 1.85×",
    "Eat Time: 1.9 seconds",
    "The Fire Fly is the most destructive evolved fly. It has the highest bite damage among regular enemies and can rapidly destroy valuable food if ignored."
  ]
  },
    {
    title: "Skill / Behavior: Burning Assault",
    content: [
    "Extremely powerful bites.",
    "Requires immediate response.",
    "Creates high pressure during waves."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Eliminate instantly.",
    "Use its feeding pause as an attack window.",
    "Never prioritize weaker enemies over it."
  ]
  }
  ]
  },
  "Thief Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 3",
    "Speed: 176",
    "Bite Damage: 7.8×",
    "The Thief Fly is a balanced attacker with strong mobility and moderate damage. It specializes in slipping past defenses and attacking unattended food."
  ]
  },
    {
    title: "Skill / Behavior: Quick Raid",
    content: [
    "Fast movement.",
    "Efficient food targeting.",
    "Escapes quickly after attacking."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Use standard swatting techniques.",
    "Knockback is highly effective.",
    "Keep food areas monitored."
  ]
  }
  ]
  },
  "Invisible Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 3",
    "Speed: 142",
    "Bite Damage: 7.2×",
    "Visibility: 42% alpha",
    "The Invisible Fly uses camouflage instead of speed or strength. Its semi-transparent body makes it difficult to notice, especially during crowded battles."
  ]
  },
    {
    title: "Skill / Behavior: Stealth",
    content: [
    "Blends into backgrounds.",
    "Can attack while unnoticed.",
    "Requires careful observation."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Watch movement.",
    "Follow health bars.",
    "Click near hovering areas."
  ]
  }
  ]
  },
  "Blink Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 4",
    "Speed: 135",
    "Bite Damage: 7.5×",
    "The Blink Fly uses short-range teleportation to avoid attacks. It disappears and reappears while traveling, making prediction more important than reaction."
  ]
  },
    {
    title: "Skill / Behavior: Teleport",
    content: [
    "Teleports every 1.6–3.2 seconds when not eating.",
    "Stops blinking while feeding."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Attack when it lands.",
    "Watch food locations.",
    "Predict teleport destinations."
  ]
  }
  ]
  },
  "Mega Fly": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 12",
    "Speed: 62",
    "Bite Damage: 9.3×",
    "Hitbox: 78",
    "Eat Time: 3.9 seconds",
    "The Mega Fly is a gigantic mutated insect designed as a slow-moving powerhouse. It has one of the largest bodies in the game and requires many hits to defeat."
  ]
  },
    {
    title: "Skill / Behavior: Giant Body",
    content: [
    "Extremely large hitbox.",
    "Slow movement.",
    "Long feeding duration."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Easy to target.",
    "Requires sustained damage.",
    "Eliminate before faster enemies create distractions."
  ]
  }
  ]
  },
  "Fly Egg": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 1",
    "Damage: 0.5 DPS to food",
    "Hatch Time: 3–5 seconds",
    "Fly Eggs are the source of future infestations. While harmless compared to adult flies, they slowly damage food and eventually hatch into new enemies."
  ]
  },
    {
    title: "Skill / Behavior: Random Hatch",
    content: [
    "Can create Normal or Swarm Flies.",
    "Boss eggs have an 8% chance to hatch a Knight Guard."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "One click destroys instantly.",
    "Always clear eggs immediately."
  ]
  }
  ]
  },
  "Fly Boss": {
    sections: [
    {
    title: "Stats",
    content: [
    "Lives: 5",
    "HP per Life: 200",
    "Total HP: 1000",
    "Speed: 2000",
    "Hitbox: 96 radius",
    "Bite Damage: 12 every second",
    "The Fly Boss is the ultimate infestation threat and acts as a multi-phase battle. Instead of a single health bar, the boss has five lives and returns stronger after each defeat."
  ]
  },
    {
    title: "Poison",
    content: [
    "Applies poison to all food.",
    "Causes food freshness to decay faster.",
    "Forces players to finish phases quickly."
  ]
  },
    {
    title: "Shockwave",
    content: [
    "Removes 20% maximum food freshness.",
    "Reduces customer patience by 35%.",
    "Drains swatter energy to 50%.",
    "Teleports boss randomly."
  ]
  },
    {
    title: "Summon",
    content: [
    "Calls Knight Guards.",
    "Guards protect the boss by intercepting damage."
  ]
  },
    {
    title: "Revive",
    content: [
    "Activates after losing a life.",
    "Restores full HP.",
    "Continues until all five lives are defeated."
  ]
  },
    {
    title: "Stun Phase",
    content: [
    "Requires 15–25 hits.",
    "Stuns boss for 2 seconds.",
    "Boss becomes invulnerable.",
    "Knight Guards protect during stun."
  ]
  },
    {
    title: "How to Defeat",
    content: [
    "Focus damage during open phases.",
    "Destroy eggs immediately.",
    "Remove Knight Guards when necessary.",
    "Continue attacking through all five lives."
  ]
  }
  ]
  },
  "Knight Guard": {
    sections: [
    {
    title: "Stats",
    content: [
    "HP: 500",
    "Speed: 520 roaming / 900 protecting",
    "Hitbox: 40",
    "Knight Guards are elite defenders summoned by the Fly Boss. They orbit the boss and intercept attacks, preventing players from dealing full damage."
  ]
  },
    {
    title: "Skill / Behavior: Guardian Shield",
    content: [
    "Blocks 35% of boss damage.",
    "Rapidly moves into protection position.",
    "Prioritizes defending the boss."
  ]
  },
    {
    title: "How to Stop",
    content: [
    "Eliminate guards first for easier boss damage.",
    "Alternatively, continue attacking while accepting reduced damage.",
    "Prevent additional summons whenever possible."
  ]
  }
  ]
  },
};

const Flies:Fly[] = [
    {
        fly_name: "Swarm Fly",
        actions:[
            {
                action_name: "eating",
                location: small_fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: small_fly_flying,
                frame: 7
            }
        ],
        description: descriptions["Swarm Fly"]
    },
    {
        fly_name: "Normal Fly",
        actions:[
            {
                action_name: "eating",
                location: fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Normal Fly"]
    },
    {
        fly_name: "Tank fly",
        actions:[
            {
                action_name: "eating",
                location: chunky_fly_eating,
                frame: 5
            },
            {
                action_name: "flying",
                location: chunky_fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Tank Fly"]
    },
    {
        fly_name: "Mother fly",
        actions:[
            {
                action_name: "flying",
                location: mother_fly_flying,
                frame: 6
            },
            {
                action_name: "birth",
                location: mother_fly_birth,
                frame: 3
            },
        ],
        description: descriptions["Mother Fly"]
    },
    {
        fly_name: "Queen Fly",
        actions:[
            {
                action_name: "flying",
                location: mother_fly_flying,
                frame: 6
            },
            {
                action_name: "birth",
                location: mother_fly_birth,
                frame: 3
            },
        ],
        description: descriptions["Queen Fly"]
    },
    {
        fly_name: "Armored Fly",
        actions:[
            {
                action_name: "eating",
                location: fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Armored Fly"]
    },
    {
        fly_name: "Speed Fly",
        actions:[
            {
                action_name: "eating",
                location: fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Speed Fly"]
    },
    {
        fly_name: "Poison Fly",
        actions:[
            {
                action_name: "eating",
                location: fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Poison Fly"]
    },
    {
        fly_name: "Fire Fly",
        actions:[
            {
                action_name: "eating",
                location: fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Fire Fly"]
    },
    {
        fly_name: "Thief Fly",
        actions:[
            {
                action_name: "eating",
                location: fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Thief Fly"]
    },
    {
        fly_name: "Invisible Fly",
        actions:[
            {
                action_name: "eating",
                location: fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Invisible Fly"]
    },
    {
        fly_name: "Blink Fly",
        actions:[
            {
                action_name: "eating",
                location: fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Blink Fly"]
    },
    {
        fly_name: "Mega Fly",
        actions:[
            {
                action_name: "eating",
                location: fly_eating,
                frame: 4
            },
            {
                action_name: "flying",
                location: fly_flying,
                frame: 6
            }
        ],
        description: descriptions["Mega Fly"]
    },
    {
        fly_name: "Fly Egg",
        actions:[
            {
                action_name: "egg_idle",
                location: egg_idle,
                frame: 4
            },
            {
                action_name: "egg_hatch",
                location: egg_hatch,
                frame: 13
            }
        ],
        description: descriptions["Fly Egg"]
    },
    {
        fly_name: "Knight Guard Fly",
        actions:[
            {
                action_name: "flying",
                location: knight_fly,
                frame: 6
            },
            {
                action_name: "damage",
                location: knight_fly_damage,
                frame: 4
            }
        ],
        description: descriptions["Knight Guard"]
    },
    {
        fly_name: "boss_fly",
        actions:[
            {
                action_name: "eating",
                location: boss_eating,
                frame: 12
            },
            {
                action_name: "fly_poison",
                location: poison_boss_fly,
                frame: 9
            },
            {
                action_name: "flying",
                location: boss_flying,
                frame: 5
            },
            {
                action_name: "kill",
                location: boss_kill,
                frame: 11
            },
            {
                action_name: "revive",
                location: boss_revive,
                frame: 26
            },
            {
                action_name: "shockwave",
                location: shockwave_effect_fly,
                frame: 14
            },
            {
                action_name: "stun",
                location: boss_stun,
                frame: 6
            },
            {
                action_name: "summon",
                location: boss_summon,
                frame: 22
            }
        ],
        description: descriptions["Fly Boss"]
    }
    
];

export default Flies
