"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var fs_1 = __importDefault(require("fs"));
var PORT = process.env.PORT || 4000;
var app = express_1.default();
app.use(cors_1.default());
var fortunes = fs_1.default
    .readFileSync(__dirname + "/fortunes.txt", 'utf-8')
    .split('\n');
var getFortune = function () {
    var rand = Math.round(Math.random() * fortunes.length - 1);
    return fortunes[rand];
};
app.post('/api/v1/fortune', function (req, res) {
    res.status(200).json({ response_type: 'ephemeral', text: getFortune() });
});
app.listen(PORT, function () {
    console.log('Listening on port', PORT);
});
