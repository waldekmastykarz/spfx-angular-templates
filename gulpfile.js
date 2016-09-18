'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const setBaseUrl = require('./setBaseUrlTask');
const copytemplates = require('./copyTemplatesTask');

build.addBuildTasks(setBaseUrl);
build.addBuildTasks(copytemplates);
build.initialize(gulp);