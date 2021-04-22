export default function(pictureList = [], action) {
    if(action.type == 'addPicture') {
        return [...pictureList, action.pictureData];
    } else {
        return pictureList;
    }
}