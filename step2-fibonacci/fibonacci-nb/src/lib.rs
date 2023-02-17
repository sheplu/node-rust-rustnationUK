use node_bindgen::derive::node_bindgen;

#[node_bindgen]
fn fibonacci(x: i32) -> i32 {
    if x <= 2 {
      return 1;
    } else {
      return fibonacci(x - 1) + fibonacci(x - 2);
    }
}
