'use client'

import MovieI from "@/interfaces";
import { createContext, useContext, useState } from "react";

interface MovieContextInterface {
    moviePopupData: MovieI;
    setMoviePopupData(val: MovieI): void;
}

interface ContextProviderInterface {
    children: JSX.Element | JSX.Element[];
}

export const MovieContext = createContext<MovieContextInterface>({} as MovieContextInterface);

export const MovieContextProvider = ({children}: ContextProviderInterface) => {
    const [moviePopupData, setMoviePopupData] = useState<MovieI>({} as MovieI);

    const value = {
        moviePopupData,
        setMoviePopupData
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
};

export const useMovieContext = () => useContext(MovieContext);
