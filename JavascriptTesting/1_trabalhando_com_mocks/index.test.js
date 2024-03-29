const { deepStrictEqual } = require('assert')
const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')

(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = file.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = file.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await file.csvToJson(filePath)
        await rejects(result, rejection)
        const expected = [
            {
              "name": "Erick Wendel",
              "id": 123,
              "profession": "Javascript Instructor",
              "birthDay": 1995
            },
            {
              "name": "Xuxa da Silva",
              "id": 321,
              "profession": "Javascript Specialist",
              "birthDay": 1940
            },
            {
              "name": "Joaozinho",
              "id": 231,
              "profession": "Java Developer",
              "age": 1990
            }
          ]

        deepStrictEqual(result, expected)
    }
})()