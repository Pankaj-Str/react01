import * as events from "events";

function PassingEventArguments(){

   let data1;

    function getdata(){

        //let data = document.getElementById("demo").value;
        let data = prompt("enter Name")
        return data;
    }
    const ClickHandler = (events,msg) =>{
        data1 = getdata();
        document.getElementById("sd").innerHTML = data1;
    }

    return (
        <div>


            <button onClick={(event) =>
                ClickHandler (events, data1)}>
                Say Hello
            </button>
            <h1 id="sd"></h1>
        </div>
    );
}

export default PassingEventArguments;