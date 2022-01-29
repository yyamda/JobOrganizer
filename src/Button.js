import './Buttons.css'; 

function Button(props) {
    return (
        <button class="button"> 
            {props.name}
        </button>
    )
}
export default Button; 