#Pure Functions

https://www.sitepoint.com/functional-programming-pure-functions/

A pure function is a function where the return value is
only determined by its input values, without observable side effects

This means that pure functions:
 - Are easily testable
 - Must not mutate the values passed into them
 - Don't have access to values outside of them
 - Make the application more predictable (same input alwasy produces same output)
 - Easily parallelized
 - Results can be memoized
 - Smart systems can be lazy - only call functions when the result is used
 
#Observables

http://reactivex.io/intro.html

http://reactivex.io/documentation/observable.html

A push equivalent to the iterable pattern. A collection that arrives over time.
"Think of an observable alwasy an asynchronous immutable array." Observables
can be cancelled, are evaluated lazily.

Unifies the interface for interacting with:
  - Collections
  - Scalars
  - Events
  - Asynchronous operations

Adds to the Observer pattern:
  - Ability for the producer to signal no more data is available.
  - Ability for the producer to signal that an error has ocurred.

Subscribe:
 - onNext
 - onError
 - onCompleted