export {
    toBase64Multiple
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
export default toBase64;

const toBase64Multiple = async (images) => {
    let photosConverted = [];

    for (let i = 0; i < images.length; i++) {
        await toBase64(images[i]).then(data => {
            photosConverted.push(data)
        })
    }
    return photosConverted;
}
