import { useMemo } from 'react';

const useTruncateString = (str = " ", limit = 15) => {  
    if (!str) return ''; 
    return str?.length > limit ? `${str?.slice(0, limit)}...` : str;
};

export default useTruncateString;
