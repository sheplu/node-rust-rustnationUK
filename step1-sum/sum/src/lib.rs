use node_bindgen::derive::node_bindgen;


#[node_bindgen]
fn sum(first: i32, second: i32) -> i32 {
    first + second
}

#[node_bindgen]
fn make_array(count: i32) -> Vec<i32> {
    let mut array = vec![];
    for i in 0..count {
        array.push(i);
    }
    array
}

#[node_bindgen]
fn sum_array(array: Vec<i32>) -> i32 {
    array.iter().sum()
}

#[node_bindgen]
fn add_array(array: Vec<i32>) -> Vec<i32> {
    let mut new_array = vec![];
    for i in 0..array.len() {
        new_array.push(array[i]+1);
    }
    new_array
}

#[node_bindgen]
fn add_number(x: i32) -> i32 {
    let y = x + 1;
    y
}