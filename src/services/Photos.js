import { DataStore } from '@aws-amplify/datastore';
import { Photo } from './models';

async function createPhoto(name) {
    const photo = new Photo({
        location,
        tags: []
    });
    await DataStore.save(photo);
    return photo
}

async function getPhotos() {
    return await DataStore.query(Photo);
}

async function getPhoto(location) {
    const tags = await getPhotos();
    return tags.find(_ => _.location === location);
}

async function updatePhoto(original, location, ...tags) {
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
    await DataStore.save(Photos.copyOf(original, (item) => {
        // Update the values on {item} variable to update DataStore entry   
        Object.assign(item, {
            location,
            tags
        })
    }));
}

async function deletePhoto(photo) {
    DataStore.delete(photo);
}