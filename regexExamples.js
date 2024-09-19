//////////////////////////////////////////////////////////////
// Check to see if the first letter of the word is capitalized
//////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start checkIsFirstCharacterUppercase --------------------------------------------------------");
function checkIsFirstCharacterUppercase(str) {
    const regex = /^[A-Z]/;
    return regex.test(str);
}

console.log(checkIsFirstCharacterUppercase("Hello"));
console.log(checkIsFirstCharacterUppercase("world"));
console.log(checkIsFirstCharacterUppercase("World"));
console.log("-------------------------------------------------------- End checkIsFirstCharacterUppercase --------------------------------------------------------");
//////////////////////////////////////////////////////////////
// search a date within a string that is passed through
//////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start searchDateWithinString --------------------------------------------------------");
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
console.log("-------------------------------------------------------- End searchDateWithinString --------------------------------------------------------");
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a given value is IP value or not.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start checkIsValidIP --------------------------------------------------------");
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
console.log("-------------------------------------------------------- End checkIsValidIP --------------------------------------------------------");
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a given value is a valid URL or not.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start checkIsValidUrl --------------------------------------------------------");
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
console.log("-------------------------------------------------------- End checkIsValidUrl --------------------------------------------------------");
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a given value is a US zip code or not.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start checkIsValidZipCode --------------------------------------------------------");
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
console.log("-------------------------------------------------------- End checkIsValidZipCode --------------------------------------------------------");
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a given value is a social security number or not.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start checkIsValidSocialSecurityNumber --------------------------------------------------------");
function checkIsValidSocialSecurityNumber(ssn) {
    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    return ssnRegex.test(ssn);
}
console.log(checkIsValidSocialSecurityNumber("123-45-6789")); // true
console.log(checkIsValidSocialSecurityNumber("123-45-678"));  // false (too short)
console.log(checkIsValidSocialSecurityNumber("123-456-789")); // false (invalid format)
console.log(checkIsValidSocialSecurityNumber("123456789"));   // false (missing hyphens)
console.log(checkIsValidSocialSecurityNumber("12-345-6789"));  // false (too short)
console.log(checkIsValidSocialSecurityNumber("123-45-67890")); // false (too long)
console.log(checkIsValidSocialSecurityNumber("abc-def-ghij")); // false (invalid characters)
console.log(checkIsValidSocialSecurityNumber("000-00-0000"));  // false (invalid SSN)
console.log("-------------------------------------------------------- End checkIsValidSocialSecurityNumber --------------------------------------------------------");
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to check whether a given value represents a domain name.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start checkIsValidDomainName --------------------------------------------------------");
function checkIsValidDomainName(str) {
    const domainRegex = /^(?=.{1,253})(?!-)([A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,}$/;
    return domainRegex.test(str);
}
console.log(checkIsValidDomainName("example.com"));        // true
console.log(checkIsValidDomainName("sub.example.com"));     // true
console.log(checkIsValidDomainName("example.co.uk"));       // true
console.log(checkIsValidDomainName("-example.com"));        // false (starts with hyphen)
console.log(checkIsValidDomainName("example-.com"));        // false (ends with hyphen)
console.log(checkIsValidDomainName("exa_mple.com"));        // false (contains underscore)
console.log(checkIsValidDomainName("example"));              // false (no TLD)
console.log(checkIsValidDomainName("123example.com"));      // true
console.log(checkIsValidDomainName("example.c"));            // false (TLD too short)
console.log(checkIsValidDomainName("this-is-a-very-long-domain-name-that-is-definitely-too-long.com")); // false (exceeds max length)
console.log("-------------------------------------------------------- End checkIsValidDomainName --------------------------------------------------------");
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript program that works as a regular expression trim function (string).
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start trimRegex --------------------------------------------------------");
function trimRegex(str) {
    return str.replace(/^\s+|\s+$/g, '');
}
console.log(trimRegex("   Hello, World!   ")); // "Hello, World!"
console.log(trimRegex("   Leading whitespace")); // "Leading whitespace"
console.log(trimRegex("Trailing whitespace   ")); // "Trailing whitespace"
console.log(trimRegex("   Both   sides   ")); // "Both   sides"
console.log(trimRegex("NoWhitespace")); // "NoWhitespace"
console.log(trimRegex("")); // ""
console.log(trimRegex("   ")); // ""
console.log("-------------------------------------------------------- End trimRegex --------------------------------------------------------");
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to count the number of vowels in a given string.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start countVowelsInString --------------------------------------------------------");
function countVowelsInString(str) {
    const vowelRegex = /[aeiou]/gi;
    const matches = str.match(vowelRegex);
    return matches ? matches.length : 0;
}
console.log(countVowelsInString("Hello, World!")); // 3
console.log(countVowelsInString("JavaScript")); // 3
console.log(countVowelsInString("BCDFG")); // 0
console.log(countVowelsInString("Count the number of vowels.")); // 8
console.log(countVowelsInString("")); // 0
console.log(countVowelsInString("AEIOU")); // 5
console.log("-------------------------------------------------------- End countVowelsInString --------------------------------------------------------");
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a JavaScript function to check if the given email is valid.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("-------------------------------------------------------- Start checkIsValidEmail --------------------------------------------------------");
function checkIsValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(checkIsValidEmail("test@example.com"));       // true
console.log(checkIsValidEmail("user.name@domain.co"));    // true
console.log(checkIsValidEmail("user_name@domain.com"));    // true
console.log(checkIsValidEmail("user@sub.domain.com"));     // true
console.log(checkIsValidEmail("invalid-email.com"));        // false (missing @)
console.log(checkIsValidEmail("user@.com"));                // false (missing domain name)
console.log(checkIsValidEmail("user@domain"));              // false (missing TLD)
console.log(checkIsValidEmail("user@domain..com"));        // false (double dot in domain)
console.log(checkIsValidEmail("user@domain.c"));            // false (TLD too short)
console.log(checkIsValidEmail("user@domain.com!"));         // false (invalid characters)
console.log("-------------------------------------------------------- End checkIsValidEmail --------------------------------------------------------");














