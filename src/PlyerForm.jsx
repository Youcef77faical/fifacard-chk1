// components/formplayer.jsx
import React, { useState } from 'react';

const FormPlayer = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [nationality, setNationality] = useState('');
    const [jerseyNumber, setJerseyNumber] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, team, nationality, jerseyNumber, age, image });
        setName('');
        setTeam('');
        setNationality('');
        setJerseyNumber('');
        setAge('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div>
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Team</label>
                <input
                    type="text"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Nationality</label>
                <input
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Jersey Number</label>
                <input
                    type="text"
                    value={jerseyNumber}
                    onChange={(e) => setJerseyNumber(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Age</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Image URL</label>
                <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Submit</button>
        </form>
    );
};

export default FormPlayer;
