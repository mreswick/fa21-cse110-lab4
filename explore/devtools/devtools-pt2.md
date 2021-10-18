(Note: there are two screenshots for result-calcualteSum.PNG.
The first only includes the requested breakpoint set,
whereas the second is shot after I had set other breakpoints
as well during the process of debugging.)

### Q1: What was the bug?:
The bug was that num1 and num2 were strings, so passing them
in to calculateSum() where the + operator was used between
them was causing string concatenation instead of number addition. (For instance, num1 and num2, and thus also result,
were all strings.)

### Q2: How would you fix it?
I fixed the bug by using Number() on both num1 and num2
in the calculateSum() function in the statement with the +
operator. This way, they would both be numbers
and then be added using the + operator, which would
achieve the desired numeric addition.