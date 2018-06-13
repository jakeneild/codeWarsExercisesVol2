/*In this kata, you will write a function that returns the positions and the values of the "peaks"
 (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 
(since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties '
should be arrays. If there is no peak in the given array, then the output should be 
{pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} 
(or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need 
to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a
mathematical function, we don't know what is after and before and therefore, we don't know if 
it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case
of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!*/

/*function pickPeaks(arr) {
    emergency = 0;

    let peakObj = { pos: [], peaks: [] };

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
            peakObj.pos.push(i);
            peakObj.peaks.push(arr[i])
        } else if (arr[i] > arr[i -1] && arr[i] == arr[i +1]) {
            let up = true;
            let upC = i + 1;
            while (up == true) {
                if (arr[upC] < arr[upC+1]) {
                    up = false;
                } else if (arr[upC] == arr[upC+1]) {
                    upC++;
                } else if (arr[upC] > arr[upC+1]) {
                    peakObj.pos.push(i);
                    peakObj.peaks.push(arr[i])
                    up = false;
                }
                if(up == true && upC == arr.length){
                    peakObj.pos.push(i);
                    peakObj.peaks.push(arr[i])
                    up = false;
                }
                console.log("up runs")
                if(emergency == 100){
                    return "fail";
                }
                emergency++;
            }
        } /*else if (arr[i] > arr[i + 1] && arr[i] == arr[i -1]) {
            let down = true;
            let downC = i -1;
            while (down == true) {
                if (arr[downC] < arr[downC -1]) {
                    down = false;
                } else if (arr[downC] == arr[downC-1]) {
                    downC--;
                } else if (arr[downC] > arr[downC-1]) {
                    peakObj.pos.push(i);
                    peakObj.peaks.push(arr[i])
                    down = false;
                }
                if(down == true && downC == 0){
                    peakObj.pos.push(i);
                    peakObj.peaks.push(arr[i])
                    down = false;
                }
                console.log("down runs")
                if(emergency == 100){
                    return "fail";
                }
                emergency++;
            }
        }*/
/*}
return peakObj
}

pickPeaks([1, 2, 2, 2, 1]);*/

/*There is a secret string which is unknown to you. Given a collection of random triplets
 from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere
 before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets 
and that they contain sufficient information to deduce the original string. In particular, this means 
that the secret string will never contain letters that do not occur in one of the triplets given to you.
*/

/*var recoverSecret = function (triplets) {
    console.log("start: ", triplets);

    let counter = 0;
    let win = triplets[0];
    while (counter < 3) {
        for (let i = 0; i < triplets.length; i++) {
            console.log("win array: ", win)
            console.log("new array: ", triplets[i])
            if (triplets[i][2] == win[0]) {
                win.unshift(triplets[i][0], triplets[i][1]);
            } else if (triplets[i][1] == win[0]) {
                win.unshift(triplets[i][0]);
            } else if (triplets[i][0] == win[win.lenth - 1]) {
                win.push(triplets[i][1], triplets[i][2]);
            } else if (triplets[i][1] == win[win.length - 1]) {
                win.push(triplets[i][2]);
            } else if (win.includes(triplets[i][0]) && win.includes(triplets[i][2])) {
                for (let j = 1; j < win.length; j++) {
                    if (win[j - 1] == triplets[i][0] && win[j] == triplets[i][2]) {
                        win.splice(j, 0, triplets[i][1]);
                    }
                }
            }  //this part works okay

            console.log("after first: ", win)

            for (let j = 0; j < 10; j++) {
                if (win.includes(triplets[i][j])) {
                    let a = triplets[i][0];
                    let b = triplets[i][1]
                    let c = triplets[i][2]
                    console.log("info: ", a, b, c)
                    if (j == 0) {  //splices in missing letters
                        if (!win.includes(c)) {
                            win.splice(win.indexOf(a) + 1, 0, c)
                            console.log("splice Ac")
                        }
                        if (!win.includes(b)) {
                            win.splice(win.indexOf(a) + 1, 0, b)
                            console.log("splice Ab")
                        }
                    } else if (j == 1) {
                        if (!win.includes(a)) {
                            win.splice(win.indexOf(b), 0, a)
                            console.log("splice aB")
                        }
                        if (!win.includes(c)) {
                            win.splice(win.indexOf(b) + 1, 0, c)
                            console.log("splice Bc")
                        }
                    } else if (j == 2) {
                        if (!win.includes(a)) {
                            console.log("splice aC")
                            console.log(ci)
                            win.splice(win.indexOf(c), 0, a);

                        }
                        if (!win.includes(b)) {
                            win.splice(win.indexOf(c), 0, b);
                            console.log("splice bC")
                        }
                    }
                    console.log("win after: ", win, "triplets set: ", triplets[i])

                    for (let l = 0; l < 3; l++) {
                        if (win.indexOf(a) > win.indexOf(b)) { //checks order
                            win.splice(win.indexOf(a), 1);
                            win.splice(win.indexOf(b), 0, a);
                            console.log("splice occurs1", win)
                        }
                        if (win.indexOf(b) > win.indexOf(c) && win.indexOf(c) > win.indexOf(a)) {
                            win.splice(win.indexOf(b), 1);
                            console.log(win)
                            win.splice(win.indexOf(c), 0, b);
                            console.log("splice occurs2", win)
                        }
                        bi = win.indexOf(b);
                        ci = win.indexOf(c);
                        if (win.indexOf(c) < win.indexOf(b)) {
                            win.splice(win.indexOf(b) + 1, 0, c);
                            win.splice(win.indexOf(c), 1)
                            console.log("splice occurs3", win)
                        }
                    }
                }
            }
            for (let k = 0; k < win.length - 1; k++) {
                console.log("looking for ", win[k], " after ", k)
                console.log(win.includes(win[k], k + 1));
                if (win.includes(win[k], k + 1)) {
                    console.log("double eliminated", win[k])
                    win.splice(win.indexOf(win[k], k), 1)
                }
    
            }
            if(i > 80){
                i = triplets.length;
            }
        }
        counter++;
    }
    return win.join("");
}

recoverSecret([['t', 's', 'f'],
['a', 's', 'u'],
['m', 'a', 'f'],
['a', 'i', 'n'],
['s', 'u', 'n'],
['m', 'f', 'u'],
['a', 't', 'h'],
['t', 'h', 'i'],
['h', 'i', 'f'],
['m', 'h', 'f'],
['a', 'u', 'n'],
['m', 'a', 't'],
['f', 'u', 'n'],
['h', 's', 'n'],
['a', 'i', 's'],
['m', 's', 'n'],
['m', 's', 'u']]);*/

