import React from 'react';
import staffData from '../data/staff';

function StaffList() {
  const staff = staffData.map(person => {
    let name = '';
    if (person.prefix) {
      name += `${person.prefix} `;
    }
    name += `${person.name}`;
    if (person.postfix) {
      name += `, ${person.postfix}`;
    }
    return (
      <li key={person.id}>
        <h3>{name}</h3>
        <p>{person.position}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>All Staff</h1>
      <ul className="staff-list">{staff}</ul>
    </div>
  );
}

export default StaffList;
