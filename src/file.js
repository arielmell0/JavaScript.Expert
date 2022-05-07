const { readFile } = require('fs/promises')
const { join } = require('path')

class File {
    static async csvToJson(filePath) {
        const content = await File.getFileContent(filePath)
        return content
    }

    static async getFileContent(filePath) {
        const filename = join(__dirname, filePath)
        return (await readFile(filename)).toString("utf8")
    }
}

(async () => {
    const result = await File.csvToJson('../mocks/threeItems-valid.csv')
    console.log('result', result)
})()