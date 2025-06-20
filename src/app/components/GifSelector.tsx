// GifSelector.tsx
import React, { useState, ChangeEvent } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import { IGif } from '@giphy/js-types';

interface GifSelectorProps {
    onGifSelect: (gif: IGif) => void;
}

const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIFI_API_KEY || '');

const GifSelector: React.FC<GifSelectorProps> = ({ onGifSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const fetchGifs = (offset: number) => gf.search(searchTerm, { offset, limit: 10 });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full h-[500] max-w-3xl mx-auto">
            <input
                type="text"
                placeholder="Search GIFs..."
                value={searchTerm}
                onChange={handleChange}
                className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="max-h-[400px] overflow-y-auto rounded-md border border-gray-200 shadow-sm p-2">
                <Grid
                    key={searchTerm}                    
                    width={560} 
                    columns={3}
                    gutter={6}
                    fetchGifs={fetchGifs}
                    onGifClick={(gif: IGif, e: React.SyntheticEvent) => {
                        e.preventDefault();
                        onGifSelect(gif);
                    }}
                />
            </div>
        </div>

    );
};

export default GifSelector;
