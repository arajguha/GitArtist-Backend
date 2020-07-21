"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const simple_git_1 = __importDefault(require("simple-git"));
const fs_1 = __importDefault(require("fs"));
const app = express_1.default();
console.log('test server started...');
const path = 'C:\\Users\\Debanik\\Desktop\\gitDownload\\test';
if (!fs_1.default.existsSync(path)) {
    console.log('directory does not exist');
    console.log('exiting process');
    process.exit();
}
const git = simple_git_1.default(path);
app.get('/gitArtist/init/', (req, res) => {
    res.send('init endpoint hit');
    //console.log('[*] path specified: ', req.params.dirPath)
    git.init()
        .then(initResult => console.log(initResult))
        .catch(err => console.log(err));
});
app.listen(3001, () => console.log('server running on port 3001'));
