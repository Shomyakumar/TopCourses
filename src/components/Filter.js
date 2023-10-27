
export default function Filter(props){
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }
    return(
        <div className="flex flex-wrap flex-row justify-center">
            {
                filterData.map((data)=><button onClick={()=>{filterHandler(data.title)}}
                className={`bg-orange-500 mx-4 mb-6 rounded-md px-4 py-2 text-white  hover:bg-orange-600 font-medium 
                transition-all duration-200 ${category===data.title ?"border-2 border-width-[4px] bg-orange-600":"border-transparent" } `}
                key={data.id}>{data.title}</button>)
            }
        </div>
    );
}