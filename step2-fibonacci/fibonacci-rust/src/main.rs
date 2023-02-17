use std::time::{Instant};

fn main() {
    println!("Hello, world!");
    let mut i = 0;
    let start = Instant::now();
    while i < 10 {
        println!("{}", fibonacci(40));
        i = i + 1
    }
    let duration = start.elapsed();
    println!("Time elapsed in expensive_function() is: {:?}", duration);
}

fn fibonacci(x: i32) -> i32 {
    if x <= 2 {
      return 1;
    } else {
      return fibonacci(x - 1) + fibonacci(x - 2);
    }
}