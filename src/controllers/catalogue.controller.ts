import {RequestHandler} from 'express';

import {CatalogueModel} from '../models/catalogues/Catalogue.model';


const createCatalogue : RequestHandler = async(req, res) => {
    
    try {
        const post = await CatalogueModel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: post
        });
    } catch (err) {
        res.json(err);
    }
};

const getAllCatalogue : RequestHandler = async(req, res) => {
    try {
        const catalogues = await CatalogueModel.find({});
        res.status(200).json({
            status: 'success',
            data: catalogues
        })
    } catch (err) {
        res.status(201).json({err});
    }
};

const getCatalogue : RequestHandler = async(req, res) => {
    try {
        const catalogue = await CatalogueModel.findById(req.params.id);
        
        if(!catalogue) {
            res.status(404).json({err: 'Catalogue not found'});
        };

        res.status(200).json({
            status: 'success',
            data: catalogue
        });
    } catch (err) {
        res.status(201).json({err});
    }
};

const updateCatalogue : RequestHandler = async(req, res) => {
    try {
        const updateCatalogue = await CatalogueModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!updateCatalogue) {
            res.status(404).json({err: 'Catalogue not found'});
        };

        res.status(200).json({
            status: 'success',
            data: updateCatalogue
        });

    } catch (err) { 
        res.status(201).json({err});
    }
};

const deleteCatalogue : RequestHandler = async(req, res) => {
    try {
        const deleteCatalogue = await CatalogueModel.findByIdAndDelete(req.params.id);

        if(!deleteCatalogue) {
            res.status(404).json({err: 'User not found'});
        };

        res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(201).json({err});
    }
};

export {createCatalogue, getAllCatalogue, getCatalogue,updateCatalogue, deleteCatalogue};