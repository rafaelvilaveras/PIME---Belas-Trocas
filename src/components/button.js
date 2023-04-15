import '../css/App.css';

const Button = ({content, value, type, cN}) => {
    return ( 
        <button name={'SBUTTON'} className={'cb '+cN} type={type} value={value} onSubmit={()=>{
            console.log('teste')
        }}>{content}</button>
     );
}
 
export default Button;