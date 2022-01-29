import './nav.css';
import questlogo from './questlogo.png';
import settinglogo from './questsetting.png'; 
import Button from './Button.js'

function Nav() {
    return (
        <div class="navbar">
            <div>
                <img src={questlogo} class="quest_logo" alt="logo"></img>
            </div>
            <div class="buttons">
                <Button name="Board"/>
                <Button name="Calendar"/>
                <Button name="Files"/>
                <Button name="Application"/>

            </div> 
            <div class="board">
                <div class="board_util">
                    <div class="searchbar">
                       <input type="text" size="15" placeholder="Search Board"/>
                    </div>
                    <div class="board_title">
                        Cameron
                    </div>
                    <div>
                    <img src={settinglogo} class="setting_logo" alt="settings"></img>
                    </div> 
                </div>
            </div> 

        </div>
    )
}

export default Nav