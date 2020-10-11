"use strict";
console.clear();


/* 使用するためのおまじない */
// properties-readerをimport
const propertiesReader = require('properties-reader');

// iniファイルをimport
const properties = propertiesReader('./test.ini');


/* 指定のパラメータのみ取得 */
// iniファイルから任意のパラメータを取得
const hf = properties.get('hoge.fuga'); // == hogehuga
const fy = properties.get('foo.yeah');  // == fooyeah
const hfPath = properties.path().hoge.fuga; // == hogehuga

// consoleに表示
console.log(hf);
console.log(fy);
console.log(hfPath);
console.log("");

/* 全パラメータ取得 */
// iniファイルから全パラメータを取得
properties.each((key, value) => {
    console.log(`${key}: ${value}`);
});
console.log("");


/* 複数のiniファイルをまとめて取得 */
// 既に取得したiniに他のiniを追加
properties.append("./test2.ini");

// iniファイルから全パラメータを取得
properties.each((key, value) => {
    console.log(`${key}: ${value}`);
});
console.log("");


/* 文字列から取得 */
// 文字列を読み込み
properties.read('ai.kaki = aikaki \n ue.kuke = uekuke');
properties.set('o.ko', 'oko');  // 読み込みたいパラメータが1つの場合はsetでもOK

// iniファイルから全パラメータを取得
properties.each((key, value) => {
    console.log(`${key}: ${value}`);
});
console.log("");


/* 要素数取得 */
const propertiesCount = properties.length;
console.log(propertiesCount);
console.log("");


/* パラメータの保存 */
const props = propertiesReader('./test.ini');
console.log(props.get('hoge.fuga'));
props.set('hoge.fuga', 'hogehogefugafuga');

props.save('./test.ini')
    .then(data => {
        // save成功時処理
    }, err => {
        // save失敗時処理
        console.log(err);
    });

console.log(props.get('hoge.fuga'));
console.log("");

/* 注意点 */
// パラメータの上書き
properties.each((key, value) => {
    console.log(`${key}: ${value}`);
});
console.log("");
properties.append("./test3.ini");
properties.each((key, value) => {
    console.log(`${key}: ${value}`);
});
console.log("");