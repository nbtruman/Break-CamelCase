// complete the function
function solution(string) {
    return string.replace(/([A-Z])/g, function(letter){
        return " " + letter;
    });    
}


solution('camelCasing');
solution('camelCasingTest');