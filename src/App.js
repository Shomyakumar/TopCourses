import Cards from './components/Cards.js';
import Filter from './components/Filter.js';
import Navbar from './components/Navbar.js'
import Spinner from './components/Spinner.js'
import { filterData,apiUrl } from './data.js';
import { useEffect,useState } from 'react';
import {toast} from 'react-toastify'

export default function App(){


    const[loading,setLoading]=useState(true);
    const[courses,setCourses]=useState([]);
    const[category,setCategory]=useState(filterData[0].title);

    async function fetchData(){
        try{
            let response= await fetch(apiUrl);
            let result=await response.json();
            setCourses(result.data);
        }
        catch(err){
            toast.error("Network error");
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[]);
    
    return(
        <div className='min-h-[100vh] flex flex-col  items-center bg-teal-600 pb-8'>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Filter  filterData={filterData} category={category} setCategory={setCategory}></Filter>
            </div>
            <div>
            {
                loading?(<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
            }
            </div>
        </div>
    );
}