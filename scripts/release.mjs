#!/usr/bin/env zx
import {readFile} from 'fs/promises';
import {resolve} from 'path';
let content = await readFile(resolve(__dirname, '../package.json'), 'utf-8');

const {version} = JSON.parse(content);

await $`git add package.json CHANGELOG.md`;
await $`git commit -m "chore(release): ${version}"`;
await $`git tag ${version}`;
