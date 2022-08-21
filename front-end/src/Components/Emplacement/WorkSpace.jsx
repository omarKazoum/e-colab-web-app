import Squad from "./Squad"
export default function WorkSpace({data}){

    let positions=[];
    for(let i=0;i<6;i++){
        positions.push({id:i,status:i%2})
    }
    let squads=[];
    for(let j=0;j<3;j++){
        squads.push(<Squad key={'squad_'+j} positions={positions} squadName={'squad_'+j}/>);
    }
    return(
        <section className="h-max bg-blue-quarter rounded-lg border-blue-principale border-2 w-4/6 m-auto my-14 justify-around flex flex-wrap ">
            {squads}
        </section>
    )
}