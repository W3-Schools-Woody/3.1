// section.js
import style from "./App.css"
import header from './header';

function section({name, content}) {
    return(
        <div>
            <h2>{name}</h2>
            <hr />
            <p>{content}</p>
        </div>
    );
}
export default section;