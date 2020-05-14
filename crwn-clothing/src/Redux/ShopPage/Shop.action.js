import { updateCollectionFromDB } from './Shop.types'

export const updateCollections = (datafromDB) => {

    return {
        type: updateCollectionFromDB.UPDATAE_COLLECTON_FROM_DB,
        payload: datafromDB
    }
}