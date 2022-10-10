import React, { useState } from "react";
const assignments = [
  <section>
    <h2>Assignment #1: Style the list</h2>
    <p className="important">
      Code the folowing static content in /src/components/Vehicles.tsx according
      to design. Images are in /public
    </p>
    <img src="/list.png" alt="" width="500" />
    <h3>Bonus questions</h3>
    <ol>
      <li>How to make vehicle class SVGs respect text color?</li>
      <li>
        How prevent styles in Vehicles.css influencing the rest of the app?
      </li>
    </ol>
  </section>,
  <section>
    <h2>Assignment #2: Generate the list from JSON</h2>
    <p className="important">
      Update /src/components/Vehicles.tsx to use:&ensp;
      <code>import vehicles from "../../vehicles.json";</code>
      &ensp;instead of hardcoded data
    </p>
    <h3>Bonus questions</h3>
    <ol>
      <li>
        Have a look at src/components/getRomanNumerals.ts and try to finish the
        implementation.
      </li>
      <li>
        How would you recommend to update the Vehicles component if there were
        thousands of vehicles in the list?
      </li>
    </ol>
  </section>,
  <section>
    <h2>Assignment #3: Filter the list</h2>
    <p className="important">
      Update /src/components/Vehicles.tsx to filter the list by a text input.
    </p>
    <h3>Bonus questions</h3>
    <ol>
      <li>
        How would you lower server load, if the filtering was done on the
        server?
      </li>
      <li>
        What would you have to watch out for, if the filtering was done on the
        server and the server response time was very irregular? How would you
        deal with it?
      </li>
    </ol>
  </section>,
  <section>
    <h2>Assignment #4: Get list data asynchroneously</h2>
    <p className="important">
      Update /src/components/Vehicles.tsx to use:&ensp;
      <code>{`const { data, error } = useVehicles();`}</code>
      &ensp;from /src/useVehicles.ts
    </p>
    <h3>Bonus questions</h3>
    <ol>
      <li>
        How would improve UX experience, if the API was slow and unreliable?
      </li>
      <li>
        How would you reduce the loading interval, if the list had a lot of
        entries?
      </li>
    </ol>
  </section>
];

const Assignments = ({ initialAssignment }: { initialAssignment: number }) => {
  const [currentIndex, setCurrentIndex] = useState(initialAssignment - 1);

  return (
    <div>
      <style scoped>{`
        .important {
          font-size: 1.5em;
          color: white;
        }
        h3 {
          border-top: 1px solid grey;
          padding-top: 20px;
        }
      `}</style>
      Show assignment:&ensp;
      {assignments.map((assignment, assignmentIndex) => {
        return (
          <button
            key={assignmentIndex}
            onClick={() => setCurrentIndex(assignmentIndex)}
          >
            {assignmentIndex === currentIndex ? (
              <strong>{assignmentIndex + 1}</strong>
            ) : (
              assignmentIndex + 1
            )}
          </button>
        );
      })}
      {assignments[currentIndex]}
    </div>
  );
};

export default Assignments;
