const { pushData } = require('apify');
const Apify = require('apify');

const { utils: { log } } = Apify;

exports.handleStart = async ({ request, page }) => {
    // Handle Start URLs

    await pushData([
        { ok: true },
    ]);
};

exports.handleList = async ({ request, page }) => {
    // Handle pagination
};

exports.handleDetail = async ({ request, page }) => {
    // Handle details
};
