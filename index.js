const data = require('./data.json');

function parseTwitterThread(apiResponse) {
    const entries = apiResponse.data.threaded_conversation_with_injections_v2.instructions[0].entries;

    const tweet = entries[0].content.itemContent.tweet_results.result.legacy.full_text;

    const thread = entries[1].content.items.map(item => {
        return item.item.itemContent.tweet_results.result.legacy.full_text;
    });

    const result = [tweet, ...thread];

    return result.join('\n\n');
}

// 使用例子
const result = parseTwitterThread(data);
console.log(result);
