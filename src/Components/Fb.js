import React, { Component } from 'react';

class Fb extends Component {
    render() {
        return (
            <div className="container">
                <div className="fb-comments" data-href="https://truongthanhnam97.github.io/lienminhshop/" data-width={1140} data-numposts={50} colorscheme="dark" data-colorscheme="dark" data-order-by="reverse_time" />
            </div>
        );
    }
}

export default Fb;