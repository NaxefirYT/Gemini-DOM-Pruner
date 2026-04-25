console.log("Gemini DOM Pruner загружен.");

const STYLE_ID = 'gemini-pruner-style';

if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    
    style.textContent = `
        user-query, 
        model-response, 
        message-content,
        .conversation-container > div {
            content-visibility: auto;
            contain-intrinsic-size: auto 150px; 
        }
    `;
    
    document.head.appendChild(style);
    console.log("Оптимизация включена.");
}