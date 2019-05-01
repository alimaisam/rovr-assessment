import fs from 'fs'

export function readSearchData() {
    const rawdata = fs.readFileSync('data/search.json')
    const searches = JSON.parse(rawdata)
    return searches
}

export function saveSearchData(data) {
    const strData = JSON.stringify(data)
    fs.writeFileSync('data/search.json', strData)
}