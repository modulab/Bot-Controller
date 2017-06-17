extern crate tokio_core;
extern crate tucoflyer;
extern crate futures;
extern crate cgmath;

use tokio_core::reactor::Core;
use futures::future;
use cgmath::Point3;
use tucoflyer::{BotConfig, WinchConfig, leds};


fn main() {

    let mut core = Core::new().unwrap();
    let handle = core.handle();

    let config = BotConfig {
        controller_addr: "10.32.0.1:9024".parse().unwrap(),
        flyer_addr: "10.32.0.8:9024".parse().unwrap(),
        winches: vec![
            WinchConfig { addr: "10.32.0.10:9024".parse().unwrap(), loc: Point3::new(10.0, 10.0, 0.0) },
            WinchConfig { addr: "10.32.0.11:9024".parse().unwrap(), loc: Point3::new(10.0, -10.0, 0.0) },
            WinchConfig { addr: "10.32.0.12:9024".parse().unwrap(), loc: Point3::new(-10.0, -10.0, 0.0) },
            WinchConfig { addr: "10.32.0.13:9024".parse().unwrap(), loc: Point3::new(-10.0, 10.0, 0.0) },
        ],
    };

    println!("config: {:?}", config);


    leds::try_it();

    drop(core.run(future::empty::<(),()>()));
}
