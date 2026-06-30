// ============================================================
//  ES MODULE — math.js
//  Day 7 — Node.js — MERN Stack Learning
// ============================================================

// ES Modules = modern JavaScript standard (introduced 2015)
// Uses import/export keywords
// Same system used in React, Vue, modern frontend code

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
//  EXPORTING — ES Module way
// ============================================================

// DEFAULT EXPORT — only ONE per file allowed
export default add;
// export default subb; // ❌ Error — can't have two default exports in same file

// NAMED EXPORTS — can have MANY per file
export { subb, multi };

// Alternative: export directly at declaration
// export const subb = (a, b) => a - b;
// export const multi = (a, b) => a * b;

// ⚠️  RULE: only ONE default export per file, but UNLIMITED named exports