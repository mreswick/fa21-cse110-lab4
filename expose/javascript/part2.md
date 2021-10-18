
## Part2:
### Q1:
Line 12 prints:

3

This is because an array with three entries is inputted,
with the for loop iterating over it and increasing
the index with i by one each time. i thus ends as the length
of the array.
Also, i is declared using var and so has function scope
here, making it visible after the for loop in the function.

### Q2:
Line 13 prints:

150

This is because the discount passed is 0.5, and the
last entry of the prices array is 300. The var discountedPrice
variable will have function scope, as it is created using var,
and so will be visible after the for loop; and it will end
with the value it has for the last iteration of the for loop
(as that iteration is the last to update it). 

### Q3:
This line prints the same thing as for the above question.
Line 14 prints:

150

This is because finalPrice has function scope, and so is in
scope when called on line 14 for the printing statement.
Also, since it is visible in an outer scope, it is visible
within it, and so is accessible in the for loop as well.
For line 14, it'll have the same value as for the last
iteration of the for loop, which is for the 300 prices
for a discount of 0.5, which yields a finalPrice of 150, which
multiplied by 100 and then divided by 100 results in 150
for the finalPrice as well.

### Q4:
The function will return a new array with three values:

[50, 100, 150]

This is because the discount is set to 0.5 (or in other
words, 50% of the price passed), and the price elements
are 100, 200, and 300. The for loop in the call
iterates over this passed-in array, applies the discount
(by having the resulting value be the remainder of what's
not the discount, by 1 - discount) to each, and then
stores it as the corresponding element with same index
in the resulting array. It then returns this array.
Also note:
The retirmed array is a new array (compared to any array
passed into the function call) since it is created
on line 3, and that var statement thus only has the
returned array have function scope, of not being
visible outside the function (and thus not being
a global variable; so it is a new variable with new
contents bewteen calls). 

### Q5:
Line 12 results in the following error:

part2qs.js:12 Uncaught ReferenceError: i is not defined
    at discountPrices (part2qs.js:12)
    at part2qs.js:19

This because i has block scope, since it is created using let in the "header"
of a for loop (a for loop is somewhat special in that a variable
created in its header is treated as belonging to its block).
This usage of let means that i is not in scope for line 12,
which is outside and after the block, and therefore 
trying to access its name results in an Uncaught ReferenceError
there.

### Q6: 
Line 13 results in a similar error and message to the above question (in the test
file *discountedPrice* in which I put the code):

Uncaught ReferenceError: discountedPrice is not defined
    at discountPrices (part2qs.js:13)
    at part2qs.js:19

This is because discountedPrice, similar to i for the just-above
question, is declared within a for loop and so has block scope where
that block is the for loop. It is thus not accessible outside the for loop's
block, and so attempting to do so results in an Uncaught ReferenceError.

### Q7: 
Line 14 here will print:

150

No error results as finalPrice is declared using let in the function,
of thus being in scope for the function (and accessible after it's
created on line 4). This means it's valid to use the finalPrice variable
at line 14, which is still in the function.
Further, 150 is what's printed as finalPrice on the last iteration of the for
loop ends as the discounted price of 300, the last price in the passed prices
array, which is discounted by 0.5, resulting in 150.

### Q8:
This function will return a new array with three elements:

[50, 100, 150]

This array will have these values as a discount of 0.5 (i.e.,
conceptualyl 50%) is applied to all of the elements of the passed
in array that are at the same index (of [100, 200, 300]). This
is achieved by iterating over each of the elements of the inputted
array, multiplying by 1 - discount, and storing the result
as the corresponding element (as it is pushed for the current
element of prices)).
This array is returned as a new array since it is created
on line 3.

### Q9:
Similar to a previous question, line 11 here, that
attempts to print out the value of i to the Console,
results in the following error (from the test file *part2qs.js*
in which I put the code):

part2qs.js:12 Uncaught ReferenceError: i is not defined
    at discountPrices (part2qs.js:12)
    at part2qs.js:20

This is because i has block scope, as it's declared with
let, with its block being that of the for loop. It is thus
not in scope outside of the for loop, where the 
console.log(i) statement on line 11 is, and hence the error.

### Q10:
Line 12 will print to the console:

3

This is because length is created as a const variable,
of using const, and so has block scope, which here spans 
the function in which its created (as it's not declared within
any inner blocks of the function, but rather just in
the function itself). This makes it accessible to code following
its declaration statement that's still in the function, which
line 12 is; and it ends with 3 as the passed in array has
a length of 3, which is what it stores in line 4.

### Q11:
This function returns the new array:

[50, 100, 150]

This array is separate from any created outside the function
discountPrices called as its scope is not global, as it's
created using const and within the function.
Further, the array returned may have its values changed
later, as const variables in JavaScript are const for
the variable but not for the contents.


