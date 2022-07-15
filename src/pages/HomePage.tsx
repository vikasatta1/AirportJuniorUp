import React, {ChangeEvent, useEffect, useState} from 'react';
import './../index.css'
import {useLazyGetUserReposQuery, useSearchUsersQuery} from "../store/github/github.api";
import {useDebounce} from "../hooks/debounce";

const HomePage = () => {

    const [search, setSearch] = useState('')
    const [dropdown, setDropdwon] = useState(false)
    const debounce = useDebounce(search, 300)
    const {isLoading, isError, data} = useSearchUsersQuery(debounce, {
        skip: debounce.length < 3,
        refetchOnFocus:true
    })
   const [fetchRepos, {isLoading: areReposLoading, data:repos}] = useLazyGetUserReposQuery()
    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setDropdwon(debounce.length >= 3 && data?.length! >=0)
    }, [debounce,data])
    const clickHandler = (username:string) => {
        fetchRepos(username)
        console.log(data)
    }
    return (
        <div className={'flex justify-center pt-10 mx-auto h-screen w-screen'}>
            {isError && <p className={'text-center text-red-600'}>{isError} Something went wrong...</p>}

            <div className={'relative w-[560px]'}>
                <input
                    type={'text'}
                    className={'border py-2 px-4 w-full h-[42px] mb-2'}
                    placeholder={'Search for Github username...'}
                    value={search}
                    onChange={inputChange}
                />
                {dropdown &&
                <ul className={'absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll'}>
                    {isLoading && <p className={'text-center'}>Loading...</p>}
                    {data?.map(el => {return <li
                            className={'py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'}
                            onClick={()=>clickHandler(el.login)}
                            key={el.id}>{el.login}</li>
                    })}
                </ul>}
                <div>
                    {areReposLoading && <p className={'text-center'}>Repos are loading...</p>}

                    {repos?.map(
                        //@ts-ignore
                        repo=><p>{repo.url}</p>)}
                </div>

            </div>

        </div>
    );
};

export default HomePage;