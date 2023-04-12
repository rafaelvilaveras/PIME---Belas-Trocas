import '../css/App.css';

const Button = ({content, disabled}) => {
    return ( 
        <button disabled = {disabled} className='cb' type='submit'>{content}</button>
     );
}
 
export default Button;