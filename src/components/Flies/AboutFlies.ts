
import boss_eating from '../../assets/Flies/boss/boss_eating.png'
import boss_fly_poison from '../../assets/Flies/boss/boss_fly_poison.png'
import boss_flying from '../../assets/Flies/boss/boss_flying.png'
import boss_kill from '../../assets/Flies/boss/boss_kill.png'
import boss_revive from '../../assets/Flies/boss/boss_revive.png'
import boss_shockwave from '../../assets/Flies/boss/boss_shockwave.png'
import boss_stun from '../../assets/Flies/boss/boss_stun.png'
import boss_summon from '../../assets/Flies/boss/boss_summon.png'
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
export type action = {
    action_name:string
    location:string, 
    frame:number
}
export type Fly = {
    fly_name:string;
    actions:action[]
    description:string
    };

const Flies:Fly[] = [
    {
        fly_name: "small_fly",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        fly_name: "default_fly",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        fly_name: "chunky_fly",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        fly_name: "mother_fly",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        fly_name: "egg_fly",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        fly_name: "knight_fly",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                location: boss_fly_poison,
                frame: 18
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
                location: boss_shockwave,
                frame: 22
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    
];

export default Flies

