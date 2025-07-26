function vazio(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    }
    return false; 
}

console.log(vazio({"x": 5, "y": 42})); 
console.log(vazio({}));                
console.log(vazio([null, false, 0]));  
console.log(vazio([]));                

