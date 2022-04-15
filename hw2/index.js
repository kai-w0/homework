function reverse_number(num){
    return +(num + '').split('').reverse().join('');
}

function is_parlindrome(str) {
    str = str.replace(/\s*/g,"");
    let left = 0, right = str.length - 1;
    while (left < right){
        if (str.charAt(left) !== str.charAt(right)){
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
}

function all_combination(str) {
    let combinations = [];
    for (let i = 0; i < str.length; i++){
        for (let j = i + 1; j < str.length + 1; j++){
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}

function alphabetical_order(str) {
    return str.split('').sort().join();
}

function convert_the_first_letter(str) {
    let array1 = str.split(' ');
    let newarray1 = [];
    for(let x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
}

function find_longest_word(str)
{
    let array1 = str.match(/\w[a-z]{0,}/gi);
    let result = array1[0];
    for(let x = 1 ; x < array1.length ; x++)
    {
        if(result.length < array1[x].length)
        {
        result = array1[x];
        } 
    }
    return result;
}

function vowel_count(str1)
{
    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;
    for(let x = 0; x < str1.length ; x++)
    {
        if (vowel_list.indexOf(str1[x]) !== -1)
        {
        vcount += 1;
        }
    
    }
    return vcount;
}

function test_prime(n)
{
    if (n === 1){
        return false;
    }
    else if(n === 2){
        return true;
    }else
    {
        for(let i = 2; i < n; i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;  
    }
}

function detectType(arg){
    return typeof arg;
}

function matrix(n){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (i === j) {
                console.log('1');
            } else {
                console.log('0');
            }
        }
    }
}

function Second_Greatest_Lowest(arr_num){
    arr_num.sort(function(x,y)
        {
            return x-y;
        });
    let uniqa = [arr_num[0]];
    let result = [];
    for (let j=1; j < arr_num.length; j++){
        if(arr_num[j-1] !== arr_num[j]){
            uniqa.push(arr_num[j]);
        }
    }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
    return result.join(',');
}

function is_perfect(number){
    let temp = 0;
    for(let i = 1; i <= number / 2; i++){
        if (number % i === 0){
            temp += i;
        }
    }
    if (temp === number && temp !== 0){
        console.log("It is a perfect number.");
    } 
    else {
        console.log("It is not a perfect number.");
    }   
 } 

function factors(n){
    let num_factors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++){
        if (n % i === 0){
            num_factors.push(i);
        }
        if (n / i !== i){
            num_factors.push(n / i);
        }
    }
    num_factors.sort(function(x, y){return x - y;});
    return num_factors;
}

function amount_to_coins(amount, coins) 
{
    if (amount === 0) {
        return [];
    } 
    else{
        if (amount >= coins[0]) {
            let left = (amount - coins[0]);
            return [coins[0]].concat(amount_to_coins(left, coins) );
        } 
        else{
            coins.shift();
            return amount_to_coins(amount, coins);
        }
    }
} 

function exp(b,n){
    let ans = 1;
    for (let i = 1; i <= n; i++){
        ans = b * ans;        
    }
    return ans;
}

function unique_char(str1){
    let str=str1;
    let uniql="";
    for (let i = 0; i < str.length; i++){
        if(uniql.indexOf(str.charAt(i))==-1){
            uniql += str[i];  
        }
    }
    return uniql;  
}  

function count(string) {
    let string1 = string.split("").sort().join("");
    let counter = 1;
    for (let i = 0; i < string.length; i++) {
        if (string1[i] == string1[i + 1]) {
            counter++;
        } else {
            console.log(string1[i] + " " + counter);
            counter = 1;
        }
    }
}

function binarySearch(arr, x) {
    let start=0, end=arr.length - 1;
    while (start <= end){
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x){
            return true;
        } 
        else if (arr[mid] < x){
            start = mid + 1;
        } else {
            end = mid - 1;
        }     
    }
    return false;
}

function returnLarger(arr, num) {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > num){
        newArr.push(arr[i])
      }
    }  
    return newArr;
}

function generateID(numberOfChar){	
    let characterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let stringID = "";
    for (let i = 0; i < numberOfChar; i++){
        let randomChar = characterList.charAt( Math.floor(Math.random() * (characterList.length - 1)));
        stringID += randomChar;  
    }
    return stringID;
}

function subset(arra, arra_size){
    let result_set = [], result;
    for(let x = 0; x < Math.pow(2, arra.length); x++){
        result = [];
        i = arra.length - 1; 
        do{
            if((x & (1 << i)) !== 0){
                result.push(arra[i]);
            }
        }  while(i--);
        if(result.length >= arra_size){
            result_set.push(result);
        }
    }
    return result_set; 
}

function char_count(str, letter) {
    let letter_Count = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

function find_FirstNotRepeatedChar(str) {
    let arra1 = str.split('');
    let result = '';
    let ctr = 0;
    for (let i = 0; i < arra1.length; i++) {
        for (let j = 0; j < arra1.length; j++){
            if (arra1[i] === arra1[j]) {
                ctr+= 1;
            }
        }
        if (ctr < 2) {
            result = arra1[i];
            break;
        }
    }
    return result;
}

function bblSort(arr){   
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < ( arr.length - i -1 ); j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function longestString(arr){
    let res = '';
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > res.length) {
            res = arr[i];
        }
    }
    return res;
}

function longest_substring_without_repeating_characters(input) {
    let chars = input.split('');
    let curr_char;
    let str = "";
    let longest_string = "";
    let hash = {};
    for (let i = 0; i < chars.length; i++) {
        curr_char = chars[i];
        if (!hash[chars[i]]) { 
            str += curr_char; 
            hash[chars[i]] = {index:i};
        }
        else {
            if(longest_string.length <= str.length){
                longest_string = str;
            }
            let prev_dupeIndex = hash[curr_char].index;
            let str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
            str = str_FromPrevDupe + curr_char;
            hash = {};
            for (let j = prev_dupeIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = {index:j};
            }
        }
    }
    return longest_string.length > str.length ? longest_string : str;
}

function longestPalindrome(s) {
    let res = ""
    for (let i = 0; i < s.length; i++) {
        let s1 = palindrome(s, i, i)
        let s2 = palindrome(s, i, i + 1)
        res = res.length <= s1.length ? s1 : res
        res = res.length <= s2.length ? s2 : res
    }
    return res
};

function palindrome(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--
        r++
    }
    return s.slice(l + 1, r)
}

function greet() {
    return 'Hello';
}

function name(user, func)
{
    const message = func();
    console.log(`${message} ${user}`);
}

function abc() {
    console.log( arguments.callee.name );
}