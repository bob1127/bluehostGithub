import React, { useState } from 'react';

function Article() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="max-w-md mx-auto mt-20">
            <h1 className="py-2 font-bold text-xl">Article Heading</h1>
            <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ipsum vel nunc commodo hendrerit sit amet vel
                nisi. Donec sodales maximus justo, nec dictum lectus malesuada non. Sed auctor ultrices tellus non varius.
                {showMore && (
                    <span id="more-text">
                        Sed eu enim malesuada, fermentum mi eu, finibus velit. Nam quis blandit velit, vel vehicula neque. Etiam eu
                        lorem suscipit, sollicitudin ante at, pharetra quam.
                    </span>
                )}
            </p>
            <button onClick={toggleShowMore} className="mt-4 text-blue-500 focus:outline-none">
                {showMore ? 'Hide' : 'Read More'}
            </button>
        </div>
    );
}

export default Article;
