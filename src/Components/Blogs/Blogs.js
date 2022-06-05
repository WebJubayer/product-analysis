import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-body'>
            <div className='query'>
                <h2>Explain Context api and it's purpose ...</h2>
                <p><span className='answer'>Answer:- </span>The Context API is a  React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.<strong> React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.</strong> In other words, React context allows us to share data (state) across our components more easily.</p>
                <h2>What is Semantic tag ?</h2>
                <p><span className='answer'>Answer:- </span>Semantic HTML elements are <strong>those that clearly describe their meaning in a human- and machine-readable way.</strong>  Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
                <h2>What is the difference between a block and inline element ?</h2>
                <p><span className='answer'>Answer:- </span>Inline elements are <strong>those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content.</strong> Note: An inline element does not start on a new line and only takes up as much width as necessary.

                    <strong> A block element always begins a new line and extends to left and right, and takes up the full width available.</strong> Examples of block elements are address, main, div etc. a new line is not started with inline, and it takes up only necessary space or width. Inline elements are input, select, time etc.
                </p>
            </div>


        </div>
    );
};

export default Blogs;