'use client';
import { useState } from 'react';
import { mockUsers } from '../Data/mocData';
import { Search } from 'lucide-react';

export default function HeaderSearch() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const filtered = query
    ? mockUsers.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
        <Search className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search Sberry"
          className="ml-2 bg-transparent outline-none w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)} 
        />
      </div>

      {focused && filtered.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg z-50">
          {filtered.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full mr-3"
              />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}