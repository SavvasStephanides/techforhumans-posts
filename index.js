"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var PostService_1 = require("./modules/posts/PostService");
var CollectionService_1 = require("./modules/collection/CollectionService");
var postService = new PostService_1.PostService();
var collectionService = new CollectionService_1.CollectionService();
function build() {
    buildAllPosts();
    buildCollections();
}
function buildAllPosts() {
    var posts = postService.getAllPosts();
    (0, fs_1.mkdirSync)("build");
    (0, fs_1.mkdirSync)("build/posts");
    (0, fs_1.writeFileSync)("build/posts/all.json", JSON.stringify(posts));
}
function buildCollections() {
    (0, fs_1.mkdirSync)("build/collections");
    var collectionFileNames = (0, fs_1.readdirSync)("collections");
    var collections = collectionFileNames.map(function (fileName) {
        return collectionService.getCollectionFromFilename(fileName);
    });
    collections.forEach(function (collection) {
        (0, fs_1.writeFileSync)("./build/collections/".concat(collection.slug, ".json"), JSON.stringify(collection));
    });
}
build();
