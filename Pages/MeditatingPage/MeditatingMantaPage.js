import React from "react";
import { Provider } from "react-redux";
import FavoriteButton from "../../Components/Meditating/FavoriteButton";
import MeditationInstructions from "../../Components/Meditating/Instructions";
import TimerButtons from "../../Components/Meditating/Timer/TimerButtons";
import TimerClass from "../../Components/Meditating/Timer/TimerClass";
import TimerDisplay from "../../Components/Meditating/Timer/TimerDisplay";


const MeditatingMantraPage = (props) => {
    

    return(
        <div>
            <div className="container text-center">
                <h1>{/*props.name*/}</h1> { /* <FavoriteButton /> */}
                {/* <TimerDisplay />
                <TimerButtons /> */}
                
                <TimerClass minutes="17" /> {/*minutes=props.minutes*/}
                {/*meditation={props.meditation_id}*/}
                {
                // Dynamic Instructions
                    // Every minute give a new set of instructions.
                    // 5 minutes - 5 instructions.
                    
                }
                {/* { props.instructions.map((instruction) => ) } */}
                <div>Take 3 relaxed deep breaths....</div>
                <div>Close your eyes....</div>
                <div>See yourself on the beach or somewhere in nature with waterfalls in the forest.</div>
                <div>Softly repeat this manta: "I Am whole, calm, healthy, strong, caring, respectful, powerful and loving.</div>

                {/* Diary Notes textarea to display after the meditation timer completes.*/}

                {/* 
                <MeditationInstructions />
                <MeditationDiaryNotes /> */}
            </div>
        </div>
    )

}

export default MeditatingMantraPage;