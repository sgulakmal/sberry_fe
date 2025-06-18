import { useRef, useState } from "react";

// Mock user list for mentions
const firstNames = ["Lakmal", "Damith", "Dilantha", "Nuwan", "Lushan", "Kamal", "Ruwan", "Chathura", "Suresh",
    "Pradeep", "Anura", "Janaka", "Sanjaya", "Asela", "Isuru", "Roshan", "Mahesh", "Harsha", "Nadeesha", "Upul"];

const lastNames = ["Siyambalage", "Premarathna", "Perera", "Madushanka", "Jayanath", "Fernando", "Silva", "Bandara",
    "Gunasekara", "Jayasinghe", "Abeysekera", "Ratnayake", "Weerasinghe", "Senanayake", "Herath",
    "Dissanayake", "Ekanayake", "Wickramasinghe", "Munasinghe", "Ranasinghe"];

// Generate 1000 random full names
const mentionUsers: string[] = [];
for (let i = 0; i < 1000; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    mentionUsers.push(`${firstName} ${lastName}`);
}

type TextAreaProps = {
    placeholder?: string;
    value: string;
    onTextChange?: (value: string) => void;
};

export function TextArea({ placeholder, value, onTextChange: textChange }: TextAreaProps) {
    const [mentionQuery, setMentionQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(0);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const setText = (value: string) => {
        if (textChange) textChange(value);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value;
        setText(val);

        if(val && val.endsWith("  "))
            return; // Stop search option

        const cursorPosition = e.target.selectionStart;
        const textUntilCursor = val.slice(0, cursorPosition);
        const match = textUntilCursor.match(/@([\w\s]*)$/);

        if (match) {
            const queryRaw = match[1].trim(); // get the full query after "@"
            const parts = queryRaw.split(/\s+/); // split by spaces

            if (parts.length <= 2) {
                const query = queryRaw.toLowerCase();
                setMentionQuery(query);

                const filtered = mentionUsers.filter((user) => {
                    const userLower = user.toLowerCase();
                    return query
                        .split(" ")
                        .every(part => userLower.includes(part));
                });

                setFilteredUsers(filtered);
                setShowDropdown(filtered.length > 0);
                setHighlightIndex(0);
            } else {
                // More than two words: cancel mention mode
                setShowDropdown(false);
            }
        } else {
            setShowDropdown(false);
        }
    };


    const handleMentionSelect = (username: string) => {
        const cursor = textareaRef.current?.selectionStart || 0;
        const before = value.slice(0, cursor).replace(/@([\w\s]*)$/, `@${username} `);
        const after = value.slice(cursor);

        setText(before + after);
        setShowDropdown(false);
        setMentionQuery('');
        textareaRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (showDropdown && filteredUsers.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setHighlightIndex((prev) => (prev + 1) % filteredUsers.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setHighlightIndex((prev) => (prev - 1 + filteredUsers.length) % filteredUsers.length);
            } else if (e.key === 'Enter') {
                const selected = filteredUsers[highlightIndex];
                handleMentionSelect(selected);
                e.preventDefault();
            } else if (e.key === 'Escape') {
                setShowDropdown(false);
            }
        }
    };

    return (
        <div className="relative">
            <textarea
                ref={textareaRef}
                value={value}
                onChange={handleTextChange}
                onKeyDown={handleKeyDown}
                className="w-full resize-none outline-none text-lg placeholder-gray-500 border rounded-md p-3"
                placeholder={placeholder}
                rows={4}
            />

            {/* Dropdown for mentions */}
            {showDropdown && filteredUsers.length > 0 && (
                <ul className="absolute z-10 top-full left-0 mt-1 w-60 bg-white border shadow-lg rounded-md max-h-60 overflow-y-auto">
                    {filteredUsers.map((u, index) => (
                        <li
                            key={index}
                            onClick={() => handleMentionSelect(u)}
                            className={`px-4 py-2 cursor-pointer ${highlightIndex === index ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                        >
                            @{u}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
