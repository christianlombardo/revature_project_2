import React, {useState}  from "react";
import { Provider } from "react-redux";
import FavoriteButton from "../../Components/Meditating/FavoriteButton";
import MeditationInstructions from "../../Components/Meditating/Instructions";
import TimerButtons from "../../Components/Meditating/Timer/TimerButtons";
import TimerClass from "../../Components/Meditating/Timer/TimerClass";
import TimerDisplay from "../../Components/Meditating/Timer/TimerDisplay";
import './style.css';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import axios from 'axios';
import NavbarLogged from "../../Components/NavbarLogged";
import { useSelector } from 'react-redux';
import MeditationListPage from "../MeditationListPage";



const MeditatingMantraPage = (props) => {

    const clearState = () => {
        submittingMantra.sending = false;
      };


    const [submittingMantra, setSubmitting] = useState({
        sending: false,
    });


    const user = useSelector(state => state.user);

    console.log("MeditatingBreathePage ==================")
    console.log(user);


    const [journal, setJournal] = useState({
        userid: user.id,
        journalnotes : ''
    });


    function onChangeHandler(event){
        //console.log(event.target.name)
        setJournal({...journal,
            [event.target.name]: event.target.value
        });
        console.log("onChangeHandler ========================");
        console.log(journal)
    }    


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(journal);
        axios.post("http://localhost:9001/users/journal", journal)
        .then((response) => {
            console.log(response);
         
        });
        submittingMantra.sending = true;
    };

    if(submittingMantra.sending == false){
       
    return(
        <div className = "wrapperpages">
             <NavbarLogged />
            <div className="container text-center">
                <h1>{/*props.name*/}</h1> { /* <FavoriteButton /> */}
                {/* <TimerDisplay />
                <TimerButtons /> */}
                
                <TimerClass minutes="15" /> {/*minutes=props.minutes*/}
                {/*meditation={props.meditation_id}*/}
                {
                // Dynamic Instructions
                    // Every minute give a new set of instructions.
                    // 5 minutes - 5 instructions.
                    
                }
                {/* { props.instructions.map((instruction) => ) } */}

                <h1>Instructions for Mantra Style:</h1>
                <ul class="list-group">
                <li class="list-group-item">1. Take 3 relaxed deep breaths....</li>
                <li class="list-group-item">2. Close your eyes....</li>
                <li class="list-group-item">3. See yourself on the beach or somewhere in nature with waterfalls in the forest.</li>
                <li class="list-group-item">4. Softly repeat this manta: "I Am whole, calm, healthy, strong, caring, respectful, powerful and loving" (This chant can be preformed in your mind and does not have to be these words, but what works for you!).</li>
                <li class="list-group-item">5. Repeat till your mind is clear</li>
                </ul>
                <form onSubmit = {submitHandler}>
                <br></br>
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Please write your experience and feelings about today's session</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-outline-primary btn-lg px-10" type="submit" value = "submit">Submit</button>
                </form>
                <br></br>
                <Link to= '/MeditationList' className = "lastLink" >Go to List of Meditations</Link>

  
                {/* Diary Notes textarea to display after the meditation timer completes.*/}

                {/* 
                <MeditationInstructions />
                <MeditationDiaryNotes /> */}
            </div>
        </div>
    )
            }
else{
    return(
        <MeditationListPage />
    )
}
}

export default MeditatingMantraPage;