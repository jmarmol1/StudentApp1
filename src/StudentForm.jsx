import React, { useState } from 'react'

export const StudentForm = () => {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });
    
    const [submissions, setSubmissions] = useState([]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({
          ...student,
          [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmissions([...submissions, student]);
        setStudent({ name: '', email: '', phoneNumber: '' });
      };

    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Student name</label>
                    <input type="text" name="name" value={student.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" value={student.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="text" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </form>
            <div className="mt-6">
                <div className="text-sm font-medium text-gray-700">Submissions:</div>
                <ul className="mt-2">
                    {submissions.map((submission, index) => (
                    <li key={index} className="mt-1">
                        <span className="font-semibold">Name:</span> {submission.name}, <span className="font-semibold">Email:</span> {submission.email}, <span className="font-semibold">Phone Number:</span> {submission.phoneNumber}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
