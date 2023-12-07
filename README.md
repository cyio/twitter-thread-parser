# Twitter Thread Parser

## Overview

`twitter-thread-parser` is a tool crafted to parse Twitter thread API responses and print the parsed data. This utility is built using JavaScript and comes with clear instructions for two distinct usage methods.

## Usage Methods

### Method 1: Browser Console Execution

1. Copy the function named `parseTwitterThread` provided in `index.js`

2. Open your browser's console and execute the copied function, providing the Twitter thread API response as an argument.

### Method 2: Local Script Execution with Node.js

> Make sure Node.js is installed on your system.


1. Copy the API response content of the desired Twitter thread and save it as `data.json`.

```
https://twitter.com/i/api/graphql/xxxxx/TweetDetail
```

2. Execute the parsing script using the following command in your terminal:

```sh
node index.js
```

3. Optionally, if you are using a Mac and want to copy the parsed result to the clipboard, use the following command:

```sh
node index.js | pbcopy
```
