import React ,{useEffect,useState} from 'react';

import FilterModal from "./FilterModal"

import {useDispatch} from "react-redux";
import {getAllProperties} from "../../Store/Property/property-action";
import {propertyAction} from "../../Store/Property/property-slice";
const Filter = () => {
    //State for storing selected filters
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [selectedFilters,setSelectedFilters]=useState({});
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(propertyAction.updateSearchParams(selectedFilters));
        dispatch(getAllProperties());
    },[selectedFilters,dispatch]);

    //Function to handle opening the popupwindow
    const handleOpenModal = () =>{
        setIsModalOpen(true);
    };
    //function to handle closing the modal
    const handleCloseModal = () =>{
        setIsModalOpen(false);
    }

    //function to handle changes in filter
    const handleFilterChange=(filterName,value)=>{
        //update the selected filters with the new values
        setSelectedFilters
    ((prevFilters)=>
        (
            {
            ...prevFilters,
            [filterName]:value,
            }
        )
    );
    };
  return (
    <>

    <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
        tune
    </span>
{isModalOpen && 
    (<FilterModal
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClose={handleCloseModal}
    />
    )
}
    
    </>

   
  )
}

export default Filter