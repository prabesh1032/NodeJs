// ============================================================
//  COMMONJS MODULE — math.js
//  Day 7 — Node.js — MERN Stack Learning
// ============================================================

const add = (a, b) => {
    return a + b;
};

const subb = (a, b) => {
    return a - b;
};

const multi = (a, b) => {
    return a * b;
};

// ============================================================
//  EXPORTING — CommonJS way
// ============================================================

// OPTION 1 — export everything as one object (most common, recommended)
module.exports = {
    add,
    subb,
    multi,
};

// OPTION 2 — export a single function directly (only if file has ONE main export)
// module.exports = add;

// OPTION 3 — attach to exports object one by one (rarely used, same result as option 1)
// exports.add = add;
// exports.subb = subb;
// exports.multi = multi;

// ⚠️  module.exports = {} REPLACES the whole export
// ⚠️  exports.x = y ADDS to the existing export object
// Don't mix module.exports and exports in the same file — pick ONE style