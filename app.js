//////////////////////////////////////////////////////////////
// Check to see if the first letter of the word is capitalized
//////////////////////////////////////////////////////////////
function isFirstCharacterUppercase(str) {
    const regex = /^[A-Z]/;
    return regex.test(str);
}

console.log(isFirstCharacterUppercase("Hello"));
console.log(isFirstCharacterUppercase("world"));
console.log(isFirstCharacterUppercase("World"));
//////////////////////////////////////////////////////////////
// search a date within a string that is passed through
//////////////////////////////////////////////////////////////
function searchDateWithinString(str) {
    const dateRegex = /\b(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}|\d{4}[-]\d{1,2}[-]\d{1,2})\b/g;
    const matches = str.match(dateRegex);
    return matches || [];
}
const testString1 = "Today's date is 09/20/2023 and tomorrow will be 09-21-2023.";
const testString2 = "The event is scheduled for 2023-09-22.";
const testString3 = "No dates here!";
const testString4 = "Mixed formats: 12/25/2022 and 2022-12-25.";
console.log(searchDateWithinString(testString1)); // ['09/20/2023', '09-21-2023']
console.log(searchDateWithinString(testString2)); // ['2023-09-22']
console.log(searchDateWithinString(testString3)); // []
console.log(searchDateWithinString(testString4)); // ['12/25/2022', '2022-12-25']
//////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a given value is IP value or not.
//////////////////////////////////////////////////////////////
function checkIsValidIP(ip) {
    // Got these from the internet
    const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,7}:|(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}|(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}|(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}|(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:(?::[0-9a-fA-F]{1,4}){1,6}|:(?::[0-9a-fA-F]{1,4}){1,7}|::|(?:[0-9a-fA-F]{1,4}:){1,6}:(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}
console.log(checkIsValidIP("192.168.1.1")); // true (IPv4)
console.log(checkIsValidIP("255.255.255.255")); // true (IPv4)
console.log(checkIsValidIP("0.0.0.0")); // true (IPv4)
console.log(checkIsValidIP("256.100.50.25")); // false (invalid IPv4)
console.log(checkIsValidIP("2001:0db8:85a3:0000:0000:8a2e:0370:7334")); // true (IPv6)
console.log(checkIsValidIP("::1")); // true (IPv6 loopback)
console.log(checkIsValidIP("invalid_ip")); // false
//////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a given value is a valid URL or not.
//////////////////////////////////////////////////////////////
function checkIsValidUrl(url) {
    const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(:[0-9]{1,5})?(\/[^\s]*)?$/;
    return urlRegex.test(url);
}
console.log(checkIsValidUrl("http://example.com")); // true
console.log(checkIsValidUrl("https://www.example.com")); // true
console.log(checkIsValidUrl("www.example.com")); // false (missing scheme)
console.log(checkIsValidUrl("example.com")); // false (missing scheme)
console.log(checkIsValidUrl("https://example.com/path/to/resource")); // true
console.log(checkIsValidUrl("ftp://example.com")); // false (unsupported scheme)
console.log(checkIsValidUrl("http://example.com:8080")); // true (with port)
console.log(checkIsValidUrl("http://example")); // false (invalid domain)
console.log(checkIsValidUrl("http://example.com/?query=123")); // true
//////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a given value is a US zip code or not.
//////////////////////////////////////////////////////////////
function checkIsValidUSZipCode(str) {
    const zipCodeRegex = /^\d{5}(-\d{4})?$/;
    return zipCodeRegex.test(str);
}
console.log(checkIsValidUSZipCode("12345"));       // true
console.log(checkIsValidUSZipCode("12345-6789"));  // true
console.log(checkIsValidUSZipCode("1234"));        // false (too short)
console.log(checkIsValidUSZipCode("123456"));      // false (too long)
console.log(checkIsValidUSZipCode("12345-"));      // false (invalid format)
console.log(checkIsValidUSZipCode("ABCDE"));       // false (invalid characters)
console.log(checkIsValidUSZipCode("12345-12345")); // false (invalid format)
console.log(checkIsValidUSZipCode("98765"));       // true
//////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a given value is a US zip code or not.
//////////////////////////////////////////////////////////////