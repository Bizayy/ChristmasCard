'use client'
import { TextSection } from "./components/textSection";
import { Moon } from "./components/moon";
import SantaOnSleigh from "./components/santaOnSleigh";
import Village from "./components/village";
import SnowyGround from "./components/snowyGround";
import LeftPineTrees from "./components/leftPineTrees";
import RightPineTrees from "./components/rightPineTrees";
import LeftMountain from "./components/leftMountain";
import RightMountain from "./components/rightMountain";
import FrontMountain from "./components/frontMountain";
import NormalSnowfall from "./components/normalSnowfall";
import SnowflakesFall from "./components/snowflakesFall";
export default function Home() {
    return (
        <div className="w-screen min-h-screen relative overflow-hidden bg-gradient-to-b from-violet-900 to-purple-600">

            <TextSection />
            <Moon />
            <SantaOnSleigh />
            <Village />
            <SnowyGround />
            <LeftPineTrees />
            <RightPineTrees />
            <LeftMountain />
            <RightMountain />
            <FrontMountain />
            <NormalSnowfall />
            <SnowflakesFall />

        </div>
    );
}
