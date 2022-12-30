import React from 'react';

const EmergencyContacts = () => {
  const contacts = [
    { name: 'John Doe', designation: 'Police', number: '123-456-7890' },
    { name: 'Jane Smith', designation: 'Coastal Gaurd', number: '098-765-4321' },
    { name: 'Bob Johnson', designation: 'Coastal Gaurd', number: '555-555-1212' },
    { name: 'Alice Williams', designation: 'Leader', number: '777-777-7777' },
    { name: 'Mike Brown', designation: 'Friend', number: '999-999-9999' },
    { name: 'Emily Davis', designation: 'Police', number: '444-444-4444' }
  ];

  return (
    <div className="text-xl font-bold text-center p-4 text-white">
      <h1 className="text-2xl text-black">Emergency Contacts</h1>
      <ul className="list-disc list-inside">
        {contacts.map(contact => (
          <li className="bg-green-400 m-4 text-black rounded-lg" key={contact.name}>
            <span className="font-bold">Name:</span> {contact.name}<br />
            <span className="font-bold">Designation:</span> {contact.designation}<br />
            <span className="font-bold">Number:</span> {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmergencyContacts;