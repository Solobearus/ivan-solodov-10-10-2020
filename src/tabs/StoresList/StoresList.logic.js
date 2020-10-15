export const parseData = (dataFromSlice) => {
    const storesData = {}
    Object.keys(dataFromSlice).forEach(key => {

        if (!storesData[dataFromSlice[key].store]) {
            storesData[dataFromSlice[key].store] = 1;
        } else {
            storesData[dataFromSlice[key].store] += 1;
        }
    })

    console.log(`storesData`,storesData)
    return storesData;
}