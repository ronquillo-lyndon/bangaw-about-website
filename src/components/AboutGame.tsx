import { useState, type JSX } from 'react';
import explaining from '../assets/tutorial/nanay_Sita/explaining.png';
import '../Design/about-game.css';

const AboutGame = (): JSX.Element => {
    const [expanded, setExpanded] = useState<boolean>(false);
    return (
        <>
        <div className='Title-part'>GAME INTRODUCTION</div>
        <div className='about-game'>
            <div className={`about-content ${!expanded ? 'collapsed' : ''}`}>
                <h2>Welcome to Vanessa-on-the-loose</h2>
                <p>
                    Vanessa-on-the-loose is a fast-paced, pixel-style market management game where you run a food stall at the most chaotic markets across the Philippines. Armed with a fly swatter and a handful of upgradeable skills, you must protect your food from relentless swarms, serve hungry customers, and survive as many market days as possible without going broke.
                </p>
                <p>
                    Restock your goods, fend off fly invasions, serve customers, and manage your finances — all while racing against the clock. Every decision counts.
                </p>
                <h3>The Fly Problem Is Real</h3>
                <p>
                    At the heart of Vanessa-on-the-loose is its namesake enemy — the fly. These aren't harmless insects; they are a competitive, organized threat. As the days go by, fly populations grow, their behaviors diversify, and their numbers become overwhelming. You will face Normal flies, Tank flies that take multiple hits, Swarm flies that descend in groups, Mother flies that spawn offspring, Invisible and Blink flies at the Night Market, and Poison flies in the Rainy Market.
                </p>
                <p>
                    Each fly type demands a different strategy, and missing a swat could cost you dearly.
                </p>
                <h3>The Market is Your Battlefield</h3>
                <p>
                    Vanessa-on-the-loose takes you through a rotating lineup of iconic Filipino market environments, each with its own personality, challenges, and economic pressures:
                </p>
                <ul>
                    <li><strong>Filipino Vegetable Market</strong> — A familiar start, but don't underestimate the vegetable flies.</li>
                    <li><strong>Filipino Meat Market</strong> — Higher stakes, higher prices, and Tank flies join the fray.</li>
                    <li><strong>Filipino Fruit Market</strong> — Sweet deals meet Swarm and Mother flies in abundance.</li>
                    <li><strong>Night Market</strong> — Invisible and Blink flies stalk you in the dark. Customers still come — you just can't always see what's coming.</li>
                    <li><strong>Rainy Market</strong> — Poison flies, extreme spoil rates, and punishingly fast spawns test your limits like no other.</li>
                </ul>
                <p>
                    Each market event shifts food prices, spawn rates, customer behavior, and spoil modifiers, keeping every day fresh and unpredictable.
                </p>
                <h3>Manage or Collapse</h3>
                <p>
                    Running a stall isn't just about swatting flies. You're a business owner now. Track your money, reputation, and customer satisfaction. If satisfaction drops too low, word spreads, and your livelihood is at risk. Bankruptcy looms if your finances spiral out of control. Miss your debt limit three times, and it's game over.
                </p>
                <p>
                    Smart financial planning — reviewing your day-end report, studying your pre-day forecast, and preparing restock plans ahead of time — can help you survive the hardest markets.
                </p>
                <h3>Upgrade Your Arsenal</h3>
                <p>
                    Between market days, you can spend your hard-earned profit on permanent upgrades and powerful one-time skills.
                </p>
                <p>
                    <strong>Permanent Upgrades:</strong> Damage, Speed, and Energy — swat faster, reduce cooldowns, and increase your maximum energy.
                </p>
                <p>
                    <strong>Skills (One-Shot, Timed):</strong> Mega Swatter for +100% area and +50% damage, Instant Energy for unlimited swats, Fresh Goods for temporary invincibility, and Big Fan to blow all non-boss flies to one side.
                </p>
                <p>
                    Stack skills strategically during rush hours or before a boss fight to turn the tide.
                </p>
                <h3>The Boss Fight</h3>
                <p>
                    Every few market days, a warning sounds: "BOSS FLY INCOMING." A towering Boss Fly descends upon your stall, guarded by elite Knight Guard flies. Customers still visit during the fight, meaning you must multitask — defend your food, keep customers happy, and take down the boss before it's too late. Survive the boss round, and you unlock another cycle of escalating challenges.
                </p>
                <h3>The Loop That Keeps You Coming Back</h3>
                <p>
                    Vanessa-on-the-loose's core loop is deceptively simple: start the day, survive the rush, close up shop, and prepare for tomorrow. Each day is harder, faster, and more rewarding than the last. With escalating difficulty, randomized market events, rush hour chaos, and permanent progression, no two runs feel exactly the same.
                </p>
                <h3>Who Is This Game For?</h3>
                <p>
                    Vanessa-on-the-loose is for anyone who loves arcade action, management sims, pixel art aesthetics, replayability, and local Filipino flavor. How many days can you survive? Can you beat your high score?
                </p>
                <h3>Your Stall Awaits</h3>
                <p>
                    The market opens at dawn. The flies are already circling. Your customers are hungry, your wallet is light, and your fly swatter is in hand. The question is — how many days can you survive?
                </p>
                <p>
                    Vanessa-on-the-loose isn't just a game about killing flies. It's a game about resilience, strategy, and the hustle of small business — wrapped in the vibrant energy of a Filipino market that never sleeps.
                </p>
                <p>
                    Grab your swatter. Protect your stall. Make your profit.
                </p>
            </div>
            <button className='about-read-more' onClick={() => setExpanded((e) => !e)}>
                {expanded ? 'Show less ▴' : 'Tap to read more ▾'}
            </button>
            <div className='about-image'>
                <img src={explaining} alt="Nanay Sita explaining" />
            </div>
        </div>
        </>
    );
};

export default AboutGame;
