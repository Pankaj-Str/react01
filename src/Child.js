import './App.css'
const  Child = (props) =>{

    return(
        <div className={'box'}>
            {props.data}
            <span className={'price_box'}> {props.price} </span>

        </div>
    );

}
export default Child;