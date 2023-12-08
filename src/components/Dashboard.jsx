import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Spinner } from "@material-tailwind/react";

const Dashboard = () => {

    const [apiData, setApiData] = useState([]);
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [serchBox, setSearchBox] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getApiData = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(url);
                // console.log(res.data);
                setApiData(res.data);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        }            
        getApiData();
    }, [url]);

    const searchFilterFunc = apiData?.filter(curElem => curElem.name.toLowerCase().includes(serchBox.toLowerCase()));

  return (
    <>

        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-smd rounded-xl bg-clip-border">
            
            {/* main heading */}
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
                {/* heading  */}
                <div>
                    <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">User Details</h5>
                    <p className="block mt-1 text-base antialiased font-normal leading-relaxed text-gray-700">See information about all members</p>
                </div>
                {/* search input box  */}
                <div className="flex w-full gap-2 shrink-0 md:w-max">
                    <div className="w-full md:w-72">
                        <div className="relative h-10 w-full min-w-[200px]">
                            <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                </svg>
                            </div>
                            <input type="text" onChange={(e) => setSearchBox(e.target.value)} className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="" />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Search</label>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            

            {/* table */}
            <div className="p-6 px-0 overflow-x-auto">
                <table className="w-full text-left table-auto min-w-max">
                {/* table heading  */}
                <thead>
                    <tr>
                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                            <p className="block text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Member
                            </p>
                        </th>
                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                            <p className="block text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Mail
                            </p>
                        </th>
                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                            <p className="block text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Website
                            </p>
                        </th>
                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                            <p className="block text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Status
                            </p>
                        </th>
                        <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                            <p className="block text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            City
                            </p>
                        </th>
                    </tr>
                </thead>
                {/* table body  */}
                
                {
                    isError ?
                    <tbody>
                        <tr>
                            <td colSpan="500"><h1 className="py-6 px-5 text-3xl">{isError.length>0 ? isError : "Something went wrong while fetching data."}</h1></td>
                        </tr> 
                    </tbody>
                    :
                    isLoading ?
                    <tbody>
                        <tr>
                            <td colSpan="500"><h1 className="py-6 px-5 flex flex-col justify-center items-center"><Spinner className="h-16 w-16 text-gray-900/50" /><span className="pt-4">LOADING</span></h1></td>
                        </tr> 
                    </tbody>
                    :
                    <tbody>

                        {
                            searchFilterFunc.length === 0 ? 
                            <tr>
                                <td colSpan="500"><h1 className="py-6 px-5 text-3xl">No Records Found.</h1></td>
                            </tr> 
                            :
                            searchFilterFunc.slice(page*3-3, page*3).map((curElem, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                            <img src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg" alt="Spotify"
                                                className="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1" />
                                            <p className="block text-sm antialiased font-bold leading-normal text-blue-gray-900">
                                                {curElem?.name}
                                            </p>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p className="block text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {curElem?.email}
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p className="block text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {curElem?.website}
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="w-max">
                                            <div
                                                className="relative grid items-center px-2 py-1 text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                                                <span className="">Online</span>
                                            </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                            <div className="flex flex-col">
                                                <p
                                                className="block text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                                                {curElem?.address?.city}
                                                </p>
                                                <p
                                                className="block text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                                {curElem?.address?.zipcode}
                                                </p>
                                            </div>
                                            </div>
                                        </td>
                                    </tr> 
                                )
                            })
                        }

                    </tbody>
                }
                </table>
            </div>

            {/* pagination */}
            {
                isLoading || isError ? 
                ""
                :
                <div className="flex items-center justify-between p-4 border-t border-blue-gray-50 overflow-x-auto">
                    <button onClick={() => page>1 && page<=Math.ceil(searchFilterFunc.length/3) ? setPage(page-1) : setPage(1) } className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Previous</button>
                    <div className="flex items-center gap-2">
                    {
                        [...Array(Math.ceil(searchFilterFunc.length / 3))].map((_,i) => {
                            return (
                                <button key={i} style={{ background: page === i+1 ? "grey":"lightgrey" }} onClick={() => setPage(i+1)} className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"><span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    {i+1}       
                                </span></button>
                            )
                        })
                    }
                    {/* <button className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"><span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        ...</span></button> */}
                    </div>
                    <button onClick={() => page>=1 && page<Math.ceil(searchFilterFunc.length/3) ? setPage(page+1) : setPage(Math.ceil(searchFilterFunc.length/3)) } className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Next</button>
                </div>
            }
        </div>
    </>
  )
}

export default Dashboard
