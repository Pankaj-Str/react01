import Child from "./Child";

const Parent = () =>{

    let data = ['JAVA','C++','C','Python','React']
    let price = [2000,3456,1200,5600,6780]

    return(
        <div>
            <Child data={data[0]} price = {price[0]} ></Child>
            <Child data={data[1]} price = {price[1]} ></Child>
            <Child data={data[2]} price = {price[2]} ></Child>
            <Child data={data[3]} price = {price[3]} ></Child>
            <Child data={data[4]} price = {price[4]} ></Child>

        </div>
    );
}
export default Parent;