"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = markdownToHtml;
function markdownToHtml(markdown) {
    return markdown
        .replace(/__(.*?)__/g, '<b>$1</b>')
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/_(.*?)_/g, '<i>$1</i>')
        .replace(/\*(.*?)\*/g, '<i>$1</i>')
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
        .replace(/\n/g, '\n');
}
/**
 * @copyright
 * Coded by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */ 
//# sourceMappingURL=markdownToHtml.js.map