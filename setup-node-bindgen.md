# Setup Node-Bindgen

## Install

```sh
cargo install nj-cli
```

## Cargo.toml

``` toml
[dependencies]
node-bindgen = { version = "5.1" }

[build-dependencies]
node-bindgen = { version = "5.1", features = ["build"] }

[lib]
crate-type = ["cdylib"]
```

## build.rs

``` rust
fn main() {
    node_bindgen::build::configure();
}
```

## lib.rs

``` rust
use node_bindgen::derive::node_bindgen;

#[node_bindgen]
// your function

```

## Command

```sh
nj-cli build
nj-cli build --release
```