/*var recoverSecret = function (triplets) {
    let win = [];
    for (let k = 0; k < 5; k++) {
        for (let i = 0; i < triplets.length; i++) {
            for (let j = 0; j < 3; j++) {
                if (!win.includes(triplets[i][j])) {
                    win.push(triplets[i][j])
                }
            }
            let sorted = false;
            counter = 0;
            while (sorted == false) {
                console.log("start:", win, triplets[i]);
                let a = triplets[i][0];
                let b = triplets[i][1];
                let c = triplets[i][2];

                let move = function (t1, t2, pos) {
                    win.splice(win.indexOf(t1), 1);
                    if (pos == "a") {
                        if(win.indexOf(t2) == win.length-1){
                            win.push(t1);
                        } else {
                            win.splice(win.indexOf(t2 + 1), 0, t1)
                        }
                    } else {
                        win.splice(win.indexOf(t2), 0, t1)
                    }
                    console.log(t1, t2, pos, win)
                }

                if (win.indexOf(a) < win.indexOf(b) && win.indexOf(b) < win.indexOf(c)) {
                    sorted = true;
                } else if (win.indexOf(a) < win.indexOf(b) && win.indexOf(c) < win.indexOf(b)) {
                    move(c, b, "a");
                } else if (win.indexOf(b) < win.indexOf(c) && win.indexOf(c) < win.indexOf(a)) {
                    move(a, b, "b");
                } else if (win.indexOf(b) < win.indexOf(a) && win.indexOf(a) < win.indexOf(c)) {
                    move(a, b, "b");
                } else if (win.indexOf(c) < win.indexOf(a) && win.indexOf(a) < win.indexOf(b)) {
                    move(c, 2, "a");
                } else if (win.indexOf(c) < win.indexOf(b) && win.indexOf(b) < win.indexOf(a)) {
                    move(c, a, "a");
                    move(b, c, "a");
                }
                counter++;
                if(counter > 50){
                    sorted = true;
                }
            }
        }
    }
    return win.join("")
}

recoverSecret([['t', 's', 'f'],
['a', 's', 'u'],
['m', 'a', 'f'],
['a', 'i', 'n'],
['s', 'u', 'n'],
['m', 'f', 'u'],
['a', 't', 'h'],
['t', 'h', 'i'],
['h', 'i', 'f'],
['m', 'h', 'f'],
['a', 'u', 'n'],
['m', 'a', 't'],
['f', 'u', 'n'],
['h', 's', 'n'],
['a', 'i', 's'],
['m', 's', 'n'],
['m', 's', 'u']]);*/

/*You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.*/

/*function validate(password) {
    if(password.length < 6){
        console.log("not long enough")
        return false;
    }
    let upper = false;
    let lower = false;
    let num = false;
    for(let i = 0; i < password.length; i++){
        let a = password.charAt(i);
        if (a.match(/^[a-z0-9]+$/i) == null) {
            console.log("bad char") 
            return false;
        }
        
        if(!isNaN(a)){
            num = true;
        } else if(a === a.toLowerCase()){
            lower = true;
        } else if(a === a.toUpperCase()){
            upper = true;
        }
    }
    console.log(password, ": ", upper, lower, num)
    return (upper == true && lower == true && num == true) ? true : false;
  }

  validate("password");
  validate("PASSWORD");
  validate("password1");
  validate("PASSWORR2");
  validate("passwoRd2*");
  validate("D1d");
  validate("passworD2");
  validate("PasSwo2d");
*/

/*A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:
removNb(26) should return [(15, 21), (21, 15)]
or

removNb(26) should return { {15, 21}, {21, 15} }
or

removeNb(26) should return [[15, 21], [21, 15]]
or

removNb(26) should return [ {15, 21}, {21, 15} ]
or

removNb(26) should return "15 21, 21 15"
or

in C:
removNb(26) should return  **an array of pairs {{15, 21}{21, 15}}**
tested by way of strings.*/



//function removeNb (n) {
    const n = 26;
    console.log("Num: ", n);
    var final = {};
    for(let i = 0; i < n.length; i++){
        console.log("First number: ", 1)  //iterates through first number
         for( j = i+1; j < n.length; j++){ //iterates through second number
            var sum = 0;
            var k = j;
            for(k ; k >= 0; k--){  //finding the sum
                if(k != j && k != i){ //making sure it doesn't interate over the set numbers
                    sum += k;
                    console.log("Sum: ", sum)
                    if(i * j == sum){ //checking to see if the set number produce == sum of sequence
                        var set = i, j;
                        final.push(set);//putting the answer in the array;
                        console.log("set: ", set)
                    }
                }
            }
            
         }
  //  }
}

//console.log(removeNb(26))