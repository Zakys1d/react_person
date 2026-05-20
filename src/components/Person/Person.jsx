import React from 'react';

const Person = ({ person }) => {
  return (
    <div className="Person">
      <h2 className="Person__name">{person.name}</h2>
      {person.age && <p className="Person__age">Age: {person.age}</p>}
      {person.isMarried ? (
        <p className="Person__partner">
          {person.sex === 'm' ? 'Wife' : 'Husband'}: {person.partnerName}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </div>
  );
};

export default Person;
