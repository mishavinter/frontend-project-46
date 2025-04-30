install:
	npm ci
gendiff:
	node bin/gendiff.js
lint:
	npx eslint .
test:
	node __tests__/src/index.test.js