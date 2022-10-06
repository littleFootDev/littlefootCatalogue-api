import mongoose from "mongoose";

import {ICatalogue} from "../../interfaces/catalogue.interface";
import {catalogueSchema} from './Catalogue.schema';

const catalogueModel : mongoose.Model<ICatalogue> = mongoose.model('Catalogue', catalogueSchema);

export {catalogueModel as CatalogueModel}