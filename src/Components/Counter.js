import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

return(

    <div>

            <h1>
                {count}
            </h1>
            <h1 onDoubleClick= {() => setCount(count + 1)}>
                Up
            </h1>
            <h1 onDoubleClick = {() => setCount(count - 1)}>
                Down
            </h1>


    </div>
    )
}

export default Counter