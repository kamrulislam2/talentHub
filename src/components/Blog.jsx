import React from "react";

const Blog = () => {
  return (
    <div className="text-center">
      <h2 className="font-extrabold text-3xl pb-28 bg-purple-50">Blog Q & A</h2>

      <div className="text-left px-96  mx-auto mt-20">
        {/* First question */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-6"
        >
          <div className="collapse-title text-xl font-bold">
            When should you use context API?
          </div>
          <div className="collapse-content">
            <p>
              When we need to access a data by many components, that we usually
              pass the data by props. But in the mean time we have to use props
              so many times to pass that data from one component to another
              component. In this case, context api gives the solution. Just keep
              the parent component inside the context api tower and rest child
              component will get the data all time.
            </p>
          </div>
        </div>

        {/* Second question */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-6"
        >
          <div className="collapse-title text-xl font-bold">
            What is a custom hook?
          </div>
          <div className="collapse-content">
            <p>
              Basically custom is a special JavaScript function whose name
              starts with ‘use’ and can be used to call other hooks. Custom
              React JS hooks offer three major benefits over standard library
              hooks: Reusability, readability, and testability. It helps to
              share logic across components.
            </p>
          </div>
        </div>

        {/* Third question */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-6"
        >
          <div className="collapse-title text-xl font-bold">
            What is useRef?
          </div>
          <div className="collapse-content">
            <p>
              useRef is a built-in React hook that accepts one argument as the
              initial value and returns a reference. It provides a way to access
              and manage mutable values outside of the regular React component.
              It allows us to persist values between renders. It can be used to
              store a mutable value that does not cause a re-render when
              updated.
            </p>
          </div>
        </div>

        {/* Forth question */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-6"
        >
          <div className="collapse-title text-xl font-bold">
            What is useMemo?
          </div>
          <div className="collapse-content">
            <p>
              The useMemo Hook can be used to keep expensive, resource intensive
              functions from needlessly running. It can help optimize
              performance by avoiding unnecessary re-computations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
