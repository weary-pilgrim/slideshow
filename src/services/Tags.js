import { DataStore } from '@aws-amplify/datastore';
import { Tag } from './models';

async function createTag(name, ...photos) {
    const tag = new Tag({
        name,
        photos
    })
    await DataStore.save(tag)
    return tag;
}

async function getTags() {
    return await DataStore.query(Tag);
}

async function getTag(name) {
    const tags = await getTags();
    return tags.find(_ => _.name === name);
}

async function updateTag(original, name, ...photos) {
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
    await DataStore.save(Tags.copyOf(original, (item) => {
        // Update the values on {item} variable to update DataStore entry   
        Object.assign(item, {
            name,
            photos
        })
    }));
}

async function deleteTag(tag) {
    DataStore.delete(tag);
}