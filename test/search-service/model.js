import MockStore from './mock-store'
import Model from '../../src/search-service/model'
import fs from 'fs'

import chai from 'chai'
const expect = chai.expect

const store = MockStore()
const model = Model(store)

describe("language model", () => {
    it ("should get language data from github api", async() => {
        const req = {
            query: {
                keyword: 'node'
            },
            url: '/search/repo/language?keyword=node'
        }

        const expected = fs.readFileSync('data/language-test-data.json')

        const actual = await model.language(req.query, req.url)

        expect(actual).to.be.deep.equal(expected)
    })

    it ("should get topic data from github api", async() => {
        const req = {
            query: {
                keyword: 'node'
            },
            url: '/search/repo/topic?keyword=node'
        }

        const expected = fs.readFileSync('data/topic-test-data.json')

        const actual = await model.topic(req.query, req.url)

        expect(actual).to.be.deep.equal(expected)
    })

    it ("should get report for admin from file", async() => {
        const expected = fs.readFileSync('data/report-test-data.json')

        const actual = await model.adminReport()

        expect(actual).to.be.deep.equal(expected)
    })
})