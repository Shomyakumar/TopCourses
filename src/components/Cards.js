
import { useState } from "react";
import Card from "./Card";
export default function Cards(props){

    let cardsData=props.courses;
    let category=props.category;

    function getCourses(){
        if(category==="All")
        {
            let allData=[];
            Object.values(cardsData).forEach(array=>{
                array.forEach(data=>{
                    allData.push(data);
                })
            });
            return allData;
        }
        else{
            return cardsData[category];
        }
    }
    const[likedCourses,setLikedCourses]=useState([]);
    return(
        <div className="flex flex-wrap justify-center gap-6 max-w-[90%] mx-auto pb-12">
        {
            getCourses().map((course)=><Card key={course.id} data={course} 
            likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>)
        }
        </div>
    );
}