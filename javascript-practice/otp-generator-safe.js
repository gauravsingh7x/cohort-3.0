/*
For real OTP systems (banking, auth, password reset), the bigger issue is not floor vs trunc.
The issue is:
            Math.random()
                    is not cryptographically secure.
Use crypto APIs instead.
*/

// Browser
const array = new Uint32Array(1);
/*
Uint32Array
        Creates a special array that stores unsigned 32-bit integers.
Uint → Unsigned integer (no negative numbers)
        32 → 32 bits
Range:
        0 to 4,294,967,295

(1) Means: create space for 1 number > So initially: array = [0]
*/
crypto.getRandomValues(array);
/*
This fills the array with a cryptographically secure random number.
        Example after execution:
        array = [3289472341]
Important:
        More secure than Math.random()
        Used in real OTP/security systems
        Built into browser crypto API
*/

const otp = 1000 + (array[0] % 9000);
/*
Now we create a 4-digit OTP. 
        array[0]
Gets the first random number.
        3289472341

% 9000 > Modulo operator → gives remainder.
Example: 3289472341 % 9000
Maybe result : 2341

Why use % 9000?
        Because we want numbers only between: 0 → 8999

Modulo restricts the range.
+ 1000 > Shifts range upward.
Before:
        0 → 8999
After adding 1000:
        1000 → 9999
*/

console.log(otp);


// Node.js
const crypto = require('crypto');

const otp = crypto.randomInt(1000, 10000);

console.log(otp);
//This is the preferred production-grade solution in Node.js.