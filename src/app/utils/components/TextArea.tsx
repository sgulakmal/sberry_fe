import { useRef, useState } from "react";

// Mock user list
const firstNames = ["Lakmal", "Damith", "Dilantha", "Nuwan", "Lushan", "Kamal", "Ruwan", "Chathura", "Suresh", "Pradeep", "Anura", "Janaka", "Sanjaya", "Asela", "Isuru", "Roshan", "Mahesh", "Harsha", "Nadeesha", "Upul"];
const lastNames = ["Siyambalage", "Premarathna", "Perera", "Madushanka", "Jayanath", "Fernando", "Silva", "Bandara", "Gunasekara", "Jayasinghe", "Abeysekera", "Ratnayake", "Weerasinghe", "Senanayake", "Herath", "Dissanayake", "Ekanayake", "Wickramasinghe", "Munasinghe", "Ranasinghe"];

const mentionUsers: string[] = [];
for (let i = 0; i < 1000; i++) {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    mentionUsers.push(`${first} ${last}`);
}

type Props = {
    placeholder?: string;
    onTextChange?: (value: string) => void;
};

export function TextArea({ placeholder, onTextChange }: Props) {
    const [mentionQuery, setMentionQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(0);
    const [mentionMode, setMentionMode] = useState(false);
    const [newHashtag, setNewHashtag] = useState('');
    const [newAmount, setNewAmount] = useState('');

    const contentRef = useRef<HTMLDivElement>(null);

    const getTextContent = () => contentRef.current?.innerText || '';

    const userPattern = /@([\w\s]*)$/;
    const hashtagPattern = /#(\w*)$/;
    const amountPattern = /\+(\d+)\b/;

    const setText = () => {
        if (onTextChange) onTextChange(contentRef.current?.innerHTML || ''); // Pass html content to parent
    };

    const handleInput = () => {

         setText();

        const text = getTextContent();

        if (text.endsWith("  "))
            return;


        const sel = window.getSelection();
        if (!sel || !sel.anchorNode) return;

        const range = sel.getRangeAt(0);
        const precedingText = range.startContainer.textContent?.slice(0, range.startOffset) || '';

        const matchHashtag = precedingText.match(hashtagPattern);
        if (matchHashtag) {
            setNewHashtag(matchHashtag[0]);
        }

        const matchAmount = precedingText.match(amountPattern);
        if (matchAmount) {
            setNewAmount(matchAmount[0]);
        }



        const matchUser = precedingText.match(userPattern);
        if (matchUser && !mentionMode) {
            const queryRaw = matchUser[1].trim();
            const parts = queryRaw.split(/\s+/);

            if (parts.length <= 2) {
                const query = queryRaw.toLowerCase();
                setMentionQuery(query);

                const filtered = mentionUsers.filter(user =>
                    query
                        .split(" ")
                        .every(part => user.toLowerCase().includes(part))
                );

                setFilteredUsers(filtered);
                setShowDropdown(filtered.length > 0);
                setHighlightIndex(0);
            } else {
                setShowDropdown(false);
            }
        } else {
            setShowDropdown(false);
        }
    };

    const highlightText = (hlText: string, pattern: RegExp) => {
        const sel = window.getSelection();
        if (!sel || !sel.rangeCount) return;

        const range = sel.getRangeAt(0);
        const container = range.startContainer;
        const cursorPos = range.startOffset;

        const text = container.textContent || '';
        const textBeforeCursor = text.slice(0, cursorPos);
        const match = textBeforeCursor.match(pattern);

        if (!match) return;

        const highlightStart = match.index ?? 0;
        const highlightEnd = cursorPos;

        // Remove search text text
        const updatedText = text.slice(0, highlightStart) + text.slice(highlightEnd);
        container.textContent = updatedText;

        // Create a new range at the mentionStart position
        const newRange = document.createRange();
        newRange.setStart(container, highlightStart);
        newRange.setEnd(container, highlightStart);
        sel.removeAllRanges();
        sel.addRange(newRange);

        // Create highlight <a> node
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = `${hlText}`;
        if (pattern === userPattern) {
            a.className = "text-blue-600 font-medium";
        } else if (pattern === hashtagPattern) {
            a.className = "text-purple-600 font-medium";
        } else if (pattern === amountPattern) {
            a.className = "text-red-600 font-medium";
        }


        // Add non-breaking space after highlight
        const space = document.createTextNode("\u00A0");

        // Insert the elements
        newRange.insertNode(space);
        newRange.insertNode(a);

        // Move cursor after the inserted space
        newRange.setStartAfter(space);
        newRange.setEndAfter(space);
        sel.removeAllRanges();
        sel.addRange(newRange);

        setShowDropdown(false);
        setMentionMode(true);
        setTimeout(() => setMentionMode(false), 100);

        setText(); // Send value to parent
    };

    const insertTag = () => {
        if (newHashtag) {
            highlightText(newHashtag, hashtagPattern);
            setNewHashtag('');
        } else if (newAmount) {
            highlightText(newAmount, amountPattern);
            setNewAmount('');
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {

        // Prevent typing '+' if one already have amount
        if (e.key === '+' && contentRef.current?.innerText.includes('+')) {
            e.preventDefault();
            return;
        }

        if (showDropdown && filteredUsers.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setHighlightIndex((prev) => (prev + 1) % filteredUsers.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setHighlightIndex((prev) => (prev - 1 + filteredUsers.length) % filteredUsers.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                highlightText(filteredUsers[highlightIndex], userPattern);
            } else if (e.key === 'Escape') {
                setShowDropdown(false);
            }
        } else {
            if (e.key === ' ') {
                insertTag()
            }
        }
    };

    return (
        <div className="relative">
            <div
                ref={contentRef}
                contentEditable
                onInput={handleInput}
                onKeyDown={handleKeyDown}
                className="w-full min-h-[100px] resize-none outline-none text-lg placeholder-gray-500 border rounded-md p-3"
                data-placeholder={placeholder}
                style={{ whiteSpace: 'pre-wrap' }}
            />
            {showDropdown && filteredUsers.length > 0 && (
                <ul className="absolute z-10 top-full left-0 mt-1 w-60 bg-white border shadow-lg rounded-md max-h-60 overflow-y-auto">
                    {filteredUsers.map((u, index) => (
                        <li
                            key={index}
                            onClick={() => highlightText(u, userPattern)}
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
