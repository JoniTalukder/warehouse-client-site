import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-center'>
            <h2>Difference between `javascript` and `nodejs`</h2>
            <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use</p>
            <br />
            <h2>When should you use `nodejs` and when should you use `mongodb`</h2>
            <p>It's used for store data. The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
            <h2>Differences between `sql` and `nosql` databases.</h2>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
        </div>
    );
};

export default Blogs;