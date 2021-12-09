import React from "react";
import { Provider } from "react-redux";
import FavoriteButton from "../../Components/Meditating/FavoriteButton";
import TimerButtons from "../../Components/Meditating/Timer/TimerButtons";
import TimerDisplay from "../../Components/Meditating/Timer/TimerDisplay";
import TimerClass from "../../Components/Meditating/Timer/TimerClass"

const MeditatingPage = (props) => {
    
    return(
        <div>
            <div className="container text-center">
                <h1>{/*props.name*/}</h1> { /* <FavoriteButton /> */}
                {/* <TimerDisplay />
                <TimerButtons /> */}
                {/* <TimerClass /> */}

                <TimerDisplay />

                {
                // Begin Meditation Button
                // Dynamic Instructions
                    // Every minute give a new set of instructions.
                    // 5 minutes - 5 instructions.
                
                // Diary Notes textarea to display after the mediataion timer completes.}

                /* 
                <BeginMeditationButton />
                <MeditationInstructions />
                <MeditationDiaryNotes /> */}
            </div>

        </div>
    )

}

export default MeditatingPage