## Part 1:
### Q1:
Line 9 prints:

values added:  20

### Q2:
Line 13 prints:
final result:  20

### Q3:
Line 9 prints:
values added:  20

### Q4:
Line 13 prints:
q3and4.js:13 Uncaught ReferenceError: result is not defined
    at sumValues (q3and4.js:13)
    at q3and4.js:17

In other words, line 13 prints an error. 
This is because variables declared with let have block scope. 
As a result, the variable named result is not known outside of 
the if block, and so attempting to use it results in an 
"Uncaught ReferenceError", of that name being out of scope.

### Q5 and Q6:
Nothing is printed by lines 9 and 13, as an error occurs before 
they are reached at line 7. This error is given as:
q5and6.js:7 Uncaught TypeError: Assignment to constant variable.
    at sumValues (q5and6.js:7)
    at q5and6.js:17

This error occurs because result has been declared as a const
variable, and so it cannot be reassigned to. Therefore,
line 7, which tries to do a reassign to it with num1 + num2,
results in an error.