### Q12:
A): Accessing the value of the name
property in the student object:

student.name

or

student['name']

B): Accessing the value of the Grad Year
property in the student object:

student['Grad Year']

C): Calling the function for the greeting
property in the student object:

student.greeting()

D): Accessing the name property of the object in the
Favorite Teacher property in student:

student['Favorite Teacher'].name

E): Access the first index in the array of the
courseLoad property of the student object:

student.courseLoad[0]


### Q13: Arithmetic:
#### A) '3' + 2:

'32'

This is because '3' is a string, and so the + here is being
used for string concatenation, with the 2 thus getting
concatenated to the string '2', with '3' + '2' then
doing string concatenation.

#### B) '3' - 2:

1

This is because - is not a string operation, and since
one of the operands is a number, subtraction is thus done.
To do this, '3' is cast to 3 (a number), with 3 - 2 
then occurring to yield 1.

#### C) 3 + null:

3

This is because 3 is a number, so the + tries to do
number addition, and thus casts the null to 0,
performing 3 + 1.

#### D) '3' + null:

'3null'

This is because '3' is a string, so the + does string
concatenation here, casting null to 'null' and then
doing string concatenation between the two strings
'3' and 'null'.

#### E) true + 3:

4

This is because the + operand is being used with a number,
and the other operand is a boolean, so the boolean (true) is
cast to a number (true gets converted to 1 when this occurs),
with 1 + 3 then occcurring, which is 4.

#### F) false + null:

0

This is because the boolean false is getting cast to 0,
and with null also then getting cast to 0, so that
the + can be used with numeric addition (as no string
concatenation is occurring here), with 0 + 0 just being
0.

#### G) '3' + undefined:

'3undefined'

This is because undefined gets cast to a string for then
'3' + 'undefined' string concatenation to occur.

#### H) '3' - undefined:

NaN

This is because the - operator isn't defined for strings,
and so '3' and undefined get cast to numbers. When undefined
gets cast to a number, however, it results in NaN, and subtracting
NaN from some other number still results in NaN, hence
the result of NaN.

### Q14: Comparison:
#### A): '2' > 1:

true

This results in true, as '2' gets converted to the number
2, with then 2 > 1 being true.

#### B): '2' < '12':

false

This is because the two strings are being compared using
their character codes, from left to right. The character
code of the '1' character is less than that of the '2'
character, and so '12' in terms of strings is "less than"
'2'.

#### C): 2 == '2':

true

This is because when JavaScript compares a string and a number,
the string gets converted to a number. Thus, '2' gets converted
to the number 2, and 2 == 2 is true.

#### D): 2 === '2':

false

This is because === compares not only for equality of value
but also for being of the same type. 2 is a number and '2' a 
string, so they are not the same type so === returns false.

#### E): true == 2:

false

This is because when a boolean is compared to a number,
the boolean is converted to a number. true converts to 1
when this occurs, and 1 and 2 are not equal, so false.

#### F): true === Boolean(2):

true

This is because Boolean(2) executes first, returning true
(as a non-zero number cast to a boolean returns true),
and true === true has both be of the same type, boolean,
and of the same value, true, so it returns true.

### Q15: Explain the difference between the == and === operators:
The == operator compares only for equality of value (including
after any type casts that are automatically performed to evaluate
it), whereas the === operator also compares for equality of types.
Two values that are compared with == will always have it return
true if after the necessary implicit casting, their resulting
values are the same. Two values compared with ===, however,
will only return true if they both hold the same value and are
of the same type. 
For example, true == 1 would return true, but true === 1 would
return false as though true becomes 1 when casting to a number,
true and 1 are not of the same type (true is a boolean, 1
is a number).

### Q16:
(Please see file part2-question16.js.) 

### Q17:
The given code returns the array:

[2, 4, 6]

of length 3. This works as follows:
In the modifyArray call, the array [1, 2, 3] is passed, and
the function doSomething is also passed. Now, in modifyArray,
the for loop iterates over the elements of the passed array,
and for each, pushes to a new array the result of calling that function,
which in this case, is doSomething that returns twice the numeric value.
modifyArray then returns the resulting array. The reuslt is [1, 2, 3]
results in [2, 4, 6] gettiing returned.

### Q18:
(See part2-question18.js file for code snippet.)

### Q19:
The output of the given code for question #19 is:

1
4
3
2

This is because printNums gets called, which first prints 1.
However, two settimeouts occur, one for a second delay and another
for an instantaneous/no delay, and then another print statement.
It happens, however, that the following console.log(4); statement
gets executed before those of either timeout occur, with so next
4 gets printed. The delay for the second setTimeout call is less, so then
its function gets called, printing 3; and finally that of the 1 second
delay gets called, printing 2.