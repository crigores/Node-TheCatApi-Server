import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { Cat } from '../models/Cats';

// const categories = [
//     {"id":5,"name":"boxes"},
//     {"id":15,"name":"clothes"},
//     {"id":1,"name":"hats"},
//     {"id":14,"name":"sinks"},
//     {"id":2,"name":"space"},
//     {"id":4,"name":"sunglasses"},
//     {"id":7,"name":"ties"}
//     ]



// Get Default Cats
export const getCats = async (req: Request, res: Response) => {
    let result: AxiosResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&page=1&order=Desc`);
    let cats: [Cat] = result.data;
    return res.status(200).json({
        cats
    });

    res.json("getting cats");
}

// Get Cat by Breeds
export const getCatsByBreed = async (req: Request, res: Response) => {
    let breed: string = req.params.id;
    // let result: AxiosResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${category}&limit=4`);
    let result: AxiosResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=8`);
    let cats: [Cat] = result.data;
    return res.status(200).json({
        cats
    });

    res.json("getting cats");
}

// Get Cat by Category 
export const getCatsByCategory = async (req: Request, res: Response) => {
    let category: string = req.params.id;
    let result: AxiosResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${category}&limit=8`);
    let cats: [Cat] = result.data;
    return res.status(200).json({
        cats
    });

    res.json("getting cats");
}


export const getCat = (req: Request, res: Response) => {
    res.json("getting cat");
}

export const createCat = (req: Request, res: Response) => {
    const cat: Cat = req.body; 
    console.log(req.body);
    res.json("cat saved... I guess");
}

export const updateCat = (req: Request, res: Response) => {
    res.json("updating cat");
}

export const deleteCat = (req: Request, res: Response) => {
    res.json("deleting cats");
}